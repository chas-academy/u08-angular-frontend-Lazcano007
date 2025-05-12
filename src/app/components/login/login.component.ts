import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  name = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const userData = { name: this.name, password: this.password };

    this.http.post<any>(`https://u05.onrender.com/api/v1/Users/login`, userData).subscribe({
      next: (res) => {
        localStorage.setItem('userId', res.user._id); //spara useid:et
        this.router.navigate(['dashboard']);     //omdirigeras till dahsboard
      },
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log('Theres been an error login in', err);
        }
      }
    });
  }
ngOnInit(): void {
  if (localStorage.getItem('userId')) {
      this.router.navigate(['/dashboard']); 
  }
  }
}