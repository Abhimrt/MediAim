import Content from '@/components/Content'
import React from 'react'
import {  oneYear } from '@/Data/content'

const page = () => {
  return (
    <div>
      <h1 className='h1' >NEET Plan A-1 Years Repeaters Course</h1>
       {oneYear.map((e,i)=>(
        <Content data={e} key={i} />
       ))}
    </div>
  )
}

export default page