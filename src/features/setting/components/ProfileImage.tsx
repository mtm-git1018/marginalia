import { BiSolidCamera } from "react-icons/bi";

interface Props{
  src:string
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

function ProfileImage({ src,onChange }:Props) {
    return (
      <div className="relative">
        <img
          src={src}
          alt="프로필 이미지"
          className="w-30 h-30 rounded-full"
        />
        {/* 카메라 버튼 */}
        <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full border-2 border-white bg-warmBrown flex-center hover:bg-warmBrown transition-colors"
        aria-label="프로필 변경 버튼"
        >
          <input
            id="upload-image"
            type="file"
            onChange={(e) => onChange(e)}
            className="absolute opacity-0 w-full h-fuil inset-0"
          />
          <label htmlFor="upload-image" className="absolute inset-0 flex-center cursor-pointer">
            <BiSolidCamera size={24} color="white" aria-hidden />
          </label>
        </button>
      </div>
    );
  
}
export default ProfileImage