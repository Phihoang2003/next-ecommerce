import getBillBoard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"


const HomePage =async () => {
  const billboard=await getBillBoard("822e3083-b78a-4371-b5b6-d40c9d2ed564")
  const products=await getProducts({isFeatured:true})
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Product" items={products} />
      </div>
    </div>
    </Container>
  )
}

export default HomePage