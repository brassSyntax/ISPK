import {Component, OnInit} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("user_78zg5hYGVgKTCdCuuh4pC");
@Component({
  selector: 'app-dialog-contact-support',
  templateUrl: './dialog-contact-support.component.html',
  styleUrls: ['./dialog-contact-support.component.css']
})
export class DialogContactSupportComponent implements OnInit {
  toName:String = '';
  message:String = '';
  constructor() {}

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.send("service_df0u0vf","template_rq5vgha",{
      from_name: this.toName,
      to_name: "Leonas ir Ricardas",
      message: this.message,
    })
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


}
