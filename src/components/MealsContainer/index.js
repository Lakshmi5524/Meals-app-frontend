import React from 'react'
import MealCard from '../Mealcard'
import './style.css'

function MealsContainer({meals}) {
    return (
        <div className='container'>
            {
                meals.map((meal)=>(
                    // <h1 key={meal.strMeal}>{meal.strMeal}</h1>
                    <MealCard key={meal.idMeal}{...meal}/>
                ))
            }
        </div>
    
    )
}

export default MealsContainer
