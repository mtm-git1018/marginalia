import { BiSolidCamera } from "react-icons/bi";
import Button from "../../shared/components/Button";
import { useState } from "react";
import clsx from "clsx";
import { doc,serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../shared/api/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";




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
  const [image, setImage] = useState<string|null>('/profile.webp');
  const [nickname, setNickname] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const navigate = useNavigate()
  const auth = getAuth()

  const selectGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.value
    
    if (genres.includes(item)) {
      setGenres(genres.filter((i)=> i !== item))
    } else {
        if (genres.length < 3) {
          setGenres([...genres, e.target.value]);  
        } else {
           setGenres([...genres.slice(1),item])
        }
    }
  };

  const handleProfileImage = async (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
    }
    if (file) {
    reader.readAsDataURL(file)
    setImage(file)
    }
  }

  const handleSave = async (image:string|null,nickname:string,genre:string[]) => {
    try {
      if (!auth.currentUser) {
        return
      }

      const uid = auth.currentUser.uid
      await setDoc(doc(db, 'user', uid), {
        profile_image: image,
        nickname,
        genre,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      });
      await navigate(`/${uid}`)
    }
    catch (err) {
      console.error('유저 정보 저장 실패',err)
    }
  }

  return (
    <div className="flex flex-col  justify-between h-full">
      <section className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl">프로필 설정</h1>

        <div className="relative">
          <img src={image ?? ''} alt="프로필 이미지" className="w-30 h-30 rounded-full" />
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
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임은 8글자까지 입력 가능합니다."
          className="border p-2 rounded-lg border-border bg-white"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2>선호장르</h2>
        <p className="text-xs text-border">선호하는 장르를 골라주세요</p>
        <div className="flex flex-wrap gap-3">
          {BOOK_GENRES.map((genre, index) => {
            const select = genres.includes(genre);

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
                  onChange={(e) => selectGenre(e)}
                />
                {genre}
              </label>
            );
          })}
        </div>
      </section>

      <Button amount="one" type='submit' onClick={()=>handleSave(image,nickname,genres)}>저장</Button>
    </div>
  );
}
export default SettingProfile