let div = document.createElement("div");
div.setAttribute("id", "myButtonDiv");
let formdiv = document.getElementsByClassName('form-div');

let divStyleObj = {
    marginTop: "10px",
    display: "flex",
    gap: "20vw",
    justifyContent: "center"
};
Object.assign(div.style, divStyleObj);

let btn1 = document.createElement("button");
btn1.innerHTML = "Print Invoice";
let buttonStyles = {
    backgroundColor: "#333",
    color: "white",
    border: "2px solid white",
    width: "10vw",
    height: "10vh",
    fontSize: "1.2rem",
    borderRadius: "30%",
    boxShadow: "3px 3px 3px lightgray",
	cursor:'pointer'
};
btn1.style.padding = "auto";
Object.assign(btn1.style, buttonStyles);


function printpage() {
    var buttonDiv = document.getElementById("myButtonDiv");
    buttonDiv.style.display = "none";
    
    formdiv[0].setAttribute('style','height:600px;');
    console.log(formdiv[0].classList);
    window.print();
    buttonDiv.style.display = "block";
    let divStyleObj = {
        marginTop: "10px",
        display: "flex",
        gap: "20vw",
        justifyContent: "center",
    };
    Object.assign(buttonDiv.style, divStyleObj);

}
btn1.addEventListener("click", () => {
    printpage();
});


let btn2 = document.createElement("button");
btn2.innerHTML = "Go Back";
Object.assign(btn2.style, buttonStyles);

btn2.addEventListener("click", () => {
    window.location.reload("Refresh");
});

div.append(btn1, btn2);
// let body = document.getElementsByTagName("body")[0];
formdiv[0].appendChild(div);



