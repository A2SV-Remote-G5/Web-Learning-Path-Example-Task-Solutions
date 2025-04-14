import onDelete from "./onDeleteEventListener.js";
import onEdit from "./onEditEventListener.js";



const addtask = () => {
    // Get the task list element by id
    const taskList = document.getElementById("taskList");

    // Create li element for the new task
    const newtask = document.createElement("li");

    // Create span element and insert the text on the input element into it
    const curtaskText = document.createElement("span");
    curtaskText.innerHTML = document.getElementById("taskinput").value;

    // Create a button to edit the task and name it "Edit"
    const curtaskEdit = document.createElement("button");
    curtaskEdit.textContent = "Edit";

    // Add the onEdit event listener to the edit button
    curtaskEdit.addEventListener("click", onEdit)

    // Create a button to delete the task
    const curtaskDelete = document.createElement("button");
    curtaskDelete.textContent = "Delete";

    // Add the onDelete event listener to the delete button
    curtaskDelete.addEventListener("click", onDelete)

    
    // Add the span, edit, and delete buttons to li element
    newtask.appendChild(curtaskText);
    newtask.appendChild(curtaskEdit);
    newtask.appendChild(curtaskDelete);
    
    // Add the newtask to the task list
    taskList.appendChild(newtask);
}


export default addtask;

