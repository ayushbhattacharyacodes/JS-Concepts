let name ={
    firstName:"Ayush",
    lastName:"Bhattacharya"
}

let printName = function(homeTown,state){
    console.log(this.firstName+" "+this.lastName+" from "+homeTown+","+state);
}

let printMyName = printName.bind(name,"Kolkata")
printMyName("West Bengal")

Function.prototype.myBind=function(...args){
    let temp = this;
     params = args.slice(1)
  return function(...args2){
    temp.apply(args[0],[...params,...args2])
  }
}

let printMyName2 = printName.myBind(name,"Chennai")
printMyName2("Tamil Nadu")