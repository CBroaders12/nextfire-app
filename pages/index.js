import toast from 'react-hot-toast';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={() => toast.success('hello toast!')}>Toast Me!</button>
    </main>
  );
}
