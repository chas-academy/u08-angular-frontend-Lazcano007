import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { AddPetComponent } from "./components/add-pet/add-pet.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'u08-angular';
}
