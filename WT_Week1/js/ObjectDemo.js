const CarObj={
    productId:"12900",
    name:"car",
    price:"300000",
    speciality:"Easy to ride and more reliable",
};
const PhoneObj={
    productId:"78910",
    name:"i-phone",
    price:"100000",
    speciality:"Easy to use and more secure",
};
const LaptopObj={
    productId:"689900",
    name:"laptop",
    price:"200000",
    speciality:"Easy to trustable and gave more facility",
};
const ele=document.getElementById("idShowDetails");
function showDetails(obj){
    const tableEle=document.createElement("table");
    const tableTr1=document.createElement("tr");
    const tableTr2=document.createElement("tr");
    const tableTr3=document.createElement("tr");
    const tableTd1=document.createElement("td");
    const tableTd2=document.createElement("td");
    const tableTd3=document.createElement("td");
    if(obj=="CarObj"){
        tableTd1.textContent=name;
        tableTd2.textContent=price;
        tableTd3.textContent=speciality;
    }
    tableTr1.appendChild(tableTd1);
    tableTr2.appendChild(tableTd2);
    tableTr3.appendChild(tableTd3);
    tableEle.appendChild(tableTr1);
    document.getElementById("idShowDetails").appendChild(tableEle);
    return false;
}