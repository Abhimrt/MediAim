import Content from '@/components/Content'
import React from 'react'
import { planB } from '@/Data/content'

const page = () => {
  return (
    <div>
        <h1 className='h1' >NEET - Backup Plan B</h1>
       {planB.map((e,i)=>(
        <Content data={e} key={i} />
       ))}
    </div>
  )
}

export default page