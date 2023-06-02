import React from 'react'

const Content = ({ data }) => {
    return (
        <div className='m-5 md:m-10 md:block '>
            <h2 className='font-bold text-2xl mb-5 text-gray-700' >{data[0]}</h2>
            <ul className='list-disc mx-5 md:mx-20 text-xl text-gray-500 space-y-5'>
                {data[1].map((e, i) => {
                    return (
                        <>
                            {Object.keys(e).length == 1 ?
                                <li key={i}>
                                    {e.content}
                                </li>
                                :
                                <li key={i}>
                                    {e.content}
                                    <ul className="list-disc mx-5 md:mx-20 space-y-3">
                                        {e.points.map((f,j)=>(
                                            <li key={j} className='list-dot'>{f}</li>
                                        ))}
                                    </ul>
                                </li>
                            }
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content