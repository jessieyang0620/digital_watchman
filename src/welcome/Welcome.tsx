import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { WelcomeFlowProps } from './WelcomeFlow';

function Welcome(props: WelcomeFlowProps) {
    return (
        <Stack gap={3} className="d-flex vh-100 align-items-center justify-content-center">
            <h1>Digital_Watchman</h1>
            <p>Encouraging worker productivity.</p>
            <Button variant="warning" onClick={props.onClick}>Demo</Button>
            <Button variant="light">Purchase</Button>
        </Stack>
    );
}

export default Welcome;