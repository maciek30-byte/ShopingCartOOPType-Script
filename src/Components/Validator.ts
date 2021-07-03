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
    const checked = checkedList.some(
      (element: { getId: () => any }) =>
        element.getId() === elementToCheck.getId()
    );
    checked
      ? console.log("contact is exist")
      : console.log("contact is not exist on this group");
    return checked;
  }

  static percentValidate(value: string) {}
}
export default Validator;
