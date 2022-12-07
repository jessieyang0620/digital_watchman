import React, { useState } from 'react';
import WorkerLoginMessage from './WorkerLoginMessage';
import Permissions from './Permissions';
import WorkerInstructions from './WorkerInstructions';
import WorkerTaskDriver from './tasks/WorkerTaskDriver';

enum WorkerViews {
    LoginMessage, Permissions, Instructions, Tasks
}

export interface WorkerFlowProps {
    clickedNavLink: boolean,
    onWorkerFlowComplete: () => void
}

function WorkerFlow(props: WorkerFlowProps) {
    const [view, setView] = useState(WorkerViews.LoginMessage);

    switch (view) {
        case WorkerViews.LoginMessage:
            return <WorkerLoginMessage firstName='John' nextPage={() => setView(WorkerViews.Permissions)}/>
        case WorkerViews.Permissions:
            return <Permissions nextPage={() => setView(WorkerViews.Instructions)} />
        case WorkerViews.Instructions:
            return <WorkerInstructions nextPage={() => setView(WorkerViews.Tasks)} />
        case WorkerViews.Tasks:
            return <WorkerTaskDriver onWorkerFlowComplete={props.onWorkerFlowComplete}/>
    }
}

export default WorkerFlow;