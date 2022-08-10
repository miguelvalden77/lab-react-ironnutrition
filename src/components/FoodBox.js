// To start using the pre-made Ant Design components we must first import them:
import { Card, Col, Button } from 'antd';

const FoodBox = ({name, calories, images, servings, borrarFunc})=>{
  
  const handleBorrar = () =>{
    borrarFunc(name)
  }
  
    return (
        <Col>
          <Card
            title={name}
            style={{ width: 230, height: 300, margin: 10}}
          >
            <img src={images} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
              <b>Total Calories: {calories * servings} </b> kcal
            </p>
            <Button onClick={handleBorrar} type="primary"> Delete </Button>
          </Card>
        </Col>
      );
}

export default FoodBox