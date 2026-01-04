import { useState } from "react";
import BackButton from "../../../shared/components/button/BackButton";
import EditNickName from "../../setting/components/EditNickName";
import ProfileImage from "../../setting/components/ProfileImage";
import { useNavigate, useParams } from "react-router";
import { useUpdateProfile, useUserProfile } from "../../../shared/api/useUserData";
import type { Profile } from "../../setting";
import SelectGenre from "../../setting/components/SelectGenre";
import Button from "../../../shared/components/button/Button";
import { supabase } from "../../../shared/api/supabase";
import useUploadImage from "../../setting/hooks/useUploadeImage";
import SEO from "@/shared/components/seo/SEO";


function EditProfile() {

  const { id } = useParams()
  const { data } = useUserProfile(id ?? '')
  const { mutate } = useUpdateProfile(id ?? '') 
  const navigate = useNavigate()
  const { src,uploadImageFile, uploadImage,handleSelect } = useUploadImage({
    userId: id ?? '',
    initialUrl:data?.profile_image
  })

  const [form, setForm] = useState<Profile>({
    nickname: data?.nickname ?? '',
    profile_image: data?.profile_image ?? '',
    genre:data?.genre ?? []
  })

    const handleSave = async () => {
      
    const {
      data: { user },
    } = await supabase.auth.getUser();
      if (!user) return
      if (form.nickname.length <= 0 || form.nickname.length > 9) {
        alert('닉네임 글자수를 확인해주세요.');
        return
      }
      
      let imageUrl = form.profile_image
      if (uploadImageFile) {
        const uploadedUrl = await uploadImage();
        if (uploadedUrl) {
          imageUrl = uploadedUrl
        }
      }
  
      mutate({
        ...form,
        profile_image:imageUrl
      })
   
      
      if (imageUrl?.trim() == '') {
        return
      }
      navigate(`/${user.id}`)
    }

  return (
    <>
      <SEO
        title="프로필 수정" 
        description="프로필을 수정해서 나의 개성을 살려보아요"
        keywords="프로필, 선호장르, 닉네임 수정"
      />
      <div className="flex flex-col">
        <header className="flex gap-3 items-center">
          <BackButton />
          <h1>프로필 변경</h1>
        </header>
        <section className="mt-5 flex flex-col items-center">
          <ProfileImage src={src} onChange={handleSelect} />
        </section>
        <section className="mt-5">
          <EditNickName form={form} setForm={setForm} />
        </section>
        <section className="mt-5">
          <SelectGenre form={form} setForm={setForm} />
        </section>
        <section className="mt-5 flex flex-col gap-3 w-full">
          <Button variant="primary" onClick={handleSave}>
            저장
          </Button>
          <button>회원 탈퇴</button>
        </section>
      </div>
    </>
  );
}
export default EditProfile