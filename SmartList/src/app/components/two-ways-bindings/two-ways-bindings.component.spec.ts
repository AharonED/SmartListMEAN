import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaysBindingsComponent } from './two-ways-bindings.component';

describe('TwoWaysBindingsComponent', () => {
  let component: TwoWaysBindingsComponent;
  let fixture: ComponentFixture<TwoWaysBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWaysBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWaysBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
