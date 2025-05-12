import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit {
  pets: any [] = []; // Detta är en tom array som kommer att innehålla djurens data som hämtas från API:et

constructor ( private petService: PetService, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/']); // tillbaka till login om inte inloggad
      return;
    }

    this.petService.getPetsByUser().subscribe({
      next: (pets) => {
        this.pets = pets;
      },
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log('Theres been an error fetching your pets', err);
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }

  goToPetProfile(petId: string): void {
    this.router.navigate(['/pet-profile', petId]);
  }

}
