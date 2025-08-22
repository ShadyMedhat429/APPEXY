import { Component } from '@angular/core';
import { Tools } from "../tools/tools";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Tools,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
