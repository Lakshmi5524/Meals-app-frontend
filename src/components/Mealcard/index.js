import React from 'react'
import {Card}from 'react-bootstrap'
import MealModel from '../MealModel'

function MealCard({strMeal,strMealThumb, strInstructions}) {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <MealModel strMeal={strMeal} description={strInstructions}/>
          </Card.Body>
        </Card>
    </div>
    );
}

export default MealCard
