//your code here
const tbody=document.getElementById("tbody");


const values=[{num:332432,name:"fdsf"},{num:4322,name:"knfkf"}];
values.forEach((ele,ind)=>{
	const trow=document.createElement("tr");
	trow.className="trow";
	const tdnum=document.createElement("td");
	const tdname=document.createElement("td");
	tdnum.innerText=ele.num;
	tdname.innerText=ele.name;
	trow.appendChild(tdnum);
	trow.appendChild(tdname);

	tbody.append(trow);
})