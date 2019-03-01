import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza, PizzaService } from '@workspace/core-data';

@Component({
  selector: 'workspace-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizza: Pizza;
  pizzas$: Observable<Pizza[]>;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.getPizzas();
  }

  selectPizza(pizza: Pizza) {
    this.pizza = pizza;
  }

  getPizzas() {
    this.pizzas$ = this.pizzaService.get();
  }

  savePizza(pizza: Pizza) {
    pizza.id ? this.updatePizza(pizza) : this.createPizza(pizza);
  }

  createPizza(pizza: Pizza) {
    this.pizzaService.create(pizza).subscribe(res => {
      this.reset();
      this.getPizzas();
    });
  }

  updatePizza(pizza: Pizza) {
    this.pizzaService.update(pizza).subscribe(res => {
      this.reset();
      this.getPizzas();
    });
  }

  deletePizza(pizzaId: number) {
    this.pizzaService.delete(pizzaId).subscribe(res => {
      this.reset();
      this.getPizzas();
    });
  }

  reset() {
    const emptyPizza: Pizza = {
      id: null,
      pizzaName: '',
      size: '',
      toppings: {
        toppingName: '',
        extras: [
          {
            extraName: ''
          }
        ],
        howDone: ''
      }
    };
    this.selectPizza(emptyPizza);
  }
}
