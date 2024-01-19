const body = document.body;
const aff = document.querySelector('affiche');
//const recup = document.querySelector('add');

const sidebar = document.querySelector('.main-sidebar');
const openSidebar = document.querySelector('#openSidebar');
const closeSidebar = document.querySelector('#closeSidebar');
const toggleTheme = document.querySelector('.toggle-theme');
const light = toggleTheme.children[0];
const dark = toggleTheme.children[1];
const inputFields = document.querySelectorAll('.percentage p');

openSidebar.addEventListener('click', openSidebarFunction);
closeSidebar.addEventListener('click', closeSidebarFunction);
toggleTheme.addEventListener('click', changeTheme);
//recup.addEventListener('click', AjoutElement);

function openSidebarFunction() {
    sidebar.style.left = '0%';
}

function closeSidebarFunction() {
    sidebar.style.left = '-100%';
}

function changeTheme() {
    if (body.classList.contains('dark-mode')) {
        lightMode();
    } else if (!body.classList.contains('dark-mode')) {
        darkMode();
    }
}

inputFields.forEach((e, i) => {
    let val = parseInt(e.textContent);
    console.log(val);
    let circle = document.getElementById(`circle${i + 1}`);
    let r = circle.getAttribute('r');
    let circ = Math.PI * 2 * r;
    let counter = 0;
    let fillValue = (circ * (100 - val)) / 100;
    setInterval(() => {
        if (counter === val) {
            clearInterval();
        } else {
            counter += 1;
            e.innerText = counter + '%';
            circle.style.strokeDashoffset = fillValue;
        }
    }, 1000 / val);
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}

function darkMode() {
    body.classList.add('dark-mode');
    light.classList.remove('active');
    dark.classList.add('active');
}

function lightMode() {
    body.classList.remove('dark-mode');
    dark.classList.remove('active');
    light.classList.add('active');
}
let rIndex,
table= document.getElementById('body');

function controleEntrer()
{
    let estinserer=true;
    days = document.getElementById('day').value,
   heure = document.getElementById('hour').value,
   quartier = document.getElementById('quate').value,
   rue = document.getElementById('ru').value,
   equipe = document.getElementById('team').value;
   if(days==""){
    alert("le jour na pas ete entrer");
    estinserer=true;
   }
   if(heure==""){
    alert("l heure na pas ete entrer");
    estinserer=true;
}
if(quartier==""){
    alert("le quartier na pas ete entrer");
    estinserer=true;
}
if(rue==""){
    alert("la rue na pas ete entrer");
    estinserer=true;
}
if(equipe==""){
    alert("l equipe na pas ete entrer");
    estinserer=true;
}

return estinserer;


}
   


function AjoutElement(){
    if(controleEntrer())
    {
let newrow = table.insertRow(table.length),
  cel1= newrow.insertCell(0),
  cel2= newrow.insertCell(1),
  cel3 = newrow.insertCell(2),
  cel4= newrow.insertCell(3),
  cel5 =newrow.insertCell(4),
   days = document.getElementById('day').value,
   heure = document.getElementById('hour').value,
   quartier = document.getElementById('quate').value,
   rue = document.getElementById('ru').value,
   equipe = document.getElementById('team').value;

   cel1.innerHTML= days;
   cel2.innerHTML= heure;
   cel3.innerHTML= quartier;
   cel4.innerHTML= rue;
   cel5.innerHTML= equipe;
   console.log(table);
   
}
}
function selecteligne(){
    let rIndex,table=document.getElementById('body');
    for(let i =1;i<table.rows.length;i++){
        table.rows[i+1].onclick= function(){
            rIndex= this.rowIndex;
            console.log(rIndex);
            document.getElementById('day').value=this.cells[0].innerHTML;
            document.getElementById('hour').value=this.cells[1].innerHTML;
            document.getElementById('quate').value=this.cells[2].innerHTML;
            document.getElementById('ru').value=this.cells[3].innerHTML;
            document.getElementById('team').value=this.cells[4].innerHTML;
        };
    }
}
    selecteligne();
function modifiertable()
{
    let days = document.getElementById('day').value,
        heure= document.getElementById('hour').value,
        quartier= document.getElementById('quate').value,
        rue =document.getElementById('ru').value,
        equipe= document.getElementById('team').value;
     if(!controleEntrer()){
        table.rows[rIndex].cells[0].innerHTML=jour;
        table.rows[rIndex].cells[0].innerHTML=heure;
        table.rows[rIndex].cells[0].innerHTML=quartier;
        table.rows[rIndex].cells[0].innerHTML=rue;
        table.rows[rIndex].cells[0].innerHTML=equipe;
        console.log(table);
     }

}
function supprimertable()
{
    table.deleteRow(rIndex);
    document.getElementById('day').value=" ";
    document.getElementById('hour').value=" ";
    document.getElementById('quate').value=" ";
    document.getElementById('ru').value=" ";
    document.getElementById('team').value=" ";
}
