import { useState } from "react";
import clsx from "clsx";
import { supabase } from "../../shared/api/supabase";
import { useNavigate, useParams } from "react-router";
import type { Tables } from "../../shared/api/database.types";
import Button from "../../shared/components/button/Button";
import ProfileImage from "./components/ProfileImage";
import useUploadeImage from "./hooks/useUploadeImage";

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

type User = Tables<'user'>
type Profile = Pick<User, 'nickname' | 'genre' | 'profile_image'>

function SettingProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { uploadImageFile, uploadImage } = useUploadeImage({
    userId:id??''
  })
  const [form, setForm] = useState<Profile>({
    nickname:'',
    profile_image:'',
    genre: [],
  })

  /* 
    1. 제출할 Form을 빈 상태로 놔둔다
    2. 파일을 선택하면 두 state에 파일명을 올린다
    3. 파일을 업로드한다.
  */

 const selectGenre = (item: string) => {
   setForm((prev) => {
     const currentGenre = prev.genre ?? [];
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
   });
 };


  const handleSave = async () => {
    
  const {
    data: { user },
  } = await supabase.auth.getUser();
    if(!user) return

    let imageUrl = form.profile_image
    if (uploadImageFile) {
      imageUrl = await uploadImage()
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
        <ProfileImage />
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
          className="border p-2 rounded-lg border-softTan bg-white"
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
                  select && 'bg-warmBrown text-white'
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