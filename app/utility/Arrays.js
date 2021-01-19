


export function indexOf(array, propName, value){
    for(var i = 0; i < array.length; i++) {
        if(array[i][propName] === value) {
            return i;
        }
    }
    return -1;  
}
