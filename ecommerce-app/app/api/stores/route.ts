import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

export async function POST(req:Request){
    try {
        const {userId}=auth();
        const body=await req.json();
        const {name}=body;
        if(!userId){
            return new NextResponse("UnAuthorized",{
                status:401
            })
        }
        if(!name){
            return new NextResponse("Name is required",{
                status:400
            })
        }

        const store=await db.store.create({
            data:{
                name,
                userId

                
            }
        })
        return NextResponse.json(store);
    } catch (error) {
        return NextResponse.json(error);
    }
}