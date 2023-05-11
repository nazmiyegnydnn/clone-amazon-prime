import React from 'react'
import { Col, Row } from 'antd';
import { NavLink } from "react-router-dom";
import './Header.scss'
import Logo from '../../images/Logo.png'
import {filterTitle} from "../../dataSlice"
import { useDispatch } from 'react-redux'




const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='header'>
    <Row className='row'>
      <Col span={6}>
        <img  className='logo' src={Logo}/>
      </Col>
      <Col span={12} className='navbar'>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/">TV Dizileri</NavLink>
      <NavLink to="/">Kategoriler</NavLink>
      <NavLink to="/">Bana Özel</NavLink>
      </Col>
      <Col span={6} className='personal'>
      <input  
        type="text"
        placeholder="ARA"
        onChange={(e) => dispatch(filterTitle(e.target.value))}/> 
      </Col>
    </Row>
    </div>
  )
}

export default Header