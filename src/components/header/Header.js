import React from 'react'
import { Col, Row } from 'antd';
import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from '../../images/Logo.png'
import Search from '../../images/Search.png'



const Header = () => {
  return (
    <div className='header'>
    <Row className='row'>
      <Col span={3}>
        <img  className='logo' src={Logo}/>
      </Col>
      <Col span={6} className='navbar'>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/">TV Dizileri</NavLink>
      <NavLink to="/">Kategoriler</NavLink>
      <NavLink to="/">Bana Özel</NavLink>
      </Col>
      <Col span={3} className='personal'>
      <img  className='searchLogo' src={Search}/>
      </Col>
    </Row>
    </div>
  )
}

export default Header