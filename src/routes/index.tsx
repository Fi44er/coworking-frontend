import { createFileRoute } from "@tanstack/react-router"
import Header from "../pages/home/header/Header"
import AboutUs from "../pages/home/aboutUs/AboutUs"
import { ListSpace } from "../pages/home/list-space/ListRoom"

export const Route = createFileRoute('/')({
    component: Index,
  })

function Index () {
return(
    <>
        <Header />
        <AboutUs />
        <ListSpace/>    
    </>
)
}