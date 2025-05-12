import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = {name: '', email: '', password:''};

  constructor (private http: HttpClient, private router: Router) {}

  register() {
    this.http.post<any>('https://u05.onrender.com/api/v1/Users/registration', this.user).subscribe({
      next: (res) => {
        console.log('This user is registrated', res);
        this.router.navigate(['/']); // Skickar dig till inlogning
      },
      error: (err: unknown) => {
        if ( err instanceof Error) {
          console.log('Theres been an error registrating you', err);
        }
      }
    }) 
  }
}
