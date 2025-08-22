import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
imports: [Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  Text:string = "";
  Text2:string = "";
  Text3:string = "";
  clickReset(){
    if (this.Text !== "" || this.Text2 !== '' || this.Text3 !== '') {
      this.Text=''
      this.Text2=''
      this.Text3=''
    }
  }

}
