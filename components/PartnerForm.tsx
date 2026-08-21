"use client";

import { useState } from "react";

const APURVA = "apurva.ganoo@aalto.fi";

/**
 * The site is a static export, so the browser posts straight to a form relay
 * which emails the submission on. No mail client is involved: pressing Send
 * delivers, and the result is reported in place.
 *
 * NEXT_PUBLIC_FORM_TO is the address the relay is registered to. Swapping the
 * relay later means changing only ENDPOINT.
 */
const TO = process.env.NEXT_PUBLIC_FORM_TO ?? "akseli@stuhi.org";
const ENDPOINT = `https://formsubmit.co/ajax/${TO}`;

type State = "idle" | "sending" | "ok" | "error";

export default function PartnerForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<State>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Partner application",
          _cc: APURVA,
          _captcha: "false",
          _template: "table",
          email,
          company,
        }),
      });
      // The relay answers 200 even when it refuses, so the body decides.
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success !== "true") {
        throw new Error(data?.message ?? String(res.status));
      }
      setState("ok");
      setEmail("");
      setCompany("");
    } catch {
      setState("error");
    }
  };

  if (state === "ok") {
    return (
      <div className="pform pform--done" role="status">
        <p className="pform__ok">Sent. We&rsquo;ll be in touch.</p>
        <p className="pform__legal">
          Your email and company name went to us and to Apurva at Aalto. Details
          in our <a className="mailto" href="/privacy">privacy notice</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="pform" onSubmit={submit}>
      <div className="pform__row">
        <label>
          <span>Work email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "sending"}
          />
        </label>
        <label>
          <span>Company</span>
          <input
            type="text"
            name="company"
            required
            autoComplete="organization"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={state === "sending"}
          />
        </label>
      </div>

      <div className="pform__foot">
        <button className="btn btn--fill btn--lg" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending" : "Send"}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M2 8h11M9 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="pform__alt">
          or message Apurva directly at{" "}
          <a className="mailto" href={`mailto:${APURVA}`}>
            {APURVA}
          </a>
        </p>
      </div>

      <p className="pform__legal">
        We use your email and company name only to answer you. Details in our{" "}
        <a className="mailto" href="/privacy">privacy notice</a>.
      </p>

      <p className="pform__note" role="status">
        {state === "error"
          ? `That did not go through. Please write to ${APURVA} instead.`
          : ""}
      </p>
    </form>
  );
}
