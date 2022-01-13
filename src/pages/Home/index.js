import Myjumbtron from '../../components/Jumbtron'
import React,{useEffect,useState, useContext}from 'react'
import MealsContainer from '../../components/MealsContainer'
import axios from 'axios'
import { myContext } from '../../constext'

function Home() {
const {meals,setMeals}=useContext(myContext)
    useEffect(() => {
     axios
     .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`,)
     .then(({data})=>setMeals(data.meals))
     .catch((error)=>console.log(error))

    }, []);

    return (
        <div>
             <Myjumbtron/>
             <MealsContainer meals={meals}/>
           
        </div>
    )
}

export default Home


// const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const meals = await response.json();
//     setMaels(meals);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// fetchData();