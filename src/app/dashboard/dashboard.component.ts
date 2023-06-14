import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    
  }


}
