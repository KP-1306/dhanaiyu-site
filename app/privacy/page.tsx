import React from "react";

export const metadata = {
  title: "Privacy Policy | DhanAIyu",
  description:
    "How DhanAIyu collects, uses, stores, protects, and shares your information across our products.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose prose-slate">
      <h1>Privacy Policy — DhanAIyu</h1>
      <p><strong>Last Updated:</strong> October 2025</p>

      <p>
        At <strong>DhanAIyu</strong>, your privacy and trust are our top priorities.
        This Privacy Policy explains how we collect, use, store, and protect your
        personal information when you use our platform, website, and mobile
        applications (collectively “Services”).
      </p>

      <h2>1. Who We Are</h2>
      <p>
        DhanAIyu (“we,” “our,” or “us”) is a healthcare technology platform
        designed to simplify doctor appointments, queue tracking, and health record
        management for patients and clinics. We operate as a booking and
        coordination platform — not a medical service provider.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect minimal and purpose-specific data to deliver the best user experience.</p>
      <h3>a. Information You Provide</h3>
      <ul>
        <li>Name, phone number, and OTP verification (for secure access).</li>
        <li>Appointment preferences, selected doctors, and booking details.</li>
        <li>Health-related information voluntarily entered (e.g., prescriptions, test reports).</li>
        <li>Clinic or hospital registration data (for verified professionals).</li>
      </ul>
      <h3>b. Automatically Collected Information</h3>
      <ul>
        <li>Device type, IP address, operating system, and browser version.</li>
        <li>Location data (only with your explicit consent).</li>
        <li>Usage logs and interaction analytics (to improve performance and reduce wait-time prediction errors).</li>
      </ul>
      <h3>c. Third-Party Data</h3>
      <p>
        If you use integrated features (e.g., Google Maps for ETA, or payment gateways),
        some data may be shared with those partners under their respective privacy terms.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ol>
        <li>Enable appointment scheduling and queue tracking.</li>
        <li>Predict wait-times and optimize patient-doctor flow.</li>
        <li>Send reminders for upcoming visits, follow-ups, or prescriptions.</li>
        <li>Provide customer support and resolve technical issues.</li>
        <li>Improve our AI models for better accuracy and efficiency.</li>
        <li>Comply with applicable laws and safeguard user interests.</li>
      </ol>

      <h2>4. Our AI &amp; Data Practices</h2>
      <ul>
        <li>
          <strong>AI Transparency:</strong> DhanAIyu’s AI engine uses anonymized and
          aggregated data to forecast waiting windows, detect delays, and improve scheduling efficiency.
        </li>
        <li>
          <strong>No Automated Decision-Making:</strong> AI predictions are supportive only;
          final scheduling decisions remain human-controlled by clinics or staff.
        </li>
        <li>
          <strong>De-identification:</strong> Health and queue data are stripped of identifiers
          before being analyzed or stored for model training.
        </li>
      </ul>

      <h2>5. Data Retention</h2>
      <ul>
        <li>Account and appointment data are retained only as long as necessary to deliver services or comply with legal obligations.</li>
        <li>Users can request data deletion at any time via the “Privacy Requests” form.</li>
        <li>Deleted data may remain in secure backups for up to 90 days before permanent erasure.</li>
      </ul>

      <h2>6. Data Security</h2>
      <ul>
        <li>Encrypted data transmission (HTTPS + TLS 1.3).</li>
        <li>Encrypted at rest using AES-256.</li>
        <li>Access control based on least privilege.</li>
        <li>Routine security audits and anomaly detection.</li>
      </ul>
      <p>We also comply with: DPDP Act (India, 2023), GDPR (EU, where applicable), and HIPAA principles for sensitive medical data.</p>

      <h2>7. Your Rights</h2>
      <ul>
        <li>Access your personal information.</li>
        <li>Correct inaccuracies.</li>
        <li>Request deletion of your account or records.</li>
        <li>Withdraw consent for optional data sharing.</li>
        <li>File a grievance if you believe your rights are violated.</li>
      </ul>
      <p>To exercise these rights, please contact us at <a href="mailto:privacy@dhanaiyu.com">privacy@dhanaiyu.com</a>.</p>

      <h2>8. Cookies and Analytics</h2>
      <ul>
        <li>Maintain session continuity.</li>
        <li>Analyze traffic and improve site performance.</li>
        <li>Remember your preferences.</li>
      </ul>
      <p>You can modify cookie permissions in your browser settings.</p>

      <h2>9. Data Sharing &amp; Disclosure</h2>
      <p>We do not sell or rent your data. Limited data sharing may occur in these cases:</p>
      <ul>
        <li>With clinics you choose to book with (to confirm and manage appointments).</li>
        <li>With service providers (cloud hosting, analytics) under strict confidentiality agreements.</li>
        <li>To comply with legal requests from regulatory authorities.</li>
      </ul>
      <p>All partners are required to maintain industry-standard security.</p>

      <h2>10. Children’s Privacy</h2>
      <p>
        Our platform is intended for users aged 18 and above. If a parent or guardian believes
        their child’s information has been provided unintentionally, please contact us for immediate deletion.
      </p>

      <h2>11. International Data Transfers</h2>
      <p>
        Data may be processed on servers located outside your country. We ensure adequate protection
        through contractual safeguards and encryption.
      </p>

      <h2>12. Policy Updates</h2>
      <p>
        We may update this policy to reflect new regulations or platform changes. Updated versions will
        be posted here with a “Last Updated” date.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        For privacy inquiries, concerns, or data deletion requests, reach out to:<br />
        <strong>DhanAIyu Privacy Office</strong><br />
        📧 <a href="mailto:privacy@dhanaiyu.com">privacy@dhanaiyu.com</a><br />
        🌐 <a href="https://www.dhanaiyu.com/privacy">www.dhanaiyu.com/privacy</a>
      </p>
    </main>
  );
}
