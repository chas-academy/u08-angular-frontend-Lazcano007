import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  // Testar om userId tas bort från localStorage vid utloggning
  it('should remove userId from localStorage when loging out', () => {
  localStorage.setItem('userId', '12345'); // Sätter en dummy userId i localStorage
  component.logout(); // Anropar logout metoden
  expect(localStorage.getItem('userId')).toBeNull(); // Kollar att userId har tagits bort från localStorage
 });
});
