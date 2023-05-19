import React from 'react'
import { useRecoilValue } from 'recoil'
import { getCart } from '../atoms'

const Page4 = () => {
    const cartItems = useRecoilValue(getCart)
  return (
    <div>
      <h1>{cartItems.serviceName}</h1>
      <h1>{cartItems.serviceTerms}</h1>
      <h1>{cartItems.servicePrice}</h1>
    </div>
  )
}

export default Page4
