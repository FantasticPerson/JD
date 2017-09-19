import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {
  @Input() value = 12;
  constructor() { }

  ngOnInit() {
  }

}
