import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(   private route: ActivatedRoute, 
    private location: Location) { }

  ngOnInit() {
  }

}
