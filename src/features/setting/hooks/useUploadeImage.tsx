import { useState } from "react";
import { supabase } from "../../../shared/api/supabase";

interface Props{
  userId: string | null
  initialUrl?:string | undefined | null
}


export default function useUploadImage({ userId, initialUrl }: Props) {

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
    console.log(uploadImageFile)
    if (!uploadImageFile) return null;

    try {
      const fileExt = uploadImageFile.name.split('.').pop();
      const fileName = `${userId}/profile.${fileExt}`.trim()
    
      const { error } = await supabase.storage.from('avatars').upload(fileName,uploadImageFile, {
        upsert: true,
      });
      if (error) throw new Error('이미지 저장 에러');

      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(fileName);

      /* 
        캐시버스터를 통한 이미지변경,
        파일 형식이 똑같기 때문에 컴퓨터입장에서 같은 파일이라고 인식해버렸다. 
        그렇기 때문에 이미지가 바로바로 안바뀐것.
      */
      return `${publicUrl}?t=${Date.now()}`

    } catch (error) {
      console.error('이미지 업로드 실패', error);
      return null;
    }
  };

  return {src, handleSelect, uploadImageFile, uploadImage}
}
