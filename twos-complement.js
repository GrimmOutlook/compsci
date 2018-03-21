const twos = (integer) => {
  const binaryInteger = integer.toString(2);
    console.log('binaryInteger: ', binaryInteger)

  // const splitter = binaryInteger.split('');
  //   console.log('splitter: ', splitter);

  // const numberArray = splitter.map(backToNumber => Number.parseInt(backToNumber, 2));
  //   console.log('numberArray: ', numberArray);

  // const complement = numberArray.map(oppo => {
  //   if (oppo === 1){
  //     return oppo - 1;
  //   }
  //   return oppo + 1;
  // })
  //   console.log('complement: ', complement);


  // if (complement[complement.length - 1] === 1){
  //   complement[complement.length - 1] = 0;
  //   complement[complement.length - 2] = 1;
  // }
  // else{
  //   complement[complement.length - 1] = 1;
  // }
  //   console.log('complement again: ', complement);


  // const negative = ~integer + 1;
  // console.log('negative: ', negative);
  // console.log(negative.toString(2));


  const sample = (-integer >>> 0).toString(2);
    console.log('sample: ', sample);
    console.log('-integer: ', -integer);

  const onesComp = ~integer;
    console.log('onesComp: ', onesComp);
  const twosComp = onesComp * -1;
    console.log('twosComp: ', twosComp);
  const negativeBinary = twosComp.toString(2, 32);
    console.log('negativeBinary: ', negativeBinary);
}

twos(48);
