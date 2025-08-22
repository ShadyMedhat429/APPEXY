import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
userMode:boolean = true
@HostListener('click')
ModeBtn(){

  if (this.userMode == true) {
    this.userMode = false
    document.getElementById('lightBtn')?.classList.add('hidden')
    document.getElementById('darkBtn')?.classList.remove('hidden')
    document.documentElement.classList.add('dark')

  } else if (this.userMode == false){
    this.userMode = true
    document.getElementById('lightBtn')?.classList.remove('hidden')
    document.getElementById('darkBtn')?.classList.add('hidden')
    document.documentElement.classList.remove('dark')
    console.log(this.userMode)
  }
}  






 }
