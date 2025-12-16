import { BiSolidCamera } from "react-icons/bi";
import Button from "../../shared/components/Button";
import { useState } from "react";
import clsx from "clsx";
import { supabase } from "../../shared/api/supabase";
import { useNavigate } from "react-router";
import type { Tables } from "../../shared/api/database.types";



type User = Tables<'user'>
type Profile = Pick<User, 'nickname' | 'genre' | 'profile_image'>

function SettingProfile() {

  const BOOK_GENRES = [
  '문학',
  '소설',
  '시/에세이',
  '인문',
  '역사',
  '예술',
  '종교',
  '사회과학',
  '과학',
  '기술/공학',
  '컴퓨터/IT',
  '자기계발',
  '경제/경영',
  '건강/의학',
  '가정/육아',
  '요리',
  '여행',
  '취미/실용',
  '아동',
  '청소년',
  '만화',
  '잡지',
  '기타',
  ];

  const navigate = useNavigate()

  const [form, setForm] = useState<Profile>({
    nickname:'',
    profile_image:'',
    genre: [],
  })
  //  업로드용 파일 state
  const [uploadImageFile,setUploadImageFile] = useState<File|null>(null) 
  // 미리보기 state
  const [thumbnail, setThumbnail] = useState<string>('')
  
  const selectGenre = (item: string) => {
  
    setForm((prev) => {
      const currentGenre = prev.genre ?? []
      if (currentGenre?.includes(item)) {
        return {
          ...prev,
          genre: currentGenre.filter((g) => g !== item),
        };
      }
      if (currentGenre.length >= 3) {
        return {
          ...prev,
          genre: [...currentGenre.slice(1), item],
        };
      }
      return {
        ...prev,
        genre: [...currentGenre, item],
      };

    })
  };

  const handleProfileImage = async (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)

    setThumbnail(url)
    setUploadImageFile(file)
  }


  const uploadImage = async (userId:string|null):Promise<string|null>=> {
    if (!uploadImageFile) return null
    
    try {
      const fileExt = uploadImageFile.name.split('.').pop()
      const fileName = `${userId}/profile
      .${fileExt}`  

      const { error } = await supabase.storage.from('avatars').upload(fileName, uploadImageFile, {
        upsert:true
      })
      if (error) throw new Error('이미지 저장 에러')
      
        const {
          data: { publicUrl },
        } = supabase.storage.from('avatars').getPublicUrl(fileName);
        return publicUrl
    }
    catch(error) {
      console.error('이미지 업로드 실패', error)
      return null
    }
  }


  const handleSave = async () => {
    
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if(!user) return

    console.log(user)

    let imageUrl = form.profile_image
    if (uploadImageFile) {
      imageUrl = await uploadImage(user.id)
    }

    const { error } = await supabase.from('user').insert({
      ...form,
      profile_image:imageUrl
    });



    if(error) console.error('데이터 전송 실패')
    navigate(`/${user.id}`)
  }
 
  return (
    <div className="flex flex-col  justify-between h-full">

      <section className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl">프로필 설정</h1>

        <div className="relative">
          <img src={thumbnail || '/profile.webp'} alt="프로필 이미지" className="w-30 h-30 rounded-full" />
          {/* 카메라 버튼 */}
          <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full border-2 border-white bg-text flex-center hover:bg-titleText transition-colors">
            <input
              id="upload-image"
              type="file"
              onChange={handleProfileImage}
              className="absolute opacity-0 w-full h-fuil inset-0"
            />
            <label htmlFor="upload-image" className="absolute inset-0 flex-center cursor-pointer">
              <BiSolidCamera size={24} color="white" />
            </label>
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          required
          onChange={(e) => setForm(prev => ({
            ...prev,
            nickname:e.target.value
          }))}
          placeholder="닉네임은 8글자까지 입력 가능합니다."
          className="border p-2 rounded-lg border-border bg-white"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2>선호장르</h2>
        <p className="text-xs text-border">선호하는 장르를 골라주세요</p>
        <div className="flex flex-wrap gap-3">
          {BOOK_GENRES.map((genre, index) => {
            const select = form.genre?.includes(genre);

            return (
              <label
                htmlFor={`pickgenre-${index}`}
                key={genre}
                className={clsx(
                  `h-5 w-fit border border-text rounded-lg px-4 py-1 flex-center bg-secondBg cursor-pointer`,
                  select && 'bg-text text-white'
                )}
              >
                <input
                  id={`pickgenre-${index}`}
                  type="checkbox"
                  className="appearance-none"
                  value={genre}
                  checked={select}
                  onChange={()=> selectGenre(genre)}
                />
                {genre}
              </label>
            );
          })}
        </div>
      </section>

      <Button amount="one" type='submit' onClick={handleSave}>저장</Button>
    </div>
  );
}
export default SettingProfile