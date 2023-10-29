import Link from 'next/link';
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <div className='m-4 p-2'>
      <h1 className="text-4xl font-bold text-center text-green-600"> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <ul className='text-center m-3 p-1'>
        <li className='hover:text-sky-500'><Link href="/week2">Week 2</Link></li>
        <li className='hover:text-sky-500'><Link href="/week3">Week 3</Link></li>
        <li className='hover:text-sky-500'><Link href="/week4">Week 4</Link></li>
        <li className='hover:text-sky-500'><Link href="/week5">Week 5</Link></li>
        <li className='hover:text-sky-500'><Link href="/week6">Week 6</Link></li>
        <li className='hover:text-sky-500'><Link href="/week7">Week 7</Link></li>
        <li className='hover:text-sky-500'><Link href="/week8">Week 8</Link></li>
      </ul>
    </div>
  );
}



//npm run dev
//ctrl c
