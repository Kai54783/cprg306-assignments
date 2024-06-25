import Link from 'next/link';

export default function Home() {
  return(
    <main className='min-h-screen flex items-start justify-center pt-12 bg-amber-100'>
      <div className='bg-zinc-50 p-8 rounded-lg shadow-md max-w-md w-full'>
        <h1 className='text-2xl font-bold mb-6'>CPRG306: Web Development2 - Assignments</h1>
        <div className='space-y-4'>
        <p className='text-blue-500 hover:text-blue-700'><Link href="/week-2">Week 2 Assignment</Link></p>
        <p className='text-blue-500 hover:text-blue-700'><Link href="/week-3">Week 3 Assignment</Link></p>
        <p className='text-blue-500 hover:text-blue-700'><Link href="/week-4">Week 4 Assignment</Link></p>
        <p className='text-blue-500 hover:text-blue-700'><Link href="/week-5">Week 5 Assignment</Link></p>
        </div>
      </div>
    </main>
  );
}


