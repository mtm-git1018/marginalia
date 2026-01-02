import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../shared/api/supabase";
import type { Status } from "../types/types";
import { sweetError } from "@/shared/utill/swal";



async function getBookDetail(user_id:string,book_id:string) {
  const { data,error } = await supabase.from('book_detail').select('*').match({
    user_id,
    book_id
  }).maybeSingle()
  if(error) throw new Error('책 상세 가져오기 실패',error)
  return data
}


async function addBookDetail(
  user_id: string,
  book_id: string,
  data: {
    review?: string | null;
    quote?: string[] | null;
    rate?: number;
    page_number?: string[] | null;
  }
) {

  const { data: exist } = await supabase.from('book_detail').select('*').match({
    user_id,
    book_id
  }).maybeSingle()

  const cleanData = Object.entries(data).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as any);

  if (exist) {
    // ✅ 이미 존재하면 UPDATE
    const { error } = await supabase
      .from('book_detail')
      .update({
        ...cleanData,
        updated_at: new Date().toISOString()
      })
      .eq('detail_id', exist.detail_id); // Primary Key로 업데이트
    
    if (error) throw error;
  } else {
    // ✅ 없으면 INSERT
    const { error } = await supabase
      .from('book_detail')
      .insert({
        user_id,
        book_id,
        ...cleanData
      });
    if (error) throw new Error('데이터 등록 실패', error)
  
  }
}

async function updateBookStatus(book_id: string, status: Status) {
  const { error } = await supabase.from('books').update({ status }).eq('book_id', book_id);

  if (error) {
    sweetError('저장에 실패하였습니다');
    throw new Error('책 상태 변경 실패', error);
  }
}


async function deleteQuote(book_id: string, index: number, quote: string[] | null, pageNumber: string[]|null) {
  
  const newQuote = quote?.filter((_,i) => i !== index)
  const newPageNumber = pageNumber?.filter((_,i)=> i !== index)

  const { error } = await supabase.from('book_detail').update({
    quote:newQuote && newQuote.length > 0 ? newQuote : null,
    page_number: newPageNumber && newPageNumber.length > 0 ? newPageNumber : null
  }).match({
    book_id: book_id
  })

  if (error) {
    sweetError('알 수없는 오류기 발생했습니다.')
    throw error
  }
}

  export function useBookDetail(user_id: string, book_id: string) {
    return useQuery({
      queryKey: ['bookDetail', user_id, book_id],
      queryFn: () => getBookDetail(user_id, book_id),
      enabled: !!book_id && !!user_id,
    });
  }

  export function useUpsertBookDeatail() {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: (data: {
        user_id: string
        book_id: string
        review?: string | null,
        quote?: string[] | null,
        rate?: number
        page_number?: string[] | null
      }) => addBookDetail(data.user_id, data.book_id, data),
      onSuccess: (_, variable) => {
        queryClient.invalidateQueries({
          queryKey: ['bookDetail', variable.user_id, variable.book_id]
        })
      }
    })
  }


  export function useUpdateBookStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ book_id, status }: { book_id: string; status:Status }) => updateBookStatus(book_id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    }
  })
} 
  
export function useDeleteQuote() { 
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ book_id, index, quote, pageNumber }: {
      book_id: string 
      index: number,
      quote: string[] | null,
    pageNumber: string[] | null
    }) => deleteQuote(book_id,index,quote,pageNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['quotes']})
    }
  })
}