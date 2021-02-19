import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SendMailService } from '../api/send-mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private sendMailSrv:SendMailService,private fb:FormBuilder) { }
  public sendMailForm:any;
  public showAlert:boolean = false;
  ngOnInit(): void {
    this.sendMailForm = this.fb.group({
      name:[''],
      email:[''],
      message:['']
    })
  }

  sendMailData(mailInfo){
    this.sendMailSrv.sendMail(mailInfo).subscribe(res=>{
      if(res) {
        alert('Successfully Sent the mail!!!');
        this.sendMailForm.reset();
      }
    })
  }

}
