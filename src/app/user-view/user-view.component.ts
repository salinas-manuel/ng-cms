import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
      user => this.user = user
    );
  }

  deleteUser(id: string): void {
    if(confirm("Are you sure you want to delete " + this.user.user.username)) {
      this.userService.deleteUser(id).subscribe(
        ()=>{this.router.navigate(['/users'])}
      );
    }
  }

}
