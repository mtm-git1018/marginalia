import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const searchBook = async (params: string) => {
  try {
    const res = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_BOOK_API_KEY}`,
      },
      params: {
        query: params,
        sort:'accuracy',
        page:1,
        size:10,
        target:'title'
      },
    });
    return res.data;
  } catch (error) {
    console.error('책 불러오기 에러', error);
  }
};

export function useBookSearch(params) {
  return useQuery({
    queryKey: ['books', 'search', params],
    queryFn: () => searchBook(params),
    staleTime: 5000 * 10,
  });
}
