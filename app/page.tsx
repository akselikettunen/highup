import SunsetSky from "@/components/SunsetSky";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <nav className="nav">
        <a className="mark" href="#top">High-Up<i>!</i></a>
        <div className="nav__links">
          <a href="#weekend">The weekend</a>
          <a href="#what">The event</a>
          <a href="#why">Why High-Up!</a>
          <a href="#join">Join</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="btn btn--fill btn--sm" href="https://calendar.app.google/y8bj6e39cszaRqpEA" target="_blank" rel="noopener noreferrer">Partner with us
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </nav>

      <header className="hero" id="top">
        <SunsetSky />
        <div className="hero__scrim" aria-hidden="true"></div>

        <div className="wrap hero__inner">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true"></span>
            <span>Official Slush side event</span>
            <em>/</em>
            <span>19&ndash;20 November 2026</span>
            <em>/</em>
            <span>Aalto University, Espoo</span>
          </div>
          <h1 className="hero__name">High-Up<span className="bang">!</span></h1>
          <div className="hero__cta">
            <a className="btn btn--fill btn--lg" href="https://calendar.app.google/y8bj6e39cszaRqpEA" target="_blank" rel="noopener noreferrer">Partner with us
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a className="btn btn--ghost btn--lg" href="https://stuhi.org/launchpad/app/" target="_blank" rel="noopener noreferrer">Sign up to build
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        <div className="wrap">
          <div className="statsrow">
            <div className="stat"><b>500+</b><small>High schoolers</small></div>
            <div className="stat"><b>19&ndash;20 Nov</b><small>During Slush week</small></div>
            <div className="stat"><b>All of</b><small>Finland, every region</small></div>
            <div className="stat"><b>0 &euro;</b><small>Travel, stay and food</small></div>
          </div>
          <div className="builtby">
            <span className="label">Built by</span>
            <span className="logo-aalto" role="img" aria-label="Aalto University"></span>
            <span className="logo-stuhi" role="img" aria-label="STUHI"></span>
          </div>
        </div>
      </header>

      <section className="sec" id="weekend">
        <div className="wrap">
          <div className="sec__head rv">
            <div>
              <span className="label">The weekend</span>
              <h2>An official Slush side event</h2>
            </div>
            <p>High-Up! runs on 19&ndash;20 November, in the middle of Slush week, on the Aalto campus in Espoo. Getting there, sleeping and eating are covered. You bring yourself.</p>
          </div>
          <div className="amb rv">
            <div>
              <b>19&ndash;20 Nov</b><small>Slush week 2026</small>
              <p>Two days on the Aalto campus in Espoo, while the whole startup world is already in town.</p>
            </div>
            <div>
              <b>0 &euro;</b><small>Fully covered</small>
              <p>Accommodation, travel and food are completely provided for every attendee.</p>
            </div>
            <div>
              <b>Slush</b><small>Speakers on stage</small>
              <p>Speakers from Slush come to talk to you, not about you.</p>
            </div>
            <div>
              <b>Booths</b><small>All around campus</small>
              <p>Startup booths and activities across the whole campus, from all over the Finnish startup scene.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="what">
        <div className="wrap">
          <div className="sec__head rv">
            <div>
              <span className="label">The event</span>
              <h2>Two days that don't end when you go home</h2>
            </div>
            <p>Most youth events stop at the pitch. High-Up! is built in three stages, and the third one is the one everybody else forgets.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="pillars">
            <article className="pillar rv">
              <div className="pillar__top"><span className="bead" aria-hidden="true"></span><h3>Real action</h3><span className="num">01</span></div>
              <p>Aalto University hosts 500+ high schoolers from all over Finland for two days of inspiration, exposure, real connections and building things that actually work — with the tools, resources and teams to do it.</p>
              <p>Founders, builders, investors, teachers, mentors, decision-makers: everyone is invited, and everyone is welcome to come and fire up the next generation.</p>
            </article>
            <article className="pillar rv">
              <div className="pillar__top"><span className="bead" aria-hidden="true"></span><h3>Recognition</h3><span className="num">02</span></div>
              <p>You build a radical solution to a problem you picked yourself, then you present it. That work goes straight to the people who can turn it into something real.</p>
              <p>We reward the teachers and counsellors doing the quiet work, too. One team takes the prize — everyone leaves with something they can use.</p>
            </article>
            <article className="pillar rv">
              <div className="pillar__top"><span className="bead" aria-hidden="true"></span><h3>Ripple effect</h3><span className="num">03</span></div>
              <p>The part most events skip. You leave with one concrete mission: take the builder mindset back to your own school.</p>
              <p>Mentors stay in touch. Teachers and counsellors get a community to lean on. And you leave believing you can actually move something.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sec sec--alt" id="why">
        <div className="wrap">
          <div className="sec__head rv">
            <div>
              <span className="label">Why it matters</span>
              <h2>Three reasons to put your name on it</h2>
            </div>
            <p>High-Up! is a platform, and the people who back it early are the ones who shape it.</p>
          </div>
          <div className="why">
            <div className="sat rv">
              <h3>A network, and a legacy</h3>
              <p>High-Up! builds a stronger network across the whole of Finland &mdash; and something worth backing again.</p>
            </div>
            <div className="sat rv">
              <h3>Trust in youth, trust in Finland</h3>
              <p>Back the next generation of founders, builders and troublemakers in Finland, and give them the room to make a real difference.</p>
            </div>
            <div className="sat rv">
              <h3>A platform for real problems</h3>
              <p>Reach every part of Finland and you can pool, spot and start solving the problems that actually matter &mdash; together.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="sec" id="join">
        <div className="wrap">
          <div className="sec__head rv">
            <div>
              <span className="label">Two ways in</span>
              <h2>Pick your door</h2>
            </div>
            <p>High-Up! only works if both sides show up: the students who build, and the people who back them.</p>
          </div>
          <div className="doors">
            <div className="door door--hot rv" id="partner">
              <span className="label">For partners</span>
              <h3>Back 500+ high schoolers</h3>
              <p>Show that you trust the next generation, and get your people in the room where they build. Partners shape the challenges, mentor the teams and see the work first.</p>
              <ul>
                <li>Your team mentoring on the floor, not on a panel</li>
                <li>First look at what the teams build</li>
                <li>Named on the stage that reaches every region of Finland</li>
                <li>Visibility during the busiest week in Finnish tech</li>
              </ul>
              <a className="btn btn--fill btn--lg" href="https://calendar.app.google/y8bj6e39cszaRqpEA" target="_blank" rel="noopener noreferrer">Book a call
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="door rv" id="students">
              <span className="label">For students &amp; teachers</span>
              <h3>Come build something</h3>
              <p>No idea needed. No experience needed. Bring a problem that annoys you and two days to do something about it.</p>
              <ul>
                <li>Open to high school students anywhere in Finland</li>
                <li>Teachers and counsellors: bring a group</li>
                <li>Sign up through the STUHI platform</li>
                <li>Mentors who stay in touch after the weekend</li>
              </ul>
              <a className="btn btn--ghost btn--lg" href="https://stuhi.org/launchpad/app/" target="_blank" rel="noopener noreferrer">Sign up to build
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec__head rv">
            <div>
              <span className="label">Questions</span>
              <h2>Answered straight</h2>
            </div>
            <p>Anything missing? Write to <a className="mailto" href="mailto:akseli@stuhi.org">akseli@stuhi.org</a> or <a className="mailto" href="mailto:apurva.ganoo@aalto.fi">apurva.ganoo@aalto.fi</a> and a human replies.</p>
          </div>
          <div className="faq rv">
            <details>
              <summary><span className="q-n">01</span>Who can take part?</summary>
              <div className="a">Any high school student in Finland. Any school, any region, any background. You don't need a startup, a team or a track record — just the willingness to try.</div>
            </details>
            <details>
              <summary><span className="q-n">02</span>Do I need an idea before I come?</summary>
              <div className="a">No. The first thing you do at High-Up! is find a problem worth your two days. Some people arrive with one; most find it in the room.</div>
            </details>
            <details>
              <summary><span className="q-n">03</span>What does it cost me?</summary>
              <div className="a">Nothing. Travel, accommodation and food are completely provided for attendees. That is what the partners are for.</div>
            </details>
            <details>
              <summary><span className="q-n">04</span>When and where?</summary>
              <div className="a">19&ndash;20 November 2026, on the Aalto University campus in Espoo &mdash; right in the middle of Slush week, as an official Slush side event.</div>
            </details>
            <details>
              <summary><span className="q-n">05</span>What do partners actually get?</summary>
              <div className="a">Time with 500+ high schoolers from every part of Finland, mentoring slots on the build floor, first sight of the solutions, and your name on the biggest student build weekend in Finland. Write to us and we'll walk you through it.</div>
            </details>
            <details>
              <summary><span className="q-n">06</span>I'm a teacher or counsellor. Where do I fit?</summary>
              <div className="a">Right in the middle of it. Bring a group, and you get a community of teachers and counsellors to lean on afterwards. We also reward the work you're already doing — one of you gets recognised on stage.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="sec sec--tail">
        <div className="wrap">
          <div className="door door--hot door--closing rv">
            <span className="label">Ready?</span>
            <h3>Fire up the next generation of builders in Finland.</h3>
            <div className="hero__cta">
              <a className="btn btn--fill btn--lg" href="https://calendar.app.google/y8bj6e39cszaRqpEA" target="_blank" rel="noopener noreferrer">Partner with us
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a className="btn btn--ghost btn--lg" href="https://stuhi.org/launchpad/app/" target="_blank" rel="noopener noreferrer">Sign up to build
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <div className="foot__top">
            <div>
              <a className="mark mark--foot" href="#top">High-Up<i>!</i></a>
              <p className="foot__blurb">Getting Finnish high schoolers to solve real problems. Two days at Aalto, one shot at building something.</p>
            </div>
            <div className="foot__nav">
              <a href="#weekend">The weekend</a>
              <a href="#what">The event</a>
              <a href="#why">Why High-Up!</a>
              <a href="#join">Join</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="builtby builtby--foot">
              <span className="label">Built by</span>
              <span className="logo-aalto logo-aalto--sm" role="img" aria-label="Aalto University"></span>
              <span className="logo-stuhi logo-stuhi--sm" role="img" aria-label="STUHI"></span>
            </div>
          </div>
          <div className="foot__bot">
            <span>&copy; 2026 High-Up! &middot; STUHI &amp; Aalto University</span>
            <span className="foot__mails"><a className="mailto" href="mailto:akseli@stuhi.org">akseli@stuhi.org</a><span aria-hidden="true">&middot;</span><a className="mailto" href="mailto:apurva.ganoo@aalto.fi">apurva.ganoo@aalto.fi</a></span>
            <span>Espoo, Finland</span>
          </div>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
