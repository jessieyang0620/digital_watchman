import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import {IllegalActivities, Question, SusActivity, WorkerData} from '../../data/types';
import {useIdleTimer} from 'react-idle-timer';

export interface QuestionProps {
    question: Question;
    saveMetaData: (wd: WorkerData) => void;
}
function Task(props: QuestionProps) {
    const startTime = new Date();
    const selections: number[] = [];
    const susActivity: SusActivity[] = [];

    const [showAlert, setAlert] = useState(IllegalActivities.None);

    const onIdle = () => {
        setAlert(IllegalActivities.IdleTime);
        susActivity.push({
            tag: IllegalActivities.IdleTime,
            desc: "Has been idle for too long."
        })
    }

    const onActive = () => {
        console.log("active");
    }

    const {getTotalIdleTime, getTotalActiveTime} = useIdleTimer({
        timeout: 30000,
        onIdle,
        onActive
    })

    const handleSubmit = () => {
        if (selections.length <= 0) {
            setAlert(IllegalActivities.NoAnswerSelected);
            susActivity.push({
                tag: IllegalActivities.NoAnswerSelected,
                desc: "Attempted to submit question without selecting an answer."
            });
        } else {
            const endTime = new Date();
            let metadata: WorkerData = {
            questionID: props.question.id,
            selections: selections,
            timeStarted: startTime,
            timeEnded: endTime,
            idleTime: getTotalIdleTime(),
            activeTime: getTotalActiveTime(),
            susActivity: susActivity
            }
            const finalAns = selections[selections.length - 1];
            if(props.question.correctAnswer) {
                const isCorrect = (props.question.correctAnswer === finalAns);
                if (isCorrect && showAlert !== IllegalActivities.IncorrectAnswer) {
                    metadata.isCorrect = isCorrect;
                    console.log(metadata)
                    props.saveMetaData(metadata);
                    setAlert(IllegalActivities.None);
                } else {
                    setAlert(IllegalActivities.IncorrectAnswer);
                    susActivity.push({
                        tag: IllegalActivities.IncorrectAnswer,
                        desc: `Incorrect answer: selected ${finalAns} but the correct answer was ${props.question.correctAnswer}.`
                    })
                } 
            } else {
                console.log(metadata)
                props.saveMetaData(metadata);
            }
        }
    }
    
    return (
        <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
            <Form className="p-3 w-75">
            <Form.Label><h6>{props.question.prompt}</h6></Form.Label>
            {props.question.options.map((opt, i) => (
                <Form.Check 
                    key={`${props.question.id.toString()}-${i}`}
                    name={`queston ${props.question.id}`}
                    type={'radio'}
                    id={`${props.question.id.toString()}-${i}`}
                    label={opt}
                    onClick={() => {
                        // adds selection to list
                        selections.push(i);
                    }}
                />
            ))}
            <hr/>
            <div className="d-flex justify-content-end">
                <Button 
                    variant="primary"
                    onClick={handleSubmit}
                    >Submit
                </Button>
            </div>
        </Form>
        <SusActivityAlert 
            show={!(showAlert === IllegalActivities.None)}
            severity={generateSeverity(showAlert)}  
            message={generateWarningMessage(showAlert, susActivity.length)}
            onAcknowledge={() => setAlert(IllegalActivities.None)}
        />
        </div>
    );
}

function generateSeverity(warningType: IllegalActivities) {
    switch (warningType) {
        case IllegalActivities.None:
            return "";
        case IllegalActivities.IllegalClick:
            return "warning";
        case IllegalActivities.NoAnswerSelected:
            return "danger";
        case IllegalActivities.IdleTime:
            return "warning"
        case IllegalActivities.IncorrectAnswer:
            return "danger";
    }
    return "";
}

function generateWarningMessage(warningType: IllegalActivities, warningCount: number) {
    var msg: string = "";
    
    switch (warningType) {
        case IllegalActivities.None:
            return msg;
        case IllegalActivities.IllegalClick:
            msg += "Warning: this page is locked, please do not try to access it. Focus on the task at hand.";
            break;
        case IllegalActivities.NoAnswerSelected:
            msg += "Error: no answer selected. Please be more careful. Remember the importance of your work.";
            break;
        case IllegalActivities.IdleTime:
            msg += "Warning: you seem to be idling on this page. Please focus on the task at hand.";
            break;
        case IllegalActivities.IncorrectAnswer:
            msg += "Warning: incorrect answer. Please try again.";
            break;
    }
    if(warningCount > 2) {
        msg += " This is your third and final warning before we alert your supervisor.";
    }
    return msg;
}

interface SusActivityAlertProps {
    show: boolean,
    severity: string,
    message: string,
    onAcknowledge: () => void
}

function SusActivityAlert(props: SusActivityAlertProps) {
    return (
        <Alert show={props.show} variant={props.severity} className="w-75">   
        {props.message}
        <hr/>
        <div className="d-flex justify-content-end">
            <Button onClick={props.onAcknowledge} variant={`outline-${props.severity}`}>
            Acknowledge
            </Button>
        </div>
        </Alert>
    )
    }
export default Task;