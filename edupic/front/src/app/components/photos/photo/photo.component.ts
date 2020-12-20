import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() url = "https://www.petz.com.br/blog/wp-content/uploads/2018/10/dente-de-coelho.jpg!";
  @Input() alt = "OneWayDataBinding! ";

}
