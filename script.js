var qlist=document.getElementsByClassName("query");
var i;

for ( i=0; i<qlist.length; i++){
    qlist[i].addEventListener("click", function(){
        this.classList.toggle("show");
        var img=this.getElementsByTagName('img')[0];
        var answer=this.nextElementSibling;
        if (answer.style.display==="block") {
            img.src="./assets/images/icon-plus.svg";
            answer.style.display="none";
        }
        else {
            img.src="./assets/images/icon-minus.svg";
            answer.style.display="block";
        }
        if (answer.style.maxHeight) answer.style.maxHeight=null;
        else answer.style.maxHeight=answer.scrollHeight + "px";
    });
}