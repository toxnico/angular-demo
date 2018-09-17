import { Component } from '@angular/core';
import { User } from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myUsers: User[] = [
    {
      id: 1,
      firstName: "Lewis",
      lastName: "Trondheim"
    },
    {
      id: 2,
      firstName: "Alexandro",
      lastName: "Jodorowsky"
    },
    {
      id: 3,
      firstName: "Manu",
      lastName: "Larcenet"
    }
  ];

  title = 'demo-angular';
}
