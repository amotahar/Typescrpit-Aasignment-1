interface Men {
  name: string;
  age: number;
}

function ageFunc(persons: Men[]): Men[] {
  return persons.filter(person => person.age >= 18);
}

const persons: Men[] = [
  { name: 'Rafik', age: 16 },
  { name: 'Jabbar', age: 19 },
  { name: 'Khalek', age: 17 },
  { name: 'Limon', age: 25 },
];

const man: Men[] = ageFunc(persons);
console.log(man);

export{}