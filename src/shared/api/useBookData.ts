import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "./supabase";

async function getBooks(id: string) {
  const { data, error } = await supabase.from('books').select('*').eq('user_id', id)
  if(error) throw new Error('책 정보 불러오기 실패')
  return data
}

async function deleteBook(id: string,book_id:string) {
  const { error } = await supabase.from('books').delete().match({
    'user_id': id,
    'book_id':book_id
  })

  if(error) console.error('책 삭제 실패',error)
}

export function useBooks(id: string) {
  return useQuery({
    queryKey: ['book', id],
    queryFn: () => getBooks(id),
    enabled:!!id
  })
}

export function useDeleteBook() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ user_id, book_id }: { user_id: string, book_id: string }) => deleteBook(user_id, book_id),
     onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['books', variables.user_id]
      });
    }
  })
  
}