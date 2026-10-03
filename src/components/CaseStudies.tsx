import React, { useState } from 'react';
import { FaArrowRight, FaBrain, FaShieldAlt, FaHeadset, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

type CaseStudy = {
  id:string; number:string; eyebrow:string; title:string; subtitle:string; tags:string[]; icon:React.ReactNode;
  challenge:string; solution:string; architecture:string[]; principles:string[];
};

const studies:CaseStudy[]=[
 {id:'quality',number:'01',eyebrow:'Healthcare / AI Agent',title:'AI Quality & Compliance Review Agent',subtitle:'AI-assisted quality and compliance review for knowledge-intensive healthcare operations.',tags:['AI Agent','Quality & Compliance','RAG','Human-in-the-Loop'],icon:<FaShieldAlt/>,challenge:'Reviewers often work through lengthy case interactions, documentation, procedures, privacy concerns, potential safety signals, and follow-up requirements. The challenge is helping reviewers cover more ground consistently without removing human judgment.',solution:'ZealInfy’s agent creates an intelligent review layer between case data, organizational knowledge, and the human reviewer. It understands context, identifies relevant review areas, retrieves applicable SOPs and policies, reasons over the evidence, and presents explainable findings for human decision.',architecture:['Case / interaction','AI case understanding','Review planning','RAG retrieval','Evidence-based analysis','Findings & AI-assisted scoring','Human review','Audit trail'],principles:['AI proposes. Human decides.','Ground reasoning in available organizational knowledge.','Explain potential findings with evidence and references.','Keep review actions and decisions traceable.']},
 {id:'hr',number:'02',eyebrow:'AI Workforce / MVP',title:'ZealAgent HR',subtitle:'An AI HR employee designed to answer policy questions and assist employees throughout their employment lifecycle.',tags:['AI Workforce','RAG','FastAPI','Gemini'],icon:<FaUsers/>,challenge:'HR teams spend significant time answering repetitive questions about leave, policies, holidays, reimbursements, insurance, payroll schedules, onboarding, and exit processes.',solution:'ZealAgent HR combines an AI chat experience with a company knowledge base. Questions are routed through intent detection, semantic retrieval, context generation, and an LLM response. When confidence is low, the workflow can escalate the request to HR instead of inventing an answer.',architecture:['Employee question','Intent detection','ChromaDB retrieval','Relevant policy context','Google Gemini','Confidence evaluation','Answer or HR escalation'],principles:['Answer from the company knowledge base.','Avoid hallucination when information is unavailable.','Give employees an always-available first line of assistance.','Escalate when human intervention is required.']},
 {id:'support',number:'03',eyebrow:'Retail & E-commerce / Fictional Case Study',title:'AI Customer Support Agent',subtitle:'An illustrative enterprise AI pattern for scaling customer support with RAG, tools, and human escalation.',tags:['Agentic AI','RAG','CRM Integration','Human-in-the-Loop'],icon:<FaHeadset/>,challenge:'The fictional NovaRetail scenario describes high support volume, repetitive requests, fragmented knowledge, manual triage, and limited after-hours coverage.',solution:'The illustrative solution uses an agentic workflow to detect intent, retrieve enterprise knowledge, enrich the request with customer context, use connected tools, evaluate confidence, and either respond or hand an enriched case to a human agent.',architecture:['Customer channels','AI gateway','Agentic orchestrator','Intent detection','RAG + enterprise knowledge','CRM / ticketing tools','Confidence evaluation','Human escalation'],principles:['Automate repetitive work while preserving human oversight.','Ground responses in enterprise knowledge.','Use confidence-based escalation.','Measure business outcomes, not AI output volume.']}
];

const CaseStudies:React.FC=()=>{
 const [open,setOpen]=useState('quality');
 const active=studies.find(s=>s.id===open)??studies[0];
 return <section className="case-studies-page">
  <div className="case-hero">
   <div className="case-hero-grid" aria-hidden="true"/>
   <div className="case-hero-copy"><span className="case-eyebrow">06 / Case Studies</span><h1>AI that moves from <span>idea to operation.</span></h1><p>Explore how ZealInfy approaches AI agents and intelligent workflows — from healthcare review to AI workforce and customer support patterns.</p></div>
   <div className="case-hero-mark" aria-hidden="true"><span>AI</span><strong>∞</strong><span>IN ACTION</span></div>
  </div>
  <div className="case-content">
   <div className="case-index"><span className="case-label">Selected work</span><h2>Systems designed around <em>real workflows.</em></h2><p>These case studies focus on the problem, the AI workflow, the knowledge layer, and where humans remain in control.</p></div>
   <div className="case-layout">
    <div className="case-list">{studies.map(s=><button key={s.id} className={'case-list-item '+(open===s.id?'active':'')} onClick={()=>setOpen(s.id)}><span>{s.number}</span><div><small>{s.eyebrow}</small><h3>{s.title}</h3></div><FaArrowRight/></button>)}</div>
    <article className="case-detail">
      <div className="case-detail-head"><div className="case-detail-icon">{active.icon}</div><div><span className="case-label">{active.eyebrow}</span><h3>{active.title}</h3><p>{active.subtitle}</p></div></div>
      <div className="case-tags">{active.tags.map(t=><span key={t}>{t}</span>)}</div>
      <div className="case-detail-section"><span>01 / Challenge</span><p>{active.challenge}</p></div>
      <div className="case-detail-section"><span>02 / Solution</span><p>{active.solution}</p></div>
      <div className="case-detail-section"><span>03 / AI workflow</span><div className="case-flow">{active.architecture.map((a,i)=><React.Fragment key={a}><div className="case-flow-node"><b>0{i+1}</b>{a}</div>{i<active.architecture.length-1&&<div className="case-flow-line" aria-hidden="true"/>}</React.Fragment>)}</div></div>
      <div className="case-principles"><span>Designed around</span>{active.principles.map(p=><div key={p}><FaBrain/>{p}</div>)}</div>
      {active.id==='support'&&<div className="case-disclaimer">Illustrative case study — educational use only. The source material identifies the organisation, metrics, and implementation details as fictional.</div>}
    </article>
   </div>
   <div className="case-cta"><div><span className="case-label">Build your own</span><h2>Have a workflow that deserves an intelligence layer?</h2></div><Link to="/contact">Talk to ZealInfy <FaArrowRight/></Link></div>
  </div>
 </section>
};
export default CaseStudies;
