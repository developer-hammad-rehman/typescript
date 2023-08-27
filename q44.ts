function car_storefunc(name: string, modelnumber: number, color?: string) {
  let cars = {
    name: name,
    modelnumber: modelnumber,
    color: color,
  };
  console.log(cars);
}
car_storefunc("city", 20, "red");
