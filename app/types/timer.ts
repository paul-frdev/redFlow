export enum EnumStatus {
  REST = "rest",
  WORK = "hard work",
  COMPLETED = "well done",
}

export interface ITimerOptions {
  isAction: boolean;
  status: EnumStatus;
  currentSession: number;
  currentBreak: number;
  key: number;
}
