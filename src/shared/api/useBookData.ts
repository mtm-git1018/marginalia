import { useQuery } from "@tanstack/react-query";
import { supabase } from "./supabase";

async function getBooks(id: string) {
  const { data, error } = await supabase.from('books').select('*').eq('user_id', id)
  if(error) throw new Error('책 정보 불러오기 실패')
  return data
}

export function useBooks(id: string) {
  return useQuery({
    queryKey: ['book', id],
    queryFn: () => getBooks(id),
    enabled:!!id
  })
}