
const workoutMinutes = [35, 0, 49, 84, 63, 0, 21];

// step 1 

console.log("=== Week 1 Fitness Tracker ===");
console.log(workoutMinutes);

//step 2

workoutMinutes.push(40);
console.log("After logging today:" , workoutMinutes);

//step 3 

let last = workoutMinutes[workoutMinutes.length - 1];
console.log("Removed entry: " ,last );

workoutMinutes.pop();
console.log("After correction: ", workoutMinutes);

//step 4

function totalMinutes(arr){
let sum = 0 ;
for (let i = 0 ; i < arr.length ; i++){
    sum += arr[i];
}
return sum;
}
console.log("Total minutes: " , totalMinutes(workoutMinutes));

function averageMinutes(arr){
let sum = 0;
for (let i = 0 ; i < arr.length ; i++){
    sum += arr[i];
}
sum = sum/arr.length

return sum
}
console.log("Average minutes: " , averageMinutes(workoutMinutes));


// step 5

function classifyDay(minutes) {
    if (minutes === 0) {
        return "Rest";
    } else if (minutes <= 45) {
        return "Light";
    } else {
        return "Intense";
    }
}
for (let i = 0; i < workoutMinutes.length; i++) {
    console.log(
        "Day " + (i + 1) + " : " + workoutMinutes[i] + " min - " + classifyDay(workoutMinutes[i])
    );
}

// step 6

console.log("--- Enhanced review ---");

for (let i = 0; i < workoutMinutes.length; i++) {
    let minutes = workoutMinutes[i];

    if (minutes === 0) {
        continue;
    }

    if (minutes > 80) {
        console.log("Day " + (i + 1) + " : " + minutes + " min - New personal record! Stopping review.");
        break;
    }

    console.log(
        "Day " + (i + 1) + " : " + minutes + " min - " + classifyDay(minutes)
    );
}

//step 7

function bestDayIndex(arr){
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max);

    console.log(`Best day index: ${maxIndex} with ${max} minutes`);
}
bestDayIndex(workoutMinutes);

//step 8 

   let maxIndex = workoutMinutes.indexOf(Math.max(...workoutMinutes));
   
console.log(`Intense days: ${maxIndex}`)


//al hamdulilah i developpe my skills day by day