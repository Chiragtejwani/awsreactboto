import {Form ,Button} from 'react-bootstrap'
import { useState } from 'react';
const CustomForm = (props) => {
    const [value, setValue] = useState('');
    function handleSubmit(e) 
    {
        e.preventDefault();
        const data = { name: value };
        console.log('submit');
        console.log(value);
        const baseURL = `http://127.0.0.1:5000/${props.service}/${props.action}`
    
        console.log(baseURL);
        fetch(baseURL , {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(res => console.log(res));
      }
    
    function handleValue(e) 
    {
        console.log("changed");
        setValue(e.target.value);
    }
    return (
        <>
        <h2>{props.action} {props.service} </h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.service} name</Form.Label>
            <Form.Control type="text" placeholder="Enter Container Name" onChange={handleValue} />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
        
            <Button variant="primary" type="submit">
            Submit
            </Button>
      </Form>
        </>
    );
}
 
export default CustomForm;