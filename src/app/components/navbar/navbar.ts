import { Component, ElementRef, HostListener, inject, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {


  mode(){
    var isdark=true;
if (isdark) {
  window.document.documentElement.classList.toggle('dark')
  window.document.getElementById('btn2')?.classList.toggle('hidden')
  window.document.getElementById('btn')?.classList.toggle('hidden')
}
}

//   renderer = inject(Renderer2)
//   @ViewChild('toggle') toggle!:ElementRef 

// userMode:boolean = true

// ModeBtn(){
//   this.renderer.listen(this.toggle.nativeElement,
//     'click',()=> {
//       console.log('Hello');
      
//     }
//   )


  // if (this.userMode == true) {
  //   this.userMode = false
  //   document.getElementById('lightBtn')?.classList.add('hidden')
  //   document.getElementById('darkBtn')?.classList.remove('hidden')
  //   document.documentElement.classList.add('dark')

  // } else if (this.userMode == false){
  //   this.userMode = true
  //   document.getElementById('lightBtn')?.classList.remove('hidden')
  //   document.getElementById('darkBtn')?.classList.add('hidden')
  //   document.documentElement.classList.remove('dark')
  //   console.log(this.userMode)
  // }







 }
