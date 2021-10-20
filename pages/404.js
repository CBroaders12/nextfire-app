import Link from 'next/link';

export default function Custom404() {
  return (
    <main>
      <h1>404 - That pages doesn't seem to exist...</h1>
      <iframe
        src='https://giphy.com/embed/gngO1gmBhS9na'
        width='480'
        height='240'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <Link href='/'>
        <button className='btn-blue'>Go Home</button>
      </Link>
    </main>
  );
}
