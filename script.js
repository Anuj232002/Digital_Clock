setInterval(()=>{
let hour=document.getElementById('hours');
let min=document.getElementById('minutes');
let sec=document.getElementById('seconds');
let ap=document.getElementById('ampm');

let day=document.getElementById('day');
let month=document.getElementById('month');
let year=document.getElementById('year');


let d=new Date().getDate();
let mo=new Date().getMonth();
let y=new Date().getFullYear();


let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let am=h>=12 ? "PM":"AM";

if(h>12)
{
    h=h-12;
}

h=(h<10) ? "0"+h:h;
m=(m<10) ? "0"+m:m;
s=(s<10) ? "0"+s:s;

d=(d<10) ? "0"+d:d;
mo=(mo<10) ? "0"+mo:mo;


day.innerHTML=d;
month.innerHTML=mo;
year.innerHTML=y;




hour.innerHTML=h;
min.innerHTML=m;
sec.innerHTML=s;
ap.innerHTML=am;
})