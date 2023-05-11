import React from 'react'
import { useSelector} from "react-redux";
import './Main.scss'
import Slider from '../../images/Slider.jpeg'
import { useNavigate } from "react-router-dom";


const Main = () => {
  const { movies } = useSelector((state) => state.data);
  const navigate = useNavigate ();

const handleClickOne= () => {
    navigate(`/watchAgain`);
}
const handleClickTwo = () => {
  navigate(`/romantic`);
}
const handleClickThree = () => {
  navigate(`/actions`);
}

const handleClickFour = () => {
  navigate(`/adventure`);
}


  return (
    <div className='main'>
      <img  className='slider' src={Slider}/>
      <div className='categories'>
      <div  className='primeText' onClick={handleClickOne}> <p><span>Prime</span>Tekrar İzle</p></div>
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
      <div  className='primeText' onClick={handleClickTwo}> <p><span>Prime</span>Romantik Filmler</p></div>
      <div className='romantic'>
        {  movies
          .filter((el) => el.type === "Romantic")
          .map((el) => 
          <div className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
      <div  className='primeText' onClick={handleClickThree}> <p><span>Prime</span>Aksiyon Filmleri</p></div>
      <div className='actions'>
      {  movies
          .filter((el) => el.type === "Actions")
          .map((el) => 
          <div className='moviesCard'>
              <h2>{el.name}</h2>
              <p>{el.date}</p>
              <img src={el.img}/>
          </div>
          )
        }
      </div>
      <div  className='primeText' onClick={handleClickFour}> <p><span>Prime</span>Macera Filmleri</p></div>
      <div className='adventure'>
      {  movies
          .filter((el) => el.type === "Adventure")
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
    </div>
  )
}

export default Main