import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Main/>
    </div>
  )
}

export default Home