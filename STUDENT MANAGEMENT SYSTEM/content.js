document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("studentForm");
    const submitBtn = document.getElementById("submitBtn");
    const studentsList = document.getElementById("students");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const age = document.getElementById("age");
        const grade = document.getElementById("grade");

        if (name && age && grade) {
            const studentItem = document.createElement("li");
            studentItem.textContent = `Name: ${name.value}, Age: ${age.value}, Grade: ${grade.value}`;
            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", deleteStudent);
            studentItem.appendChild(deleteBtn);
            
            studentsList.appendChild(studentItem);
            
            // Clear form inputs
            studentForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    function deleteStudent(event) {
        event.target.parentElement.remove();
    }
});

