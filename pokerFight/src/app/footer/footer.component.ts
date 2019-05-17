import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footerTitle: string = 'Aguardando participantes...';
  color: boolean = false;

  changeFooterTitle(){
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('Iniciar');
      }, 2000)
    });

    promise1.then((resultado)=>{
      console.log(resultado)
      this.footerTitle = resultado.toString();

      this.changeFooterColor();
    })
  } 

  ngOnInit() {
    this.changeFooterTitle();
  }

  changeFooterColor() {
    if (this.footerTitle === 'Iniciar') {
      this.color = true;
    }
  }

}
