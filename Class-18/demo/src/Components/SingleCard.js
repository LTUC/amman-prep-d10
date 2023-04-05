import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalCard from "./ModalCard";
import {useState} from 'react';

export default function SingleCard(props) {
  // const recipeDetails = props.recipe;
  // console.log(555,recipeDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.recipe.image} />
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Card.Text>{props.recipe.time}</Card.Text>
          <Button variant="primary" onClick={handleShow}>show details</Button>
        </Card.Body>
      </Card>

      <ModalCard show={show}  handleClose={handleClose} recipeData = {props.recipe}/>
    </>
  );
}
