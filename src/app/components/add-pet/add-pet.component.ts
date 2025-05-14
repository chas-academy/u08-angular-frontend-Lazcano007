import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-add-pet',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.scss'
})
export class AddPetComponent {
  pet = {         // Detta initierar en "Pet" och ger en tom sträng som default
    owner: '',
    name: '',
    species: '',
    breed: '',
    age: '',
  };

  constructor (private petService: PetService, private router: Router) {}

  addPet () {
    const userId = localStorage.getItem('userId');
    if(!userId) return;

    this.pet.owner = userId;
    const petData = { ...this.pet};

    this.petService.createPet(petData).subscribe({
      next: () => {
      this.router.navigate(['/dashboard']) // Skickar dig till dashboarden
    },
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log('Theres been an error creating a pet', err);
        }
      }
    });
  }
}
