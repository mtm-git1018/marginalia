import { useState } from "react";
import BackButton from "../../../shared/components/button/BackButton";
import EditNickName from "../../setting/components/EditNickName";
import ProfileImage from "../../setting/components/ProfileImage";
import { useParams } from "react-router";
import { useUserProfile } from "../../../shared/api/useUserData";
import type { Profile } from "../../setting";
import SelectGenre from "../../setting/components/SelectGenre";
import Button from "../../../shared/components/button/Button";


function EditProfile() {

  const { id } = useParams()
  const { data } = useUserProfile(id ?? '')
  const [form, setForm] = useState<Profile>({
    nickname: data?.nickname ?? '',
    profile_image: data?.profile_image ?? '',
    genre:data?.genre ?? []
  })

  return (
    <div className="flex flex-col items-center">
      <header className="flex gap-3 w-full">
        <BackButton />
        <h1>프로필 변경</h1>
      </header>
      <section className="mt-5">
        <ProfileImage />
      </section>
      <section className="mt-5">
        <EditNickName setForm={setForm} />
      </section>
      <section className="mt-5">
        <SelectGenre form={ form} setForm={setForm} />
      </section>
      <section className="mt-5 flex flex-col gap-3 w-full">
        <Button amount='one'>저장</Button>
        <Button amount="one">회원 탈퇴</Button>
      </section>
    </div>
  );
}
export default EditProfile