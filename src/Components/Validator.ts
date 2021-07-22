import {throws} from "assert";

class Validator {
  static nameValidation(stringToValidate: string): boolean | never {
    const nameRegex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
    if (!nameRegex.test(stringToValidate)) {
      throw new Error("It is not correct name");
      return false;
    } else {
      return true;
    }
  }

  static checkThatExist(elementToCheck: any, checkedList: any): boolean {
    const checked = checkedList.some((element: { id: any; })=> element.id === elementToCheck.id
    );
    checked
      ? console.log("contact is exist")
      : console.log("contact is not exist on this group");
    return checked;
  }

  static isLessThenZero(value: number): void {
    if (value < 0) {
      throw new Error("That is for free or worse.....");
    }
  }

  static isEmptyString(stringToValidate: string) {
    if (stringToValidate.length === 0) throw new Error("String is empty");
  }

  static isArrayEmpty(arrayToCheck:Array<unknown>){
    if(arrayToCheck.length ===0) throw new Error('array is empty')
  }
}

export default Validator;
