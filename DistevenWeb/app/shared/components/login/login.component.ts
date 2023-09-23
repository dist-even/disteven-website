import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'disteven-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const comeBackTo = params['redirect'];
      window.location.href = `/login?redirect=${comeBackTo}`
    });
  }
}
