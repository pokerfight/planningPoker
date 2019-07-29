import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import { LoginService } from '../services/login.service';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button name to be iqual X Finalizar ', () => {
    expect(component.projectName).toEqual('PokerFigth');
  });

  it('should text project name to be iqual PokerFigth ', () => {
    expect(component.buttonNameFinish).toEqual('X Finalizar');
  });

  it('should loginService set sprint name ', () => {
    let loginService = fixture.debugElement.injector.get(LoginService)
    loginService.setSprint('Teste nome sprint');
    expect(loginService.sprint).toEqual('Teste nome sprint');
  });

  it('should sprintName appear in frontEnd ', () => {
    component.sprintName = 'Testando um nome qualquer';
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Testando um nome qualquer');
  });
});
