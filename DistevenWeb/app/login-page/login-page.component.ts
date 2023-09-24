import { Component } from '@angular/core';
import { appearAnimation, enterAnimation, leaveAnimation } from '../shared';

@Component({
  selector: 'disteven-login-page',
  templateUrl: './login-page.component.html',
  animations: [appearAnimation, enterAnimation]
})
export class LoginPageComponent {
  activePage: string = 'LOGIN';
}
