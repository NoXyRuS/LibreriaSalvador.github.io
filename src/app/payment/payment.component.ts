import { Component, ViewChild, Input } from '@angular/core';
import { StripeCardComponent } from 'ngx-stripe';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  @Input() precio!: number;
  @Input() descripcion!: string;
  @Input() nombre!: string;
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51NTDK0HywMP8RhYJElMa1lj12TNj5zfEoPszo7lsohhZ4drfpQJ7AbjpIkUIq7O2dZ8iAWmBUfSDt6fjIdNP8ZxG00MQQoDqsh';
  tipoCambio: number = 3.8; // Tipo de cambio de dólares a soles

  ngOnInit() {
    this.invokeStripe();
  }

  convertirAPrecioEnSoles() {
    return this.precio * this.tipoCambio;
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'PEN',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Pago realizado');
      },
    });

    paymentHandler.open({
      name: 'Realizar Pago',
      amount: this.precio ,
      currency: 'PEN',
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'PEN',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successful!');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
