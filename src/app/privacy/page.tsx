import LegalDocument, { LegalEmail, LegalSection } from "@/components/LegalDocument";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Sofnology Solutions handles personal data collected through this website, under the UK GDPR and the Data Protection Act 2018.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      updated="9 October 2026"
      intro="This notice explains how Sofnology Solutions handles personal data collected through sofnology.com. It is written for the UK General Data Protection Regulation and the Data Protection Act 2018."
    >
      <LegalSection title="Who we are">
        <p>
          Sofnology Solutions, of Dhaka, Bangladesh, is the controller of personal data collected
          through this website. We have not appointed a data protection officer. For any question
          about your data, email <LegalEmail />.
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <p>If you send an enquiry from another page of this site, we collect:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>your name, work email, and message</li>
          <li>a phone number, company website, and project type, if you add them</li>
          <li>a file, if you attach one, up to 4MB</li>
          <li>your confirmation that we may contact you about that request</li>
        </ul>
        <p>
          When the form succeeds, our email provider sends you a short acknowledgement. The host
          of the site may also process technical data, such as your IP address, browser type, and
          the page requested, so the site can be delivered and protected.
        </p>
        <p>
          If you choose a light or dark theme, that choice stays in your browser under the name
          sofnology-theme. We do not receive it.
        </p>
        <p>
          We do not run advertising or analytics cookies. We do not buy contact lists. We do not
          ask for special category data, such as information about health. Please keep that out of
          a message.
        </p>
      </LegalSection>

      <LegalSection title="Why we use it">
        <p>
          We use an enquiry to read it, reply, and take the steps you ask for before any contract.
          The lawful basis is Article 6(1)(b) of the UK GDPR: steps taken at your request with a
          view to a contract.
        </p>
        <p>
          The confirmation box is your consent, under Article 6(1)(a), for us to contact you about
          that request. We use it for that request only. We do not add you to a marketing list. You
          can withdraw that consent at any time by email. Withdrawal does not undo a reply already
          sent.
        </p>
        <p>
          We rely on legitimate interests, under Article 6(1)(f), to keep the site available and
          secure, including the host&apos;s technical logs. That interest is running a working
          website. You can object, as set out below.
        </p>
        <p>
          We do not use your data for automated decisions that produce a legal effect, or a
          similarly significant effect, on you.
        </p>
      </LegalSection>

      <LegalSection title="Who else receives it">
        <p>
          The enquiry is emailed to <LegalEmail /> so the Sofnology team can read it. Delivery of
          that email is handled by Resend. The site is hosted by Vercel. Those providers process
          the data so the message and the site can be delivered.
        </p>
        <p>
          We do not sell personal data, and we do not share it with advertisers. We disclose it if
          the law requires it, or if a public authority with a lawful power asks for it.
        </p>
      </LegalSection>

      <LegalSection title="Transfers outside the United Kingdom">
        <p>
          Sofnology is in Bangladesh. An enquiry is transferred there so we can read it and reply.
          Vercel and Resend may process the same data in the United States and in other countries.
        </p>
        <p>
          The United Kingdom has not made an adequacy regulation for Bangladesh. A transfer to a
          country without adequacy needs a safeguard under Article 46 of the UK GDPR. The safeguard
          published by the Information Commissioner for this purpose is the International Data
          Transfer Agreement, or the International Data Transfer Addendum to the European standard
          contractual clauses.
        </p>
        <p>
          Email <LegalEmail /> and ask which safeguard covers a transfer that includes your data.
          We will tell you.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          If an enquiry does not become an engagement, we delete the message, any attachment, and
          the related emails within 24 months of the last message about it.
        </p>
        <p>
          If it becomes a project, we keep the correspondence for the life of the agreement and for
          as long as the record-keeping rules that apply to that work then require. We delete it
          after that.
        </p>
        <p>
          Host logs are kept for the period the host keeps them for security and operation. A theme
          setting stays in your browser until you clear it.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Where the UK GDPR applies to you, you can ask us to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>confirm whether we hold your personal data, and for a copy of it</li>
          <li>correct data that is inaccurate</li>
          <li>delete it, in the cases the law allows</li>
          <li>restrict how we use it</li>
          <li>
            receive data you provided, in a portable form, where the processing is based on consent
            or a contract and is carried out by automated means
          </li>
          <li>object to processing based on legitimate interests</li>
          <li>withdraw consent to being contacted about an enquiry</li>
        </ul>
        <p>
          Email <LegalEmail />. We may ask for enough information to be sure the request is yours.
          We reply within one month. If a request is complex, or you make several, we may extend
          that by up to two further months, and we will tell you within the first month if we do.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and on-device storage">
        <p>
          This site does not set analytics cookies or advertising cookies, and it does not use a
          cookie to follow you across other sites.
        </p>
        <p>
          The theme control stores one value in local storage on your device. It is not sent to
          Sofnology. You can remove it in your browser settings.
        </p>
        <p>
          A host may use a strictly necessary cookie to deliver the page. Under the Privacy and
          Electronic Communications Regulations 2003, that kind of cookie does not need a consent
          banner.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          This site is written for businesses. It is not directed at children, and we do not
          knowingly collect personal data from anyone under 18. If you believe we have, email us
          and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="Complaints">
        <p>
          You can complain to the UK regulator, the Information Commissioner&apos;s Office, Wycliffe
          House, Water Lane, Wilmslow, Cheshire, SK9 5AF. The site is ico.org.uk and the helpline
          is 0303 123 1113.
        </p>
        <p>
          You may complain to the ICO whether or not you have written to us first. If you are
          willing, email <LegalEmail /> as well, so we can try to put the problem right.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If this notice changes, the new version will be posted on this page and the date at the
          top will change. The version on this page is the one that applies.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
