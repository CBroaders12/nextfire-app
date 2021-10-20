import Head from 'next/head';

export default function Metatags({
  title = 'Next.js + Firebase Social Blog',
  description = 'Complete Next.js + Firebase demo from Fireship.io, built by Conor Broaders',
  image,
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Head>
  );
}
