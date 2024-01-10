
let myFunc = (carFuel, carSize) => {
  if(carFuel === "disel" && carSize === "S" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else if(carFuel === "disel" &&  carSize === "M" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else if(carFuel === "disel" &&  carSize === "L" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else if(carFuel === "disel" &&  carSize === "XL" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }

  else if(carFuel === "gas" &&  carSize === "S" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else if(carFuel === "gas" &&  carSize === "M" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else if(carFuel === "gas" &&  carSize === "L" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else if(carFuel === "gas" &&  carSize === "XL" ){
    console.log("Заправка для" + " " + carSize + " " + "авто," + " тип топлива" + " " + carFuel) ;
  }
  else {
    console.log("Определись наконец, какая у тебя машина и не лей дизель, в бензиновый бак");
  }
};
myFunc("disel","S");
myFunc("disel","M");
myFunc("disel","L");
myFunc("disel","XL");
myFunc("gas","S");
myFunc("gas","M");
myFunc("gas","L");
myFunc("gas","XL");
myFunc();


