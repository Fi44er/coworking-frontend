import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route: any = createLazyFileRoute('/about')({
    component: About,
  })

function About () {
    return(
    <>
    <div>
        <h1>About page</h1>
        <Link to='/'>Index</Link>
    </div>
    </>
    )
}