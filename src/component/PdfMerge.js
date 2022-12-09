import {useForm} from "react-hook-form";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import React from "react";

const PdfMerge = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = 'http://localhost:8000/merge'
        axios.post(url, data).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    };
    return (
        <>
            <h3>Merge PDF</h3>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" {...register('file1')} placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" {...register('file2')} placeholder="Enter Name" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
        </>
    )
}
export default PdfMerge;