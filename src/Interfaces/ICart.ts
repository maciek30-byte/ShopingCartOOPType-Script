import CartItem from "../Components/CartItem";
interface ICart {
  getId(): string;
  basket: CartItem[];
  basketDiscount: number;
  discountCode: number;

  addToBasket(...items: CartItem[]): void;
  deleteFromBasket(...items: CartItem[]): void;
  calculateBasket(): number;
  addTheSameItemToBasket(item:CartItem, repeat:number):CartItem[];
  deleteTheSameFromBasket(item:CartItem,repeat:number):CartItem[]
}

export default ICart
