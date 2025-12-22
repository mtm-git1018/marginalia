import { useState } from "react";
import { supabase } from "../../../shared/api/supabase";

interface Props{
  userId: string | null
  initialUrl?:string
}


export default function useUploadeImage({userId,initialUrl}:Props) {
  //  업로드용 파일 state
  const [uploadImageFile, setUploadImageFile] = useState<File | null>(null);
  
  // 미리보기용 state
  const [preview, setPreview] = useState<string | null>(null)
  const src = preview ?? initialUrl ?? '/profile.webp'

  const handleSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    setUploadImageFile(file)
 }

  const uploadImage = async (): Promise<string | null> => {
    if (!uploadImageFile) return null;

    try {
      const fileExt = uploadImageFile.name.split('.').pop();
      const fileName = `${userId}/profile.${fileExt}`;

      const { error } = await supabase.storage.from('avatars').upload(fileName, uploadImageFile, {
        upsert: true,
      });
      if (error) throw new Error('이미지 저장 에러');

      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(fileName.trim());
      return publicUrl;
    } catch (error) {
      console.error('이미지 업로드 실패', error);
      return null;
    }
  };

  return {src, handleSelect, uploadImageFile, uploadImage}
}
