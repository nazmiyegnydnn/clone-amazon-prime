import React from 'react'
import '../footer/Footer.scss'
import { NavLink } from "react-router-dom"; 
import FooterLogo from '../../images/FooterLogo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLogo' ><img src={FooterLogo}/></div>
        <div className='footerLink'>
        <NavLink to="/">Koşullar ve Gizlilik Bildirimi</NavLink>
        <NavLink to="/">Geri Bildirimde Bulunun</NavLink>
        <NavLink to="/">Yardım</NavLink>
        <NavLink to="/">Çerez Bildirimi</NavLink>
        <p>© 1996-2023, Amazon.com, Inc. veya bağlı kuruluşları</p>
        </div>
    </div>
  )
}

export default Footer