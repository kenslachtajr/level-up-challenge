export interface Pizza {
  id: number;
  pizzaName: string;
  size: string;
  toppings: {
    toppingName: string;
    extras: [
      {
        extraName: string;
      }
    ];
    howDone: string;
  };
}
