import Content from '@/components/Content'
import React from 'react'
import {  planC } from '@/Data/content'

const page = () => {
  return (
    <div>
        <h1 className='h1' >NEET - Backup Plan C</h1>
       {planC.map((e,i)=>(
        <Content data={e} key={i} />
       ))}
    </div>
  )
}

export default page