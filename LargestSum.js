// [1,2,3,4,5,3,5,7,1,4,8,9,2]: Total Number:- 13
// Count largest sum of consecutive digits.
//num = 4

//Conditions:
// num > array : error message
// 13 - 4 + 1 => 10 (Total number of loops should be required.)

function LargestSum (array,num) {
    if(num > array) {
        throw new Error ("Number is not greater than array.")
    }else {
        let max = 0;
        for(let i=0; i<array.length - num + 1; i++){
            let tmp = 0;
            for(let j=0; j<num; j++) {
                tmp+= array[i+j];
            }
            if(tmp>max){
                max = tmp;
            }
        }
        return max;
    }

}
const result = LargestSum ([1,2,3,4,5,3,5,7,1,4,8,9,2], 4);
console.log(result)