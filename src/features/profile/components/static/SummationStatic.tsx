import type { Book } from "@/shared/types/type";

function SummationStatic({ data }: {data:Book[]}) {

  const favoriteAuthor = (() => {
    if (!data || data.length === 0) return '-'
    
    const authorCount = data.reduce((acc, book) => {
      const author = book.author || []

      author.forEach((author) => {
        const authorName = author || '알 수 없음'
        acc[authorName] = (acc[authorName] || 0) + 1;
      })
      return acc
    }, {} as Record<string,number>)

    const entries = Object.entries(authorCount);
    if (entries.length === 0) return '-'

    const [name] = entries.sort(([, countA], [, countB]) => countB - countA)[0];

    return `${name}`
  
  })()


    const COLLIGATE_STATIC = [
      {
        staticName: '완독',
        staticItem: data?.filter((item) => item.status == 'done').length,
      },
      {
        staticName: '읽는 중',
        staticItem: data?.filter((item) => item.status == 'reading').length,
      },
      {
        staticName: '읽고싶은',
        staticItem: data?.filter((item) => item.status == 'want_read').length,
      },
      {
        staticName: '가장 좋아하는 작가',
        staticItem: favoriteAuthor
      }
    ];
 
  return (
    <section className="bg-white rounded-lg px-3 py-5 mt-4">
      <h1 className="font-semibold text-lg">독서 현황</h1>
      <ul className="grid grid-cols-2 gap-4 pt-5">
        {COLLIGATE_STATIC.map(({ staticItem, staticName }) => (
          <li className="bg-background rounded-lg flex-center flex-col gap-1 p-2" key={staticName}>
            <span className="text-sageGreen font-black text-2xl">{staticItem}</span>
            <p>{staticName}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default SummationStatic