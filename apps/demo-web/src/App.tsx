import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  GitPullRequest,
  Github,
  ShieldCheck
} from "lucide-react";

type ProofExample = {
  pr: number;
  verdict: "FIT" | "DRIFT_RISK";
  url: string;
  summary: string;
};

const repositoryUrl = "https://github.com/manishsoni-dev/ArchGuard";
const docsUrl = "https://github.com/manishsoni-dev/ArchGuard/blob/main/docs/live-demo-proof.md";
const liveDemoName = "ArchGuard.vercel.app";

const proofExamples: { drift: ProofExample; fit: ProofExample } = {
  drift: {
    pr: 1,
    verdict: "DRIFT_RISK",
    url: "https://github.com/manishsoni-dev/ArchGuard/pull/1",
    summary: "Historical GitHub Check Run evidence of a frontend-to-database boundary violation."
  },
  fit: {
    pr: 8,
    verdict: "FIT",
    url: "https://github.com/manishsoni-dev/ArchGuard/pull/8",
    summary: "Historical GitHub Check Run evidence of a FIT verdict from the former demo rollout."
  }
};

const architectureFlow = [
  { label: "GitHub PR", detail: "Signed pull request event" },
  { label: "Fastify API", detail: "Webhook intake and validation" },
  { label: "BullMQ Worker", detail: "Queued architecture analysis" },
  { label: "Repository Context", detail: "RAG evidence retrieval" },
  { label: "GitHub Check Run", detail: "FIT or drift-risk verdict" }
];

function App() {
  const { drift: driftExample, fit: fitExample } = proofExamples;

  return (
    <>
      <header className="topNav">
        <a className="brandMark" href="#overview" aria-label="ArchGuard home">
          <span className="brandIcon">
            <ShieldCheck aria-hidden="true" size={18} />
          </span>
          <span>
            ArchGuard
            <small>{liveDemoName}</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#how-it-works">Architecture</a>
          <a href="#proof">Historical proof</a>
          <a href={docsUrl} target="_blank" rel="noreferrer">
            Evidence notes
          </a>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <div className="navActions">
          <span className="statusPill">
            <span aria-hidden="true" />
            Static evidence UI
          </span>
          <a className="navButton" href={repositoryUrl} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={16} />
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="overview">
          <div className="heroCopy">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Architecture-review portfolio evidence
            </div>
            <h1>ArchGuard</h1>
            <p className="heroLead">
              A portfolio evidence UI for an AI-powered GitHub PR architecture-review project. It preserves the
              repository architecture and historical Check Run proof without presenting an offline backend as live.
            </p>
            <div className="heroActions">
              <a className="primaryLink" href={repositoryUrl} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" size={18} />
                View GitHub Repo
                <ExternalLink aria-hidden="true" size={15} />
              </a>
              <a className="secondaryLink" href={docsUrl} target="_blank" rel="noreferrer">
                <FileText aria-hidden="true" size={18} />
                Read Historical Proof
                <ExternalLink aria-hidden="true" size={15} />
              </a>
            </div>
          </div>

          <aside className="demoOverview" aria-label="ArchGuard demo overview">
            <div className="overviewHeader">
              <span>{liveDemoName}</span>
              <strong>Static portfolio evidence UI</strong>
            </div>
            <div className="metricGrid">
              <Metric label="Backend state" value="Historical backend offline" />
              <Metric label="Evidence mode" value="Static proof cases" />
              <Metric label="Proof set" value="1 drift risk, 1 FIT" />
            </div>
            <div className="overviewNote">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>This page makes no runtime requests to the historical API.</span>
            </div>
          </aside>
        </section>

        <section className="section" id="how-it-works">
          <div className="sectionHeader">
            <div>
              <span className="sectionKicker">Implemented architecture</span>
              <h2>From pull request to architecture verdict.</h2>
            </div>
            <p>
              The project architecture receives signed GitHub events, queues analysis work, retrieves repository
              context, and posts an advisory Check Run. This static page documents that design; it does not operate
              the former hosted service.
            </p>
          </div>
          <div className="flow" aria-label="Architecture flow">
            {architectureFlow.map((step, index) => (
              <div className="flowStep" key={step.label}>
                <span>{index + 1}</span>
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </div>
                {index < architectureFlow.length - 1 ? <ArrowRight aria-hidden="true" size={17} /> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="proof">
          <div className="sectionHeader">
            <div>
              <span className="sectionKicker">Historical GitHub proof</span>
              <h2>Historical Check Run evidence, not a live service claim.</h2>
            </div>
            <p>
              These linked pull requests and retained screenshots document earlier project behavior. They do not prove
              that the retired backend is currently available.
            </p>
          </div>
          <div className="proofGrid">
            <ProofCard example={driftExample} tone="risk" />
            <ProofCard example={fitExample} tone="fit" />
          </div>
        </section>

        <section className="section limitsSection">
          <div className="sectionHeader">
            <div>
              <span className="sectionKicker">Demo limits</span>
              <h2>Honest scope for a public portfolio demo.</h2>
            </div>
          </div>
          <div className="limitsGrid">
            <LimitCard title="Portfolio evidence UI" body="This site is a static portfolio surface, not a running product dashboard." />
            <LimitCard title="Historical backend offline" body="The former Replit API is offline, and this UI does not call or link to it." />
            <LimitCard title="Static proof cases" body="The proof cases are historical GitHub links and screenshots, not newly executed checks." />
            <LimitCard title="Mock and fake providers" body="Mock LLMs and fake embeddings support deterministic local fixtures; they do not demonstrate production inference." />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>ArchGuard</strong>
          <span>Architecture fitness checks for GitHub pull requests.</span>
        </div>
        <div className="footerLinks">
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            GitHub repo
          </a>
          <a href={docsUrl} target="_blank" rel="noreferrer">
            Historical evidence notes
          </a>
        </div>
        <p>Fastify · BullMQ · PostgreSQL/pgvector · Redis · GitHub Checks API</p>
      </footer>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ProofCard({ example, tone }: { example: ProofExample; tone: "risk" | "fit" }) {
  return (
    <article className={`proofCard ${tone}`}>
      <div className="cardTop">
        <GitPullRequest aria-hidden="true" size={18} />
        <span>PR #{example.pr}</span>
      </div>
      <strong>{example.verdict}</strong>
      <p>{example.summary}</p>
      <a href={example.url} target="_blank" rel="noreferrer">
        View historical proof PR
        <ExternalLink aria-hidden="true" size={13} />
      </a>
    </article>
  );
}

function LimitCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="limitCard">
      <FileText aria-hidden="true" size={18} />
      <strong>{title}</strong>
      <p>{body}</p>
    </article>
  );
}

export default App;
