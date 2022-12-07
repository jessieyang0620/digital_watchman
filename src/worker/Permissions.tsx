import React, { useState } from 'react';
import { Stack, Button, Alert } from 'react-bootstrap';

export interface PermissionsProps {
    nextPage: () => void
}

function Permissions(props: PermissionsProps) {
    const [micAccess, setMicAccess] = useState(false);
    const [camAccess, setCamAccess] = useState(false);
    const [screenRecAccess, setScreenRecAccess] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const handleMicAccess = () => {
        // todo
        setMicAccess(true);
    }
    const handleCamAccess = () => {
        // todo
        setCamAccess(true);
    }
    const handleScreenRecAccess = () => {
        // todo
        setScreenRecAccess(true);
    }

    const handleBegin = () => {
        if (!(micAccess && camAccess && screenRecAccess)) {
            setShowWarning(true);
        } else {
            props.nextPage();
        }
    }
    return (
        <Stack gap={3} className="d-flex vh-100 align-items-center justify-content-center">
            <p>To begin, you need to give us access to a few things.</p>
            <Button variant={(micAccess) ? "secondary" : "primary"} disabled={micAccess} onClick={handleMicAccess}>Microphone Access</Button>
            <Button variant={(camAccess) ? "secondary" : "primary"} disabled={camAccess} onClick={handleCamAccess}>Camera Access</Button>
            <Button variant={(screenRecAccess) ? "secondary" : "primary"} disabled={screenRecAccess} onClick={handleScreenRecAccess}>Screen Recording Access</Button>

            <Button variant="primary" onClick={handleBegin}>Begin</Button>

            <Alert show={showWarning} variant="warning">
                <Alert.Heading>Incomplete Permissions</Alert.Heading>
                <p>
                    Sorry, you may not continue until you accept all of the permissions listed. <br/>
                    This is to help us monitor your work. We want to help you do the best job possible. 
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShowWarning(false)} variant="outline-warning">
                    Acknowledge
                    </Button>
                </div>
            </Alert>
        </Stack>
    );
}

export default Permissions;