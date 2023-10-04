function solution(arr, query) {
    for(let i = 0; i<query.length; i++){
        i%2 ? arr.splice(0, query[i]) : arr.splice(query[i]+1);
        
//splice(start, deleteCount)
//1        
//const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
//const removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
        
//2                
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]


    }
    
    return arr
}