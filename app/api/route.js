import { NextResponse } from "next/server"
import { connectToDB } from "./db"

export const GET = ()=>{
    connectToDB()
    return NextResponse.json({lol:"happy :-)"})
}