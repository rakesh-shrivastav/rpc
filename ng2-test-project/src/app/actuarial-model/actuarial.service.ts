import { Injectable, Inject } from '@angular/core';
import { Http, ResponseOptions, Response } from '@angular/http';
import { API_URL } from '../config';
import { TypeOfExecution } from './TypeOfExecution.enum'
import { ActuarialModel, ActuarialResult } from './actuarial.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { MockBackend, MockConnection } from '@angular/http/testing';

@Injectable()
export class ActuarialService {

	result: ActuarialModel;

	constructor(private mockBackend: MockBackend, @Inject(API_URL) private apiUrl) {
		this.result = new ActuarialModel();
	}



	calculate(mainLimit: number,
		mainRetention: number,
		typeOfExecution: TypeOfExecution): Observable<ActuarialModel> {

		//do some dummy calculations here

		this.result.ExecutionType = typeOfExecution;
		this.result.MainLimit = mainLimit;
		this.result.MainRetention = mainRetention;
		this.result.FinalValue = (mainRetention / mainLimit) * 100;

		return Observable.of(this.result);

	}
}