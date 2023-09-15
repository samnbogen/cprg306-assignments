import Link from 'next/link';

export default function StudentInfo() {
    return (
        <ul>
            <li>Samantha Bogen</li>
            <li>CPRG306</li>
            <li><Link href="https://github.com/samnbogen">GitHub</Link></li>
        </ul>
    );
}