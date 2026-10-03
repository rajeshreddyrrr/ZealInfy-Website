import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaBrain, FaCloud, FaCode, FaCogs, FaLayerGroup, FaRocket } from 'react-icons/fa';
import { ExperienceMode } from './BuildPath';
import './Services.css';

interface Service { icon:JSX.Element; title:string; description:string; features:string[]; phase:string; mode:ExperienceMode; }
interface ServicesProps { mode:ExperienceMode; onModeChange:(mode:ExperienceMode)=>void; }

const Services:React.FC<ServicesProps>=({mode,onModeChange})=>{
 const services:Service[]=[
  {icon:<FaRocket/>,title:'Product Engineering',phase:'01 / Discover & Build',description:'From an early idea to a production-ready platform, we help design, engineer, and evolve digital products.',features:['MVP development','Full-stack engineering','Product modernization'],mode:'idea'},
  {icon:<FaBrain/>,title:'AI & Automation',phase:'02 / Add Intelligence',description:'We integrate AI into products and workflows where it can reduce repetitive work, improve decisions, or create better experiences.',features:['AI integrations','Intelligent workflows','Agentic automation'],mode:'intelligence'},
  {icon:<FaCloud/>,title:'Cloud & Modernization',phase:'03 / Scale & Evolve',description:'We modernize applications and build cloud-ready foundations that can evolve with your business.',features:['Azure solutions','Application modernization','Cloud architecture'],mode:'cloud'},
  {icon:<FaCode/>,title:'Web & Application Development',phase:'04 / Engineer',description:'Modern web applications built around usability, maintainability, performance, and business requirements.',features:['React & Angular','.NET & Python','API development'],mode:'engineering'},
  {icon:<FaLayerGroup/>,title:'Enterprise Solutions',phase:'05 / Connect',description:'Engineering support for complex systems where reliability, integration, and long-term maintainability matter.',features:['Enterprise applications','System integrations','Data platforms'],mode:'impact'},
  {icon:<FaCogs/>,title:'Dedicated Engineering',phase:'06 / Keep Moving',description:'Extend your engineering capacity with focused development support aligned to your product and delivery process.',features:['Dedicated developers','Feature teams','Ongoing support'],mode:'automation'}
 ];
 const index=Math.max(0,services.findIndex(s=>s.mode===mode));
 const [activeService,setActiveService]=useState(index);
 useEffect(()=>setActiveService(index),[index]);
 const active=services[activeService];
 const scrollToContact=()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
 return <section id="services" className="section services-section">
  <div className="services-heading"><div><span className="services-eyebrow">How we help</span><h2 className="section-title">From possibility to something real.</h2></div><p className="section-subtitle">Don't think of these as separate services. Think of them as connected moves from idea to impact.</p></div>
  <div className="services-journey">
   <div className="journey-rail" aria-hidden="true"><span className="journey-progress" style={{transform:`scaleX(${(activeService+1)/services.length})`}}/></div>
   <div className="service-step-list">{services.map((service,i)=><button type="button" key={service.title} className={'service-step '+(activeService===i?'service-step-active':'')} onClick={()=>{setActiveService(i);onModeChange(service.mode)}}><span className="service-step-number">{service.phase.split(' / ')[0]}</span><span className="service-step-title">{service.title}</span><FaArrowRight className="service-step-arrow"/></button>)}</div>
   <article className="service-focus"><div className="service-focus-icon">{active.icon}</div><div className="service-focus-copy"><span>{active.phase}</span><h3>{active.title}</h3><p>{active.description}</p><div className="service-focus-features">{active.features.map(f=><span key={f}>{f}</span>)}</div></div></article>
  </div>
  <div className="services-cta"><div><span>Have something worth building?</span><h3>Let's turn the idea into a working product.</h3></div><button onClick={scrollToContact}>Start a conversation <FaArrowRight/></button></div>
 </section>;
};
export default Services;
