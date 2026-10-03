import React from 'react';
import { FaArrowRight, FaHandshake, FaLock, FaRobot, FaUsers, FaLayerGroup, FaCodeBranch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Partnership.css';

interface PartnershipOption {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const partnershipOptions: PartnershipOption[] = [
  { number: '01', title: 'White-label delivery', description: 'We work behind the scenes under your brand, helping you deliver without changing the client relationship.', icon: <FaLayerGroup /> },
  { number: '02', title: 'Project-based delivery', description: 'Bring us a defined technical scope and we deliver against agreed milestones, timelines, and responsibilities.', icon: <FaCodeBranch /> },
  { number: '03', title: 'Engineering overflow', description: 'Add experienced engineering capacity when your team is fully occupied or project demand suddenly increases.', icon: <FaUsers /> },
  { number: '04', title: 'AI implementation', description: 'Turn AI opportunities into working systems with agents, LLM/RAG, automation, and intelligent integrations.', icon: <FaRobot /> },
  { number: '05', title: 'Co-delivery', description: 'Our engineers work alongside your team as an extension of your existing engineering capability.', icon: <FaHandshake /> },
  { number: '06', title: 'Ongoing engineering support', description: 'Dedicated developers or a small engineering team for continuous delivery, enhancement, and support.', icon: <FaUsers /> },
];

const Partnership: React.FC = () => (
  <section className="partnership-page">
    <div className="partnership-hero">
      <div className="partnership-hero-grid" aria-hidden="true" />
      <div className="partnership-orbit partnership-orbit-one" aria-hidden="true" />
      <div className="partnership-orbit partnership-orbit-two" aria-hidden="true" />
      <div className="partnership-hero-copy">
        <span className="partnership-eyebrow">04 / Partnership</span>
        <h1>Extend what your team <span>can deliver.</span></h1>
        <p>We partner with technology companies, agencies, consultants, and product teams that need additional engineering capability without expanding their internal team.</p>
      </div>
      <div className="partnership-signal" aria-hidden="true">
        <span>ZEAL</span><strong>∞</strong><span>TOGETHER</span>
      </div>
    </div>

    <div className="partnership-content">
      <div className="partnership-section-intro">
        <span className="partnership-label">How we partner</span>
        <h2>Different models.<br /><em>One shared outcome.</em></h2>
        <p>Choose the engagement model that fits the opportunity. Start with a small pilot, extend your delivery capacity, or build a longer-term engineering relationship.</p>
      </div>

      <div className="partnership-map">
        {partnershipOptions.map((option) => (
          <article className="partnership-card" key={option.number}>
            <div className="partnership-card-top"><span className="partnership-number">{option.number}</span><span className="partnership-icon">{option.icon}</span></div>
            <h3>{option.title}</h3><p>{option.description}</p><span className="partnership-card-line" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="partnership-trust">
        <div className="trust-icon"><FaLock /></div>
        <div>
          <span className="partnership-label">Built around trust</span>
          <h2>Your client relationship stays yours.</h2>
          <p>We are comfortable with NDAs, white-label arrangements, and protecting the partner's client relationship. We can operate behind the scenes where required and start with a suitable project or small pilot.</p>
        </div>
        <div className="trust-points"><span>NDA ready</span><span>White-label friendly</span><span>Client relationship protected</span></div>
      </div>

      <div className="partnership-cta">
        <div>
          <span className="partnership-label">Have an opportunity?</span>
          <h2>Let's build the next piece together.</h2>
          <p>Extend your delivery capacity without turning away opportunities because of engineering bandwidth or specialized technical requirements.</p>
        </div>
        <Link to="/contact" className="partnership-cta-button">Explore a partnership <FaArrowRight /></Link>
      </div>
    </div>
  </section>
);

export default Partnership;
