let funpara = [1, 2, 3];

function restDemo(...funpara) {
  console.log(funpara);
}

restDemo(funpara); //[[1,2,3]]
restDemo(...funpara); //[1.2,3]
