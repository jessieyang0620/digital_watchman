// question ds for worker tasks
export type Question = {
    id: number; 
    prompt: string;
    options: string[];
    correctAnswer?: number;
    sources: string[];
}

export type Questions = {
    questions: Question[]
}

// recorded data on worker when answering questions
export type WorkerData = {
    questionID: number;
    isCorrect?: boolean;
    selections: number[];
    timeStarted: Date;
    timeEnded: Date;
    idleTime: number; // from idle time lib
    activeTime: number;
    susActivity: SusActivity[];
}

export interface SusActivity {
    tag: IllegalActivities;
    desc: string;
}

export enum IllegalActivities {
    IllegalClick = "Illegal Click", 
    IdleTime = "Idle Time",
    IncorrectAnswer = "Incorrect Answer", 
    NoAnswerSelected = "No Answer Selected", 
    None = "N/a"
}