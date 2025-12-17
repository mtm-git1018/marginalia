import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../../shared/api/supabase";


async function addBookDetail(
  review?: string | null,
  quote?: string[] | null,
  rate?: number,
  page_number?: string|null
) {
  const { error } = await supabase.from('book_detail').insert({
    review,
    quote,
    rate,
    page_number
  }) 
  if(error)console.error(error)
}

export function useBookDeatail() {
  return useMutation({
    mutationFn: (data: {
      review?: string | null,
      quote?: string[] | null,
      rate?:number
      page_number?:string|null
    })=>addBookDetail(data.review,data.quote,data.rate,data.page_number)
  })
}