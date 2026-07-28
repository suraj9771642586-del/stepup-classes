// ===========================
// StepUp Classes Script
// ===========================
// Smooth Scroll (sirf # links ke liye)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){

        const href = this.getAttribute('href');

        if(href.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(href);

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });
});
// Header Effect
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="#08306b";

    }else{

        header.style.background="#0d47a1";

    }

});

// Card Hover
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="45px";
topBtn.style.height="45px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#1565c0";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Welcome Message

console.log("Welcome to StepUp Classes");
