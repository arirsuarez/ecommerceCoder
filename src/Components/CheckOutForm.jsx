import React from 'react';
import { Form, Button } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

function CheckOutForm() {

    return (
      
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    No compartiremos tu mail con nadie mas.
          </Form.Text>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="nombre" placeholder="Nombre" />
                <Form.Label>Celular</Form.Label>
                <Form.Control type="numero" placeholder="Celular" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
        </Button>
        </Form>

    )
}

export default CheckOutForm;

