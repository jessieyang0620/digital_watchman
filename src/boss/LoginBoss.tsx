import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { WelcomeFlowProps } from '../welcome/WelcomeFlow';


// Theoretically this should be the same component as welcome but unfortunately i set this up in a stupid way so... this is it
function LoginBoss(props: WelcomeFlowProps) {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ready, setReady] = useState(false);

    return (
        <>
        <div className="d-flex vh-100 align-items-center justify-content-center">
            <div className="rounded bg-light p-3">
                <h1>Login</h1>
                <LoginWidget username={username} password={password} prefill={() => setShowModal(true)} />
                <Button variant="primary" onClick={() => {
                    if (ready) {
                        props.onClick();
                    }
                }}>Login</Button>
            </div>
        </div>

        <Modal
            show = {showModal}
            onHide = {() => setShowModal(false)}
            backdrop = "static"
            keyboard = {false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Sign in as:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Now that you've completed the Employee View walkthough, you're welcome to view the <b>Employer View</b>! <br/>
                Click below to see the data collected on you.
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="warning"
                    onClick = {() => {
                        setShowModal(false);
                        setUsername("befjezos@scamazon.com");
                        setPassword("***********");
                        setReady(true);
                    }}
                    >Employer</Button>
                <Button 
                    variant="light" 
                    onClick = {() => {
                    // todo: make a toast
                    // tldr don't click this one
                    alert("You did this already :)");
                }}>Employee</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

interface LoginWidgetProps {
    username: string
    password: string
    prefill: () => void
}
function LoginWidget(props: LoginWidgetProps) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" onClick = {props.prefill}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={props.username} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" onClick = {props.prefill}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder={props.password} />
            </Form.Group>
        </Form>
    );
}
export default LoginBoss;