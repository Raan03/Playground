import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})

export class UserDemoComponent {
  userName: string;
  //userService: UserService;
  api: string;

  constructor(private userService: UserService, @Inject("API_URL") apiUrl) {
    this.api = apiUrl;
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Ranu'
    });

    this.userName = this.userService.getUser().name;
    console.log('username is ', this.userName);
    console.log('injected api_url: ', this.api);
  }

}
