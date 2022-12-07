import React from 'react';
import workerData from '../data/workerData';
import questions from '../data/questions';
import { Stack, Card } from 'react-bootstrap';
import { WorkerData } from '../data/types';
import ListGroup from 'react-bootstrap/ListGroup';

function EmployeeData() {
    return (
        <Stack gap={3} className="d-flex flex-column align-items-center justify-content-center">
            {workerData.map(wd => {
                return (
                <Card className="w-75">
                    <Card.Body>
                    <Card.Title>Question # {wd.questionID}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{questions.questions[wd.questionID - 1].prompt}</Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item><><b>Time Started: </b>{wd.timeStarted.toUTCString()}</></ListGroup.Item>
                        <ListGroup.Item><><b>Time Ended: </b>{wd.timeEnded.toUTCString()} <br/></></ListGroup.Item>
                        <ListGroup.Item><><b>Active Time: </b>{wd.activeTime.toString()} ms<br/></></ListGroup.Item>
                        <ListGroup.Item><><b>Idle Time: </b>{wd.idleTime.toString()} ms<br/></></ListGroup.Item>
                        <ListGroup.Item><><b>Options Considered: </b>{wd.selections.toString()} <br/></></ListGroup.Item>
                        <ListGroup.Item><><b>Suspicious Activity: </b><br/><SuspiciousActivityList wd={wd}/><br/></></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
              </Card>)
            })}
        </Stack>
    )
}

export interface SuspiciousActivityListProps {
    wd: WorkerData;
}
function SuspiciousActivityList(props: SuspiciousActivityListProps) {
    if (props.wd.susActivity.length === 0) {
        return <p><i>None Detected</i></p>
    } else {
        return (
            <p>
                {props.wd.susActivity.map(sa => <i><i><b>{sa.tag.toString()} </b>{sa.desc}</i><br/></i>)}
            </p>
        )
    }
}

export default EmployeeData;