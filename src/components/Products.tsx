import React, { useState } from 'react';
import { FaArrowRight, FaBrain, FaCreditCard, FaShieldAlt, FaUsers, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Products.css';

type Product={id:string;number:string;name:string;status:string;tagline:string;description:string;icon:React.ReactNode;capabilities:string[];stack:string[];future:string[]};

const products:Product[]=[
 {id:'hr',number:'01',name:'ZealHR',status:'MVP / In development',tagline:'HR & payroll, built for the way teams actually work.',description:'A full-stack HR and payroll management platform covering employee management, attendance, payroll calculations and payslips, with leave, authentication, reporting and notifications planned as the product evolves.',icon:<FaUsers/>,capabilities:['Employee management','Attendance tracking','Payroll calculations','Payslip generation','Reusable service architecture'],stack:['React + TypeScript','FastAPI + Python','SQLAlchemy','Tailwind CSS'],future:['Leave management','Role-based access','Reports & analytics','Email notifications']},
 {id:'compliance',number:'02',name:'ZealCompliance',status:'MVP / In development',tagline:'An AI-powered compliance workspace for growing businesses and professional firms.',description:'A multi-tenant compliance platform designed to help manage companies, compliance tasks, documents, notifications and AI-assisted queries from one workspace.',icon:<FaShieldAlt/>,capabilities:['Tenant & company management','Compliance task tracking','Dashboard','AI assistant','Document upload','Email notifications'],stack:['React + TypeScript','FastAPI','Azure SQL','OpenAI','JWT'],future:['Reports & WhatsApp','GST/MCA integrations','AI agent capabilities','Enterprise features']},
 {id:'pay',number:'03',name:'ZealPay',status:'MVP / In development',tagline:'A transaction layer for payments, marketplaces and digital services.',description:'A transaction platform concept for digital payments, marketplace transactions, configurable commissions, vendor settlements, refunds, reconciliation and transaction intelligence. Production payment processing remains provider-dependent.',icon:<FaCreditCard/>,capabilities:['Payment experience','Vendor marketplace','Configurable commissions','Settlement management','Refund management','Transaction analytics'],stack:['React / customer + admin apps','API + transaction services','SQL database','Payment provider integration'],future:['Payment links','Recurring payments','Bill payments','Recharge & supported financial services']}
];

const Products:React.FC=()=>{
 const [active,setActive]=useState('hr');
 const p=products.find(x=>x.id===active)??products[0];
 return <section className="products-page">
  <div className="products-hero"><div className="products-hero-grid" aria-hidden="true"/><div className="products-copy"><span className="products-eyebrow">07 / Products in development</span><h1>Ideas we are <span>turning into products.</span></h1><p>These are active product directions and MVP-stage builds at ZealInfy — evolving through engineering, validation, and real-world feedback.</p></div><div className="products-stack" aria-hidden="true"><span>BUILD</span><strong>→</strong><span>VALIDATE</span><strong>→</strong><span>EVOLVE</span></div></div>
  <div className="products-content">
   <div className="products-intro"><span className="products-label">Our product lab</span><h2>Not just projects.<br/><em>Products in progress.</em></h2><p>We are using the same engineering capabilities we bring to client work to shape focused products around recurring business problems.</p></div>
   <div className="products-switcher">{products.map(x=><button key={x.id} className={active===x.id?'active':''} onClick={()=>setActive(x.id)}><span>{x.number}</span><strong>{x.name}</strong><small>{x.status}</small></button>)}</div>
   <article className="product-detail"><div className="product-detail-top"><div className="product-icon">{p.icon}</div><div><span className="products-label">{p.status}</span><h3>{p.name}</h3><p className="product-tagline">{p.tagline}</p></div></div><p className="product-description">{p.description}</p><div className="product-columns"><div><span className="products-label">Current capabilities</span>{p.capabilities.map(c=><div className="product-item" key={c}><FaCheck/>{c}</div>)}</div><div><span className="products-label">Technology</span><div className="product-stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><div><span className="products-label">On the roadmap</span>{p.future.map(f=><div className="product-roadmap" key={f}>{f}<FaArrowRight/></div>)}</div></div></article>
   <div className="products-note"><FaBrain/><div><span className="products-label">Product philosophy</span><h3>Build small. Learn fast. Expand with evidence.</h3><p>These products are intentionally presented as works in progress. Features, integrations, pricing, and production readiness will evolve as each product is validated.</p></div></div>
   <div className="products-cta"><div><span className="products-label">Want to build something similar?</span><h2>Bring us the problem. We'll explore the product.</h2></div><Link to="/contact">Start a conversation <FaArrowRight/></Link></div>
  </div>
 </section>
};
export default Products;
