'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const asset=name=>'assets/'+name;
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const projects=window.PROJECTS, scenarios=window.SCENARIOS, methods=window.METHODS;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let activeProject=null, currentGallery=[], imageIndex=0, selectedDuration=3, returnFocus=null, priorHash='#work';
const projectDialog=$('#project-dialog'), imageDialog=$('#image-dialog');
function projectCard(p,i){
 const visual=p.cardImage?`<img src="${asset(p.cardImage)}" alt="${escapeHTML((p.images.find(im=>im[0]===p.cardImage)||p.images[0])[1])}" loading="lazy" width="900" height="550"><span class="card-number">PROJECT ${String(i+1).padStart(2,'0')}</span>`:`<span class="card-number">PROJECT ${String(i+1).padStart(2,'0')}</span><span class="type-num">${p.typeNumber}</span><span class="type-label">${p.typeLabel}</span>`;
 return `<article class="project-card ${i>1?'compact':''}" data-group="${p.group}"><button class="card-image ${p.cardImage?'':`type-card ${p.typeStyle}`}" data-project="${p.id}" aria-label="Explore ${escapeHTML(p.title)}">${visual}<span class="card-open" aria-hidden="true">↗</span></button><div class="card-caption"><span>${p.category}</span><span>${p.period}</span></div><button class="card-title" data-project="${p.id}">${p.shortTitle}</button><p class="card-description">${p.cardDescription}</p><div class="card-foot"><strong>${p.metric}</strong><button data-project="${p.id}" aria-label="Read ${escapeHTML(p.title)} case study">View study ↗</button></div></article>`;
}
$('#project-grid').innerHTML=projects.map(projectCard).join('');
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
 $$('[data-filter]').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',on)});
 let count=0;$$('.project-card').forEach(card=>{const show=b.dataset.filter==='all'||card.dataset.group===b.dataset.filter;card.hidden=!show;if(show)count++});$('#filter-status').textContent=`Showing ${count} projects`;
}));
function renderCase(p){
 const idx=projects.indexOf(p), next=projects[(idx+1)%projects.length];
 const gallery=p.images.map((im,i)=>`<figure><button data-image="${i}" aria-label="Enlarge: ${escapeHTML(im[1])}"><img src="${asset(im[0])}" alt="${escapeHTML(im[1])}" loading="lazy"><span>Enlarge ↗</span></button><figcaption>${im[1]}</figcaption></figure>`).join('');
 $('#case-content').innerHTML=`<div class="case-head"><p class="eyebrow">${p.category} / ${String(idx+1).padStart(2,'0')}</p><h2 id="case-title" tabindex="-1">${p.title}</h2><p class="case-summary">${p.summary}</p><div class="case-meta"><div><span>ORGANIZATION / CONTEXT</span><strong>${p.org}</strong></div><div><span>MY ROLE</span><strong>${p.role}</strong></div><div><span>WHEN</span><strong>${p.date}</strong></div></div></div><div class="case-tabs" role="tablist" aria-label="Case study sections"><button role="tab" id="case-tab-overview" aria-controls="case-overview" aria-selected="true" data-case-tab="overview">Overview</button><button role="tab" id="case-tab-methodology" aria-controls="case-methodology" aria-selected="false" tabindex="-1" data-case-tab="methodology">Methodology</button><button role="tab" id="case-tab-evidence" aria-controls="case-evidence" aria-selected="false" tabindex="-1" data-case-tab="evidence">Project evidence${p.images.length?' / '+p.images.length:''}</button></div><section class="case-panel" id="case-overview" role="tabpanel" tabindex="0" aria-labelledby="case-tab-overview"><div class="case-metrics">${p.metrics.map(m=>`<div><strong>${m[0]}</strong><span>${m[1]}</span></div>`).join('')}</div><div class="case-overview-grid"><div><h3>The engineering problem</h3><p>${p.problem}</p></div><div><h3>My contribution</h3><p>${p.contribution}</p></div></div>${p.cardImage?`<img class="case-cover" src="${asset(p.cardImage)}" alt="${escapeHTML((p.images.find(im=>im[0]===p.cardImage)||p.images[0])[1])}"><p class="case-cover-caption">${(p.images.find(im=>im[0]===p.cardImage)||p.images[0])[1]}</p>`:''}<h3>Scope of work</h3><ul class="case-bullets">${p.details.map(d=>`<li>${d}</li>`).join('')}</ul><div class="decision-note"><h3>What the work informs</h3><p>${p.decision}</p></div><div class="skill-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><p class="sources">${p.sources}</p></section><section class="case-panel" id="case-methodology" role="tabpanel" tabindex="0" aria-labelledby="case-tab-methodology" hidden><p class="eyebrow">THE TECHNICAL APPROACH</p>${p.methods.map((m,i)=>`<article class="methodology-row"><span>${String(i+1).padStart(2,'0')}</span><div><h3>${m[0]}</h3><p>${m[1]}</p></div></article>`).join('')}<details class="case-assumptions" open><summary>Scope, assumptions & interpretation</summary><p>${p.scope}</p></details><p class="sources">${p.sources}</p></section><section class="case-panel" id="case-evidence" role="tabpanel" tabindex="0" aria-labelledby="case-tab-evidence" hidden><p class="eyebrow">MODELS / MAPS / PROJECT MATERIALS</p>${p.video?`<figure class="case-video"><video controls playsinline preload="metadata" poster="${asset(p.video[1])}" aria-label="${escapeHTML(p.video[2])}"><source src="${asset(p.video[0])}" type="video/mp4"></video><figcaption>${p.video[2]}<br>Silent model visualization; use the playback controls to inspect its progression.</figcaption></figure>`:''}${p.images.length?`<div class="evidence-gallery">${gallery}</div>`:`<div class="evidence-empty"><h3>Documented professional experience</h3><p>${p.sources}</p><a class="quiet-link" href="resume.pdf" target="_blank" rel="noopener">View résumé ↗</a></div>`}<p class="sources">${p.sources}</p></section><div class="case-next"><span>NEXT CASE STUDY</span><button data-project="${next.id}">${next.shortTitle} ↗</button></div>`;
}
function openProject(id,updateHistory=true){
 const p=projects.find(p=>p.id===id);if(!p)return;
 if(!projectDialog.open){returnFocus=document.activeElement;priorHash=location.hash.startsWith('#project=')?'#work':location.hash||'#work'}
 activeProject=p;currentGallery=p.images;renderCase(p);if(!projectDialog.open)projectDialog.showModal();document.body.classList.add('modal-open');projectDialog.scrollTop=0;
 $('#case-title').focus({preventScroll:true});
 if(updateHistory)history.pushState({project:id},'',`#project=${id}`);
 pauseHero();
}
function closeProject(updateHistory=true){
 projectDialog.querySelectorAll('video').forEach(v=>v.pause());if(imageDialog.open)imageDialog.close();projectDialog.close();document.body.classList.remove('modal-open');activeProject=null;
 if(updateHistory&&location.hash.startsWith('#project='))history.replaceState(null,'',priorHash);
 if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b){openProject(b.dataset.project);if(b.dataset.openTab)caseTab(b.dataset.openTab)}});
$('.close-dialog').addEventListener('click',()=>closeProject());
projectDialog.addEventListener('cancel',e=>{e.preventDefault();closeProject()});
projectDialog.addEventListener('click',e=>{if(e.target===projectDialog){const r=projectDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject()}});
function caseTab(name){
 $$('[data-case-tab]').forEach(t=>{const on=t.dataset.caseTab===name;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});$$('.case-panel').forEach(p=>p.hidden=p.id!==`case-${name}`);
 projectDialog.querySelectorAll('video').forEach(v=>v.pause());
 const top=$('.case-tabs').offsetTop-$('.dialog-toolbar').offsetHeight; if(projectDialog.scrollTop>top)projectDialog.scrollTo({top,behavior:'instant'});
}
projectDialog.addEventListener('click',e=>{const tab=e.target.closest('[data-case-tab]');if(tab)caseTab(tab.dataset.caseTab);const im=e.target.closest('[data-image]');if(im)openImage(Number(im.dataset.image))});
function keyboardTabs(e,selector,activate){if(!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Home','End'].includes(e.key))return;const buttons=$$(selector),i=buttons.indexOf(e.target);if(i<0)return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?buttons.length-1:(i+(['ArrowRight','ArrowDown'].includes(e.key)?1:-1)+buttons.length)%buttons.length;activate(buttons[n]);buttons[n].focus()}
projectDialog.addEventListener('keydown',e=>keyboardTabs(e,'[data-case-tab]',b=>caseTab(b.dataset.caseTab)));
function openImage(i){if(!currentGallery.length)return;imageIndex=(i+currentGallery.length)%currentGallery.length;const [src,caption]=currentGallery[imageIndex];$('#large-image').src=asset(src);$('#large-image').alt=caption;$('#large-caption').textContent=caption;$('#image-counter').textContent=`${String(imageIndex+1).padStart(2,'0')} / ${String(currentGallery.length).padStart(2,'0')}`;$('#image-original').href=asset(src);$('#image-prev').hidden=$('#image-next').hidden=currentGallery.length<2;if(!imageDialog.open)imageDialog.showModal();}
$('#image-prev').addEventListener('click',()=>openImage(imageIndex-1));$('#image-next').addEventListener('click',()=>openImage(imageIndex+1));$('#image-close').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();openImage(imageIndex-1)}if(e.key==='ArrowRight'){e.preventDefault();openImage(imageIndex+1)}});
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#project='))openProject(decodeURIComponent(location.hash.slice(9)),false);else if(projectDialog.open)closeProject(false)});
function updateChart(){
 const period=Number($('#storm-return').value),row=scenarios.find(r=>r[0]===period&&r[1]===selectedDuration),[,,base,pond,reduction]=row;
 $('#existing-q').innerHTML=base.toFixed(1)+' <small>cfs</small>';$('#pond-q').innerHTML=pond.toFixed(1)+' <small>cfs</small>';
 $('#existing-bar').style.width=base/150*100+'%';$('#pond-bar').style.width=pond/150*100+'%';$('#reduction-value').innerHTML=reduction.toFixed(1)+'<span>%</span>';
 $('.comparison-chart').setAttribute('aria-label',`${period}-year ${selectedDuration}-hour storm: existing peak discharge ${base} cfs; candidate detention ${pond} cfs; ${reduction}% reported peak reduction.`);
 $$('[data-duration]').forEach(b=>{const on=Number(b.dataset.duration)===selectedDuration;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});
}
$('#storm-return').addEventListener('change',updateChart);$$('[data-duration]').forEach(b=>b.addEventListener('click',()=>{selectedDuration=Number(b.dataset.duration);updateChart()}));
$('#scenario-table').innerHTML=scenarios.map(r=>`<tr><th scope="row">${r[0]}-year</th><td>${r[1]} hr</td><td>${r[2].toFixed(1)}</td><td>${r[3].toFixed(1)}</td><td>${r[4].toFixed(1)}%</td></tr>`).join('');updateChart();
function setMethod(i){const m=methods[i];$$('[data-method]').forEach(b=>{const on=Number(b.dataset.method)===i;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1});const panel=$('#method-panel');panel.setAttribute('aria-labelledby',`method-tab-${i}`);panel.innerHTML=`<img src="${asset(m.image)}" alt="${m.alt}" loading="lazy"><div class="method-text"><h3>${m.title}</h3><p>${m.text}</p><p class="method-output">${m.output}</p></div>`;}
$$('[data-method]').forEach(b=>b.addEventListener('click',()=>setMethod(Number(b.dataset.method))));$('.method-tabs').addEventListener('keydown',e=>keyboardTabs(e,'[data-method]',b=>setMethod(Number(b.dataset.method))));setMethod(0);
$('.menu-toggle').addEventListener('click',()=>{const open=$('#main-nav').classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',open);$('.menu-toggle span').textContent=open?'−':'＋'});
$$('#main-nav a').forEach(a=>a.addEventListener('click',()=>{$('#main-nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');$('.menu-toggle span').textContent='＋'}));
const heroVideo=$('#hero-video'),playButton=$('#hero-play');let manualPause=false;
function syncPlay(){playButton.innerHTML=heroVideo.paused?'<span>▶</span> Play model':'<span>Ⅱ</span> Pause model';playButton.setAttribute('aria-label',heroVideo.paused?'Play flood model animation':'Pause flood model animation')}
function pauseHero(){heroVideo.pause();syncPlay()}
playButton.addEventListener('click',async()=>{if(heroVideo.paused){manualPause=false;try{await heroVideo.play()}catch{playButton.textContent='Playback unavailable'}}else{manualPause=true;pauseHero()}});
heroVideo.addEventListener('play',syncPlay);heroVideo.addEventListener('pause',syncPlay);
new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting&&!manualPause&&!reducedMotion.matches&&!projectDialog.open)heroVideo.play().catch(()=>syncPlay());else pauseHero()}},{threshold:.2}).observe(heroVideo);
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)pauseHero()});document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseHero()});
if(!reducedMotion.matches){document.body.classList.add('motion-ready');const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}})},{threshold:.08});$$('.reveal').forEach(el=>revealObserver.observe(el));
 const countObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,to=Number(el.dataset.count),start=performance.now();function frame(now){const p=Math.min(1,(now-start)/1150);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(frame)}requestAnimationFrame(frame);countObserver.unobserve(el)})},{threshold:.6});$$('[data-count]').forEach(el=>countObserver.observe(el));}
let scrollPending=false;function updateProgress(){const full=document.documentElement.scrollHeight-innerHeight;$('.reading-progress').style.width=(full>0?scrollY/full*100:0)+'%';scrollPending=false}window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateProgress)}},{passive:true});updateProgress();
$('#year').textContent=new Date().getFullYear();
if(location.hash.startsWith('#project='))openProject(decodeURIComponent(location.hash.slice(9)),false);
