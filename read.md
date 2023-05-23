#1: TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and trans piles to JavaScript. 
TypeScript is an object-oriented programming language developed by Microsoft Corporation, whereas JavaScript is the programming language for the web. TypeScript is an open-source language to build large-scale web apps, whereas JavaScript is a server-side programming language that helps to develop interactive web pages.


#2: Two options for defining types in TypeScript: types and interfaces. One of the most frequently asked questions about TypeScript is whether we should use interfaces or types.like many programming questions, is that it depends. There are cases where one has a clear advantage over the other, but in many cases they are interchangeable. I will discuss the key differences and similarities between types and interfaces and explore when it is appropriate to use each one.


#3: To use generics, you need to use angular brackets and then specify a type variable inside them. Developers generally use T, X and Y. But it can be anything depending upon your preference.
Example:
function printData<T>(data: T) {
    console.log("data: ", data);
}

printData(2);
printData("hello");
printData(true);
printData([1, 2, 3, 4, 5, 6]);
printData([1, 2, 3, "hi"]);
printData({ name: "Ram", rollNo: 1 });



#4: I will present two main differences between any and unknown
1.	TypeScript forces us to determine the type of the unknown value before we can work with it, but it doesn’t with the any value.
Example:
let anyValue: any = 1;
let unknownValue: unknown = 1;anyValue.helloworld(); // No error
unknownValue.helloWorld();  // we get a TypeScript error
2. We cannot assign unknown to anything but itself or any, while we can assign any to anything.
Example:
let anyValue: any = 1;
let unknownValue: unknown = 1;let str: string;str = anyValue; // No error
str = unknownValue; // We get a TypeScript error
As you can see, these constraints make sure that we verify the unknown value before working with it, which is important to reduce the possibility of runtime errors.



#5: Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
Example: enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}


 #6: In TypeScript, the as keyword is used to explicitly type cast a value to a different type. It allows you to tell the TypeScript compiler that you know more about the type of a value than it does, and to treat that value as if it were of a different type.

 
#7: A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. Type guards are regular functions that return a boolean, taking a type and telling TypeScript if it can be narrowed down to something more specific. Type guards have the unique property of assuring that the value tested is of a set type depending on the returned boolean.
TypeScript uses some built-in JavaScript operators like typeof, instanceof, and the in operator, which is used to determine if an object contains a property. Type guards enable you to instruct the TypeScript compiler to infer a specific type for a variable in a particular context, ensuring that the type of an argument is what you say it is.
Type guards are typically used for narrowing a type and are quite similar to feature detection, allowing you to detect the correct methods, prototypes, and properties of a value. Therefore, you can easily figure out how to handle that value.


