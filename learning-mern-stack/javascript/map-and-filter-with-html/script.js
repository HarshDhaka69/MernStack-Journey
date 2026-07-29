// Student Information

const students = [
    {
        name: "Harsh",
        stream: "Science",
        percentage: "80%",
        sports: "Chess"
    },
    {
        name: "Ankit",
        stream: "Science",
        percentage: "82%",
        sports: "Cricket"
    },
    {
        name: "Dipender",
        stream: "Science",
        percentage: "80%",
        sports: "Kabaddi"
    },
    {
        name: "Devashish",
        stream: "Science",
        percentage: "80%",
        sports: "Cricket"
    },
    {
        name: "Parveen",
        stream: "Science",
        percentage: "93%",
        sports: "Chess"
    },
    {
        name: "Nikhil",
        stream: "Science",
        percentage: "90%",
        sports: "Football"
    },
    {
        name: "Harsh Dagar",
        stream: "Commerce",
        percentage: "85%",
        sports: "Basketball"
    }
];

console.log("Students Information:", students);

// Filter
// Find all students who play Cricket.

const cricketPlayers = students.filter((student) => {
    return student.sports === "Cricket";
});

console.log("Cricket Players:", cricketPlayers);

// Map
// Create a new array containing only student names.

const nameArr = students.map((student) => {
    return student.name;
});

console.log("Student Names:", nameArr);

// Multiple Methods
// Find all Chess players and return only their names.

const chessPlayerNames = students
    .filter((student) => student.sports === "Chess")
    .map((student) => {
        return student.name;
    });

console.log("Chess Player Names:", chessPlayerNames);


// Adding In HTML

const footballPlayerNames = students
    .filter((student) => student.sports === "Football")
    .map((student) => {
        return `<li>${student.name}</li>`;
    });

console.log("Football Player HTML:", footballPlayerNames);


const div = document.getElementById("container");
div.innerHTML = `<ul>${footballPlayerNames.join("")}</ul>`;