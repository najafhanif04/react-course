import React from 'react'

export default function Container({children}) {
  return (
    <section className='px-5 my-20 flex justify-between'>

      {children}
      
    </section>
  )
}
