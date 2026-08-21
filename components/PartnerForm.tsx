"use client";

import { useState } from "react";

const TO = "apurva.ganoo@aalto.fi";
const CC = "akseli@stuhi.org";

/**
 * The site is a static export, so there is no endpoint to post to. The box
 * collects the two things worth knowing and hands them to the sender's mail
 * client, prefilled, so nothing is retyped and nothing is lost.
 */
export default function PartnerForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `High-Up! partnership — ${company}`;
    const body = [
      "Hi Apurva,",
      "",
      `We would like to hear more about partnering with High-Up!.`,
      "",
      `Company: ${company}`,
      `Email: ${email}`,
      "",
    ].join("\n");
    window.location.href = `mailto:${TO}?cc=${CC}&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

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
          />
        </label>
      </div>

      <div className="pform__foot">
        <button className="btn btn--fill btn--lg" type="submit">
          Send
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
          <a className="mailto" href={`mailto:${TO}`}>
            {TO}
          </a>
        </p>
      </div>

      <p className="pform__note" role="status">
        {sent
          ? `Your mail app should be open with the message ready. If nothing happened, write to ${TO}.`
          : ""}
      </p>
    </form>
  );
}
