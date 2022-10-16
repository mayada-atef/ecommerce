import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
