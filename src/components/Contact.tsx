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

const EMAIL_GATEWAY_URL='https://zealinfy-ai-gateway-dev-c4cbarh0a3gddued.canadacentral-01.azurewebsites.net';
const EMAIL_RECIPIENT='connect@zealinfy.com';

const Contact:React.FC<ContactProps>=({mode})=>{
 const [formData,setFormData]=useState<FormData>({name:'',email:'',subject:'',message:''});
 const [submitted,setSubmitted]=useState(false);
 const [submitting,setSubmitting]=useState(false);
 const [error,setError]=useState('');

 const handleChange=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>{
  setFormData({...formData,[e.target.name]:e.target.value});
 };

 const handleSubmit=async(e:FormEvent<HTMLFormElement>):Promise<void>=>{
  e.preventDefault();
  setSubmitting(true);
  setError('');
  try {
   const response=await fetch('https://zealinfy-ai-gateway-dev-c4cbarh0a3gddued.canadacentral-01.azurewebsites.net/api/v1/public/contact',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({...formData,direction:mode})
   });
   if(!response.ok){
    const data=await response.json().catch(()=>null);
    throw new Error(data?.detail||'Unable to send your message. Please try again.');
   }
   setSubmitted(true);
   setFormData({name:'',email:'',subject:'',message:''});
  } catch(err) {
   setError(err instanceof Error?err.message:'Unable to send your message. Please try again.');
  } finally {
   setSubmitting(false);
  }
 };
