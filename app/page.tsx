import Image from 'next/image';
import ThemeToggle from '@/components/theme-toggle';

const skillMatrix = {
  Cloud: ['AWS', 'Azure', 'GCP', 'CloudFront', 'Route53'],
  'CI/CD': ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Argo CD'],
  Containers: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
  IaC: ['Terraform', 'Pulumi', 'CloudFormation', 'Ansible'],
  Observability: ['Prometheus', 'Grafana', 'ELK', 'Datadog'],
  DevSecOps: ['Trivy', 'Snyk', 'SonarQube', 'OPA']
};

const projects = [
  {
    title: 'Multi-Region E-Commerce Platform',
    problem: 'Needed 99.99% uptime across regions and faster deployments for peak traffic.',
    description:
      'Implemented blue/green rollout automation with Kubernetes and Argo CD, reducing release risk and downtime.',
    tools: ['AWS', 'EKS', 'Argo CD', 'Terraform', 'Prometheus']
  },
  {
    title: 'FinTech Compliance CI Pipeline',
    problem: 'Security scans were manual and slowed feature delivery.',
    description:
      'Built policy-driven CI pipelines with automated SAST, image scanning, and approval gates for compliance.',
    tools: ['GitHub Actions', 'Trivy', 'SonarQube', 'OPA', 'Docker']
  },
  {
    title: 'Observability-as-a-Service Stack',
    problem: 'Engineering teams lacked unified logs and metrics visibility.',
    description:
      'Provisioned reusable monitoring stack templates; MTTR improved through centralized dashboards and alert routing.',
    tools: ['Terraform', 'Grafana', 'Prometheus', 'Loki', 'Alertmanager']
  },
  {
    title: 'Self-Service Deployment Portal',
    problem: 'Developers depended on platform engineers for routine environment deployments.',
    description:
      'Created golden pipeline templates with role-based controls for one-click non-production deployments.',
    tools: ['Jenkins', 'Kubernetes', 'Helm', 'Vault', 'Argo Workflows']
  },
  {
    title: 'Cost Optimization Automation',
    problem: 'Cloud spend was rising with underutilized workloads and oversized resources.',
    description:
      'Introduced automated rightsizing recommendations and schedule-based scaling for non-critical workloads.',
    tools: ['AWS Lambda', 'CloudWatch', 'Terraform', 'Athena', 'QuickSight']
  }
];

const certifications = [
  'AWS Certified DevOps Engineer - Professional',
  'Certified Kubernetes Administrator (CKA)',
  'HashiCorp Certified: Terraform Associate',
  'Microsoft Certified: Azure DevOps Engineer Expert',
  'Google Professional Cloud DevOps Engineer',
  'Certified Jenkins Engineer'
];

export default function HomePage() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
          <a href="#hero" className="font-semibold tracking-wide">
            DevOps Portfolio
          </a>
          <div className="hidden gap-4 text-sm md:flex">
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#certifications" className="hover:text-blue-500">Certifications</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <section id="hero" className="section-shell">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">DevOps Engineer</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Hi, I&apos;m Your Name.</h1>
            {/* Replace with your own short value proposition */}
            <p className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              I design reliable, secure, and scalable delivery platforms that help teams ship faster with confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">View Projects</a>
              <a href="/resume.pdf" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900">Download Resume</a>
              <a href="#contact" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900">Contact Me</a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {/* Replace this placeholder with your own professional profile photo */}
            <Image
              src="https://placehold.co/640x720/png?text=Professional+Photo"
              alt="Professional portrait placeholder"
              width={640}
              height={720}
              className="mx-auto rounded-2xl border border-slate-200 shadow-glow dark:border-slate-700"
              priority
            />
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Skills Matrix</h2>
        <p className="section-subtitle">Production-ready tooling across cloud infrastructure, pipelines, observability, and security.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillMatrix).map(([category, skills]) => (
            <article key={category} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <p className="mb-2 text-sm font-semibold">Skill Proficiency Snapshot</p>
          {[['Infrastructure Automation', 92], ['CI/CD Engineering', 90], ['Cloud Architecture', 88], ['Observability', 85], ['DevSecOps', 82]].map(([name, value]) => (
            <div key={String(name)} className="mb-3">
              <div className="mb-1 flex justify-between text-xs">
                <span>{name}</span>
                <span>{String(value)}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-blue-500 transition-all" style={{ width: `${String(value)}%` }} aria-label={`${String(name)} proficiency`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Featured DevOps Projects</h2>
        <p className="section-subtitle">Replace placeholders with links and diagrams from your real delivery initiatives.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-glow dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><strong>Problem:</strong> {project.problem}</p>
              {/* Replace architecture placeholder with your own system diagram screenshot */}
              <Image
                src="https://placehold.co/900x420/png?text=Architecture+Diagram"
                alt={`Architecture diagram placeholder for ${project.title}`}
                width={900}
                height={420}
                className="mt-4 rounded-lg border border-slate-200 dark:border-slate-700"
              />
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="badge">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="font-medium text-blue-500 hover:underline">GitHub</a>
                <a href="https://example.com/demo" target="_blank" rel="noreferrer" className="font-medium text-blue-500 hover:underline">Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Architecture & Dashboard</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
            <h3 className="font-semibold">Reference Platform Diagram</h3>
            <Image src="https://placehold.co/1200x560/png?text=DevOps+Architecture+Overview" alt="DevOps platform architecture placeholder" width={1200} height={560} className="mt-3 rounded-lg border border-slate-200 dark:border-slate-700" />
          </article>
          <aside className="space-y-4">
            {[['Deployment Lead Time', '↓ 63%'], ['Change Failure Rate', '↓ 41%'], ['Service Uptime', '99.98%']].map(([metric, value]) => (
              <div key={String(metric)} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">{metric}</p>
                <p className="mt-1 text-xl font-bold text-blue-500">{value}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="certifications" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Certifications</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article key={cert} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium dark:border-slate-800 dark:bg-slate-900">
              🏅 {cert}
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Blog & Knowledge Sharing</h2>
        <ul className="mt-6 space-y-3 text-sm">
          {/* Replace these with links to your own technical articles */}
          <li><a className="text-blue-500 hover:underline" href="https://example.com/article-1">How I Cut Deployment Time by 60% with GitOps</a></li>
          <li><a className="text-blue-500 hover:underline" href="https://example.com/article-2">Building Secure-by-Default CI Pipelines</a></li>
          <li><a className="text-blue-500 hover:underline" href="https://example.com/article-3">From Alerts to Actionable SLO Dashboards</a></li>
        </ul>
      </section>

      <section id="opensource" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="section-subtitle">Showcase your GitHub activity, notable repositories, and merged pull requests.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs text-slate-500">GitHub Activity</p>
            <p className="mt-2 text-lg font-semibold">1,250+ Contributions/Yr</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs text-slate-500">Repositories</p>
            <p className="mt-2 text-lg font-semibold">35 Public DevOps Repos</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs text-slate-500">Pull Requests</p>
            <p className="mt-2 text-lg font-semibold">120+ Merged PRs</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Resume & Contact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <a href="/resume.pdf" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Download Resume</a>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: <a className="text-blue-500" href="mailto:you@example.com">you@example.com</a></li>
              <li>LinkedIn: <a className="text-blue-500" href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a></li>
              <li>GitHub: <a className="text-blue-500" href="https://github.com/your-username">github.com/your-username</a></li>
            </ul>
          </div>
          <form className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900" aria-label="Contact form">
            <label className="mb-2 block text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" className="mb-3 w-full rounded-md border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Your name" />
            <label className="mb-2 block text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" className="mb-3 w-full rounded-md border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" placeholder="you@example.com" />
            <label className="mb-2 block text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" rows={4} className="w-full rounded-md border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Tell me about your project..." />
            <button type="submit" className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Send Message</button>
            <p className="mt-2 text-xs text-slate-500">Tip: Replace this with Calendly embed or backend form handler.</p>
          </form>
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 dark:border-slate-800">
        <h2 className="section-title">Terminal Easter Egg</h2>
        <details className="mt-4 rounded-xl border border-slate-200 bg-slate-900 p-4 text-green-400 dark:border-slate-700" open={false}>
          <summary className="cursor-pointer text-sm font-semibold text-green-300">Open terminal</summary>
          <pre className="mt-3 overflow-x-auto text-xs sm:text-sm">
{`$ whoami
DevOps Engineer

$ kubectl get deploy -n production
api-gateway  4/4  Ready
checkout-svc 3/3  Ready

$ terraform apply
Apply complete! Resources: 2 added, 1 changed, 0 destroyed.`}
          </pre>
        </details>
      </section>
    </main>
  );
}
