import React from 'react';
import { Stack, Button } from 'react-bootstrap';


export interface WorkerInstructionsProps {
    nextPage: () => void
}

function WorkerInstructions(props: WorkerInstructionsProps) {
    return (
        <Stack gap={3} className="d-flex vh-100 align-items-center justify-content-center">
            <p>
            Your task today is to answer a series of questions to the best of your ability. <br/>
            Some of the questions have correct answers, and others will solely be asking your opinion. <br/>

            Your answers will be used to help train our cutting edge sentiment analysis and text generation AI, so take this task seriously. <br/>
            <b>You</b> are playing a crucial role in the advancement of technology. <br/>
            In addition to your answers, we will also collect data on your speed, attention, and correctness (when applicable). <br/>
            Your results <b>may</b> or <b>may not</b> affect your future employment at Scamazon.
            Todo fill this in more
            </p>
            <Button variant="primary" onClick={props.nextPage}>Begin</Button>
        </Stack>
    );
}

export default WorkerInstructions;