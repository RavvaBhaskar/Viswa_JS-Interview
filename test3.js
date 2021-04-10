// const arr = new Array(1);
// arr.length = 2;
// arr.push(2);
// arr.push(0);
// console.log(arr);
// for (const num in arr) {
//   console.log(num);
//   console.log(arr[num]);
// }

const numbers = [3, 342, 23, 22, 124];
console.log(numbers.sort());

class Tracker{
    constructor(){
        this.hostname = [];
    }
    allocate(name){

    }
    deallocate(name){
        
    }
}

function hostAlloc(queries){
    var tracker = new tracker();
    var results = [];
    queries.array.forEach(query => {
       car [action ,name]  =query.split('');
       if(action==='A'){
           results.push(tracker.allocate(name));
       } 
       else if(action === 'D'){
        results.push(tracker.deallocate(name));

       }
    });
    console.log(results);
    return results;
}