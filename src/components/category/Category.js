import React from 'react'
import './Category.scss'
import {useSelector , useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { detayFilter } from "../../dataSlice";




const Category = () => {
  const {categoryData} = useSelector(state => state.data)
  const navigate = useNavigate();
  const dispatch = useDispatch()


const goMovie = (item) => {
  dispatch(detayFilter(item))
  navigate(`/movies/${item.id}`)
}



  return (
    <div className="category">
     {
      categoryData.map((el) =>
      <div onClick={() => goMovie(el)} className='categoryCard'>
      <h2>{el.name}</h2>
      <p>{el.date}</p>
      <img src={el.img}/>
  </div>
      ) }

      </div>
  )
}

export default Category