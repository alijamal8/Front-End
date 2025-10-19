import { MyTitleProps } from '@/types/homePage'
import React from 'react'



function Title({title}:MyTitleProps) {
  return (
    <div>
        <h1 className='text-5xl font-semibold max-sm:text-2xl  cursor-pointer'>{title}</h1>
    </div>
  )
}

export default Title