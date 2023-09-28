import React, {useState, useEffect} from "react";
import {Button, Form, FormControl} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom'; 

function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        // const ids = uuid();
        // let uniqueId = ids.slice(0,8);

        // let a = name,
        // b = age;
        
        // Employees.push({id : uniqueId, Name : a, Age : b});

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setName(localStorage.getItem('Age'));
        setName(localStorage.getItem('Id'));
    },[])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Button onClick={(e) => handleSubmit(e)}>Update</Button>
        </Form>
        </div>
    )

}

export default Edit;