import Search from './components/Search';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFood';
//import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import foods from "./foods.json"

function App() {

  const [food, setFood] = useState(foods)
  const [searchQuery, setSearchQuery] = useState("")

  const addFood = newFood =>setFood([newFood, ...food])
  const showSearch = research => setSearchQuery(research.search)
  const borrar = name =>{
    const deleteArr = food.filter(e=> e.name !== name)
    setFood(deleteArr)
  }
  
  return (
    <div className="App">
      <h1>Food List</h1>
      <Search searchFunction={showSearch}/>
      <AddFoodForm addFoodFunction={addFood}/>
      <main style={{display: "flex", flexWrap: "wrap"}}>
      {
        food.filter(e=> e.name.includes(searchQuery))
        .map((e, index)=>{
            return <FoodBox borrarFunc={borrar} key={e + index} calories={e.calories} servings={e.servings} name={e.name} images={e.image} />
          })
      // food.map((e, index)=>{
      //   return <FoodBox key={e + index} calories={e.calories} servings={e.servings} name={e.name} images={e.image} />
      // })
      }
      </main>

    </div>
  );
}

export default App;
