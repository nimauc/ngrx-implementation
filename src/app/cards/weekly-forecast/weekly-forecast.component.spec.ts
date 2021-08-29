import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyForecastComponent } from './weekly-forecast.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/reducers';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';

describe('WeeklyForecastComponent', () => {
  let component: WeeklyForecastComponent;
  let fixture: ComponentFixture<WeeklyForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeeklyForecastComponent
      ],
      imports : [
        AngularMaterialModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
