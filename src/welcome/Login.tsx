import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { WelcomeFlowProps } from './WelcomeFlow';

function Login(props: WelcomeFlowProps) {
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
                We've prefilled two profiles for you to use for the demo. We strongly recommend signing in as the <b>Employee</b> first.
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="light" 
                    onClick = {() => {
                    // todo: make a toast
                    // tldr don't click this one
                    alert("Seriously, don't.")
                }}>Employer</Button>
                <Button 
                    variant="warning"
                    onClick = {() => {
                        setShowModal(false);
                        setUsername("johndoe1@scamazon.com");
                        setPassword("***********");
                        setReady(true);
                    }}
                >Employee</Button>
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
export default Login;