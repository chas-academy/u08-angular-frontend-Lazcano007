import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetProfileComponent } from './pet-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
});
