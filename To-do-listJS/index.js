function getAndUpdate(){
    console.log("Updating..");
    tit = document.getElementById('title').value;
    des = document.getElementById('description').value;
    console.log(tit,des);
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        if(tit!="" && des!="")
        {
            itemJsonArray.push([tit, des]);
        }
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        if(tit!="" && des!="")
        {
            itemJsonArray.push([tit, des]);
        }
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    update();
}
function update(){
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
       
    }
   let tableBody = document.getElementById("tableBody");
    let str="";
    itemJsonArray.forEach((element,index) => {
        str+=`
        <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onClick="deleted(${index})">Delete</button></td>
            </tr>
        `;
    });
    tableBody.innerHTML = str;
    
}
let add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex){
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}