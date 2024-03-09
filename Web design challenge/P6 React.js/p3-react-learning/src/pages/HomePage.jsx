import React from 'react'
import Home from '../components/home/Home'
import Header from '../components/header/Header'
import DynamicImport from '../components/DynamicImport'
import SampleParallax from '../components/SampleParallax'

export default function HomePage() {
  return (
    <>
    <Header/>
     <Home/> 
     <DynamicImport/>
     <SampleParallax/>
    </>
  )
}
