
interface Props{
  title1: string,
  title2: string,
  description: string,
  src: string,
  alt:string
}

function Template({ title1, title2,description,src,alt}:Props) {
  return (
    <>
      <section className="flex flex-col gap-5">
        <span className="flex flex-col gap-2 w-full">
          <h2 className="text-2xl text-deepBrown font-serif font-semibold lg:text-4xl">{title1 }</h2>
          <h2 className="text-right text-2xl text-deepBrown
          font-semibold font-serif lg:text-4xl">{title2}</h2>
        </span>
        <span className="flex flex-col items-center gap-5">
          <img src={src} alt={ alt }  className="h-57 w-full object-cover rounded-lg lg:h-100"/>
          <p className="text-warmBrown text-center text-sm lg:text-lg">{description}</p>
        </span>
      </section>

    </>
  );
}
export default Template;
