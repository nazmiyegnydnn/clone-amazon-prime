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
            categoryId:1,
            img:Hunters,
            "date":"20.01.2004", 
            },
            {
             "id":2,
             "name":"JackRyan",
            "type":"Actions",
            categoryId:1,
            img:JackRyan,
            "date":"20.01.2004",
            },
            {
             "id":3,
             "name":"Mentalist",
             "type":"Actions",
             categoryId:1,
             img:Mentalist,
             "date":"20.01.2004",
            },
            {
             "id":4,
             "name":"Picard",
             "type":"Actions",
             categoryId:1,
             img:Picard,
             "date":"20.01.2004",
        
            },
            {
             "id":5,
             "name":"Ask Gelir",
             "type":"Romantic",
             categoryId:2,
             img:AskGelir,
             "date":"20.01.2004",
            },
            {
             "id":6,
             "name":"Pride",
            "type":"Romantic",
            categoryId:2,
            img:Pride,
             "date":"20.01.2004",
            },
               {
             "id":7,
             "name":"Srek",
             "type":"Romantic",
             categoryId:2,
             img:Srek,
             "date":"20.01.2004",
            },
            {
             "id":8,
             "name":"The Map",
             "type":"Romantic",
             categoryId:2,
             img:TheMap,
             "date":"20.01.2004",
            },
            {
             "id":9,
             "name":"Casino",
             "type":"Adventure",
             categoryId:3,
             img:Casino,
             "date":"20.01.2004",
            },
            {
             "id":10,
              "name":"Jolt",
             "type":"Adventure",
             categoryId:3,
             img:Jolt,
             "date":"20.01.2004",
            },
            {
             "id":11,
             "name":"Kusursuz",
             "type":"Adventure",
             categoryId:3,
             img:Kusursuz,
             "date":"20.01.2004",
            },
            {
             "id":12,
             "name":"Most",
             "type":"Adventure",
             categoryId:3,
             img:Most,
             "date":"20.01.2004",
            },
            {
             "id":13,
             "name":"Dövüş Kulubu",
             "type":"WatchAgain",
             categoryId:4,
             img:DovusKulubu,
             "date":"20.01.2004",
            },
            {
             "id":14,
             "name":"Rüyanda Görürsün",
             "type":"WatchAgain",
             categoryId:4,
             img:RuyandaGorursun,
             "date":"20.01.2004",
            },
            {
             "id":15,
             "name":"Samaritan",
             "type":"WatchAgain",
             categoryId:4,
             img:Samaritan,
             "date":"20.01.2004",
            },
            {
             "id":16,
             "name":"Tomorrow",
             "type":"WatchAgain",
             categoryId:4,
             img:Tomorrow,
             "date":"20.01.2004",
            }
    ],
    detayData : [],
    categoryData:[]
 
}
  

export const dataSlice =  createSlice({ 
    name: 'data',   
    initialState,
    reducers: {
        filterTitle :(state , action) =>{
            const filterData = state.movies?.filter((el) => el?.name?.toLowerCase().includes(action.payload.toLowerCase()));
            state.movies =  filterData   
          },
        handleClick : (state , action) => {
            const movieFilter = state.movies?.filter((el) => el?.type === action.payload);
            console.log(movieFilter)
            state.categoryData = movieFilter
        },
        detayFilter : (state , action) => {
            const movieData = state.movies?.filter((el) => +el.id === +action.payload.id);
            state.detayData = movieData
         }
        }
  })

  export const { filterTitle ,detayFilter,handleClick} = dataSlice.actions

  export default dataSlice.reducer 