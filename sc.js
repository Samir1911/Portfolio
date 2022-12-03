var sc=document.querySelector("#sc");
var pre=document.querySelector("#preview");
var close=document.querySelector("#close");
var btns=document.querySelectorAll("#btns button");
var frm=document.querySelector("iframe");
sc.addEventListener("click",function(){
    pre.style.display="grid";
})
close.addEventListener("click",function(){
    pre.style.display="none";
})

{/* <section id="preview">
        <div>
            <div>
                <div id="btns">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button id="prevbtn">Preview</button>
                    <img id="close" src="images/close.svg" alt="">
                </div>
                <iframe src="html.txt" frameborder="0"></iframe>
            </div>
            <img id="res" src="images/Resume.png" alt="">
        </div>
    </section> */}

btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        btns.forEach(bt=>{
            bt.style.background="rgb(237, 240, 237)";
        })
        btn.style.background="linear-gradient(to bottom left,rgb(1, 214, 243),rgb(11, 240, 11))";
        if(btn==btns[0]){frm.src="html.txt";}    
        else if(btn==btns[1]){frm.src="css.txt";}
        else{
            frm.src="res.html";
        }
    })
})