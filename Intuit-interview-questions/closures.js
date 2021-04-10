function outerfn() {
  let sample = 2;
  function innerfun() {
    return sample;
  }
}

let getInnerfun = outerfn;
console.log(getInnerfun());
