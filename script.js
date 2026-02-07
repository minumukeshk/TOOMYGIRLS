let girl="";
let message="";
let i=0;

function start(){
girl=document.getElementById("name").value;
if(!girl) return alert("Your gorgeous name here ✨🥺");

message=`Too my prettiest  ${girl} 💕

I love you and miss you more than I can ever explain. Every single day, something reminds me of you — our fun, our laughter, those silly little moments that meant everything to me. Truly… those were the days when I genuinely felt happy, when I was really enjoying my college life. Being with you made even ordinary days feel special.

I just wanted to make this a little meaningful, because you honestly deserve nothing but the best — always, my bbg 🤍  
I hope you and your family are doing well. I pray that God keeps your family safe, healthy, and surrounded with endless blessings.

Whenever I miss you, ${girl}, I open my Miluulu account and look back at our memories… and that’s when I realize how truly happy I was with you all. Those moments still replay in my mind, and for a while, everything feels warm again. Life feels different now, not the same anymore, but I’m trying my best to stay strong and move forward.

How are you these days? Are you taking care of yourself?  
Just know that somewhere, there’s a heart that still loves you deeply.

I love you with all my heart — truly.  
Please always keep in touch with me… you’re my own, forever. I don’t want to lose you, not even slowly. And please don’t forget me, okay? 😌  

Your cutie misses you every single day, more than words can say.

Always yours  
Min 💖`;

document.getElementById("app").innerHTML=`
<h3>I LUV YOU SOO MUCH… 🥺</h3>
<div id="typing"></div><span class="cursor"></span>
`;

typeWriter();
floating();
}

function typeWriter(){
if(i < message.length){
document.getElementById("typing").innerHTML += message.charAt(i);
i++;
setTimeout(typeWriter,30);
}else{
document.getElementById("app").innerHTML += `
<button onclick="galentine()">Next 💗</button>
`;
}
}



/* hearts + flowers */

function floating(){
setInterval(()=>{
let e=document.createElement("div");
e.className="float";
e.innerHTML=Math.random()>.5?"💗":"🌸";
e.style.left=Math.random()*100+"%";
e.style.fontSize=Math.random()*25+15+"px";
document.body.appendChild(e);
setTimeout(()=>e.remove(),10000);
},500);
}
function nextPage(){
document.getElementById("app").innerHTML=`
<h2>Will you be my Galentine, my bbg? 🥺💗</h2>
<div class="heart-btn" onclick="breakHeart()">💗</div>
`;
}

function breakHeart(){
document.querySelector(".heart-btn").innerHTML="💔";
flowers();

setTimeout(()=>{
document.body.innerHTML+=`
<div class="popup">
<div class="popup-card">She said YES 😭💗</div>
</div>
`;
},500);
}

function flowers(){
setInterval(()=>{
let f=document.createElement("div");
f.className="flower";
f.innerHTML="🌸";
f.style.left=Math.random()*100+"%";
f.style.fontSize=Math.random()*25+15+"px";
document.body.appendChild(f);
setTimeout(()=>f.remove(),6000);
},200);
}

function galentine(){
document.getElementById("app").innerHTML=`
<div class="galentine">
<h2>Will you be my Galentine BBG? 🥺</h2>

<div class="big-heart" onclick="yes()">💗</div>

<br><br>

<button onclick="yes()">Yes 💕</button>
<button class="no-btn" onmouseover="run(this)">No 😅</button>
</div>
`;
}

function run(btn){
btn.style.position="absolute";
btn.style.left=Math.random()*80+"%";
btn.style.top=Math.random()*80+"%";
}

function yes(){
document.body.classList.add("full-love");

/* popup message */
document.body.innerHTML += `
<div class="popup">
  <div class="popup-card">
    OMG 😭💗  
    You just made my whole heart smile.  
    My Galentine forever 🌸
  </div>
</div>
`;

/* hearts + flowers + clouds explosion */
setInterval(()=>{
let e=document.createElement("div");
e.className="float";
e.innerHTML=["💗","🌸","☁️"][Math.floor(Math.random()*3)];
e.style.left=Math.random()*100+"%";
e.style.fontSize=Math.random()*40+20+"px";
document.body.appendChild(e);
setTimeout(()=>e.remove(),6000);
},200);
}

