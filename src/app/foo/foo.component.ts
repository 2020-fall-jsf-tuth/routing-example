import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {


  // DI
  //
  // TS automatic property because we put a scope specifier
  // on the constructor parameter...
  //
  constructor(private sharedDataSvc: SharedDataService) { }

  ngOnInit(): void {
    console.log(this.sharedDataSvc.sharedString);
  }

}
