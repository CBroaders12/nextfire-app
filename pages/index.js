import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{ pathname: '/[username]', query: { username: 'cfreak12' } }}
      >
        <a>Conor's Profile</a>
      </Link>
    </div>
  );
}
