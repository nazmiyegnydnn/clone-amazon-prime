import React from "react";
import "./Movie.scss";
import { useSelector } from 'react-redux';


const Movie = () => {
  const {detayData} = useSelector(state => state.data)
  console.log(detayData)

  return (
    <div className="movieCard">
        <div className='detayImage'> 
      { 
       <img src={detayData[0]?.img}/>
      }
      </div>
     <div className='detayText'>
        <h1>{detayData[0]?.name}</h1>
        <p>{detayData[0]?.type}</p>
        <p>{detayData[0]?.date}</p>
      </div>
    </div>
  );
};

export default Movie;
