
import { BiSolidCamera } from "react-icons/bi";
import useUploadeImage from "../hooks/useUploadeImage";
import { useParams } from "react-router";
import { useUserProfile } from "../../../shared/api/useUserData";

function ProfileImage() {
  const { id } = useParams()
  const { data } =useUserProfile(id ?? '')
  const { src, handleSelect } = useUploadeImage({
    userId: id ?? '',
    initialUrl:data?.profile_image ?? ''
  })

    return (
      <div className="relative">
        <img
          src={src}
          alt="프로필 이미지"
          className="w-30 h-30 rounded-full"
        />
        {/* 카메라 버튼 */}
        <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full border-2 border-white bg-warmBrown flex-center hover:bg-titleText transition-colors">
          <input
            id="upload-image"
            type="file"
            onChange={(e) => handleSelect(e)}
            className="absolute opacity-0 w-full h-fuil inset-0"
          />
          <label htmlFor="upload-image" className="absolute inset-0 flex-center cursor-pointer">
            <BiSolidCamera size={24} color="white" />
          </label>
        </button>
      </div>
    );
  
}
export default ProfileImage