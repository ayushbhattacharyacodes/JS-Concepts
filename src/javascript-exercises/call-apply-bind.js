const person = {
    name:"Rahul",
    age:"29"
}
const displayDetails = function(state){
    console.log(this.name+" is "+this.age+" years old from "+state);
}


const displayPersonDetails=displayDetails.bind(person);
displayPersonDetails("Jammu & Kashmir")