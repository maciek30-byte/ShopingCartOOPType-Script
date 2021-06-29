interface ICartItem {
  getId(): string;
  name: string;
  category: string; // osobna klasa??
  price: number;
  discount: number;
  quantity: number;

  setPrice(newPrice: number): void;
  setDiscount(newDiscount: number): void;
  setNameOfValue(valueToChange: string, newValue: string): void;
}

export default ICartItem;
