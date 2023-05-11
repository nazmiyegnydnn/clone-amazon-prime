import React from 'react'
import './WatchAgain.scss'
import { useSelector} from "react-redux";




const WatchAgain = () => {
  const { movies } = useSelector((state) => state.data);



  return (
    <div className='watchAgain'>
    <div  className='primeText'> <p><span>Prime</span>Tekrar İzle</p></div>
      <div className='watchAgain'>
        {  movies
          .filter((el) => el.type === "WatchAgain")
          .map((el) => 
          <div className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default WatchAgain