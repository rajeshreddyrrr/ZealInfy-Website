import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { ExperienceMode } from './BuildPath';
import './Contact.css';

interface FormData { name:string; email:string; subject:string; message:string; }
interface ContactProps { mode:ExperienceMode; }

const modePrompts:Record<ExperienceMode,string>={
 idea:'A product, platform, or idea...',
 engineering:'A system you want to modernize...',
 intelligence:'An AI or automation opportunity...',
 cloud:'A cloud or architecture challenge...',
 automation:'A workflow you want to automate...',
 impact:'Engineering capacity you want to extend...'
};

const Contact:React.FC<ContactProps>=({mode})=>{
 const [formData,setFormData]=useState<FormData>({name:'',email:'',subject:'',message:''});
 const [submitted,setSubmitted]=useState(false);
 const handleChange=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>setFormData({...formData,[e.target.name]:e.target.value});
 const handleSubmit=(e:FormEvent<HTMLFormElement>):void=>{e.preventDefault();console.log('Form submitted:',formData);setSubmitted(true);setTimeout(()=>{setSubmitted(false);setFormData({name:'',email:'',subject:'',message:''})},3000)};
 const contactInfo=[{icon:<FaEnvelope/>,title:'Email',content:'connect@zealinfy.com',link:'mailto:connect@zealinfy.com'},{icon:<FaPhone/>,title:'Phone',content:'+91 99663 67270',link:'tel:+919966367270'},{icon:<FaMapMarkerAlt/>,title:'Hyderabad',content:'WeWork, K Raheja Mindspace, Madhapur, Hyderabad, Telangana 500081',link:null}];
 const socialLinks=[{icon:<FaLinkedin/>,name:'LinkedIn',url:'#'},{icon:<FaGithub/>,name:'GitHub',url:'#'},{icon:<FaTwitter/>,name:'Twitter',url:'#'}];
 return <section id="contact" className="section contact-section" data-contact-mode={mode}>
  <div className="contact-intro"><span className="contact-eyebrow">The next idea could start here</span><h2 className="contact-title">Have a problem <span>worth exploring?</span></h2><p className="contact-subtitle">Tell us what you're trying to build, improve, or rethink. We can start with the problem — the technology can come after.</p></div>
  <div className="contact-content">
   <div className="contact-info-container"><div className="contact-orbit" aria-hidden="true">∞</div><h3 className="contact-info-title">Let's make the first move.</h3><p className="contact-info-description">No giant brief required. A conversation is enough to start exploring what is possible.</p><div className="contact-active-context"><span>Current direction</span><strong>{mode.toUpperCase()}</strong></div><div className="contact-info-list">{contactInfo.map((info,index)=><div key={index} className="contact-info-item"><div className="contact-info-icon">{info.icon}</div><div className="contact-info-content"><h4 className="contact-info-label">{info.title}</h4>{info.link?<a href={info.link} className="contact-info-value">{info.content}</a>:<p className="contact-info-value">{info.content}</p>}</div></div>)}</div><div className="social-links"><h4 className="social-title">Find ZealInfy</h4><div className="social-icons">{socialLinks.map((social,index)=><a key={index} href={social.url} className="social-icon" aria-label={social.name} target="_blank" rel="noopener noreferrer">{social.icon}</a>)}</div></div></div>
   <div className="contact-form-container">{submitted?<div className="success-message"><div className="success-icon">✓</div><h3>Message received.</h3><p>We'll be in touch to continue the conversation.</p></div>:<form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>01</span><div><h3>Start with the idea.</h3><p>What are you thinking about?</p></div></div><div className="form-grid"><div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"/></div><div className="form-group"><label htmlFor="email">Work email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com"/></div></div><div className="form-group"><label htmlFor="subject">What are we exploring?</label><input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder={modePrompts[mode]}/></div><div className="form-group"><label htmlFor="message">Tell us a little more</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Start wherever feels useful. We'll ask the next question."/></div><button type="submit" className="submit-button">Send the idea <FaArrowRight/></button></form>}</div>
  </div>
 </section>;
};
export default Contact;
