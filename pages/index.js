export default function Home() {
  return (
    <div className="landing-container">
      <section className="hero">
        <h1 className="hero-title">Chipo Milicent Mapimha</h1>
        <h2 className="hero-subtitle">Cloud & DevOps Engineer</h2>
        <p className="hero-text">
          Designing secure, scalable Azure infrastructure and automated CI/CD pipelines
          for modern cloud‑native applications.
        </p>

<div className="hero-buttons">
  <a href="https://github.com/cmapimha/helloworldd" className="btn-primary">
  Hello World Project
</a>
<a href="/Milicent-Mapimha-Resume.pdf" className="btn-secondary" target="_blank">
  View Resume
</a>

<a href="/Milicent-Mapimha-Resume.pdf" className="btn-secondary" download>
  Download PDF
</a>
</div>
      </section>

      <section className="skills">
        <h3 className="section-title">Cloud Engineering & DevOps Automation</h3>
        <p className="section-text">
          I build reliable, scalable, and secure cloud environments using Azure-native tools
          and modern DevOps practices.
        </p>

        <div className="skills-grid">
          <div className="skill-card">Azure Kubernetes Service (AKS)</div>
          <div className="skill-card">Azure DevOps Pipelines</div>
          <div className="skill-card">Bicep IaC</div>
          <div className="skill-card">Azure Functions</div>
          <div className="skill-card">Static Web Apps</div>
          <div className="skill-card">GitHub Actions</div>
          <div className="skill-card">Docker & Kubernetes</div>
        </div>
      </section>
    </div>
  );
}
