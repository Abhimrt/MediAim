import { NextResponse } from "next/server";
import Admin from "../Models/Admin";
import { connectToDB } from "../db";
import { genSalt, hash } from "bcrypt";

export const POST = async (req) => {
    await connectToDB()
    let reqBody = await req.json()
    const salt = await genSalt(10);
    let hashpass = await hash(reqBody.password, salt);
    let user = await Admin.create({
        email: reqBody.email.toLowerCase(),
        password: hashpass,
    })
    return NextResponse.json({success:true,user:user},{status:200})
}