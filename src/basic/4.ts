
function showMessage(message: string): void {
    console.log(message);
  } //не повертає значення (void)
  
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function customError(): never {
    throw new Error("Error");
  }