import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

  authenticated = false;

  ngOnInit(): void {
    let id = localStorage.getItem('id');
    if(id){
      this.authenticated = true;
    }
  }


}
