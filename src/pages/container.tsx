import Sidenavbar from "../components/sidenav"
import Navbar from "../components/nav"
const Container=({ children }: { children: React.ReactNode })=>{
    return(
        <>
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex">
                <div><Sidenavbar/></div>
                <div className="bg-gray-900 p-5 overflow-y-scroll overflow-visible h-screen w-full">{children}</div>
            </div>
        </div>
        </>
    )
}
export default Container