function strFunc(a: unknown): void {
  if (typeof a === 'string') {
    console.log(a);
  } else {
    console.log('This parameter is not a string.');
  }
}
strFunc('I am a Hero!'); 
strFunc(123); 
strFunc(true); 