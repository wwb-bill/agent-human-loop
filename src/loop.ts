import type{CheckpointConfig,CheckpointResult,ApprovalRecord}from"./types.js";
export class HumanLoop{private checkpoints:CheckpointConfig[]=[];private approvals:ApprovalRecord[]=[];
 addCheckpoint(c:CheckpointConfig){this.checkpoints.push(c);}
 check(name:string,confidence:number):CheckpointResult{const cp=this.checkpoints.find(c=>c.name===name);if(!cp)return{checkpoint:name,passed:true,action:"proceed",confidence,reason:"No checkpoint - pass through"};if(confidence>=cp.confidenceThreshold)return{checkpoint:name,passed:true,action:"proceed",confidence,reason:`${confidence} >= ${cp.confidenceThreshold}`};return{checkpoint:name,passed:false,action:cp.action,confidence,reason:`${confidence} < ${cp.confidenceThreshold} - ${cp.action}`};}
 approve(cp:string,by="human"){this.approvals.push({checkpoint:cp,approved:true,approvedBy:by,timestamp:Date.now()});}
 reject(cp:string,by="human"){this.approvals.push({checkpoint:cp,approved:false,approvedBy:by,timestamp:Date.now()});}
 auditLog():ApprovalRecord[]{return[...this.approvals];}
 checkpointCount():number{return this.checkpoints.length;}}