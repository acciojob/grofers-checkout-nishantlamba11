const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let td=document.querySelectorAll(".price");
	let total=0
	 td.forEach((price)=>{
		total+=Number(price.innerText);
		
	 
	 })
	let div=document.createElement("div")
	 div.id="ans"
	    div.innerText=` total:${total} `
	 	document.body.append(div)
};

getSumBtn.addEventListener("click", getSum);

