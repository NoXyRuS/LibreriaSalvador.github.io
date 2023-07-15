import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  //Variables para las Opciones de Envio
  retiroOptionSelected: boolean = false;
  envioOptionSelected: boolean = true;

  toggleRetiroOption() {
    this.retiroOptionSelected = true;
    this.envioOptionSelected = false;
  }

  toggleEnvioOption() {
    this.retiroOptionSelected = false;
    this.envioOptionSelected = true;
  }

}
