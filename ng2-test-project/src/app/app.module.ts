import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ActuarialModelComponent } from './actuarial-model/actuarial-model.component';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ActuarialService } from './actuarial-model/actuarial.service';
import { ActuarialModel, ActuarialResult } from './actuarial-model/actuarial.model';
import { TypeOfExecution } from './actuarial-model/TypeOfExecution.enum'
import { API_URL } from './config';


@NgModule({
  declarations: [
    AppComponent,
    ActuarialModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000' },
    ActuarialModel,
    ActuarialResult,
    ActuarialService,
    MockBackend,
    { provide: XHRBackend, useClass: MockBackend },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
