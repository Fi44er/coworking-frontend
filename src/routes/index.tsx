import { Link, createFileRoute } from "@tanstack/react-router"
import Header from "../pages/home/header/Header"
import AboutUs from "../pages/home/aboutUs/AboutUs"

export const Route = createFileRoute('/')({
    component: Index,
  })

function Index () {
return(
    <>
    <div>
        <Header />
        <AboutUs />
    </div>
    </>
)
}