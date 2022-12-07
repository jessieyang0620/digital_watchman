import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { WelcomeFlowProps } from './WelcomeFlow';

function WelcomeMessage(props: WelcomeFlowProps) {
    return (
        <Stack gap={3} className="d-flex vh-100 align-items-center justify-content-center">
            <p>
            Welcome to <b>Digital_Watchman.</b> <br />
            The world's most sophisticated worker surveillance software.<br />
            Optimize your employee's productivity by making sure they don't do <b>anything they shouldn't.</b><br />
            In order to give you the full range of our product, we have provided a simulation of both the <b>Employee View</b> and the <b>Employer View.</b><br />
            We recommend completing the <b>Employee View</b> before the <b>Employer View</b> in order to see the full range of our monitoring services.<br />
            Click below to begin the simulation.
            </p>
            <Button variant="warning" onClick={props.onClick}>Begin</Button>
        </Stack>
    );
}

export default WelcomeMessage;