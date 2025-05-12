import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-pet', component: AddPetComponent},
    { path: 'pet-profile/:id', component: PetProfileComponent},
    { path: 'edit-pet/:id',  loadComponent: () => import('./components/edit-pet/edit-pet.component').then(m => m.EditPetComponent)},    
];
