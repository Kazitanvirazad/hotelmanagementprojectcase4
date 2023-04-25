let form=document.getElementById("myform");
let flag=false;
form.addEventListener("submit",(evt)=>{
    let message=[];
    let mobile_no=document.getElementById("mobile").value;
    if(String(mobile_no).length>10 || String(mobile_no).length<10){
        message.push("Mobile number should contain 10 digits");
    }
    else{
        let matched=mobile_no.match('[6-9]+[0-9]{9}');
        console.log(matched);
        if(matched==null){
           message.push("Mobile number must not start with 0");
        }
        console.log(message);
    }
    if(message.length>0){
        let div=document.getElementById("div");
        div.innerHTML=message.join("<br><br>");
        // create styles object
        const styles = {
              width: '100%',
              height: '10vh',
              color: 'white',
              textAlign:"center",
              paddingTop:"20px"
             };
        // apply styles to the div
        Object.assign(div.style, styles);
        evt.preventDefault();
        
        }
});



