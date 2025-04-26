//:::::::::::::::::::::::::::::::::::::::::  (LOGICAL ERROR )

const log = () =>{
let num = 5;
if(num = 10)    // here we do logical error we forgot ""==="" and mistakely use "="
{
  console.log(num);     // output is 10;
} else{
  console.log("num is not 10");
}
  
};

module.exports = log;