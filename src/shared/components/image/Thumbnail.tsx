interface Props{
  thumbnail: string | null,
  title: string | null,
  index?:number  
}

function Thumbnail({ thumbnail, title, index }: Props) {
  return (
    <img
      src={thumbnail ?? ''}
      alt={title ?? ''}
      loading={index === 0 ? 'eager' : 'lazy'}
      fetchPriority={index === 0 ? 'high' : 'low'}
      decoding={index === 0 ? 'sync' : 'async'}
      onError={(e) => {
        e.currentTarget.src = '/placeholder-book.png';
      }}
      width={80}
      height={120}
      className="object-cover w-full h-full"
    />
  );
}
export default Thumbnail