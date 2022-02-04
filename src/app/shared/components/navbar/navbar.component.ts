import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  route: Router
  activeClasses: Record<string, boolean> = {};

  constructor(
    private router: Router
  ) {
    this.route = this.router
  }

  ngOnInit(): void {
    this.route = this.router
  }

}
