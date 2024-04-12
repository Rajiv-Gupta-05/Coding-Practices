// Checking square in another array          || No javascript inbuild function used:
// arr1=[1,2,3,4], arr2=[1,9,4,16] -> case 1
// arr1=[1,2,4,2], arr2=[1,4,4,16] -> case 2

//condition
//map1={1:1,2:2,4:1}
//map2={1:1,4:2,16:1}

function isSquareCheckNew (arr1, arr2) {
    let map1={};
    let map2={};

    for(item of arr1){
        map1[item] = (map1[item] || 0) +1;
    }
    console.log("Map1",map1);
    for(item1 of arr2){
        map2[item1] = (map2[item1] || 0) +1
    }
    console.log("Map2", map2);

    for(let key in map1){
        if(!map2[key*key]) {  // object key compare in terms of square.
            return false
        }
        if(map1[key] !== map2[key*key]) {  // value compare
            return false;
        }
    }
    return true;
}
const result = isSquareCheckNew ([1,2,3,4], [1,9,4,16])
console.log (result);

// Time complexity is O(n) which is linear in nature.