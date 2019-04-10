import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);