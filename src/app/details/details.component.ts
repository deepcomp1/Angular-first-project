import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employees$: object;

  constructor(private route: ActivatedRoute, private data: DataService) {
     this.route.params.subscribe( params => this.employees$ = params.id );
  }

  ngOnInit() {
    // this.data.getEmployees(this.employees$).subscribe(
    //   data => this.employees$ = data
    // );
  }

}
