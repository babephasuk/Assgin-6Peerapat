let items = [];

function addItem() {
    let input = prompt("กรอกข้อมูลที่ต้องการ เพิ่มลงในรายการ:");
    
    if (input !== null && input !== "") {
        items.push(input);
    }

    displayList();
}

function displayList() {
    let listElement = document.getElementById("list");
    listElement.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        listElement.appendChild(li);
    }
}