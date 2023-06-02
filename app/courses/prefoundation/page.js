import Content from '@/components/Content'
import React from 'react'
import { preFoundation } from '@/Data/content'

const page = () => {
  return (
    <div>
      <h1 className='h1'>NEET Pre-foundation-Introduction</h1>
        {
            preFoundation.map((e,i)=>(
                <Content data={e} key={i}/>
            ))
        }
    </div>
  )
}

export default page