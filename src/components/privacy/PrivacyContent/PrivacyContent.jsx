import './PrivacyContent.css';

const Section = ({ id, title, children }) => (
  <section className="prc-section" id={id}>
    <h2 className="prc-h2">{title}</h2>
    <div className="prc-section-body">
      {children}
    </div>
  </section>
);

const Sub = ({ title, children }) => (
  <div className="prc-sub">
    <h3 className="prc-h3">{title}</h3>
    <div className="prc-sub-margin">
      <div className="prc-sub-container">
        {children}
      </div>
    </div>
  </div>
);

const P = ({ children }) => <p className="prc-p">{children}</p>;

const List = ({ items }) => (
  <ul className="prc-list">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

const PrivacyContent = () => (
  <div className="prc-wrap">
    <div className="prc-inner">

      {/* ── 1. Introduction ── */}
      <Section id="s1" title="1.0 Who We Are">
        <P>MAXI-PAY INC ("LeoPay", "we", "our" or "us") is a company incorporated in Canada, with its registered office at 22420 Dewdney Trunk Road, Suite 300, Maple Ridge, British Columbia, Canada, V2X 3J5. LeoPay, together with its subsidiaries and affiliates ("LeoPay"), operates as a non-banking financial technologies provider, enabling cross-border payment rails powered by stablecoins and related blockchain-based financial infrastructure.</P>
        <P>This Privacy Policy explains how we collect, use, store, and share your Personal Data when you use our platform, website, APIs, and other related online services (collectively, the "Services").</P>

        <Sub title="1.1 Please Read This Privacy Policy">
          <P>Your privacy is of the utmost importance to us. This Privacy Policy sets out important details about how and why we process your Personal Data, your rights under applicable data protection laws, and how you can contact us or a relevant data protection authority if you have any questions or complaints regarding your data or our privacy practices.</P>
        </Sub>

        <Sub title="1.3 Data Controller">
          <P>LeoPay is the data controller of Personal Data collected via the Services and other related platforms (including official social media channels). Hence, LeoPay complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Canadian privacy laws, as well as any applicable local and international data protection legislation.</P>
        </Sub>

        <Sub title="1.4 Third-Party Links and Integrations">
          <P>Our Services may include links to, or integrations with, websites, applications, and services operated by trusted third parties. These may include:</P>
          <List items={[
            'Identity verification service providers,',
            'Payment or blockchain network partners,',
            'Custodian or compliance solution providers, and',
            'Partner platforms offering access to LeoPay\'s APIs.',
          ]} />
          <P>Such third-party platforms may collect data about you according to their own privacy policies, which we encourage you to review. LeoPay is not responsible for the privacy practices or content of third-party websites.</P>
        </Sub>

        <Sub title="1.5 Updates to This Privacy Policy">
          <P>We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. When material changes are made, we will notify you through appropriate channels; for example, via email or a prominent notice on our website. Please review this Policy periodically to stay informed of how we protect your information.</P>
          <h4 className="prc-h4">Definitions</h4>
          <List items={[
            '"LeoPay Website" means our official website available at https://www.leopay.io and any other domains operated by LeoPay or its affiliates.',
            '"Services" means the LeoPay Website, online platform, APIs, payment gateways, and any other digital or cross-border financial service offered by LeoPay.',
            '"EEA" means the European Economic Area.',
            '"EU GDPR" refers to the European Union\'s General Data Protection Regulation (Regulation (EU) 2016/679) and any laws implementing or supplementing it.',
            '"Personal Data" means any information relating to an identified or identifiable natural person.',
            '"User(s)" or "You" means individuals or entities using our Services, including clients, counterparties, and their representatives.',
            '"Privacy Policy" means this document.',
          ]} />
        </Sub>
      </Section>

      {/* ── 2. Personal Data ── */}
      <Section id="s2" title="2.0 The Types of Personal Data We Collect">
        <P>The categories of Personal Data we collect depend on your relationship with LeoPay and how you interact with our Services. Certain Personal Data is essential to provide you with access to our stablecoin-based payment infrastructure and related compliance obligations. Without such data, we may be unable to onboard or continue providing Services to you.</P>

        <Sub title="2.1 Information You Provide to Us">
          <P>This includes information that you voluntarily provide while using our Services or when communicating with us directly. Such information may include (but is not limited to):</P>
          <List items={[
            'Basic identification details: full name, date of birth, nationality, job title, and contact details (email, phone number, postal address, city, and country).',
            'Verification and KYC information: government-issued ID numbers, photographs, proof of address, and any documentation required under Anti-Money Laundering (AML) or Counter-Terrorist Financing (CFT) laws.',
            'Financial and transactional details: wallet addresses, bank account details, stablecoin transaction history, payment method information, or linked accounts.',
            'Login and account credentials: hashed passwords and authentication details.',
            'Any other information you voluntarily provide through forms, surveys, or direct correspondence.',
          ]} />
        </Sub>

        <Sub title="2.2 Information We Collect Automatically">
          <P>When you interact with the Services, we automatically collect certain technical and usage information to maintain platform integrity and enhance user experience. This may include:</P>
          <List items={[
            'IP address, browser type, device identifiers, and operating system data.',
            'Log data (including session duration, access times, and error diagnostics).',
            'Geo-location data, network connectivity, and activity metrics.',
            'Behavioural data such as pages visited, actions performed, and clickstream data.',
          ]} />
          <P>This information does not generally reveal your exact identity but helps us ensure security, fraud prevention, regulatory compliance, and service optimisation.</P>
        </Sub>

        <Sub title="2.3 Information We Receive from Third Parties">
          <P>We may also receive Personal Data about you from third-party sources, such as:</P>
          <List items={[
            'Identity and AML verification providers (for KYC and screening checks).',
            'Blockchain analytics partners assisting with compliance monitoring.',
            'Payment service providers or financial institutions facilitating cross-border settlements.',
            'Publicly available databases or regulatory authorities, as required by law.',
          ]} />
          <P>If we combine such third-party data with data collected directly from you, the combined information will be treated in accordance with this Privacy Policy unless stated otherwise.</P>
        </Sub>
      </Section>

      {/* ── 3. Contractual Information ── */}
      <Section id="s3" title="3. Contractual Information and Related Correspondence">
        <Sub title="3.1 Communications and Correspondence">
          <P>Any communication or interaction with us, whether by email, telephone, web forms, social media, or other electronic means, may involve the collection of Personal Data, such as your name, contact details, and the content of your message. This includes:</P>
          <List items={[
            'General enquiries, onboarding queries, or service-related discussions;',
            'Support requests, operational follow-ups, or complaints;',
            'Dispute-related correspondence between you and LeoPay.',
          ]} />
          <P>We process such information to:</P>
          <List items={[
            'Administer and deliver the Services;',
            'Fulfil contractual and legal obligations;',
            'Maintain accurate business records;',
            'Ensure compliance with regulatory and audit requirements; and',
            'Improve service quality and client engagement.',
          ]} />
        </Sub>

        <Sub title="3.2 Call and Contact Records">
          <P>We may record or log details of your communication with LeoPay (e.g., date, time, duration, phone number, and nature of the call). If calls are recorded, we will inform you in advance and, where required by law, obtain your explicit consent.</P>
          <P>Such recordings are retained only for as long as necessary to comply with legal, contractual, or compliance purposes, including fraud prevention and dispute resolution.</P>
        </Sub>

        <Sub title="3.3 Purpose of Processing">
          <P>We retain and process this information as necessary to:</P>
          <List items={[
            'Perform our obligations under a contract or regulatory framework;',
            'Comply with record-keeping, financial audit, and tax requirements;',
            'Address client concerns, investigations, or claims; and',
            'Advance our legitimate business interests in ensuring transparency, quality assurance, and lawful administration of our Services.',
          ]} />
        </Sub>
      </Section>

      {/* ── 4. Marketing ── */}
      <Section id="s4" title="4. Marketing Communications">
        <Sub title="4.1 Direct Marketing">
          <P>We may collect your name, contact details (email, phone number, and address), and professional affiliation to inform you about LeoPay's services, new product offerings, compliance updates, or industry developments relevant to your interests.</P>
          <P>We may collect this information directly from you or, where lawful, from third parties such as partners or event organisers.</P>
        </Sub>

        <Sub title="4.2 Your Rights to Opt Out">
          <P>Individuals have the right to access, correct, and withdraw consent for the processing of their personal information, subject to legal and regulatory requirements, by contacting us at compliance@leopay.tech. Once you opt out, we will add your contact details to a suppression list to ensure you no longer receive marketing communications.</P>
          <P>However, we may still contact you for operational or compliance-related matters (such as account notifications or service updates).</P>
        </Sub>

        <Sub title="4.3 Lawful Basis">
          <P>If you are an existing customer or acting in a professional capacity for a company, we may rely on legitimate interest as our lawful basis for marketing communications, where permitted by law. Further, if you are not an existing customer or acting outside a professional capacity, we will contact you for marketing purposes only with your explicit consent.</P>
        </Sub>

        <Sub title="4.4 Third Parties and Marketing Service Providers">
          <P>LeoPay does not sell or share your personal contact details with unaffiliated third parties for their marketing purposes. We may use third-party email and analytics providers to deliver our marketing content; however, such processors act only on our instructions, under confidentiality and data protection agreements.</P>
        </Sub>

        <Sub title="4.5 Marketing Analytics">
          <P>When sending marketing communications, we may use web beacons or similar tools to collect limited engagement data, such as:</P>
          <List items={[
            'Whether and when an email was opened;',
            'Device and browser type; and',
            'IP address or interaction data.',
          ]} />
          <P>This helps us measure the effectiveness of our campaigns and refine communications. Such processing is based on legitimate interests or, where required, your consent.</P>
        </Sub>
      </Section>

      {/* ── 5. Website ── */}
      <Section id="s5" title="5. Website Information">
        <Sub title="5.1 Data Collected via Website and Platform">
          <P>When you visit or interact with the LeoPay Website or our associated platforms, we and authorised third-party providers may collect information automatically through cookies, web beacons, and analytics tools.</P>
          <P>We use this information for:</P>
          <List items={[
            'Ensuring website functionality and security;',
            'Analyzing usage patterns to improve performance;',
            'Detecting anomalies or unauthorized activity; and',
            'Developing marketing insights, where legally permitted.',
          ]} />
          <P>This may include:</P>
          <List items={[
            'IP address and geolocation data;',
            'Browser type, version, and language;',
            'Device identifiers and operating system;',
            'Login timestamps, access duration, and user interaction metrics; and',
            'Aggregated analytics and performance data.',
          ]} />
        </Sub>

        <Sub title="5.2 Advertising and Personalization">
          <P>We may, directly or via third-party partners, use website data to:</P>
          <List items={[
            'Display or tailor marketing and informational content; or',
            'Evaluate the effectiveness of online campaigns.',
          ]} />
          <P>Such personalisation is conducted without using identifiable information and, in all cases, in accordance with applicable consent requirements.</P>
        </Sub>

        <Sub title="5.3 External Links and Third-Party Integrations">
          <P>Our website may contain links to or integrations with third-party websites, applications, or plug-ins. LeoPay does not control and is not responsible for the privacy practices of these external entities.</P>
          <P>Further, we strongly encourage you to review the privacy policies of any external website you visit.</P>
        </Sub>
      </Section>

      {/* ── 6. Business ── */}
      <Section id="s6" title="6. Business and Partner Contact Information">
        <Sub title="6.1 Business Relationships">
          <P>If you are an employee, representative, or contact of a LeoPay customer, vendor, service provider, or business partner, we may collect and process:</P>
          <List items={[
            'Your name, position, and professional contact details;',
            'Details of your company or organization; and',
            'Records of communications or interactions related to the business relationship.',
          ]} />
          <P>This information is processed as necessary for our legitimate interests in managing relationships, fulfilling contracts, and conducting due diligence under applicable laws.</P>
        </Sub>
      </Section>

      {/* ── 7. Premises ── */}
      <Section id="s7" title="07. Information Collected at LeoPay Premises">
        <Sub title="7.1 Visitor Records">
          <P>When you visit our offices or physical premises, we may record information such as:</P>
          <List items={[
            'Your name, employer, contact details, date, and time of visit;',
            'Person you are meeting; and',
            'Vehicle registration details (if applicable).',
          ]} />
          <P>This is necessary for security, health, and safety purposes, and to ensure a secure and compliant environment.</P>
        </Sub>

        <Sub title="7.2 CCTV and Physical Security">
          <P>LeoPay premises may be monitored by CCTV surveillance for security, safety, and fraud prevention. Recorded footage may capture your image and activities and will be retained only as long as necessary for legitimate security or legal purposes.</P>
          <P>We will disclose footage only:</P>
          <List items={[
            'To law enforcement under formal request; or',
            'Where required to resolve a dispute or legal claim.',
          ]} />
        </Sub>

        <Sub title="7.3 Retention">
          <P>Visitor data is retained only as long as necessary for security or regulatory purposes, typically up to 5 years, and accident or safety-related reports may be retained for up to 6 years, in compliance with legal obligations.</P>
        </Sub>
      </Section>

      {/* ── 8. Legal Claims ── */}
      <Section id="s8" title="8. Legal Claims">
        <P>In the event LeoPay reasonably anticipates, is subject to, or intends to initiate legal proceedings, we may retain and process your personal information to the extent necessary to establish, exercise, or defend our legal rights. Such processing shall be based on our legitimate interest in protecting our legal and commercial interests, ensuring the integrity of our operations, and complying with legal obligations.</P>
        <P>Where relevant, such information may also be disclosed to our legal advisors, insurers, regulators, or law enforcement authorities. The retention period for such information shall depend on the nature of the claim, the applicable limitation period, and the duration for which we consider there to be a reasonable risk of legal exposure.</P>
      </Section>

      {/* ── 9. AML ── */}
      <Section id="s9" title="9. Data Collected During Anti-Money Laundering (AML) and Compliance Reviews">
        <Sub title="9.1 Statutory And Regulatory Obligations">
          <P>As part of LeoPay's statutory and regulatory obligations under applicable Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and Know Your Customer (KYC) frameworks, we may collect and process the following categories of personal information:</P>
          <List items={[
            'Full name, email address, nationality, country of residence, contact number, occupation, and job title;',
            'Government-issued identification documents and verification details;',
            'Wallet addresses, blockchain transaction hashes, and on-chain activity patterns;',
            'Publicly available online information, including social media links or profiles.',
          ]} />
          <P>Such data processing is carried out on the basis of legal and regulatory obligations as well as legitimate interests in preventing fraud, financial crime, and the misuse of our services. Further, the data may be sourced directly from you, our compliance partners, regulated financial institutions, and publicly available sources, including the open web and, where permitted by law, monitored data from non-indexed networks (Deep Web) for AML intelligence purposes.</P>
        </Sub>
      </Section>

      {/* ── 10. Third Parties ── */}
      <Section id="s10" title="10. Information Received from Third Parties">
        <Sub title="10.1 Third-Party Sources">
          <P>LeoPay may receive and process personal information about you from the following third-party sources:</P>
          <List items={[
            'Service Partners: including regulated financial institutions, liquidity providers, blockchain analytics partners, payment processors, KYC/AML verification vendors, and compliance data aggregators.',
            'Business Affiliates and Group Entities: with whom we have contractual arrangements for the purpose of providing, maintaining, or enhancing our services.',
            'Public Sources: including social media platforms (LinkedIn, X/Twitter, etc.), sanction lists, or other publicly available registries.',
            'Credit and Risk Agencies: for creditworthiness assessment, fraud prevention, and counterparty verification.',
          ]} />
          <P>Any personal information received from third parties will be processed in accordance with this Privacy Policy and applicable data protection laws.</P>
        </Sub>
      </Section>

      {/* ── 11. Legal Basis ── */}
      <Section id="s11" title="11. Legal Basis for Processing Personal Information">
        <Sub title="11.1 Legal Obligations">
          <P>LeoPay will only process your personal information where permitted under applicable law. Typically, this will occur under one or more of the following legal bases:</P>
          <List items={[
            'Contractual necessity: to perform obligations under a contract or facilitate services you request.',
            'Legal obligation: to comply with anti-money laundering and counter-terrorist financing obligations under applicable laws, including reporting to FINTRAC or other competent authorities.',
            'Legitimate interests: for fraud prevention, business continuity, service enhancement, and security monitoring, provided that such interests do not override your rights and freedoms.',
            'Consent: where expressly required, for specific purposes such as marketing or third-party data sharing.',
          ]} />
          <P>In limited circumstances, we may process your data to protect vital interests, the public interest, or the interests of others.</P>
        </Sub>
      </Section>

      {/* ── 12. Disclosure ── */}
      <Section id="s12" title="12. Disclosure of Personal Information to Third Parties">
        <P>LeoPay does not sell, rent, or trade your personal information. However, we may share it with selected third parties strictly for legitimate business or regulatory purposes, including but not limited to:</P>
        <List items={[
          'Service providers assisting with KYC/AML verification, payment processing, data hosting, customer support, marketing, analytics, and legal services.',
          'Regulatory authorities, law enforcement agencies, tax authorities, and courts, where disclosure is required by law or regulatory order.',
          'Affiliates and group entities for internal governance, system maintenance, reporting, and compliance consolidation.',
        ]} />
        <P>All third-party processors are contractually bound to maintain confidentiality and implement adequate technical and organisational safeguards. They are authorised to process your data solely under LeoPay's documented instructions and for the purposes specified herein. Further, in the event of a corporate restructuring, merger, or acquisition, your personal information may be transferred to the successor entity, provided that equivalent privacy protections are ensured.</P>
      </Section>

      {/* ── 13. International Transfers ── */}
      <Section id="s13" title="13. International Data Transfers">
        <P>Your personal information may be processed and stored in jurisdictions outside Canada. Where such transfers occur, LeoPay ensures that appropriate safeguards are in place in accordance with PIPEDA.</P>
        <P>You may request further information or a copy of the applicable transfer safeguards by contacting compliance@leopay.tech.</P>
      </Section>

      {/* ── 14. Security ── */}
      <Section id="s14" title="14. Data Security">
        <P>LeoPay employs robust technical and organisational security measures designed to protect your personal information from accidental loss, unauthorised access, alteration, disclosure, or misuse. Further, access to personal data is restricted to personnel, contractors, and service providers who have a legitimate operational need and are bound by confidentiality and data protection obligations.</P>
        <P>We continuously monitor our systems and update our security measures in line with industry best practices, regulatory requirements, and emerging technological standards.</P>
      </Section>

      {/* ── 15. Retention ── */}
      <Section id="s15" title="15. Data Retention">
        <P>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to comply with applicable legal, accounting, taxation, anti-money laundering (AML), and regulatory reporting requirements.</P>
        <P>In order to determine the appropriate retention period, we assess the volume, nature, and sensitivity of the data; the risk of harm from unauthorised use or disclosure; the purposes for processing; and applicable legal or regulatory obligations in each jurisdiction where we operate, including India, the United States, the United Arab Emirates, and the European Union.</P>
        <P>Once the retention period expires, we securely delete, anonymise, or de-identify the data. Anonymised or de-identified data that cannot reasonably identify an individual may be retained and processed for analytics, compliance audits, or statistical purposes, without further notice. LeoPay ensures that any such data will not be re-identified.</P>
      </Section>

      {/* ── 16. Your Rights ── */}
      <Section id="s16" title="16. Your Rights">
        <P>Depending on your place of residence, you may have certain rights under applicable data protection laws such as the EU General Data Protection Regulation (GDPR), the Personal Information Protection and Electronic Documents Act (PIPEDA) (Canada), the Digital Personal Data Protection Act, 2023 (India), the UAE Federal Decree-Law No. 45 of 2021, and relevant U.S. state privacy laws. These rights may vary depending on applicable law and may include, where applicable:</P>
        <List items={[
          'Right to Withdraw Consent: You may withdraw your consent to the collection, use, or disclosure of your personal information, subject to legal and contractual restrictions.',
          'Right to Challenge Compliance: You may challenge our compliance with applicable privacy laws, including by contacting our Compliance Officer or the Office of the Privacy Commissioner of Canada.',
          'Access: You may request a copy of the personal information we hold about you, including the purposes for which it is used or disclosed.',
          'Rectification: You may request correction of incomplete or inaccurate personal information.',
          'Erasure: You may request deletion of personal information, subject to regulatory or legal retention obligations.',
          'Objection: You may object to our processing where it is based on legitimate interests or direct marketing purposes.',
          'Restriction: You may request limitation of processing in specific circumstances (e.g., pending verification of accuracy).',
          'Data Portability: You may request transfer of your data to another service provider, where processing is based on consent or contractual necessity.',
          'Lodge a Complaint: You may lodge a complaint with the competent data protection authority in your jurisdiction.',
        ]} />
        <P>You may exercise these rights by contacting us at compliance@leopay.tech. Please include sufficient details to verify your identity and the nature of your request.</P>
        <P>For EU residents: European Data Protection Board – National DPAs. For Indian residents: Data Protection Board of India (upon constitution). For UAE residents: UAE Data Office. For U.S. residents: Respective state privacy regulator (e.g., California Privacy Protection Agency).</P>
        <P>While we do not ordinarily charge a fee for exercising these rights, we reserve the right to impose a reasonable fee or refuse repetitive, manifestly unfounded, or excessive requests.</P>
      </Section>

      {/* ── 18. Blockchain ── */}
      <Section id="s18" title="18. Blockchain-Specific Disclosures">
        <P>LeoPay's services involve the use of blockchain and distributed ledger technologies for facilitating cross-border stablecoin transactions. You acknowledge and understand that data recorded on public blockchains (including wallet addresses and transaction details) may be immutable and globally accessible. Further, due to the decentralised and transparent nature of such networks, certain personal information (such as blockchain wallet addresses or transaction hashes) may become publicly visible and cannot be modified or erased. This technical limitation may restrict your ability to exercise certain data rights, including erasure, rectification, or objection.</P>
        <P>LeoPay will always work towards minimising the on-chain disclosure of identifiable data and ensure that all personally identifiable information is stored off-chain, processed securely, and disclosed only in accordance with applicable law or regulatory requests.</P>
        <P>You are solely responsible for safeguarding your wallet credentials, including private and public keys. LeoPay does not control your blockchain transactions and shall not be liable for any unauthorised access, loss, or misuse arising from your wallet management.</P>
      </Section>

      {/* ── 19. Governing Law ── */}
      <Section id="s19" title="19. Governing Law and Jurisdiction">
        <P>This Privacy Policy shall be governed by and construed in accordance with the laws of India, without prejudice to overriding mandatory provisions of the laws applicable in your country of residence.</P>
        <P>However, any dispute, controversy, or claim arising out of or relating to this Policy shall be subject to the exclusive jurisdiction of the competent courts of Bengaluru, India, except where otherwise required under applicable data protection or consumer protection laws.</P>
        <P>Please Note: We may update this Privacy Policy from time to time. Where material changes are made, we will provide reasonable notice in accordance with applicable laws.</P>
      </Section>

    </div>
  </div>
);

export default PrivacyContent;
