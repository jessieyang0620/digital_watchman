import React, { useState } from 'react';
import { Stack, Button, Alert } from 'react-bootstrap';

export interface WorkerLoginMessageProps {
    firstName: string,
    nextPage: () => void
}

function WorkerLoginMessage(props: WorkerLoginMessageProps) {
    const nineAM = new Date();
    nineAM.setHours(9, 0, 0);
    const now = new Date();
    const difference = now.getTime() - nineAM.getTime();
    // console.log("9 am was ", nineAM, "now it is ", now);
    const [showWarning, setShowWarning] = useState(difference > 0);
    const [showBeginTasksMessage, setShowBeginTasksMessage] = useState(!(difference > 0));
    // console.log(showWarning);
    
    let beginTasksMessage = <div></div>
    if (difference > 0) {
        beginTasksMessage = 
        <p>
            Thank you for acknowledging. <br/>
            <b><i>We understand that things happen.</i></b> <br />
            If you find that your work schedule no longer works for you, <b>please reach out to your manager to discuss potential changes.</b>
        </p>
    } else {
        beginTasksMessage = <p>Click below to begin your tasks for today.</p>
    }
    const handleWarningAcknowledge = () => {
        setShowWarning(false);
        setShowBeginTasksMessage(true);
    }

    const handleBeginTasks = () => {
        props.nextPage();
    }

    return (
        <Stack gap={3} className="d-flex vh-100 align-items-center justify-content-center">
            <p>
            Welcome back, <b>{props.firstName}</b> <br />
            You logged in at <b>{now.toLocaleTimeString('en-US')}</b>
            </p>
            
            <Alert show={showWarning} variant="warning">
                <Alert.Heading>Friendly Reminder!</Alert.Heading>
                <p>
                    You are required to be logged in and active by <b>{nineAM.toLocaleTimeString('en-US')}</b> every day you are scheduled to work. <br />
                    Our records show that you have been <b>late (2) times</b> in the past month. <br />
                    <b>If you are late (1) more time this month, you will be at risk for termination.</b>
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={handleWarningAcknowledge} variant="outline-warning">
                    Acknowledge
                    </Button>
                </div>
            </Alert>

            <Alert show={showBeginTasksMessage} variant="secondary">   
                {beginTasksMessage}
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={handleBeginTasks} variant="outline-secondary">
                    Begin Tasks
                    </Button>
                </div>
            </Alert>
        </Stack>
    )
}
export default WorkerLoginMessage;