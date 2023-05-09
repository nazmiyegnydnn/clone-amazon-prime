import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import './Home.scss'




const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home