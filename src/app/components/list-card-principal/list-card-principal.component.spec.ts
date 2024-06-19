import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardPrincipalComponent } from './list-card-principal.component';

describe('ListCardPrincipalComponent', () => {
  let component: ListCardPrincipalComponent;
  let fixture: ComponentFixture<ListCardPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCardPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
