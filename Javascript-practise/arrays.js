// // printing reverse of an array
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([5,4,3,2,1]);

// Check if array is uniform
function isUniform(arr){
    var first = arr[0];
    for(var i=1; i< arr.length; i++){
        if (arr[i] !== first)  {
            return false;
        }
    }
return true;
}


// sum of array
function sumArray (arr){
    var total =0;
    arr.forEach (function (element){
    total+= element
    });
return total
}


// max number of the array
function max (arr){
    var max = arr[0];
    for(var i=1; i< arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}