# Data map and retention schedule

Status: draft record of processing design, 19 August 2026. Complete supplier names, contracts, transfer checks and the Article 10 condition before accepting paid clients.

## Data-minimisation rules

- Do not ask for a person's story in the booking form.
- Do not record calls or sessions by default.
- Keep notes factual, brief and necessary for continuity or safety. Distinguish what a client said from what was directly observed.
- Avoid names and identifying details about former partners, children and professionals unless necessary.
- Never accept bank credentials, client passwords or custody of money.
- Never use service, health, relationship or safeguarding information for advertising, audiences or testimonials.
- Use separate systems for service records and marketing contacts.

## Processing map

| Stage | People and information | Purpose | Proposed UK GDPR basis | Recipients / location | Retention | Controls and open decisions |
|---|---|---|---|---|---|---|
| Website delivery | Visitor IP, device/browser, security logs | Deliver and secure the site | Article 6(1)(f), legitimate interests | Current hosting/CDN provider; confirm data locations | Security logs: supplier default, targeted maximum 30–90 days | Confirm hosting DPA, sub-processors and transfer mechanism. No analytics or advertising tracker at launch. |
| Cookie choices | Consent or preference value and timestamp, if future optional tools are added | Remember and prove a privacy choice | Article 6(1)(c) and/or (f); PECR consent for optional storage | First-party consent manager | Choice lifespan, then minimal consent evidence up to 6 years where needed | Current launch site uses no optional first-party cookies. Reassess before adding an embed or pixel. |
| HubSpot booking | Name, email, time, optional phone, IP/device data; avoid free-text case details | Arrange free call | Article 6(1)(b), steps requested before a possible contract | HubSpot and connected email/calendar provider | Unsuccessful enquiries: normally 90 days; routine booking record: 12 months | Configure fields to exclude sensitive narrative; DPA, transfer and deletion settings required. Link-out used so HubSpot code is not loaded on this site. |
| Suitability call | Identity, age, country, communication needs, objectives, limited safety/scope information | Decide whether service can be offered safely | Article 6(1)(b) and (f) | Chris/authorised worker; approved call provider | If not taken on: 90 days unless incident/complaint requires longer | Give privacy and confidentiality-limit summary before substantive disclosure. Do not conduct a clinical assessment. |
| Special-category information | Health, wellbeing, sexuality or other Article 9 information the client chooses to share | Provide tailored optional support | Article 6(1)(b) or (f), plus normally Article 9(2)(a) explicit consent; Article 9(2)(c) may apply in a genuine emergency | Only people and processors necessary for the service | Minimal service record: proposed 6 years after end, subject to insurer/solicitor review | Explicit consent must be specific, recorded, withdrawable and separate from marketing. Do not make unnecessary disclosure a condition of service. |
| Allegations/offence data | Allegations, proceedings or convictions concerning client or others | Confidential support, safety or legal claims | Article 6 basis plus an Article 10/Schedule 1 condition | Strictly restricted | Only as long as necessary within relevant client/incident record | Obtain solicitor confirmation on DPA 2018 Schedule 1 condition 17 and/or 18 and whether an Appropriate Policy Document is mandatory. |
| Contract and cancellation | Offer selected, acceptance, terms version, early-start request, cancellation, communications | Form and administer consumer contract | Article 6(1)(b) and (c) | DM4L LTD, advisers if needed | 6 years after contract ends | Timestamp versioned documents. Keep marketing consent separate. |
| Payment and invoices | Billing identity, amount, VAT, transaction reference; card data held by processor | Take payment, tax/accounting | Article 6(1)(b) and (c) | Payment processor and accountant — to be selected | Invoices/VAT/accounting: at least 6 years | Use hosted payment page; DM4L LTD should not store full card data. Confirm PCI scope and DPA. |
| Sessions and service notes | Minimal themes, agreed actions, attendance, boundaries, referral and risk facts | Deliver continuity and safe service | Article 6(1)(b)/(f); Article 9 condition where applicable | Approved notes system — to be selected | Proposed 6 years after end, reviewed against insurer advice | Encryption, MFA, access log, no recordings, no personal devices without managed controls. |
| Administrative messaging | Scheduling and limited service logistics | Operate engagement | Article 6(1)(b) | Email/messaging provider — to be selected | Routine: 12 months; material contract/safety messages copied to relevant record | Do not promise live support. Define monitored hours. Do not use ordinary messaging for highly sensitive documents. |
| Practical organisation and authorised liaison | Client-provided correspondence, chronologies, deadlines, adviser questions, written authority and administrative communications with advisers | Divorce Concierge deliverable | Article 6(1)(b); Article 9/10 conditions if content contains such data | Secure workspace and the client's named professional advisers | Delete working copies within 30 days after end unless necessary for contract/safety record | No account or money access, no direct ex-partner contact, no legal interpretation. Verify written authority, identity and recipient before each new liaison. |
| Referral / emergency disclosure | Minimum identity, location, risk and relevant facts | Referral requested by client or serious safety response | Consent; Article 6(1)(d), (c) or (f) depending on case; Article 9 condition as applicable | Named professional, emergency service or safeguarding authority | Logged within client/incident record | Record necessity, recipient, information, time and reasoning. Discuss with client first when safe and lawful. |
| Complaints, incidents and claims | Complaint, evidence, response and outcome | Resolve complaint, improve safety, establish/defend claims | Article 6(1)(c)/(f); Article 9(2)(f) where applicable | Insurer, solicitor, authority if needed | Normally 6 years after closure; longer only on advice | Separate restricted incident log; do not repurpose. |
| Marketing | Email, preference, source and consent evidence | Optional updates | Article 6(1)(a) consent, or documented PECR soft opt-in where lawful | Email provider — to be selected | Until opt-out; retain minimal suppression record | Unticked optional box; name business; explain content/frequency; easy unsubscribe. No upload of client lists to ad platforms. |
| Testimonials | Agreed wording/image and consent | Public promotion | Article 6(1)(a); Article 9(2)(a) if testimonial reveals health/similar information | Public website/social platforms | Time-limited permission, review at least annually | Separate, genuinely optional consent after service; no incentives without disclosure; do not imply typical outcomes. Anonymise by default. |

## Data subjects requiring extra care

Prospects and clients may describe former partners, children, relatives, employers, lawyers, healthcare workers or alleged conduct. Those people have data-protection rights even though they are not customers. Collect only what is needed, avoid contacting them, restrict access, document whether providing a privacy notice would be impossible or would seriously impair confidential support, and obtain legal advice before relying on an exemption.

## Before launch

1. Select and document hosting, booking, email/calendar, video, payment, notes and messaging suppliers.
2. Sign/accept controller–processor terms and inventory sub-processors.
3. Complete international-transfer checks and a DPIA covering vulnerable people, special-category data, third-party allegations and safeguarding.
4. Approve a Schedule 1/Article 10 position and Appropriate Policy Document if required.
5. Verify ICO data-protection fee status.
6. Configure MFA, device encryption, least privilege, backups, deletion and a breach procedure with the 72-hour ICO assessment deadline.
