function add(a: string, b: number = 3):void {
  for (let i = 0; i < b; i++) {
    console.log(a);
  }
}

add("Ami", 2); 
add("Tumi");

export{}