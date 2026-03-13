let nameInput = document.querySelector("#expenseName");
let amountInput = document.querySelector("#expenseAmount");
let categoryInput = document.querySelector("#expensecategory");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");
let total = document.querySelector("#totalExpenses");

button.addEventListener("click", expenseHandler);

function expenseHandler() {

    let name = nameInput.value;
    let amount = Number(amountInput.value);
    let category = categoryInput.value;

    if (name == "" || amountInput.value == "" || category == "") {
        alert("Please enter complete expense details");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + amount + " (" + category + ")";
    list.appendChild(li);

    total.value = Number(total.value) + amount;

    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = " Delete";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        total.value = Number(total.value) - amount;
        list.removeChild(li);
    });

    let updateButton = document.createElement("button");
    updateButton.innerText = " Update";
    li.appendChild(updateButton);

    updateButton.addEventListener("click", function () {

        let textbox = document.createElement("input");
        textbox.type = "number";
        textbox.value = amount;

        li.appendChild(textbox);

        li.removeChild(updateButton);
        li.removeChild(deleteButton);

        let done = document.createElement("button");
        done.innerText = " Done";
        li.appendChild(done);

        done.addEventListener("click", function(){

            let newAmount = Number(textbox.value);

            if (textbox.value == "") {
                alert("Please enter expense details");
                return;
            }

            // adjust total
            total.value = Number(total.value) - amount + newAmount;

            amount = newAmount;

            li.firstChild.nodeValue = name + " - ₹" + amount + " (" + category + ")";

            li.removeChild(textbox);
            li.removeChild(done);

            li.appendChild(deleteButton);
            li.appendChild(updateButton);
        });
    });
}