import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How High-Up! handles the details you send through the partner form: what is collected, why, how long it is kept, and your rights under the GDPR.",
};

export default function Privacy() {
  return (
    <main className="doc">
      <div className="wrap">
        <a className="doc__back" href="/">&larr; High-Up!</a>

        <span className="label">Tietosuojaseloste</span>
        <h1>Privacy notice</h1>
        <p className="doc__lede">
          This notice explains what happens to the details you send us through
          this website. It covers this site only &mdash; signing up as a student
          happens on the STUHI Launchpad, which has its own notice.
        </p>
        <p className="doc__meta">Last updated 21 August 2026</p>

        <h2>1. Who is responsible</h2>
        <p>
          The controller is <strong>Nuorten startup- ja innovaatiojohtajuus ry</strong>{" "}
          (STUHI). You can reach us at{" "}
          <a className="mailto" href="mailto:akseli@stuhi.org">akseli@stuhi.org</a>.
        </p>
        <p>
          High-Up! is organised together with Aalto University. Partner enquiries
          are addressed to Apurva Ganoo at Aalto University and copied to STUHI,
          so both organisations receive and handle them. For event questions:{" "}
          <a className="mailto" href="mailto:apurva.ganoo@aalto.fi">apurva.ganoo@aalto.fi</a>.
        </p>

        <h2>2. What we collect</h2>
        <p>
          Only what you type into the partner box: your <strong>work email
          address</strong> and your <strong>company name</strong>, together with
          anything you add to the message before sending it. We do not ask for
          anything else, and there is no account or profile.
        </p>

        <h2>3. How it reaches us</h2>
        <p>
          The partner box does not submit your details to a server of ours.
          Pressing Send opens your own email program with the message prefilled,
          addressed to us; you send it yourself. Your details therefore travel as
          an ordinary email, through your email provider and ours.{" "}
          <strong>This website stores nothing you type.</strong>
        </p>

        <h2>4. Why, and on what legal basis</h2>
        <p>
          We use your details to answer your enquiry and to organise partnership
          for High-Up!. The legal basis is our legitimate interest in responding
          to a business enquiry you chose to send us (GDPR Article 6(1)(f)), and,
          where an agreement follows, the steps taken before entering into it
          (Article 6(1)(b)).
        </p>
        <p>
          We do not use your details for marketing, we do not build profiles, and
          there is no automated decision-making.
        </p>

        <h2>5. How long we keep it</h2>
        <p>
          Partner enquiries are deleted after <strong>24 months without
          contact</strong>. Where an agreement is signed, related correspondence
          is kept as long as accounting and contract law require.
        </p>

        <h2>6. Who else processes it</h2>
        <ul>
          <li>
            <strong>Our email providers</strong> handle the message as part of
            delivering and storing email for STUHI and Aalto University.
          </li>
          <li>
            <strong>Vercel</strong> hosts this website and processes standard
            server log data (such as your IP address and the time of the request)
            in order to serve the page to you.
          </li>
        </ul>
        <p>
          We do not sell or rent your details, and we do not feed them into any
          marketing tool or CRM. Where a provider processes data outside the
          EU/EEA, it does so under the European Commission&rsquo;s standard
          contractual clauses.
        </p>

        <h2>7. Cookies and tracking</h2>
        <p>
          This site sets <strong>no cookies</strong>. There is no analytics, no
          advertising and no social media pixels. The typefaces are served from
          this site rather than from a third party, so simply reading the page
          does not reveal you to anyone other than our host.
        </p>

        <h2>8. Your rights</h2>
        <p>
          You can ask us for a copy of your data, to correct it, to delete it, to
          restrict how we use it, or to object to our using it, and you can ask
          for it in a portable form. Write to{" "}
          <a className="mailto" href="mailto:akseli@stuhi.org">akseli@stuhi.org</a>{" "}
          and we will answer within one month.
        </p>
        <p>
          If you think we have handled your data wrongly, you can complain to the
          Finnish Data Protection Ombudsman (Tietosuojavaltuutetun toimisto,{" "}
          <a
            className="mailto"
            href="https://tietosuoja.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            tietosuoja.fi
          </a>
          ).
        </p>

        <h2>9. Students under 18</h2>
        <p>
          This website collects nothing from students. Student sign-ups happen on
          the STUHI Launchpad, and the handling of participants&rsquo; data,
          including anyone under 18, is covered by the notice there.
        </p>
      </div>
    </main>
  );
}
