import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{


  authenticated = false;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    let id = localStorage.getItem('id');
    if(id){
      this.authenticated = true;
    }
  }

}
