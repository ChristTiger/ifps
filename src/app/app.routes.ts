// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Formationtechnique } from './pages/formationtechnique/formationtechnique';
import { Formationparamedicale } from './pages/formationparamedicale/formationparamedicale';
import { Formationgestion } from './pages/formationgestion/formationgestion';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
0



export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:Home},
    { path: 'about',component:About},
    { path: 'formationstechniques',component:Formationtechnique},
    { path: 'formationparamedicale',component:Formationparamedicale},
    { path: 'formationgestion',component:Formationgestion},
    { path: 'contact',component:Contact},
    { path: '**', redirectTo: '/home'}

   
];