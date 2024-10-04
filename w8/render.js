const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const renderbtnDel = false;
    if (renderbtnDel) {
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const headingTextArr = ["Name", "HouseHold", "House Size", "Footprint", "Actions"];
        headingTextArr.forEach(function (text) {
            const th = document.createElement("th");
            th.textContent = text;
            tr.appendChild(th);
        });
            thead.appendChild(tr);
            table.appendChild(thead);
        }
    return table
}

// I think I did this part backwards or something but headings do not show up on submit 

function renderTblBtn(index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function (e) {
        console.log('Hello from inside the delete button');
        console.log(e)
        data.splice(index, 1);
        renderTbl(data);
    })
    btnEdit.addEventListener('click', function (e) {
        const editForm = document.getElementById('edit-form');
        editForm.elements['Name'].value = obj.name;
        editForm.elements['HouseHold'].value = obj.houseHold;
        editForm.elements['House Size'].value = obj.houseSize;
        editForm.elements['Footprint'].value = obj.footPrint;

        editForm.dataset.index = index;
        editForm.style.display = 'block';
    });
    return td;
}

// getting null on editform elements not sure how to correct this

function renderTblBody(data) {
    const tbody = document.createElement("tbody");
    data.forEach(function (obj, index) {
        console.log(index)
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {
            if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
};

export { renderTbl };

// getting a reference error at line 56, not sure what should be there instead of copydata.