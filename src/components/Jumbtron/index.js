import React,{useState,useContext} from 'react'
import './style.css'
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import {myContext} from '../../constext'
import axios from 'axios'



function Myjumbtron() {

const [searchInput,setsearchInput]=useState('')
const {setMeals}=useContext(myContext)
  function handleSecrch(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
.then(({data})=>setMeals(data.meals))


  }
  
    return (
      <div className='my-jumbtron'>
        <h1>Welcome</h1>
        <h2>You can Search favorite Food</h2>
        <div className='button-input'>
        <InputGroup className="mb-3 " >
          <FormControl
            placeholder="Search for a Meals "
            aria-label="Meal Search input"
            aria-describedby="meal-serch-button"
            value={searchInput}
            onChange={(e)=>setsearchInput(e.target.value)}
          />
          <Button 
          variant="danger" 
          id="meal-serch-button" 
          onClick={handleSecrch}
          >
            Button
          </Button>
        </InputGroup>
        </div>
      </div>
    );
}

export default Myjumbtron
