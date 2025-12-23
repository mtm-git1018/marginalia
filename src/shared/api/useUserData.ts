import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { supabase } from "./supabase"
import type { Profile } from "../../features/setting"



async function getProfile(id:string) {
  const { data,error } = await supabase.from('user').select('*').eq('user_id', id).single()
  if(error) throw new Error ('유저 프로필 불러오기 실패')
  return data
}

async function updateProfile({ id, payload }: {
  id: string,
  payload:Partial<Profile>
}){
  const { error } = await supabase.from('user').update(payload).eq('user_id',id)
  if(error) throw new Error('프로필 업데이트 실패')
}


export function useUserProfile(id: string) {
  const user = useQuery({
    queryKey: ['profile',id],
    queryFn: () => getProfile(id),
    enabled:!!id
  })
  return user
}

export function useUpdateProfile(id: string ) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Partial<Profile>) => updateProfile({ id, payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile', id],
      });
    },
  });
}