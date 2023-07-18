let scrollPercentage= () =>{
    let scrollprogress = document.getElementById("progressBar");
    let progressValue = document.getElementById("progressvalue");
    let pos= document.documentElement.scrollTop;
    let caclHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos*100/caclHeight);
    //console.log(scrollValue);
    scrollprogress.style.background=`conic-gradient(#796168 ${scrollValue}%, #FEE3EC ${scrollValue}%)`;
    progressValue.textContent=`${scrollValue}%`;
}
window.onscroll=scrollPercentage;