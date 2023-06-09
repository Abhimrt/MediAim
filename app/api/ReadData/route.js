import { NextResponse } from "next/server"
import Student from "../Models/Student"
import { connectToDB } from "../db"

export const GET = async(req)=>{
    try {
        connectToDB()
        let temp = await Student.find()
        return NextResponse.json(temp)
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}

