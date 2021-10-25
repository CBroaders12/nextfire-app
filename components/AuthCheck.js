import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function AuthCheck({ children, fallback }) {
  const { username } = useContext(UserContext);

  return username
    ? children
    : fallback || (
        <Link href='/enter'>You must be signed in to view this page</Link>
      );
}
