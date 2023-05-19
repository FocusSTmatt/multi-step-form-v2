import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { toggleChecked } from '../atoms'

const Page3 = () => {
    const yearOrMonth = useRecoilValue(toggleChecked)

    console.log(yearOrMonth)

  return (
    <div>
       <h1>{yearOrMonth === false ? "Monthly" : "Yearly"}</h1> 
      <h1>Page3</h1>
    </div>
  )
}

export default Page3
