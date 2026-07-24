export type CheckpointAction="proceed"|"escalate"|"block";
export interface CheckpointConfig{name:string;confidenceThreshold:number;action:CheckpointAction;}
export interface CheckpointResult{checkpoint:string;passed:boolean;action:CheckpointAction;confidence:number;reason:string;}
export interface ApprovalRecord{checkpoint:string;approved:boolean;approvedBy?:string;timestamp:number;}