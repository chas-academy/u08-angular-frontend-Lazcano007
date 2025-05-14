import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetProfileComponent } from './pet-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PetProfileComponent', () => {
  let component: PetProfileComponent;
  let fixture: ComponentFixture<PetProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetProfileComponent, HttpClientTestingModule, PetProfileComponent, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testar att omderigering till edit-pet sidan fungerar 
  it('should have correct routerLink on the edit button', () => {
  component.pet = { _id: 'test123', name: 'Chica' };         // Dummy data som läggs in i pet objektet
  fixture.detectChanges();                                  // Detta uppdaterar DOM så att ändringaran syns i testet
  const debugElement = fixture.debugElement.query(By.css('.editButton'));  // Detta letar efter knappen i DOM som har klassen "editButton"
  const routerLink = debugElement.attributes['ng-reflect-router-link'];    // Hämtar värdet på attributet "routerlink" från elementet
  expect(routerLink).toBe('/edit-pet,test123');                // Detta kontrollerar att routerlink pekar på rätt url med rätt id
  });
});
 