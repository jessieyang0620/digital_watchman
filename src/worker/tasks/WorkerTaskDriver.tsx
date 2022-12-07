import React, { useState } from 'react';
import { Question, WorkerData } from '../../data/types';
import questions from '../../data/questions';
import workerData from '../../data/workerData';
import Task from './Task';

export interface WorkerTaskDriverProps {
    onWorkerFlowComplete: () => void
}

function WorkerTaskDriver(props: WorkerTaskDriverProps) {
    const [qNumber, setQNumber] = useState(0);
    const currQuestion: Question = questions.questions[qNumber];

    const handleSave = (wd: WorkerData) => {
        workerData.push(wd);
        console.log(workerData);
        setQNumber(qNumber + 1);
    }

    if (qNumber === questions.questions.length - 1) {
        props.onWorkerFlowComplete();
    }
    
    return (
        <Task question={currQuestion} saveMetaData={handleSave}></Task>
    )
}

export default WorkerTaskDriver;