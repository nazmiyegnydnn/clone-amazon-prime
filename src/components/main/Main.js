import React from 'react'
import {useSelector , useDispatch } from 'react-redux'
import './Main.scss'
import Slider from '../../images/Slider.jpeg'
import { useNavigate } from "react-router-dom";
import { detayFilter, handleClick  } from "../../dataSlice";



const Main = () => {
  const { movies } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleFocus = (el) => {
    dispatch(handleClick(el))
    navigate(`/category/${el}`)
 }

 const handlePage = (item) => {
  dispatch(detayFilter(item))
  navigate(`/movies/${item.id}`)
}

  return (
    <div className='main'>
      <img  className='slider' src={Slider}/>
      <div className='categories'>
      <div onClick={() => handleFocus("WatchAgain")} className='primeText' ><p><span>Prime</span>Tekrar İzle</p></div>
      <div  className='watchAgain'>
        { movies
          .filter((el) => el.type === "WatchAgain")
          .map((el) => 
          <div onClick={() => handlePage(el)} className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
      <div onClick={() => handleFocus("Romantic")} className='primeText'> <p><span>Prime</span>Romantik Filmler</p></div>
      <div className='romantic'>
        {  movies
          .filter((el) => el.type === "Romantic")
          .map((el) => 
          <div  onClick={() => handlePage(el)} className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
      <div onClick={() => handleFocus("Actions")} className='primeText'> <p><span>Prime</span>Aksiyon Filmleri</p></div>
      <div className='actions'>
      {  movies
          .filter((el) => el.type === "Actions")
          .map((el) => 
          <div  onClick={() => handlePage(el)} className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
      <div onClick={() => handleFocus("Adventure")} className='primeText'> <p><span>Prime</span>Macera Filmleri</p></div>
      <div className='adventure'>
      {  movies
          .filter((el) => el.type === "Adventure")
          .map((el) => 
          <div  onClick={() => handlePage(el)} className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
      </div>
    </div>
  )
}

export default Main