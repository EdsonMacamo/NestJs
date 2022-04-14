import Link  from 'next/link'
import Navbar  from '../../components/Navbar'
export default function Produtos(){

    return (
    <>
    <Navbar/>
    <h1>Pagina de Productos</h1>
    <Link href="/"><a>Voltar</a></Link>
    </>
    )

}