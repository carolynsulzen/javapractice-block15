//present user with a prompt asking them to enter flavors of ice cream
const myFlavors = prompt ("Please input some flavors separated by commas, no spaces", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
//create pre-determined answers "vanilla,vanilla,vanilla,strawberry,coffee,coffee"

//convert the words to a string
const myString = String (myFlavors);
console.log (myString);

//convert the string to an array
const myArray = myString.split(",");
console.log (myArray);

//convert the array to an object list

function countMyFlavors (myArray){
  const myFlavorObject = {}
  for (let i=0; i<myArray.length; i++){
    const currentKeys = Object.keys(myFlavorObject);
    const currentFlavor = myArray[i];
    if(currentKeys.includes(currentFlavor)){
      myFlavorObject[currentFlavor] = myFlavorObject[currentFlavor]+1
    }else{
      myFlavorObject[currentFlavor]=1
    }

  
  }
  return myFlavorObject
}
countMyFlavors(myArray)
console.log(countMyFlavors(myArray))

//write a function that looks loops through all the values provided and determines if the key is new.
//make sure to start at 0 for the first loop, so that the loop effectively runs through and sees that there are no keys currently
//this will initalize the creation of the object with the identification of the first key
//if the key is not seen before, create a new key
//if the key is already present add 1 to the value