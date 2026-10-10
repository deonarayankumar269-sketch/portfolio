import {useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import {projects,certs,skills} from './data'
gsap.registerPlugin(ScrollTrigger)
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches
const W=[['Full stack','developer'],['Real-time','study rooms'],['Own stats','engine']]
const L=({children,c=''})=><span className="block overflow-hidden pb-[.06em]"><span className={'ln block '+c}>{children}</span></span>
const nav=[['about','About'],['tech','Technologies'],['projects','Projects'],['certs','Certificates'],['contact','Contact']]
const btn='inline-block px-7 py-3 text-sm font-medium'

export default function App(){
 const root=useRef(),[w,setW]=useState(0)
 useEffect(()=>{if(rm)return;const t=setInterval(()=>setW(x=>(x+1)%W.length),3400);return()=>clearInterval(t)},[])
 useEffect(()=>{if(!rm)gsap.fromTo('.hw .ln',{yPercent:110},{yPercent:0,duration:1.1,ease:'expo.out',stagger:.09})},[w])
 useEffect(()=>{
  if(rm){document.getElementById('ld').remove();return}
  const lenis=new Lenis({lerp:.09}),tick=t=>lenis.raf(t*1000)
  lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0)
  const E='expo.out',hov=matchMedia('(hover:hover)').matches,cl=[],on=(el,ev,fn)=>{el.addEventListener(ev,fn);cl.push(()=>el.removeEventListener(ev,fn))}
  const ctx=gsap.context(()=>{
   gsap.set('#sp',{opacity:0,scale:.6});gsap.set('#ph',{y:90,opacity:0,scale:.92});gsap.set('.nv',{y:-20,opacity:0});gsap.set('.hx',{y:30,opacity:0})
   gsap.timeline({defaults:{ease:E}})
    .from('.ldn',{yPercent:110,duration:1})
    .to('.ldn',{yPercent:-110,duration:.6,ease:'power3.in'},'+=.4')
    .to('#ld',{yPercent:-100,duration:1,ease:'power4.inOut'},'<.15')
    .to('#sp',{opacity:1,scale:1,duration:1.8},'-=.4')
    .to('#ph',{y:0,opacity:1,scale:1,duration:1.6},'<.1')
    .to('.nv',{y:0,opacity:1,duration:.8,stagger:.06},'-=1.2')
    .to('.hx',{y:0,opacity:1,duration:1,stagger:.1},'-=1.1')
    .set('#ld',{display:'none'})
   gsap.to('#bar',{scaleX:1,ease:'none',scrollTrigger:{scrub:true,start:0,end:'max'}})
   gsap.to('#hero .bgw',{yPercent:30,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}})
   gsap.to('#phw',{yPercent:12,scale:1.06,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}})
   gsap.fromTo('#ac',{rotateY:-35,rotateZ:-4,y:80,transformPerspective:1000},{rotateY:0,rotateZ:-2,y:0,ease:'none',scrollTrigger:{trigger:'#about',start:'top 90%',end:'top 20%',scrub:true}})
   gsap.utils.toArray('.rv').forEach(h=>gsap.from(h.querySelectorAll('.ln'),{yPercent:115,duration:1.2,ease:E,stagger:.08,scrollTrigger:{trigger:h,start:'top 88%'}}))
   gsap.utils.toArray('.tc').forEach(c=>gsap.fromTo(c,{rotateX:40,y:80,opacity:0,transformPerspective:900},{rotateX:0,y:0,opacity:1,ease:'none',clearProps:'transform',scrollTrigger:{trigger:c,start:'top 98%',end:'top 70%',scrub:true}}))
   gsap.utils.toArray('.pj').forEach(c=>gsap.fromTo(c,{rotateX:26,y:150,opacity:0,transformPerspective:1100,transformOrigin:'50% 100%'},{rotateX:0,y:0,opacity:1,ease:'none',scrollTrigger:{trigger:c,start:'top 98%',end:'top 55%',scrub:true}}))
   gsap.from('.cr',{y:40,opacity:0,duration:1,ease:E,stagger:.08,scrollTrigger:{trigger:'#certs .cr',start:'top 90%'}})
   gsap.fromTo('.fin',{scale:.75,opacity:.2},{scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:'.fin',start:'top 95%',end:'top 45%',scrub:true}})
   if(hov){
    const hero=document.getElementById('hero'),q=(s,p)=>gsap.quickTo(s,p,{duration:.9,ease:'power3'})
    gsap.set('#ph',{transformPerspective:900});gsap.set('#sp',{transformPerspective:900})
    const ry=q('#ph','rotationY'),rx=q('#ph','rotationX'),px=q('#ph','x'),bx=q('.bgw','x'),by=q('.bgw','y'),sx=q('#sp','x')
    on(hero,'mousemove',e=>{const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;ry(nx*18);rx(-ny*10);px(nx*26);bx(-nx*60);by(-ny*24);sx(nx*70)})
    on(hero,'mouseleave',()=>{ry(0);rx(0);px(0);bx(0);by(0);sx(0)})
    gsap.utils.toArray('.tilt').forEach(el=>{const a=gsap.quickTo(el,'rotationX',{duration:.5,ease:'power3'}),b=gsap.quickTo(el,'rotationY',{duration:.5,ease:'power3'});gsap.set(el,{transformPerspective:800})
     on(el,'mousemove',e=>{const r=el.getBoundingClientRect();b(((e.clientX-r.left)/r.width-.5)*14);a(-((e.clientY-r.top)/r.height-.5)*14)});on(el,'mouseleave',()=>{a(0);b(0)})})
    gsap.utils.toArray('.mag').forEach(el=>{const x=gsap.quickTo(el,'x',{duration:.5,ease:'power3'}),y=gsap.quickTo(el,'y',{duration:.5,ease:'power3'})
     on(el,'mousemove',e=>{const r=el.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.35);y((e.clientY-r.top-r.height/2)*.35)});on(el,'mouseleave',()=>{x(0);y(0)})})
   }
  },root)
  const t=setTimeout(()=>ScrollTrigger.refresh(),800)
  return()=>{clearTimeout(t);cl.forEach(f=>f());ctx.revert();gsap.ticker.remove(tick);lenis.destroy()}
 },[])
 return(<div ref={root}>
  <div id="ld" className="fixed inset-0 z-50 grid place-items-center bg-ink"><L c="ldn font-display text-[clamp(40px,8vw,96px)]">Deonarayan Kumar</L></div>
  <div id="bar" className="fixed left-0 top-0 z-40 h-[2px] w-full origin-left scale-x-0 bg-ver"/>
  <nav className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 text-paper mix-blend-difference md:px-[4vw]"><a href="#top" className="nv font-display text-3xl">DK.</a>
   <div className="hidden gap-8 text-sm md:flex">{nav.map(([i,t])=><a key={i} href={'#'+i} className="nv ul">{t}</a>)}</div><a href="#contact" className="nv ul text-sm">Hire me</a></nav>
  <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 md:px-[4vw]">
   <div id="sp" className="absolute left-1/2 top-[8%] h-[85%] w-[min(90vw,780px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_45%,rgba(244,241,236,.5),transparent_62%)]"/>
   <div className="bgw pointer-events-none absolute inset-x-0 top-[12%] select-none text-center font-display text-[clamp(120px,27vw,430px)] leading-none text-paper/[.07]">DEONARAYAN</div>
   <div id="phw" className="absolute inset-x-0 bottom-0 flex justify-center"><img id="ph" src="/assets/photo.jpg" alt="Portrait of Deonarayan Kumar" className="h-[min(82vh,760px)] w-auto object-cover [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]"/></div>
   <div className="relative z-10 w-full pt-24">
    <p className="hx mono mb-4 text-ver">Hi, I'm Deonarayan.</p>
    <h1 className="hw text-[clamp(56px,10vw,150px)] leading-[.88]">{W[w].map(t=><L key={w+t}>{t}</L>)}</h1>
    <div className="hx mt-8 max-w-[34ch] text-lg opacity-80 md:absolute md:bottom-0 md:right-0 md:mt-0 md:text-right">I build MERN apps and fix what breaks. Three live projects. Open to full stack internships.
     <div className="mt-5 flex gap-3 md:justify-end"><a href="#projects" className={'mag bg-paper text-ink '+btn}>View work</a><a href="/assets/resume.pdf" target="_blank" rel="noopener" className={'hl mag border '+btn}>Resume</a></div></div>
    <p className="hx mono absolute -bottom-[26vh] left-0 hidden opacity-60 md:block">Scroll to explore</p>
   </div>
  </section>
  <section id="about" className="relative grid gap-12 px-5 py-28 md:grid-cols-12 md:px-[4vw] md:py-44">
   <div className="md:col-span-5"><div id="ac" className="hl sticky top-24 w-[75%] overflow-hidden border md:w-full"><img src="/assets/photo.jpg" alt="" className="aspect-[4/5] w-full object-cover"/><div className="hl flex justify-between border-t p-4 text-sm"><span>Ramgarh, Jharkhand</span><span className="text-ver">Open to internships</span></div></div></div>
   <div className="md:col-span-7"><h2 className="rv mb-8 text-[clamp(48px,8vw,120px)]"><L>Hello, I'm</L><L><em className="text-ver">Deonarayan</em></L></h2>
    <p className="mb-5 max-w-[56ch] text-xl">A B.Tech CSE student at Radha Govind University, Ramgarh. I build web apps with the MERN stack: a student workspace with real-time study rooms, an AI code reviewer, and an experiment tracker with a statistics engine I wrote from scratch.</p>
    <p className="max-w-[56ch] text-xl opacity-80">I also did a 6 month online web development internship at Skill Nexis, where I changed styling as the requirements asked.</p></div>
  </section>
  <section id="tech" className="px-5 py-24 md:px-[4vw]"><h2 className="rv mb-12 text-[clamp(48px,8vw,120px)]"><L>Technologies</L><L>I work with</L></h2>
   <div className="grid gap-4 md:grid-cols-3">{skills.map(([k,v])=><div key={k} className="tc tilt hl border p-6"><span className="mono text-ver">{k}</span><div className="mt-5 flex flex-wrap gap-2">{v.split(', ').map(x=><span key={x} className="hl border px-3 py-1.5 text-sm">{x}</span>)}</div></div>)}</div></section>
  <section id="projects" className="px-5 py-24 md:px-[4vw]"><h2 className="rv mb-16 text-[clamp(48px,8vw,120px)]"><L>Selected work</L></h2>
   <div className="flex flex-col gap-24">{projects.map((p,i)=><article key={p.n} className="pj hl grid items-center gap-8 border-t pt-8 md:grid-cols-2">
    <div className={'tilt hl overflow-hidden border '+(i%2?'md:order-2':'')}><img src={p.img} alt={p.t+' screenshot'} loading="lazy" className="aspect-[16/10] w-full object-cover object-top"/></div>
    <div><span className="mono text-ver">{p.n} / {p.s}</span><h3 className="my-3 text-[clamp(48px,6vw,96px)]">{p.t}</h3><p className="mb-6 max-w-[52ch] opacity-75">{p.d}</p>
     <a href={p.live} target="_blank" rel="noopener" className="ul mr-6">Live</a><a href={p.gh} target="_blank" rel="noopener" className="ul">GitHub</a></div></article>)}</div></section>
  <section id="certs" className="px-5 py-24 md:px-[4vw]"><h2 className="rv mb-12 text-[clamp(48px,8vw,120px)]"><L>Certificates</L></h2>
   {certs.map(([t,i,d,u])=><div key={t} className="cr hl grid grid-cols-[1fr_auto] items-baseline gap-3 border-t py-5 md:grid-cols-[2fr_1.4fr_1fr_80px]"><b className="font-display text-3xl font-normal">{t}</b><span className="col-start-1 text-sm opacity-60 md:col-start-auto">{i}</span><span className="hidden text-sm opacity-60 md:block">{d}</span>{u?<a href={u} target="_blank" rel="noopener" className="ul row-start-1 col-start-2 justify-self-end text-sm md:row-start-auto md:col-start-auto">Verify</a>:<i/>}</div>)}<div className="hl border-t"/></section>
  <section id="contact" className="flex min-h-[90vh] flex-col justify-between gap-20 px-5 py-24 md:px-[4vw]">
   <h2 className="fin text-[clamp(56px,12vw,170px)]">Let's build something <em className="text-ver">worth shipping.</em></h2>
   <div><a href="mailto:deonarayankumar269@gmail.com" className="mag inline-block border-b border-ver py-3 font-display text-[clamp(24px,4.5vw,64px)] leading-none">deonarayankumar269@gmail.com</a>
    <div className="mt-8 flex flex-wrap gap-8 text-sm"><a className="ul" href="https://www.linkedin.com/in/deonarayan-kumar" target="_blank" rel="noopener">LinkedIn</a><a className="ul" href="https://github.com/deonarayankumar269-sketch" target="_blank" rel="noopener">GitHub</a><a className="ul" href="/assets/resume.pdf" target="_blank" rel="noopener">Resume (PDF)</a></div></div>
   <footer className="hl flex flex-wrap justify-between gap-4 border-t pt-5 text-xs opacity-60"><span>Deonarayan Kumar, 2026</span><span className="flex gap-5"><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a></span></footer>
  </section>
 </div>)
}
