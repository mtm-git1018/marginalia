import BackButton from "../../../shared/components/button/BackButton";
import ProfileImage from "../../setting/components/ProfileImage";


function EditProfile() {

  return (
    <div className="flex flex-col items-center">
      <header className="flex gap-3 w-full">
        <BackButton />
        <h1>프로필 변경</h1>
      </header>
      <section className="mt-5">
        <ProfileImage />
      </section>
    </div>
  );
}
export default EditProfile