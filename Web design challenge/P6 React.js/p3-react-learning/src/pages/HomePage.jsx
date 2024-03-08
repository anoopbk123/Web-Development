import React from 'react'
import Home from '../components/home/Home'
import Header from '../components/header/Header'
import DynamicImport from '../components/DynamicImport'

export default function HomePage() {
  return (
    <>
    <Header/>
     <Home/> 
     <DynamicImport/>
    </>
  )
}
