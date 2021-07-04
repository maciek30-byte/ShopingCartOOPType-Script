import {ChangeInProduct} from "./allTypes";


interface IProduct {
    id:string
    name:string;
    category:string
    price: number;
    discount:number

    setProperties(propertyToChange:ChangeInProduct, newValue:string| number):void | never
    calculateProductValue():number


}
export default IProduct