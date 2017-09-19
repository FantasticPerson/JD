import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mod-add',
  templateUrl: './mod-add.component.html',
  styleUrls: ['./mod-add.component.css']
})
export class ModAddComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
