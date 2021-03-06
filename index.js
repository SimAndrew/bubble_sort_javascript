function bubbleSort(array) {
    for (var i = array.length; i > 0; i--){
        for (var j = 0; j < i; j++){
            if (array[j] > array[j + 1]){
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([ 20, 20, 31, 56, 1, -20, 12 ]));

//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
