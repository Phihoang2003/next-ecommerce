import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function PATCH(req:Request,{params}:{params:{storeId:string,billboardId:string}}){
   try {
    const {userId}=auth();
    const body=await req.json();
    const {label,imageUrl}=body;
    if(!label){
        return new NextResponse("Label is required",{status:401})
    }
    if(!imageUrl){
        return new NextResponse("Image url is required",{status:401})
    }
    if(!userId){
        return new NextResponse("Unauthenticated",{status:401})
    }
    if(!params.billboardId){
        return new NextResponse("Billboard id is required",{status:401})
    }
    const storeByUserId=await db.store.findFirst({
        where:{
            id:params.storeId,
            userId
        }
    })
    if(!storeByUserId){
        return new NextResponse("Unauthorized",{status:401})
    }
    const billboard=await db.billboard.updateMany({
        where:{
            id:params.billboardId
        },
        data:{
            label,
            imageUrl
        }
    })
    return NextResponse.json(billboard)
   } catch (error) {
    console.log("BILLBOARD_UPDATE",error);
    return new NextResponse("Internal Server Error",{status:500})
   }

}

export async function DELETE(
    req: Request,
    { params }: { params: { billboardId: string, storeId: string } }
  ) {
    try {
      const { userId } = auth();
  
      if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.billboardId) {
        return new NextResponse("Billboard id is required", { status: 400 });
      }
  
      const storeByUserId = await db.store.findFirst({
        where: {
          id: params.storeId,
          userId,
        }
      });
  
      if (!storeByUserId) {
        return new NextResponse("Unauthorized", { status: 405 });
      }
  
      const billboard = await db.billboard.delete({
        where: {
          id: params.billboardId,
        }
      });
    
      return NextResponse.json(billboard);
    } catch (error) {
      console.log('[BILLBOARD_DELETE]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };