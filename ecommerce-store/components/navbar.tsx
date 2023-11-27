import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

import BtnLoggout from "./ui/BtnLoggout";
import Button from "./ui/button";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  const session = await getServerSession(authOptions);

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center justify-between px-4 sm:px-6 h-16 lg:px-8">
          {session&&(<><Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions /></>)}

          <div className="ml-4 flex items-center justify-between">
            <div className="w-[170px] flex items-center justify-between">
              {session?.user?.image && (
                <Image
                  className="object-cover rounded-full object-center "
                  src={session?.user?.image}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              )}
              {session?.user ? (
                <BtnLoggout />
              ) : (
                ""
                // <Link href="/sign-in" >
                //   <Button className="relative z-50 top-0">Sign In</Button>
                // </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );

  
};

export default Navbar;
