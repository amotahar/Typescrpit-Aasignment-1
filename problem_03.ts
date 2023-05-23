function genFunc<T>(...items: T[]): T[] {
  return items.reverse();
}

const cityName: string [] = ["Dhaka", "Chattagram", "Rajshahi"];
const reverseCityName = genFunc(...cityName);
console.log(reverseCityName);
