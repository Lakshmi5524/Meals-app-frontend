import {createContext,useState}from 'react'
export const myContext=createContext();
function Appcontext({children}){
    const [meals,setMeals]=useState([])
return(
<myContext.Provider value={{meals,setMeals}}>{children}</myContext.Provider>
)

    
}
export default Appcontext