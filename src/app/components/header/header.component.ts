import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public selectedTab:string = '/clients';
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.selectedTab = this.router.url;
  }

}
