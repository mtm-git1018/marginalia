import type { Book } from "../../../shared/types/type";
import useBookStats from "../hooks/useBookStats";

function ReadingStatic({ books }: {books:Book[]|undefined}) {

  const { doneCount,readingCount,wantReadCount} = useBookStats(books)

  const stats = [
    {
      count: doneCount,
      label: '이번 달 읽은 책',
    },
    {
      count: readingCount,
      label: '독서중인 책',
    },
    {
      count: wantReadCount,
      label: '읽고 싶은 책',
    },
  ]; 

  return (
    <ul className="flex justify-between">
      {
        stats.map(({ count, label }) => (
        <li className="flex flex-col items-center" key={ label }>
        <span className="text-lg">{count}</span>
          <p>{ label}</p>
        </li>
        ))
      }
    </ul>
  );
}
export default ReadingStatic