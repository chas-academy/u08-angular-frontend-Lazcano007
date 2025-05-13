import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPetComponent } from './edit-pet.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditPetComponent', () => {
  let component: EditPetComponent;
  let fixture: ComponentFixture<EditPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPetComponent, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPetComponent);
    component = fixture.componentInstance;
  
    component.pet = {    //Dummy data för pet
      name: '',
      species: '',
      breed: '',
      age:'',
      owner:'',
    }
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
