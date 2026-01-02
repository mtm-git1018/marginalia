export type Status = 'reading' | 'want_read' | 'done';
export interface BookDetail {
  book_id: string | null;
  created_at: string;
  detail_id: string;
  page_number: string[] | null;
  quote: string[] | null;
  rate: number | null;
  review: string | null;
  updated_at: string | null;
  user_id: string | null;
}