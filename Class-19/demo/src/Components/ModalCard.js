import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useRef } from 'react';

export default function ModalCard(props) {
  const commentRef = useRef();

  function submitHandler(e){
    e.preventDefault();
    let userComment = commentRef.current.value;

    // console.log("user comment is : ",userComment);

    let newRecipe={...props.recipeData, userComment}
    console.log(newRecipe);

    props.commentHandler(newRecipe,newRecipe.id);
  }

 async function addToFavHandler(e,recipe){
  e.preventDefault();

  let url =`${process.env.REACT_APP_SERVER_URL}/addFavRecipe`;
  
  let data={
    title: props.recipeData.title,
    readyInMinutes: props.recipeData.readyInMinutes,
    summary : props.recipeData.summary,
    sourceUrl : props.recipeData.image,
    comment : props.recipeData.comment

  }
  const response = await fetch (url,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const receivedData = await response.json();
  console.log(1111,receivedData)

  if (response.status ===201){
    alert("successfully added to database")
  }


}





  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.recipeData.title}</Modal.Title>
      </Modal.Header>
      <img src={props.recipeData.image} alt={props.recipeData.title} />
      <Modal.Body>
        {props.recipeData.summary.substring(0,100)}
        <br/>
        <br/>
        {props.recipeData.comment? props.recipeData.comment: "No comment Added "}
        <br/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control  ref={commentRef} type="text" placeholder="Enter your comment " />
            <Form.Text className="text-muted">enter your comment !!</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
            Submit
          </Button>

          <Button variant="primary" type="submit" onClick={(e)=>addToFavHandler(e)}>
            add to fav
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
  
      </Modal.Footer>
    </Modal>
  );
}
