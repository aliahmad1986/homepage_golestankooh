import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { finalize } from 'rxjs/operators';
import { LibRegisterPanelService } from './lib-register-panel.service';
import { LoadingBackdropService } from './loading-backdrop.service';
import { TEXTCONSTANTS } from './lib-register-panel.constants'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'lib-LibRegisterPanel',
  templateUrl: './lib-register-panel.component.html',
  styleUrls: ['lib-register-panel.component.scss']
})
export class LibRegisterPanelComponent {
  @Output() From_LibRegister_To_LibWizard = new EventEmitter<any>();
  textconstants = TEXTCONSTANTS;
  smsCanSend: boolean = false;
  registerIsComplate: boolean = false;
  codeCancheck: boolean = false;
  mobile: string = "";
  name: string = "";
  famil: string = "";
  validcode: string = "";
  validtext: string = "";
  hashdata: string = "";
  resend: boolean = false;
  personId: number = 0;
  getNameFamil: boolean = false;
  interval;
  time: number = 120;
  display: string = this.textconstants.REGISTERMOBILESENDCODE;
  constructor(
    private libRegisterPanelService: LibRegisterPanelService,
    private loadingBackdropService: LoadingBackdropService,
    private snackBar: MatSnackBar
  ) {

  }
  check() {
    this.From_LibRegister_To_LibWizard.emit(
      {
        mobile: this.mobile, name: this.name,
        famil: this.famil, personId: this.personId
      });
  }

  is6Digit(e: any) {
    const typedValue = e.keyCode;
    if (typedValue < 48 && typedValue > 57) {
      e.preventDefault();
      e.stopPropagation();
    }

    const typedNumber = parseInt(e.key);
    const currentVal = (e.target.value).toString() || '';
    const newVal = (currentVal + typedNumber.toString());
    if (newVal.length > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (newVal.length == 6) {

      this.codeCancheck = true;
      this.sendvalidcode(newVal);
    }

  }
  checkvalchange() {
    this.validcode = "";
    let Patern = new RegExp('(09)[0-9 ]{9}');

    if (this.mobile.length > 11) {
      this.mobile = "";
    }
    if (this.mobile.length == 11 && Patern.test(this.mobile.toString())) {

      this.smsCanSend = true;

    }
    else {
      this.smsCanSend = false;
    }
  }
  checklen(e: any) {
    const typedValue = e.keyCode;
    if (typedValue < 48 && typedValue > 57) {
      e.preventDefault();
      e.stopPropagation();
    }

    const typedNumber = parseInt(e.key);
    const currentVal = (e.target.value).toString() || '';
    const newVal = (currentVal + typedNumber.toString());
    let Patern = new RegExp('(09)[0-9 ]{9}');

    if (newVal.length > 11) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (newVal.length == 11 && Patern.test(newVal.toString())) {

      this.smsCanSend = true;

    }
    else {
      this.smsCanSend = false;

    }
  }
  CheckRequiredName() {
    if (this.mobile == "") {
      this.snackBar.open(this.textconstants.REGISTERMOBILEREQUIRED, 'باشه', { duration: 10000 });
      return false;
    }
    if (this.name == "") {
      this.snackBar.open(this.textconstants.REGISTERFORMNAMEREQUIRED, 'باشه', { duration: 10000 });

      return false;
    }
    if (this.famil == "") {
      this.snackBar.open(this.textconstants.REGISTERFORMFAMILREQUIRED, 'باشه', { duration: 10000 });

      return false;
    }
    return true;
  }
  CheckRequiredMobile() {
    if (this.mobile == "") {
      this.snackBar.open(this.textconstants.REGISTERMOBILEREQUIRED, 'باشه', { duration: 10000 });
      return false;
    }

    return true;
  }
  SubmitNameFamil() {
    if (this.CheckRequiredName()) {
      this.loadingBackdropService.show();
      let params = new Map<string, string>();
      params
        .set('name', this.name)
        .set('famil', this.famil)
        .set('mobile', this.mobile);
      this.libRegisterPanelService
        .postSubmit(params, "Api/Savenamefamil")
        .pipe(finalize(() => this.loadingBackdropService.hide()))
        .subscribe(
          (data) => {
            if (data.result.data.success) {
              if (data.result.data.personId > 0) {
                this.personId = data.result.data.personId;
                this.registerIsComplate = true;
                this.getNameFamil = false;
                this.check();
              } else {
                this.getNameFamil = true;
                this.registerIsComplate = false;
                this.snackBar.open(this.textconstants.REGISTER_NAMEFAMIL_ERROR, 'باشه', { duration: 10000 });

              }
            }
            else {

              this.snackBar.open(this.textconstants.REGISTERMOBILEUNVALID, 'باشه', { duration: 10000 });


            }
          },
          error => { },
        );
    }
  }
  goNextStep(){
    this.sendvalidcode(this.validcode);
  }
  sendvalidcode(val: string) {

    if (this.CheckRequiredMobile()) {
      this.loadingBackdropService.show();
      let params = new Map<string, string>();
      params.set('code', val)
        .set('hashdata', this.hashdata)
        .set('registeredMobile', this.mobile);
      this.libRegisterPanelService
        .postSubmit(params, "Api/Checkcodesms")
        .pipe(finalize(() => this.loadingBackdropService.hide()))
        .subscribe(
          (data) => {
            this.resend = !data.result.data.success as boolean;
            if (data.result.data.success) {
              if (data.result.data.personId > 0) {
                this.personId = data.result.data.personId;
                this.name = data.result.data.name;
                this.famil = data.result.data.famil;
                this.registerIsComplate = true;
                this.getNameFamil = false;
                this.check();
              } else {
                this.getNameFamil = true;
                this.smsCanSend=true;
                this.registerIsComplate = false;
              }
            }
            else {
              const valicodeField = document.getElementById('validcodeField');
              this.snackBar.open(this.textconstants.REGISTERMOBILEUNVALID, 'باشه', { duration: 10000 });
              valicodeField?.classList.add('mat-form-field-danger');
            }
          },
          error => { },
        );
    }
  }
  starttimer() {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        this.smsCanSend=false;
        this.display = this.time.toString() + " ثانیه ";
      }
      else {
        this.display = this.textconstants.REGISTERMOBILERESENDCODE;
        clearInterval(this.interval);
        this.smsCanSend=true;
      }
    }, 1000);
  }
  sendSms() {

    if (this.smsCanSend && this.CheckRequiredMobile()) {      
      let params = new Map<string, string>();
      params.set("mobile", this.mobile);

      this.loadingBackdropService.show();
      this.libRegisterPanelService
        .postSubmit(params, "Api/Sendsms")
        .pipe(finalize(() => this.loadingBackdropService.hide()))
        .subscribe(
          (data) => {
            if (data.result.data.success as boolean) {
              this.hashdata = data.result.data.result as string;
              this.codeCancheck = true;
              this.resend = false;
              this.starttimer();
            } else {
              this.codeCancheck = false;;
            }
          },
          error => { },
        );
    }
  }


}
