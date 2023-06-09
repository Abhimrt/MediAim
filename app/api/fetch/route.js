import { NextResponse } from "next/server"
import Student from "../Models/Student"
import { connectToDB } from "../db"
import Admin from "../Models/Admin"
import { compare } from "bcrypt"

export const POST = async(req)=>{
    let reqBody
    try {
        reqBody = await req.json()
        await connectToDB()
        let existingAdmin = await Admin.findOne({email:reqBody.email})
        if(!existingAdmin){
            return NextResponse.json({success:true,error:"Invalid Credentails"},{status:403})
        }
        const passwordCompare = await compare(reqBody.password, existingAdmin.password);
        if(!passwordCompare){
            return NextResponse.json({success:true,error:"Invalid Credentails"},{status:403})
        }
        let temp = await Student.find()
        return NextResponse.json({success:true,data:temp},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error},{status:500})
    }
}

