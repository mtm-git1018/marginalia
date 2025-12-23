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
