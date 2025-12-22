import clsx from "clsx";
import type { Profile } from "..";


interface Props {
  form: Profile;
  setForm: React.Dispatch<React.SetStateAction<Profile>>;
}

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
  
function SelectGenre({ form,setForm}:Props) {

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
  

  return (
    <div>
      <h2>선호장르</h2>
      <p className="text-xs text-softTan">선호하는 장르를 골라주세요</p>
      <div className="flex flex-wrap gap-3">
        {BOOK_GENRES.map((genre, index) => {
          const select = form.genre?.includes(genre);

          return (
            <label
              htmlFor={`pickgenre-${index}`}
              key={genre}
              className={clsx(
                `h-5 w-fit border border-warmBrown rounded-lg px-4 py-1 flex-center bg-secondBg cursor-pointer`,
                select && 'bg-warmBrown text-white'
              )}
            >
              <input
                id={`pickgenre-${index}`}
                type="checkbox"
                className="appearance-none"
                value={genre}
                checked={select}
                onChange={() => selectGenre(genre)}
              />
              {genre}
            </label>
          );
        })}
      </div>
    </div>
  );
}
export default SelectGenre