import React from 'react';
import {Button, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";


const PdfForm=()=>
{
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = 'http://localhost:8000/students'
        axios.post(url, data).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    };
    return (
        <>
        <h3>Fill your pdf</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" {...register('name')} placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMajor">
                            <Form.Label>Major</Form.Label>
                            <Form.Control type="text" {...register('major')} placeholder="Enter Major" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text"  {...register('state')} placeholder="Enter State" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" {...register('city')} placeholder="Enter City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="number" {...register('zip')} placeholder="Enter Zip" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address1</Form.Label>
                            <Form.Control  {...register('address1')} as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address2</Form.Label>
                            <Form.Control as="textarea" {...register('address2')} rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
        </>
    )
}

export default PdfForm;