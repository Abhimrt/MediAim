import Content from '@/components/Content'
import React from 'react'
import {  twoYear } from '@/Data/content'

const page = () => {
  return (
    <div>
        <h1 className='h1' >NEET Plan A-2 Years Regress Course</h1>
       {twoYear.map((e,i)=>(
        <Content data={e} key={i} />
       ))}
    </div>
  )
}

export default page