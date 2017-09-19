
import { TestBed, async, inject } from '@angular/core/testing';
import {
	HttpModule,
	Http,
	Response,
	ResponseOptions,
	XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ActuarialService } from './actuarial.service';
import { ActuarialModel, ActuarialResult } from './actuarial.model';
import { TypeOfExecution } from './TypeOfExecution.enum'
import { API_URL } from '../config';

describe('Actuarial Service: Calculation', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: API_URL, useValue: 'http://localhost:3000' },
				ActuarialService,
				{ provide: XHRBackend, useClass: MockBackend },
				MockBackend
			]
		});
	});

	it('should create a service', inject([ActuarialService], (service: ActuarialService) => {
		expect(service).toBeTruthy();
	}));

	it('should return a Actuarial model with final Value',
		inject([ActuarialService, XHRBackend], (service, mockBackend) => {

			const mockResponse = new ActuarialModel();
			mockResponse.MainLimit = 2000000;
			mockResponse.MainRetention = 1000000;
			mockResponse.ExecutionType = TypeOfExecution.Complex;
			mockResponse.FinalValue = 50;

			mockBackend.connections.subscribe((connection) => {
				connection.mockRespond(new Response(new ResponseOptions({
					body: JSON.stringify(mockResponse)
				})));
			});

			service.calculate(mockResponse.MainLimit, mockResponse.MainRetention, mockResponse.ExecutionType)
				.subscribe(response => {
					expect(response.FinalValue).toEqual(50);
				});

		}));
});