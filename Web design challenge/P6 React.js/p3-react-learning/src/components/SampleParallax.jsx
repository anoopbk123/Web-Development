import React from 'react'
import { Parallax } from 'react-parallax'
import fashionShopping from '../assets/images/fashion-shopping.jpg'

export default function SampleParallax() {
  return (
    <div style={{minHeight:'1000vh'}}>
      <h3 className='text-center'>Parallax Effect</h3>
      <Parallax bgImage={fashionShopping} strength={1000}>
      <div style={{ height: 500 }}>
        <div className='fs-xl text-center' style={{color:'green',fontWeight:'bold'}}>HTML inside the parallax</div>
      </div>
    </Parallax>
    </div>
  )
}
