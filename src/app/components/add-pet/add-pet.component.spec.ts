import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPetComponent } from './add-pet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AddPetComponent', () => {
  let component: AddPetComponent;
  let fixture: ComponentFixture<AddPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPetComponent, FormsModule, HttpClientTestingModule, RouterTestingModule] // Importerar de moduler som behövs för att köra testerna
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update pet name when input value changes',() => {  // Test som kontrollerar att pet name uppdateras när man knappar in data
    const input = fixture.nativeElement.querySelector('input[name="name"]'); // Hittar formuläret men specifik "name" i DOM
    input.value = 'Chica';  // Dummy data
    input.dispatchEvent(new Event('input')); // Simulerar att man fyller i formuläret
    fixture.detectChanges();  // Uppdaterar DOM med ny data (fejkdatan alltså)
    expect (component.pet.name).toBe('Chica'); // Dubbelkollar att pet name har uppdaterats korrekt 
  })
});
