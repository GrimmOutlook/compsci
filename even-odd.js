const evenOrOdd = (integer) => {
  const binaryInteger = integer.toString(2);

    if(binaryInteger.slice(-1) & 1){
      console.log('odd');
    }
    else{
      console.log('even');
    }
}

evenOrOdd(54329834);
