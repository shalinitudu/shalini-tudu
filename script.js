const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.site-nav a')];
addEventListener('scroll',()=>{let id='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)id=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id))});
