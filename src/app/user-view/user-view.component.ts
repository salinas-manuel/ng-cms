import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    //Grab the URL from the activated route
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
    console.log(id);
  }

  getUser(id): void {
    this.userService.getUser(id).subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      }
    );
  }
}
