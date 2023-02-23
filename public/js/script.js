//console.log("hello world");

let result=document.getElementById("main");
async function searchDb(searchText){
    const res= await fetch(`http://localhost:5000/search?q=${searchText}`);
    const data=await res.json();
    console.log(data);
    data.forEach(element => {
      console.log(element);
      let newDiv=document.createElement("div");
      newDiv.setAttribute("id","main-div");
      //console.log(newDiv);
       newDiv.textContent=element.name;
       result.append(newDiv);

    });
}
const searchInput=document.getElementById("userinput");
searchInput.addEventListener("keyup",()=>{
    let searchText=searchInput.value;
    console.log(searchText);
    searchDb(searchText);
})