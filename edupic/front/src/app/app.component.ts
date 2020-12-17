import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: "https://www.nutripetshop.com.br/wp-content/uploads/2016/05/12321443_473034946238786_4080012528664932810_n.jpg",
      alt: "Rabbit"
    },
    {
      url:"https://www.infoescola.com/wp-content/uploads/2008/07/coelho.jpg" ,
      alt:"Coelho pequeno"
    }
  ]
}
