
The Final License Tiers (locked)
1. Personal

Who it’s for

Solo devs

Students

Indie builders

Rules

1 user

1 active device/session

Personal or limited commercial use

No redistribution

No team sharing

Enforcement

Bound to one user account

Download + device limits enforced

2. Team

This is the one we lock properly 👇

Team = small, defined, capped

Rules

2–5 users max ✅ (this is the hard cap)

Internal team use only

Seats must be explicitly assigned

No resale, no redistribution

Shared within one org / repo / product

What happens at 6 users?

They cannot buy Team

They are told to contact you → Enterprise

No silent upgrades. No auto scaling.

Why 5 is the right cap

Big enough for:

Startup teams

Student groups

Small agencies

Small enough that:

You don’t underprice real org usage

Enforcement stays simple

Enterprise still has meaning

This is the line in the sand.

3. Enterprise

Not a plan. A conversation.

Rules

6+ users OR

Redistribution OR

White-label OR

Client-facing tooling OR

Institutional use (school, company, NGO, etc.)

How it works

No checkout

No price shown

Manual approval

Manual license creation

UI copy

“For teams larger than 5 or special use cases, contact me.”

That’s it.

Pricing Logic (important mindset)

Do not price per seat beyond Team.
That’s how you accidentally build Stripe.

Instead:

Personal → fixed price

Team → higher fixed price (covers up to 5)

Enterprise → negotiated

If they need 20 seats, that’s not “4× Team”.
That’s Enterprise.

How this maps cleanly to your system

You already have:

Licenses

Downloads

Audits

You only need 3 license types:

type LicenseTier = 'PERSONAL' | 'TEAM' | 'ENTERPRISE'


And one field that matters for Team:

maxSeats: number | null


Set:

Personal → maxSeats = 1

Team → maxSeats = 5

Enterprise → maxSeats = null (manual rules)

Everything else stays the same.

Copy you can use everywhere (short + confident)

Team license

“For small teams of up to 5 people.”

Enterprise

“For teams larger than 5 or special use cases. Contact for access.”

No apology. No explanation.