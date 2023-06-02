import Content from '@/components/Content'
import React from 'react'
import { foundation } from '@/Data/content'

const page = () => {
  return (
    <div>
        <h1 className='h1' >NEET Foundation-Introduction</h1>
       {foundation.map((e,i)=>(
        <Content data={e} key={i} />
       ))}
    </div>
  )
}

export default page