export type StaticBook = {
          author: string[] | null;
          book_id: string;
          created_at: string;
          publisher: string | null;
          status: 'reading' | 'want_read' | 'done' | null;
          story: string | null;
          thumbnail: string | null;
          title: string | null;
          translators: string[] | null;
          updated_at: string | null;
          user_id: string | null;
        }[]


export interface UserProfile {
  user_id:string,
  nickname: string,
  profile_image: string | null,
  genre: string[],
  created_at: Date,
  updated_at:Date
}

export interface Book {

        author: string[] | null;
        book_id: string;
        created_at: string;
        isbn: string | null;
        publisher: string | null;
        status: 'reading' | 'want_read' | 'done' | null;
        story: string | null;
        thumbnail: string | null;
        title: string | null;
        translators: string[] | null;
        updated_at: string | null;
        user_id: string | null;
 
}