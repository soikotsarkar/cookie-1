import Image from "next/image";
import Link from'next/link'
export default function Home() {
  return (
    
    <div>
    
      <Link href='/login'>Login</Link>
      <br/>
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  );
}
