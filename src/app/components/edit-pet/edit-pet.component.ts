import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-edit-pet',
  imports: [RouterModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './edit-pet.component.html',
  styleUrl: './edit-pet.component.scss'
})

export class EditPetComponent implements OnInit {

  pet: any;   //  Objektet som innehåler djurets data som kommer redigeras.
  petId: string = "";  // Det är här vi kommer spara id:et som ska redigeras.

constructor(private petService: PetService, private route: ActivatedRoute, private router: Router){}


  ngOnInit() : void {
    const petId = this.route.snapshot.paramMap.get('id')  // Hämtar id:et från urlen
    if(!petId) 
      return;
    this.petId= petId;   // Sparar id:et i petId variabeln så vi kan använda det senare
    this.petService.getPetsById(petId).subscribe({
      next: (pet) => {
        this.pet = pet;
      },
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log('Theres been an error updating your pets', err);
        }
      }
    });
  }

  updatePet(): void {
      this.petService.updatePet(this.petId, this.pet).subscribe({
        next: () => {
          console.log("This pet has successfully been updated!");
          this.router.navigate(['/dashboard']);  // Skickar dig till dashboarden
        },
        error: (err: unknown) => {
          if (err instanceof Error) {
            console.log('Theres been an error updating your pets', err);
          }
        }
    });
  }

  deletePet(): void {
    if(!confirm("Are you sure you want to delete this pet?"))
      return;
    this.petService.deletePet(this.petId).subscribe({
      next: () => {
        console.log("Your pet has successfully been deteletd!");
        this.router.navigate(['/dashboard']);
      }, 
      error: (err: unknown) => {
        if (err instanceof Error) {
          console.log('Theres been an error updating your pets', err);
        }
      }
    });
  }
}
