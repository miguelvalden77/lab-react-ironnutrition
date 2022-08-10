import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({addFoodFunction}) {

    const [data, setData] = useState({name: "", image: "", calories: 0, servings: 0})
    const {name, image, calories, servings} = data

    const handleData = evt => setData({...data, [evt.target.name]: evt.target.value})
    const handleSubmit= evt =>{
        evt.preventDefault()
        const newFood = {name, image, calories, servings}
        addFoodFunction(newFood)
    }
    
  return (
      <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" name='name' onChange={handleData} />

      <label>Image</label>
      <Input type="text" name='image' value={image} onChange={handleData}/>

      <label>Calories</label>
      <Input type="number" name='calories' value={calories} onChange={handleData}/>

      <label>Servings</label>
      <Input type="number" name='servings' value={servings} onChange={handleData}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;

