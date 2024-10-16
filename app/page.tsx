
import Link from "next/link"
export default function HomePage(){
  return(
  <div>
    <ul className="flex gap-10 bg-gray-600">
      <li style={{color:"green",backgroundColor:"yellow"}}>
        <Link href="/home">HomePage</Link>
      </li>
      
      <li style={{color:"green",backgroundColor:"orange"}}>
        <Link href="/About">About</Link>
      </li>
      <li  style={{color:"green",backgroundColor:"red"}}>
        <Link href="/contactUs">contact us</Link>
      </li>
      <li style={{color:"green",backgroundColor:"pink"}}>
        <Link href="/services/web-development">SERVICES</Link>
      </li>
    </ul>
    </div>
  );
}
