import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Read = 'reading' | 'want_read' | 'done' 

export interface BookResPonse {
  title: string,
  contents: string,
  url: string,
  isbn: string,
  datetime: Date,
  authors: string[],
  publisher: string,
  translators: string[],
  price: number,
  sale_price: number,
  thumbnail: string,
  status: Read
}

interface BookSearchParams {
  query: string; // 필수: 검색 질의어
  sort?: 'accuracy' | 'latest'; // 선택: 정렬 방식
  page?: number; // 선택: 페이지 번호 (1~50)
  size?: number; // 선택: 페이지당 문서 수 (1~50)
  target?: 'title' | 'isbn' | 'publisher' | 'person'; // 선택: 검색 필드
}


const searchBook = async (params:BookSearchParams):Promise<BookResPonse[]> => {
  try {
    const res = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_BOOK_API_KEY}`,
      },
      params: {
        query: params.query,
        sort: params.sort || 'accura',
        page:params.page||1,
        size: params.size||10,
        target:params.target|| undefined
      },
    });
    return res.data.documents
  } catch (error) {
    console.error('책 불러오기 에러', error);
    throw error
  }
};


export function useBookSearch(params:BookSearchParams) {
  return useQuery({
    queryKey: ['books', 'search', params],
    queryFn: () => searchBook(params),
    staleTime: 5000 * 10,
    enabled: !!params.query && params.query.length > 0,
  });
}
