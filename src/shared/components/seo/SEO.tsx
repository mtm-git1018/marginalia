import { Helmet } from "@dr.pogodin/react-helmet"


interface Props{
  title: string,
  description: string,
  keywords:string
}

function SEO({ title, description, keywords }: Props) {
  const fullTitle = `${title} | 마지나리아`
  const defaultImage = '/logo-dark-brown.webp'
  const defaultUrl  ='https://marginalia.io.kr'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={defaultUrl} />
      <meta property="og:site_name" content="마지나리아" />
      
    </Helmet>
  );
}
export default SEO