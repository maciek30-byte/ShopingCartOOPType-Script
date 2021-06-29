import CartItem from "../Components/CartItem";
interface ICart {
  getId(): string;
  basket: CartItem[];
  basketDiscount: number;
  discountCode: string;

  addToBasket(...items: CartItem[]): void;
  deleteFromBasket(...items: CartItem[]): void;
  calculateBasket(): number;
  addTheSameItemToList(item:CartItem):void
}

export default ICart
