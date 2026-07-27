const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function scrollToTarget(selector){
  const target=$(selector);
  if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
}

$("#openBook").addEventListener("click",()=>scrollToTarget("#chapter-school"));
$$('[data-next]').forEach(button=>button.addEventListener('click',()=>scrollToTarget(button.dataset.next)));

const names=["Drumil","Dhruvi","Drumil?","Dhruvi!?"];
let nameIndex=0;
setInterval(()=>{const el=$("#nameGlitch");if(el){nameIndex=(nameIndex+1)%names.length;el.textContent=names[nameIndex];}},900);

$("#yesButton").addEventListener("click",()=>{
  $("#yesReveal").classList.add("show");
  $("#yesButton").textContent="You did. ♡";
  $(".hidden-until-yes").classList.add("visible-next");
  burstFlowers();
});

$$('.memory-chip').forEach(button=>button.addEventListener('click',()=>{
  $("#distanceMessage").textContent=button.dataset.message;
}));

$$('.room-object').forEach(button=>button.addEventListener('click',()=>{
  $("#apartmentMemory").textContent=button.dataset.memory;
}));

$("#loveButton").addEventListener("click",()=>{
  $("#loveButton").style.display="none";
  $("#loveLineOne").classList.add("show");
  setTimeout(()=>$("#loveLineTwo").classList.add("show"),1300);
  setTimeout(()=>{
    $("#loveCaption").classList.add("show");
    $(".hidden-love-next").classList.add("visible-next");
  },2500);
});

function showToast(message){
  const toast=$("#toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),3200);
}

function burstFlowers(){
  for(let i=0;i<24;i++){
    const item=document.createElement('span');item.textContent=i%2?'❀':'♡';
    item.style.cssText=`position:fixed;left:${45+Math.random()*10}vw;top:${45+Math.random()*10}vh;z-index:180;font-size:${16+Math.random()*22}px;color:${i%2?'#dba56c':'#bc657a'};pointer-events:none;transition:transform 1.8s ease-out,opacity 1.8s;`;
    document.body.appendChild(item);
    requestAnimationFrame(()=>{item.style.transform=`translate(${(Math.random()-.5)*500}px,${(Math.random()-.5)*500}px) rotate(${Math.random()*360}deg)`;item.style.opacity=0;});
    setTimeout(()=>item.remove(),2000);
  }
}

$("#finalSurprise").addEventListener("click",()=>{
  showToast("Our story is still being written, Dubu. ♡");
  for(let i=0;i<45;i++){
    const heart=document.createElement('span');heart.className='floating-heart';heart.textContent=i%3?'♡':'✦';
    heart.style.left=`${Math.random()*100}vw`;heart.style.fontSize=`${16+Math.random()*28}px`;heart.style.color=i%2?'#e997a7':'#f3d6a2';heart.style.animationDelay=`${Math.random()*1.5}s`;
    $("#hearts").appendChild(heart);setTimeout(()=>heart.remove(),5600);
  }
});

const audio=$("#ambientAudio"),soundButton=$("#soundButton");
soundButton.addEventListener("click",async()=>{
  try{
    if(audio.paused){await audio.play();soundButton.textContent='❚❚';soundButton.classList.add('playing');showToast('Playing your song');}
    else{audio.pause();soundButton.textContent='♪';soundButton.classList.remove('playing');}
  }catch{showToast('Add an MP3 at assets/audio/our-song.mp3');}
});

// Personalized photo memories
const photoModal = $("#photoModal");
const modalPhoto = $("#modalPhoto");
const modalCaption = $("#modalCaption");
function openPhoto(src, caption){
  modalPhoto.src = src;
  modalCaption.textContent = caption || "One of our favorite memories. ♡";
  photoModal.classList.add("open");
  photoModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closePhoto(){
  photoModal.classList.remove("open");
  photoModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$('[data-photo]').forEach(item => item.addEventListener('click', (event) => {
  event.stopPropagation();
  if(item.dataset.memory && $("#apartmentMemory")) $("#apartmentMemory").textContent = item.dataset.memory;
  openPhoto(item.dataset.photo, item.dataset.caption);
}));
$("#closePhotoModal").addEventListener("click", closePhoto);
photoModal.addEventListener("click", event => { if(event.target === photoModal) closePhoto(); });
document.addEventListener("keydown", event => { if(event.key === "Escape") closePhoto(); });


// Chapter Six video memory
const videoModal = $("#videoModal");
const modalVideo = $("#modalVideo");
const videoCaption = $("#videoCaption");
function openVideo(src, caption){
  modalVideo.src = src;
  videoCaption.textContent = caption || "One of our favorite moments. ♡";
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalVideo.play().catch(() => {});
}
function closeVideo(){
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$('[data-video]').forEach(item => item.addEventListener('click', event => {
  event.stopPropagation();
  openVideo(item.dataset.video, item.dataset.caption);
}));
$("#closeVideoModal").addEventListener("click", closeVideo);
videoModal.addEventListener("click", event => { if(event.target === videoModal) closeVideo(); });
document.addEventListener("keydown", event => { if(event.key === "Escape" && videoModal.classList.contains("open")) closeVideo(); });
