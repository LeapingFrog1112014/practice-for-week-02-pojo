function keyInObjectArray(objArray, keyString) {
    // Your code here
    for (let i = 0; i < objArray.length; i++) {
        let obj = objArray[i];
        for (let key in obj) {
            if (key === keyString) {
                return true;
            }
        } 
    }
    return false;
};

  let objArray = [
    { name: "Rupert" },
    { age: 42 },
    { planet: "Earth", system: "Milky Way" }
  ];

  keyInObjectArray(objArray, 'planet'); // => true
  keyInObjectArray(objArray, 'age'); // => true
  keyInObjectArray(objArray, 'food'); // => false
  keyInObjectArray(objArray, 'animal'); // => false
