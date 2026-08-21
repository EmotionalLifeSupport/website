# Consent, booking and contracting implementation

Status: implementation plan, 19 August 2026.

## Consent is split by purpose

Do not use one “I agree to everything” checkbox. Contract acceptance, early service start, special-category processing, marketing and testimonials are separate decisions.

## Website and cookies

Implemented:

- removed the always-on HubSpot analytics script;
- removed the embedded HubSpot calendar;
- linked to HubSpot only after the visitor selects “View available times”;
- warned visitors not to enter health, relationship, legal or safeguarding details in the booking form; and
- added privacy, cookie and service-term pages plus statutory company details.

At launch, a cookie banner is unnecessary if the hosting setup uses only exempt, strictly necessary storage and no optional analytics/advertising/embed is added. Verify with a browser storage/network audit. If an optional tool is added, block it before consent and offer equally prominent “Accept” and “Reject” controls, granular categories, withdrawal and a consent log.

## HubSpot booking changes

Configure the meeting form to collect only:

- name;
- email;
- optional phone only if operationally necessary;
- chosen time; and
- accessibility or communication adjustment request in a carefully worded optional field.

Remove “tell me what is happening” and other open narrative fields. Use a neutral confirmation subject. Add links to the privacy notice, scope statement and urgent-support routes. Configure the shortest workable deletion period for prospects not taken on. Turn off HubSpot advertising/audience features and nonessential tracking for these contacts.

## Free-call opening script and record

Before substantive discussion, say in plain language:

> This is non-clinical support, not therapy, legal advice or an emergency service. I will keep our conversation private, but I may need to act if there is a serious safety or safeguarding concern or a legal requirement. I make only brief necessary notes. Is it safe and private for you to talk, and are you happy to continue?

Record the notice version, date and answer. This operational acknowledgement is not a substitute for explicit Article 9 consent if special-category data will be retained for a paid service.

## Written client pack before payment

Send and timestamp:

1. one-page offer summary: deliverables, dates, location, administrative contact hours and total VAT-inclusive price;
2. service terms;
3. privacy notice;
4. model cancellation form;
5. special-category consent request, if needed;
6. early-start request, only if the client wants to begin inside 14 days; and
7. optional marketing choice, unticked and separate.

Suggested fields:

- “I accept the Service Terms version [date] and the offer summary.”
- “I have read the Privacy Notice version [date].” This is an acknowledgement, not consent to all processing.
- “I explicitly consent to DM4L LTD using the health and wellbeing information I choose to share where necessary to provide Emotional Life Support. I understand this is optional, I can withdraw it, and withdrawal may mean the service cannot continue safely.”
- “I expressly request that the service begins before the end of the 14-day cancellation period. I understand that if I cancel after it starts, I may have to pay a fair proportion for services already supplied.”
- Separate optional marketing: “Email me occasional Emotional Life Support news and offers. I can unsubscribe at any time.”

Do not pre-tick any box. A client who declines marketing receives the same service. Test that consent versions and timestamps can be exported and deleted/updated correctly.

## Payment and cancellation sequence

- Use a selected hosted payment processor after the accepted documents are recorded.
- Invoice in DM4L LTD's exact name, state “trading as Emotional Life Support”, VAT number, VAT rate/amount and total.
- If an early start is not expressly requested, schedule the first paid session after the cancellation period.
- If early start is requested, state the fair calculation method in the written offer before payment. Use the agreed scope and services actually supplied rather than inventing a penalty.
- Send confirmation on a durable medium (email/PDF) that the client can retain.

## Release gate

Paid booking remains closed until the public service/privacy email, VAT number, suppliers, consent-record tool, cancellation calculation, complaints contact, insurer approval and safeguarding sign-off are complete.
