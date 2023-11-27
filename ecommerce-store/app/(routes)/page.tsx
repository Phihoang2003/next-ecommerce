import getBillBoard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Button from "@/components/ui/button"
import Container from "@/components/ui/container"
import { authOptions } from '@/lib/auth'

import { getServerSession } from 'next-auth'
import Link from "next/link"

const HomePage =async () => {
  // session for server
  const session=await getServerSession(authOptions);
  console.log(session);
  
  const billboard=await getBillBoard("822e3083-b78a-4371-b5b6-d40c9d2ed564")
  const products=await getProducts({isFeatured:true})
  console.log(products);
  
  return (
    <div>
      {session?.user?(<Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Product" items={products} />
      </div>
    </div>
    </Container>):(<div className="flex p-8 justify-between items-center"><div>Please to sign in to see Home Page</div>
    
    <Link href="/sign-in" >
      <Button className="ml-4">Sign In</Button>
    </Link></div>)}
    </div>
  )
}

export default HomePage