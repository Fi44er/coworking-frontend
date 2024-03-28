import { Link, createFileRoute } from "@tanstack/react-router"
import Header from "../components/header/Header"

export const Route = createFileRoute('/')({
    component: Index,
  })

function Index () {
return(
    <>
    <div>
        <Header />
        <h1>Index page</h1>
        <Link to='/about'>About</Link>
        <div id="main" style={{paddingTop: "1000px"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    </div>
    </>
)
}