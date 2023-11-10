import dbConnect from "@/utils/dbConnect";
import contact from '@/models/contact';
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
      const body = await req.json()
      await dbConnect()
      await contact.create(body)

      return NextResponse.json(
        {
            message : 'message sent sucessfully !!'
        },{
            status : 200
        }
      )

    }catch(e){
        return NextResponse.json(
            {
                message : 'server error , please try again !!'
            },{
                status : 500
            }
          )
    }
}