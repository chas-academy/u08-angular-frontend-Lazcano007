import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseUrl = 'https://u05.onrender.com/api/v1/Pets'; // Generell API URL för djur 

  constructor( private http: HttpClient) { }

  getPetsByUser(): Observable<any[]> {
    const userId= localStorage.getItem('userId');
    return this.http.get<any[]>(`${this.baseUrl}/user/${userId}`).pipe(
      catchError(error => {
        console.error('Theres been an error fetching pets by user:', error);
        return of([]);
      })
    );
  }

  getPetsById(petId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getPetById/${petId}`).pipe(
      catchError(error => {
        console.error('Theres been an error fetching pets by id by the user:', error);
        return of([]);
      })
    );
  }

  createPet(pet: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, pet).pipe(
      catchError(error => {
        console.error('Theres been an error creating pets by the user:', error);
        return of([]);
      })
    );
  }

  updatePet(petId: string, pet: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${petId}`, pet).pipe(
      catchError(error => {
        console.error('Theres been an error updating pets by the user:', error);
        return of([]);
      })
    );
  }

  deletePet(petId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${petId}`).pipe(
      catchError(error => {
        console.error('Theres been an error deleting pets by the user:', error);
        return of([]);
      })
    );
  }
}
