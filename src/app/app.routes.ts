import { Contact } from './components/contact/contact';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
    {path:'home',component:Home,title:'Home'},
    {path:'about',component:About,title:'About'},
    {path:'contact',component:Contact,title:'Contact'},
    {path:"**",component:Home , title:'Home'}
];
