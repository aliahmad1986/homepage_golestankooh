
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import {  finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { LoadingBackdropService } from './loading-backdrop.service';

import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { TEXTCONSTANTS } from './lib-wizard-panel.constants';
import { LibWizardPanelService } from './lib-wizard-panel.service';
import { Bill, ChoicedCalender, Register,GatewayTransporter,TransportType } from './lib-wizard-panel-bill.model';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'lib-LibWizardPanel',
  templateUrl: './lib-wizard-panel.component.html',
  styleUrls: ['./lib-wizard-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibWizardPanelComponent {
  @ViewChild('stepper') private myStepper?: MatStepper;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  textconst = TEXTCONSTANTS;
  title = 'GolestankoohSiteReservationWizardPanel';
  @Input() RentItemID: number = 0;
  @Input() Capacity: number = 0;
  @Input() personId: number = 0;
  @Input() TypeReserve2: number = 0;
  @Input() IncomeReasonID: number = 0;
  @Output() setDateToParent = new EventEmitter<any>();
  isRegistered: number = 0;
  goToRegisterLibrary: boolean = false;
  mobile: string = "";
  name: string = "";
  famil: string = "";
  allPrice: number = 0;
  personPrice: number = 0;
  exteraPerson: number = 0;
  kidPrices: number = 0;
  kidCount: number = 0;
  exteraPersonPrice: number = 0;
  countNight: number = 0;
  countPerson: number = 0;
  choicedCalender?: ChoicedCalender;
  bill: Bill = {
    countperson: 0,
    countNight: 0,
    allPrice: 0,
    personPrice: 0,
    exteraPerson: 0,
    kidPrices: 0,
    kidCount: 0,
    exteraPersonPrice: 0,
    choicedCalender: { startDate: '', endDate: '', miladiStartDate: '', miladiEndDate: '', days: [], },
    sumeriPersonPrice:{}
  };
  ReserveID: number = 0;
  DocNo: number = 0;
  ToalPrice: number = 0;
  sumeriPersonPrice: any = {};

  constructor(
    private loadingBackdropService: LoadingBackdropService,
    private libWizardPanelService: LibWizardPanelService,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar
  ) {
    // 
    
  }
  CheckRequired() {
    if (this.mobile == "") {
      this.snackBar.open(this.textconst.REGISTERMOBILEREQUIRED, 'باشه', { duration: 10000 });
      return false;
    }
    if (this.name == "") {
      this.snackBar.open(this.textconst.REGISTERFORMNAMEREQUIRED, 'باشه', { duration: 10000 });

      return false;
    }
    if (this.famil == "") {
      this.snackBar.open(this.textconst.REGISTERFORMFAMILREQUIRED, 'باشه', { duration: 10000 });

      return false;
    }
    return true;
  }
  lockDate(){
    this.loadingBackdropService.show();
    let params=new Map<string,string>();
    params.set('bill',JSON.stringify(this.bill))
    .set('rentItemID',this.RentItemID.toString()); 
    this.libWizardPanelService
      .postSubmit(params,"Api/Setlock")
      .pipe(finalize(() => this.loadingBackdropService.hide()))
      .subscribe(
        (data) => {
          if (data.result.success) {
            this.goNextStep();            
          }
          else {
            this.snackBar.open(this.textconst.NOLOCKRENTITEM, 'باشه', { duration: 10000 });            
          }

        },
        error => { },
      );
  }

  goNextStep() {
    if (this.personId > 0) {
      this.loadingBackdropService.show();
      let params=new Map<string,string>();
      params.set('personId',this.personId.toString());      
      this.libWizardPanelService
        .postSubmit(params,"Api/Getnamefamil")
        .pipe(finalize(() => this.loadingBackdropService.hide()))
        .subscribe(
          (data) => {
            if (data.result.data.success) {
              this.name = data.result.data.person.name;
              this.famil = data.result.data.person.famil;
              this.mobile = data.result.data.person.mobile;
              this.myStepper?.next();
            }
            else {
              this.snackBar.open(this.textconst.NOTFINDNAMEFAMIL, 'باشه', { duration: 10000 });
              this.personId = 0;
            }

          },
          error => { },
        );

    } else {
      this.myStepper?.next();
    }

  }
  reset(){
    this.myStepper?.reset();
  }
  getDataFromRegisterToWizard(register: Register) {
    this.mobile = register.mobile;
    this.name = register.name;
    this.famil = register.famil;
    this.personId = register.personId;
    this.goToRegisterLibrary = true;
    this.myStepper?.next();
  }
  getDataFromReservToWizard(bill: Bill) {
    this.bill = bill;
    this.countNight = bill.countNight;
    this.countPerson = bill.countperson;
    this.allPrice = bill.allPrice;
    this.personPrice = bill.personPrice;
    this.exteraPerson = bill.exteraPerson;
    this.kidPrices = bill.kidPrices;
    this.kidCount = bill.kidCount;
    this.exteraPersonPrice = bill.exteraPersonPrice;
    this.choicedCalender = bill.choicedCalender;
    this.sumeriPersonPrice = bill.sumeriPersonPrice;
  }
  parseInt(num: any) {
    return parseInt(num);
  }
  mult(num1: any, num2: any) {
    return parseInt(num1) * parseInt(num2);
  }
  // register() {
  //   this.loadingBackdropService.show();
  //   this.libWizardPanelService
  //     .submit({
  //       RentItemID: this.RentItemID,
  //       TypeReserve2: this.TypeReserve2,
  //       IncomeReasonID: this.IncomeReasonID,
  //       personId: this.personId,
  //       bill: this.bill
  //     })
  //     .pipe(finalize(() => this.loadingBackdropService.hide()))
  //     .subscribe(
  //       (data) => {
  //         if (data.success) {
  //           this.isRegistered = 1;
  //           this.DocNo = data.data.DocNo;
  //           this.ReserveID = data.data.ReserveID;
  //           this.ToalPrice = data.data.ToalPrice;
  //         }
  //         else {
  //           this.isRegistered = -1;
  //         }

  //       },
  //       error => { },
  //     );

  // }
  pay() {
    this.loadingBackdropService.show();
    let params=new Map<string,any>();
    params
    .set('bill',JSON.stringify(this.bill))
    .set('personId',this.personId)
    .set('RentItemID',this.RentItemID)
    .set('TypeReserve2',this.TypeReserve2)
    .set('IncomeReasonID',this.IncomeReasonID);
    this.libWizardPanelService
      .postSubmit(params,"Api/Payreservation")
      .pipe(finalize(() => this.loadingBackdropService.hide()))
      .subscribe(
        (data) => {
          if (data.result.data.result.isSucceed) {         
      
            this.transportToGateway(data.result.data.result.transporter);
          }
          else {
            this.isRegistered = -1;
          }

        },
        error => { },
      );

  }
  transportToGateway(transporter: GatewayTransporter) {
    if (transporter.type === TransportType.Redirect) {
      // Transporting with Redirect
      window.location.href = transporter.url;
    } else {
      // Transporting with Form
      const form = document.createElement('form');
      form.setAttribute('id', 'myForm');
      form.setAttribute('method', 'post');
      form.setAttribute('action', transporter.url);

      transporter.form.forEach(item => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', item.key);
        input.setAttribute('value', item.value);
        form.appendChild(input);
      });
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', 'GetMethod');
      input.setAttribute('value','true');
      form.appendChild(input);
      document.getElementsByTagName('body')[0].appendChild(form);
      (document.getElementById('myForm')as HTMLFormElement).submit();
    }
  }



  complate() {
    this.setDateToParent.emit({ personId: this.personId, DocNo: this.DocNo, ReserveID: this.ReserveID, ToalPrice: this.ToalPrice });

  }

}
