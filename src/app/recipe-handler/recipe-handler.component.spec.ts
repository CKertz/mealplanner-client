import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHandlerComponent } from './recipe-handler.component';

describe('RecipeHandlerComponent', () => {
  let component: RecipeHandlerComponent;
  let fixture: ComponentFixture<RecipeHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
