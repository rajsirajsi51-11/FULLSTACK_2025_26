// Select Post Job form
let postForm = document.querySelector(".post form");

// Select Available Jobs section
let jobsSection = document.querySelector(".jobs");

postForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // Get form values
    let company = document.getElementById("company-name").value;
    let position = document.getElementById("job-position").value;
    let location = document.getElementById("job-location").value;
    let description = document.getElementById("job-description").value;
    let salary = document.getElementById("salary-range").value;

    // Validation
    if (company == "" || position == "" || location == "") {
        alert("Please fill all required fields");
        return;
    }

    // Create job container
    let jobDiv = document.createElement("div");
    jobDiv.style.border = "1px solid black";
    jobDiv.style.padding = "10px";
    jobDiv.style.margin = "10px 0";

    // Add job details
    jobDiv.innerHTML =
        "<h3>" + position + "</h3>" +
        "<p><strong>Company:</strong> " + company + "</p>" +
        "<p><strong>Location:</strong> " + location + "</p>" +
        "<p><strong>Description:</strong> " + description + "</p>" +
        "<p><strong>Salary:</strong> " + salary + "</p>";

    // Create Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    jobDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        jobsSection.removeChild(jobDiv);
    });

    // Create Update button
    let updateBtn = document.createElement("button");
    updateBtn.innerText = " Update";
    jobDiv.appendChild(updateBtn);

    updateBtn.addEventListener("click", function () {

    // Get current values
    let currentPosition = jobDiv.querySelector("h3").innerText;
    let paragraphs = jobDiv.querySelectorAll("p");

    let currentCompany = paragraphs[0].innerText.replace("Company: ", "");
    let currentLocation = paragraphs[1].innerText.replace("Location: ", "");
    let currentDescription = paragraphs[2].innerText.replace("Description: ", "");
    let currentSalary = paragraphs[3].innerText.replace("Salary: ", "");

    // Clear jobDiv
    jobDiv.innerHTML = "";

    // Create input fields
    let posInput = document.createElement("input");
    posInput.value = currentPosition;

    let compInput = document.createElement("input");
    compInput.value = currentCompany;

    let locInput = document.createElement("input");
    locInput.value = currentLocation;

    let descInput = document.createElement("input");
    descInput.value = currentDescription;

    let salInput = document.createElement("input");
    salInput.value = currentSalary;

    let saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";

    jobDiv.appendChild(posInput);
    jobDiv.appendChild(compInput);
    jobDiv.appendChild(locInput);
    jobDiv.appendChild(descInput);
    jobDiv.appendChild(salInput);
    jobDiv.appendChild(saveBtn);

    saveBtn.addEventListener("click", function () {

        if (posInput.value == "" || compInput.value == "" || locInput.value == "") {
            alert("Please fill required fields");
            return;
        }

        jobDiv.innerHTML =
            "<h3>" + posInput.value + "</h3>" +
            "<p><strong>Company:</strong> " + compInput.value + "</p>" +
            "<p><strong>Location:</strong> " + locInput.value + "</p>" +
            "<p><strong>Description:</strong> " + descInput.value + "</p>" +
            "<p><strong>Salary:</strong> " + salInput.value + "</p>";

        jobDiv.appendChild(deleteBtn);
        jobDiv.appendChild(updateBtn);
    });

});

    // Add job to Available Jobs section
    jobsSection.appendChild(jobDiv);

    // Clear form
    postForm.reset();
});
