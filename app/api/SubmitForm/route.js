import { NextResponse } from "next/server"
import Student from "../Models/Student"
import { connectToDB } from "../db"

export const POST = async(req)=>{
    try {
        connectToDB()
        let requestBody = await req.json()
        
        let temp = await Student.create({name:requestBody.name,email:requestBody.email})
        return NextResponse.json(temp)
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}

