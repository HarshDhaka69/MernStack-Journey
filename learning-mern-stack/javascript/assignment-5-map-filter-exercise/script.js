const students = [
    {
        name: "Harsh",
        class: "12th",
        marks: 88,
        address: "Rohtak"
    },
    {
        name: "Ankit",
        class: "11th",
        marks: 92,
        address: "Jhajjar"
    },
    {
        name: "Dipender",
        class: "12th",
        marks: 85,
        address: "Rohtak"
    },
    {
        name: "Devashish",
        class: "10th",
        marks: 79,
        address: "Jhajjar"
    },
    {
        name: "Parveen",
        class: "11th",
        marks: 95,
        address: "Rohtak"
    },
    {
        name: "Nikhil",
        class: "12th",
        marks: 90,
        address: "Jhajjar"
    },
    {
        name: "Harsh Dagar",
        class: "10th",
        marks: 84,
        address: "Rohtak"
    }
];

// Display Student Cards
function displayStudents(studentList) {

    const details = studentList.map((student) => {

        return `
            <div class="student-card">
                <h3>${student.name}</h3>
                <p><strong>Class:</strong> ${student.class}</p>
                <p><strong>Marks:</strong> ${student.marks}</p>
                <p><strong>Address:</strong> ${student.address}</p>
            </div>
        `;

    });

    document.getElementById("students").innerHTML = details.join("");

}

// Display all students initially
displayStudents(students);

// Search Functionality
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().startsWith(searchValue);
    });

    displayStudents(filteredStudents);

});