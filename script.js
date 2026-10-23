// برای افزودن یا ویرایش بازی‌ها، موارد این فهرست را تغییر بده.
const games = [
  {name:"Stronghold Crusader HD",category:"استراتژیک",price:"پولی",free:false,art:"SC",description:"ساخت قلعه و نبردهای استراتژیک در فضای جنگ‌های صلیبی.",platform:"Windows",url:"https://store.steampowered.com/search/?term=Stronghold%20Crusader"},
  {name:"Counter-Strike 2",category:"اکشن",price:"رایگان",free:true,art:"CS2",description:"تیراندازی رقابتی تیمی؛ دریافت از صفحه رسمی Steam.",platform:"Windows",url:"https://store.steampowered.com/app/730/"},
  {name:"War Thunder",category:"جنگی",price:"رایگان",free:true,art:"WT",description:"نبردهای آنلاین با هواپیما، تانک و وسایل نقلیه نظامی.",platform:"Windows",url:"https://warthunder.com/"},
  {name:"Brawlhalla",category:"مبارزه‌ای",price:"رایگان",free:true,art:"BH",description:"بازی مبارزه‌ای سریع و رایگان با حالت‌های چندنفره.",platform:"Windows",url:"https://store.steampowered.com/app/291550/"}
];
const grid=document.getElementById("grid"),search=document.getElementById("search"),count=document.getElementById("count"),empty=document.getElementById("empty");
let filter="همه";
function render(){
 const q=search.value.trim().toLocaleLowerCase("fa");
 const list=games.filter(g=>(filter==="همه"||g.category===filter)&&(g.name+" "+g.category+" "+g.description).toLocaleLowerCase("fa").includes(q));
 grid.innerHTML=list.map(g=>`<article class="card"><div class="art" aria-hidden="true">${g.art}</div><div class="card-content"><div class="card-title"><h3>${g.name}</h3><span class="price ${g.free?"":"paid"}">${g.price}</span></div><p>${g.description}</p><div class="tags"><span class="tag">${g.category}</span><span class="tag">${g.platform}</span></div><a class="download" href="${g.url}" target="_blank" rel="noopener noreferrer">صفحه رسمی / دریافت</a></div></article>`).join("");
 count.textContent=list.length.toLocaleString("fa")+" بازی";empty.hidden=list.length>0;
}
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filters .active")?.classList.remove("active");b.classList.add("active");filter=b.dataset.filter;render()}));
search.addEventListener("input",render);
document.getElementById("year").textContent=new Date().getFullYear().toLocaleString("fa");
render();

