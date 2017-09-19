import { TypeOfExecution } from './TypeOfExecution.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class ActuarialModel {
	MainLimit: number;
	MainRetention: number;
	ExecutionType: TypeOfExecution;
	FinalValue: number;
	ExecutionDate: Date
}

@Injectable()
export class ActuarialResult {
	Result: ActuarialModel[] = [];
}