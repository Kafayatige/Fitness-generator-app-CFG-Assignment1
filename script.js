// Exercise program details
const workoutProgram = {
cardio: {
    description: "Cardio Machines",
    exercise: [
        "5-10 minutes of walking on the treadmill.",
        "20-30 minutes of running or brisk walking at varying speeds and inclines to challenge yourself.",
        "5-10 minutes of pedaling at a comfortable pace on a stationary bike.",
        "20-30 minutes of cycling with varying resistance levels and speeds.",
        "5-10 minutes of slowly on the elliptical machine.",
        "20-30 minutes of elliptical training with varying resistance levels and incline settings."
    ]
},

strength: {
    description: "Strength Training",
    exercise: [
        "- Dumbbell Sumo Squats (3 sets of 8-10 reps)",
        "- Bulgarian lunges with Dumbbells (3 sets of 8-10 reps)",
        "- Lat Pulldown (Gym Machine) (3 sets of 8-10 reps)",
        "- Dumbbell Rows (3 sets of 8-10 reps)",
        "- Bicep Curls (3 sets of 8-10 reps)",
        "- Tricep Dips (3 sets of 8-10 reps)",
    ]
},
lowerbody: {
    description: "Lower Body HIIT",
    exercise: [
        "- Dumbbell Thrusters (3 sets of 12-15 reps)",
        "- Renegade Rows (3 sets of 12-15 reps)",
        "- Dumbbell Swings (3 sets of 12-15 reps)",
        "- Push-ups (3 sets of 12-15 reps)",
        "- Calf Raises (3 sets of 8-10 reps)",
        "- Leg Press (Gym Machine) (3 sets of 8-10 reps)",

    ]
},
upperbody: {
    description: "Upper Body HIIT",
    exercise: [
        "-- Dumbbell (3 sets of 12-15 reps)",
        "-- Chest Press Machine (3 sets of 12-15 reps)",
        "-- Dumbbell Rows (3 sets of 12-15 reps)",
        "-- Lat Pulldown Machine (3 sets of 12-15 reps)",
        "-- Dumbbell Shoulder Press (3 sets of 12-15 reps)",
        "-- Shoulder Press Machine (3 sets of 12-15 reps)",
    ]
},
};


//Initialize and get html elements
const workoutGeneratorForm = document.querySelector("#workoutGeneratorForm");
const generateButton = document.getElementById("generateButton");
const clearAllButton = document.getElementById("clearAllButton");
const generatedWorkoutProgram = document.getElementById("generatedWorkoutProgram");




//Function to personalise welcome messsage to user
function userWelcomeMessage(){
  //Get name input from user, convert to upperCase
const userName = prompt("Please enter your name: ").toUpperCase();
  //insert user input into welcome message
const welcomeMessage = `Welcome, ${userName}! \
                        your personal BetterFitness buddy is here to help \
                        you achieve your goals, boost confidence, and make healthy life choices. 
                        Start your journey today`
  //update text content of welcome message paragraph into the h2 element of the web page
document.getElementById("welcomeMessage").textContent = welcomeMessage;

};


//function to randomly select exercise from exercise array; 
//function will be called in randomlyGenerateWorkoutProgram()
function getRandomExercise(exerciseArray){
const exerciseCopy = exerciseArray.slice();
const randomlySelectedExercise = [];

while(exerciseCopy.length > 0){
    const randomExerciseIndex = Math.floor(Math.random() * exerciseCopy.length);
    const [randomExercise] = exerciseCopy.splice(randomExerciseIndex, 1);
    randomlySelectedExercise.push(randomExercise);
}
return randomlySelectedExercise;
};


// Define the function to generate a random workout program (List Format)
function randomlyGenerateWorkoutProgram() {
  // clears previously generated program before generating another 
generatedWorkoutProgram.innerHTML = "";

const workoutTypeCheckbox = document.querySelectorAll(".workout-categories");
const workoutCategories = [];

  // loop through checkboxes to find  which category has been checked
  // checked is a css pseudo-class boolean attribute for input type checkbox
  // push predefined html input value of selected checkbox into previously initialized array
for (const checkbox of workoutTypeCheckbox) {
    if (checkbox.checked) {
        workoutCategories.push(checkbox.value);
    }
};


if (workoutCategories.length === 0) {
    generatedWorkoutProgram.textContent = "Please select at least one workout category.";
} else {
      // loop through selected categories and exercises
    for (const workout of workoutCategories) {
        const workoutGenerated = workoutProgram[workout];
        const workoutCategory = document.createElement("h3");
        workoutCategory.textContent = workoutGenerated.description;
        generatedWorkoutProgram.appendChild(workoutCategory);

          // calling getRandomExercise()
        const exerciseInWorkoutProgram = getRandomExercise(workoutGenerated.exercise);

          //Randomly list not more than 3 exercises from each workout category
        const listNotMoreThanThreeExercise = exerciseInWorkoutProgram.slice(0, 3);

        for (const exercise of listNotMoreThanThreeExercise) {
            const exerciseList = document.createElement("li");
            exerciseList.textContent = exercise;
            generatedWorkoutProgram.appendChild(exerciseList);
        };

          //style text color of workout div when generated
        generatedWorkoutProgram.style.color = "red";
        
    };
    };
};

//function to clear the generated program and checkboxes
function clearAll() {
    alert('This will clear your generated workout')
  //sets the generatedWorkoutProgram div element back to empty string 
generatedWorkoutProgram.innerHTML = "";

  // To clear checked boxes
const checkedExerciseCategory = document.querySelectorAll(".workout-categories");
checkedExerciseCategory.forEach(function(checkedCategory) {
    checkedCategory.checked = false;
});
};

