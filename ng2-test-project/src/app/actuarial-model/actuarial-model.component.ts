import { Component, OnInit } from '@angular/core';
import { ActuarialModel, ActuarialResult } from './actuarial.model'
import { ActuarialService } from './actuarial.service';
import { NgForm } from '@angular/forms';

import { TypeOfExecution } from './TypeOfExecution.enum';
@Component({
  selector: 'app-actuarial',
  templateUrl: './actuarial-model.component.html',
  styleUrls: ['./actuarial-model.component.css']
})
export class ActuarialModelComponent implements OnInit {

  private result: ActuarialModel[] = [];
  private enumString: TypeOfExecution;
  constructor(private service: ActuarialService) {

  }

  ngOnInit() {
  }

  public parseEnumString(value: string) {
    return value == "0" ? "Simple" : "Complex";
  }
  calculate(calcForm: NgForm) {


    if (calcForm && calcForm.valid) {
      const mainLimit = calcForm.form.value.mainLimit;
      const mainRetention = calcForm.form.value.mainRetention;
      const exposure = calcForm.form.value.typeofExposure;

      var result = this.service.calculate(mainLimit, mainRetention, exposure == "Simple" ? TypeOfExecution.Simple : TypeOfExecution.Complex)
        .subscribe(response => {
          response.ExecutionDate = new Date();
          this.result.push(response);
        });
    }
  }

}
