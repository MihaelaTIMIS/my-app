import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() {
    const user={
      first_name: "Miha",
      last_name: "Timis",
      image: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
    }
   }

  ngOnInit() {
  }

}
