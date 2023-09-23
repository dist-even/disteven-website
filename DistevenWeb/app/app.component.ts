import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router , Event} from '@angular/router';

import { SpinnerVisibilityService } from 'ng-http-loader';

import { SpinnerComponent } from './shared';


@Component({
  selector: 'disteven-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public spinnerComponent = SpinnerComponent;
  title = 'Disteven';

  constructor(private router: Router, private spinnerService: SpinnerVisibilityService) {
    console.log(
      "%c Hi Devs, Welcome to Disteven 💸",
      "font-size: large; color: #00d398; font-weight: bold; font-family: 'Noto Sans Mono', monospace; width:100vw;"
    );
    
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.spinnerService.show();
      }
  
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.spinnerService.hide();
      }
    });
  }

  onActivate(event) {
    // let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 1000); // how far to scroll on each step
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // });
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
