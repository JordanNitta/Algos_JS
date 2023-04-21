
const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-10 mins to write the pseudocode here:

/* 
    findByIdAndUpdate(id, updateObject, arr)
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found

    check 
    someObj.hasOwnProperty("key")
    obj[key] === undefined
    Object.keys(someObj)
*/


function findByIdAndUpdate(id, updatedVals, collection) { 
    for(let i = 0; i < collection.length; i++){
        let obj = collection[i];
        if(obj.id === id) {
            for(const key in updatedVals){
                if(obj.hasOwnProperty(key)){
                    obj[key] = updatedVals[key];
                }
            }
            return obj
        }
    }
    return null
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));