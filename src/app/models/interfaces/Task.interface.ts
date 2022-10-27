export enum Levels {
    "Info",
    "Urgent",
    "Blocking"
}

export interface ITask {
    title: string;
    description?: string;
    isCompleted: boolean;
    level: Levels;
}