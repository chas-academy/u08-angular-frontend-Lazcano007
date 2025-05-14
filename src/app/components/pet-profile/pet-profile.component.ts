import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-pet-profile',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})


export class PetProfileComponent implements OnInit {
  pet: any = null; // Det skapar en variabel som först är tom (null) och senare ska innehålla husdjurets data

  constructor (private route: ActivatedRoute, private petService: PetService) {}
  
  ngOnInit() {
    const petId = this.route.snapshot.paramMap.get('id');  // Hämtar id:et från URL:en 
    if(!petId) return;
      this.petService.getPetsById(petId).subscribe({
        next: (pet) => {
          this.pet = pet; // Sparar djurets data i pet variabeln så vi kan använda i komponentens template(html fil)
        },
        error: (err: unknown) => {
          if (err instanceof Error) {
            console.log('Theres been an error fetching your pets', err);
          }
        }
    })
  }
}
