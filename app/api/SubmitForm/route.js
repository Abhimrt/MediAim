import { NextResponse } from "next/server"
import Student, { create } from "../Models/Student"
import { connectToDB } from "../db"

export const POST = async (req) => {
    let requestBody
    try {
        await connectToDB()
        requestBody = await req.json()
        let existingUser = await Student.findOne({ email: requestBody.email.toLowerCase() })
        if (existingUser) {
            return NextResponse.json({ success: false, error: "Already Email Exists" }, { status: 403 })
        }
        // console.log(requestBody);
        let createUser = await Student.create({
            name: requestBody.name,
            fatherName:requestBody.fatherName.toUpperCase(),
            mobileNo:requestBody.mobileNo,
            whatsappNo:requestBody.whatsappNo,
            email: requestBody.email.toLowerCase(),
            studingIn:requestBody.studingIn,
            school:requestBody.school,
            Address:{
                state:requestBody.state,
                city:requestBody.city,
                houseNo:requestBody.houseNo
            },
            DOB:new Date(requestBody.DOB)
        })
        if(createUser){
            return NextResponse.json({success:true,user:createUser},{status:200})
        }
        return NextResponse.json({success:false,error:"aklcjnakcna"})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 })
    }
}

