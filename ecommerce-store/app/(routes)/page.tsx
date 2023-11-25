import getBillBoard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"


const HomePage =async () => {
  const billboard=await getBillBoard("822e3083-b78a-4371-b5b6-d40c9d2ed564")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage