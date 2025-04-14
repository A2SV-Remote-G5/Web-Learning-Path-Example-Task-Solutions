const onEdit = function() {
    // Get the parent element or the task element i.e li
    const parent = this.parentElement;
    
    // Check the button text whether it's "Edit" or "update"
    if (this.textContent == "Edit") {

        // if the button is "Edit", create a new input element
        const newinput = document.createElement("input");

        // Get the original task name and assign it to the new input value as an initial value
        const task = parent.querySelector("span")
        newinput.value = task.textContent;

        // Replace the span element with the new input element and the button name to "update"
        parent.replaceChild(newinput, task);
        this.textContent = "Update";
        
    } else{
        // if the button is "update", Get the input and create span element with the input value text
        const inputF = parent.querySelector("input");
        const newTask = document.createElement("span");
        newTask.textContent = inputF.value

        // Replace the input element with the new span element and the button name to "Edit"
        parent.replaceChild(newTask, inputF);
        this.textContent = "Edit";
    }

}

export default onEdit;