const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    //const headingTextArr = ["Name", "HouseHold", "House Size", "Footprint", "Actions"];
    const headingTextArr = ["Name", "Footprint"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    
    data.forEach(function (obj) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = obj.name;
        const tdTotal = document.createElement("td");
        tdTotal.textContent = obj.cfpTotal;
        tr.appendChild(tdName);
        tr.appendChild(tdTotal);
        tbody.appendChild(tr)
    });
   //  const td = document.createElement("td");
   //  const btnEdit = document.createElement("button");
   //  const btnDel = document.createElement("button");
   //  btnEdit.textContent = "Edit";
   //  btnDel.textContent = "Del";
   //  td.appendChild(btnEdit);
   //  td.appendChild(btnDel);
   //  tr.appendChild(td);
    // tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export { renderTbl };

// I understand modules to an extent in that they are used to organize code and prevent clutter in another file