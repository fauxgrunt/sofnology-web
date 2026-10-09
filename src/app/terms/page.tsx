import LegalDocument, { LegalEmail, LegalSection } from "@/components/LegalDocument";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms for using sofnology.com, governed by the law of England and Wales. A project starts only under a separate written agreement.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Use"
      updated="9 October 2026"
      intro="These terms govern use of sofnology.com. They are governed by the law of England and Wales. Any paid work is governed by its own written agreement."
    >
      <LegalSection title="Who we are">
        <p>
          The site is operated by Sofnology Solutions, Dhaka, Bangladesh. Questions about these
          terms: <LegalEmail />.
        </p>
      </LegalSection>

      <LegalSection title="Using the site">
        <p>
          You may use the site to read about Sofnology and to consider whether to ask about work.
          If you do not accept these terms, do not use the site.
        </p>
      </LegalSection>

      <LegalSection title="What the pages are">
        <p>
          The pages describe services and selected work. They are information. They are not an
          offer, a quote, or a promise of a result, a date, a price, or a particular team.
        </p>
        <p>
          A case study describes work that was delivered. A client is left unnamed where the
          agreement requires that. A number appears only where a record verifies it.
        </p>
      </LegalSection>

      <LegalSection title="When a contract exists">
        <p>
          A message sent through the site, by email, or by any other channel does not create a
          contract and does not reserve a team.
        </p>
        <p>
          Work starts only when Sofnology and the client have agreed the scope, the price, and the
          handover in writing. That agreement governs the work. If these website terms and that
          agreement conflict on the work itself, the written agreement prevails.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>try to reach any part of the site, or any system behind it, that is not open to you</li>
          <li>interfere with the site, or load it in a way meant to disrupt it</li>
          <li>send unlawful, infringing, or harmful material through the site</li>
          <li>copy the site to present it as your own, or scrape it in a way that degrades the service</li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The text, design, images, and marks on this site belong to Sofnology Solutions or its
          licensors. You may view them while you use the site. You may not copy them for your own
          commercial site, or remove a credit or mark, unless a specific use is allowed by law or
          we agree in writing.
        </p>
      </LegalSection>

      <LegalSection title="Material you send">
        <p>
          If you send a message or a file, you confirm that you have the right to send it. You
          allow Sofnology to use it to reply, to consider the request, and to prepare any later
          agreement. That permission does not transfer ownership of your material to Sofnology.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          Nothing in these terms excludes or limits liability for death or personal injury caused
          by negligence, for fraud or fraudulent misrepresentation, or for any other liability that
          the law of England and Wales does not allow to be excluded or limited.
        </p>
        <p>
          The site is made available as it stands. We do not warrant that it will be uninterrupted
          or free of errors.
        </p>
        <p>
          If you use the site as a business, and the law allows a limit, Sofnology&apos;s total
          liability arising out of use of this website is limited to £100. That cap does not apply
          to a paid engagement. A paid engagement is governed by its own written agreement.
        </p>
        <p>
          If you are a consumer, you have rights under the Consumer Rights Act 2015. These terms
          do not take those rights away.
        </p>
      </LegalSection>

      <LegalSection title="Law and courts">
        <p>
          These terms, and any dispute about use of the website, are governed by the law of England
          and Wales. The courts of England and Wales have jurisdiction.
        </p>
        <p>
          If you are a consumer living in Scotland or Northern Ireland, you may also bring a claim
          in the courts of the country where you live.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms by posting a new version on this page. The date at the top will
          change. The posted version applies to use of the site after that date. A written project
          agreement changes only in the way that agreement allows.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
