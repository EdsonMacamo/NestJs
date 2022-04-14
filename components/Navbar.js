import Link  from 'next/link'
export default function Navbar(){

    return(
      
        <ul>
            <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="products"><a>Productos</a></Link>
        </li>
        <li>
          <Link href="about"><a>Abut</a></Link>
        </li>
      </ul>
      
    )
}