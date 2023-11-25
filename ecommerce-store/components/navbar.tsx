import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbar-actions";


export const revalidate=0;

const Navbar = async() => {
  const categories=await getCategories();
  
  
  
    return (
      <div className="border-b">
          <Container>

            <div className="relative flex items-center px-4 sm:px-6 h-16 lg:px-8">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">Store</p>
                </Link>
                <MainNav data={categories}/>
                <NavbarActions/>
            </div>
           
          </Container>
      </div>
    )
  }
  
  export default Navbar