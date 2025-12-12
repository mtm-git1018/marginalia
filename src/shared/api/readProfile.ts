import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

interface User{
  genre: string[],
  nickname: string,
  profile_image: string,
  created_at: Date
  updated_at: Date
}


export const getUser = async (uid:string):Promise<User | undefined> => {
  const docRef = doc(db, 'user', uid);
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()
    return data as User
  }
  else {
    console.log('유저 테이블 불러오기 오류')
    return
  }
}


export function ReadProfile (uid:string) {
  const result = useQuery({
    queryKey: ['user',uid],
    queryFn: () => getUser(uid),
    enabled:!!uid
  })

  return result
}