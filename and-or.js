const andOr = (integer1, integer2) => {
  const binaryInteger1 = integer1.toString(2);
  const binaryInteger2 = integer2.toString(2);

  // console.log('OR: ', (binaryInteger1.slice(-1) | binaryInteger2.slice(-1)));
  // console.log('AND: ', (binaryInteger1.slice(-1) & binaryInteger2.slice(-1)));
  // console.log('XOR: ', (binaryInteger1.slice(-1) ^ binaryInteger2.slice(-1)));

  console.log('binaryInteger1: ', binaryInteger1);
  console.log('binaryInteger1 complement: ', ~binaryInteger1);
  console.log('binaryInteger2: ', binaryInteger2);
  console.log('integer2 complement: ', ~binaryInteger2);

}

andOr(4545, 68923);
andOr(44, 88);
andOr(65, 988);
andOr(534, 777);
