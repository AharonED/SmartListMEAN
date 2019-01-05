import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemsCreateComponent } from './checklist-items-create.component';

describe('ChecklistItemsCreateComponent', () => {
  let component: ChecklistItemsCreateComponent;
  let fixture: ComponentFixture<ChecklistItemsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistItemsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistItemsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
