import { useState } from 'react';
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


/**
* Formspree and Vev example form.
* code from: https://formspree.io/forms/{yourFormID}/integration
* rewritten to functional component since its shorter & prettier.
*/
export function NewForm() {
const [status, setStatus] = useState<string>('');

    const submitForm = (ev: { preventDefault: () => void; target: any; }) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
    form.reset();
    setStatus("SUCCESS");
    } else {
    setStatus("ERROR");
    }
    };
    xhr.send(data);
    }

    return (
        
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );




    }