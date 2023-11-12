import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function PATCH(req:Request,{params}:{params:{storeId:string}}){
    const {userId}=auth();
    const body=await req.json();
    
    const {name}=body;
    if(!userId){
        return new NextResponse("Unauthorized",{status: 401});
    }
    if(!name){
        return new NextResponse("Name is required",{status: 400});
    }

    if(!params.storeId){
        return new NextResponse("Store Id is required",{status: 400});
    }
    try {
        const store=await db.store.updateMany({
            where:{
                id:params.storeId,
                userId
            },
            data:{
                    name
                }
            
        })

        return new NextResponse(JSON.stringify(store),{status: 200});
    } catch (error) {
        console.log("Stored Patch: ",error);
        
        return new NextResponse("Error",{status: 500})
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.storeId) {
        return new NextResponse("Store id is required", { status: 400 });
      }
  
      const store = await db.store.deleteMany({
        where: {
          id: params.storeId,
          userId
        }
      });
    
      return NextResponse.json(store);
    } catch (error) {
      console.log('[STORE_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };