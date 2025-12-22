import { useQuery } from "@tanstack/react-query"
import { supabase } from "./supabase"



async function getProfile(id:string) {
  const { data,error } = await supabase.from('user').select('*').eq('user_id', id).single()
  if(error) throw new Error ('유저 프로필 불러오기 실패')
  return data
} 


export function useUserProfile(id: string) {
  const user = useQuery({
    queryKey: ['profile',id],
    queryFn: () => getProfile(id),
    enabled:!!id
  })
  return user
}