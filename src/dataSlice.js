import { createSlice } from '@reduxjs/toolkit'      
import DovusKulubu from './images/watchAgain/DovusKulubu.png'
import RuyandaGorursun from './images/watchAgain/RuyandaGorursun.png'
import Samaritan from './images/watchAgain/Samaritan.png'
import Tomorrow from './images/watchAgain/Tomorrow.png'
import AskGelir from './images/romantic/AskGelir.png'
import Pride from './images/romantic/Pride.png'
import Srek from './images/romantic/Srek.png'
import TheMap from './images/romantic/TheMap.png'
import Casino from './images/adventure/Casino.png'
import Jolt from './images/adventure/Jolt.png'
import Kusursuz from './images/adventure/Kusursuz.png'
import Most from './images/adventure/Most.png'
import Hunters from './images/actions/Hunters.png'
import JackRyan from './images/actions/JackRyan.png'
import Mentalist from './images/actions/Mentalist.png'
import Picard from './images/actions/Picard.png'


const initialState = { 
    movies: [
        {
            "id":1,
            "name":"Hunters",
            "type":"Actions",
            img:Hunters,
            "date":"20.01.2004", 
            },
            {
             "id":2,
             "name":"JackRyan",
            "type":"Actions",
            img:JackRyan,
            "date":"20.01.2004",
            },
            {
             "id":3,
             "name":"Mentalist",
             "type":"Actions",
             img:Mentalist,
             "date":"20.01.2004",
            },
            {
             "id":4,
             "name":"Picard",
             "type":"Actions",
             img:Picard,
             "date":"20.01.2004",
        
            },
            {
             "id":5,
             "name":"Ask Gelir",
             "type":"Romantic",
             img:AskGelir,
             "date":"20.01.2004",
            },
            {
             "id":6,
             "name":"Pride",
            "type":"Romantic",
            img:Pride,
             "date":"20.01.2004",
            },
               {
             "id":7,
             "name":"Srek",
             "type":"Romantic",
             img:Srek,
             "date":"20.01.2004",
            },
            {
             "id":8,
             "name":"The Map",
             "type":"Romantic",
             img:TheMap,
             "date":"20.01.2004",
            },
            {
             "id":9,
             "name":"Casino",
             "type":"Adventure",
             img:Casino,
             "date":"20.01.2004",
            },
            {
             "id":10,
              "name":"Jolt",
             "type":"Adventure",
             img:Jolt,
             "date":"20.01.2004",
            },
            {
             "id":11,
             "name":"Kusursuz",
             "type":"Adventure",
             img:Kusursuz,
             "date":"20.01.2004",
            },
            {
             "id":12,
             "name":"Most",
             "type":"Adventure",
             img:Most,
             "date":"20.01.2004",
            },
            {
             "id":13,
             "name":"Dövüş Kulubu",
             "type":"WatchAgain",
             img:DovusKulubu,
             "date":"20.01.2004",
            },
            {
             "id":14,
             "name":"Rüyanda Görürsün",
             "type":"WatchAgain",
             img:RuyandaGorursun,
             "date":"20.01.2004",
            },
            {
             "id":15,
             "name":"Samaritan",
             "type":"WatchAgain",
             img:Samaritan,
             "date":"20.01.2004",
            },
            {
             "id":16,
             "name":"Tomorrow",
             "type":"WatchAgain",
             img:Tomorrow,
             "date":"20.01.2004",
            }
    ],
}
  

export const dataSlice =  createSlice({ 
    name: 'data',   
    initialState,
    reducers: {
        filterTitle :(state , action) =>{ 
            const filterData = state.movies?.filter((el) => el?.type?.toLowerCase()?.includes(action.payload.toLowerCase()));
            state.movies =  filterData   
          },
        
    }
  })

  export const { filterTitle } = dataSlice.actions

  export default dataSlice.reducer 