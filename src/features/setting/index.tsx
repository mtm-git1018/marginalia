import { useState } from "react";
import { supabase } from "../../shared/api/supabase";
import { useNavigate, useParams } from "react-router";
import type { Tables } from "../../shared/api/database.types";
import Button from "../../shared/components/button/Button";
import ProfileImage from "./components/ProfileImage";
import useUploadeImage from "./hooks/useUploadeImage";
import EditNickName from "./components/EditNickName";
import SelectGenre from "./components/SelectGenre";


type User = Tables<'user'>
export type Profile = Pick<User, 'nickname' | 'genre' | 'profile_image'>

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
        <EditNickName setForm={setForm}/>
      </section>

      <section className="flex flex-col gap-3">
        <SelectGenre form={form } setForm={setForm} />
      </section>

      <Button amount="one" type='submit' onClick={handleSave}>저장</Button>
      
    </div>
  );
}
export default SettingProfile