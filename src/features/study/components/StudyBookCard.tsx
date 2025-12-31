import Thumbnail from "@/shared/components/image/Thumbnail";

interface Props {
  thumbnail: string | null,
  title: string | null
}

function StudyBookCard({thumbnail,title}:Props) {
  return (
      <>
      <div className="w-full max-w-40 aspect-2/3 rounded-sm shadow-2xs overflow-hidden bg-gray-100">
        <Thumbnail thumbnail={thumbnail} title={title} />
      </div>
      <p className="text-sm line-clamp-2 w-full">{title}</p>
   </>
  );
}
export default StudyBookCard