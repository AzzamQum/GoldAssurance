import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4  md:px-32 py-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg font-medium mb-6">
            At Golden Assurance, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you use our services or visit our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>Business information (Company name, job title, etc.)</li>
            <li>
              Financial information (Bank account details, transaction history,
              etc.)
            </li>
            <li>Usage data (IP address, browser type, pages visited, etc.)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide and maintain our services</li>
            <li>Process transactions and send transaction notifications</li>
            <li>Improve our services and develop new features</li>
            <li>
              Communicate with you about our services, updates, and promotions
            </li>
            <li>
              Comply with legal obligations and prevent fraudulent activities
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Data Sharing and Disclosure
          </h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Service providers and partners who assist us in providing our
              services
            </li>
            <li>Financial institutions to process transactions</li>
            <li>
              Legal authorities when required by law or to protect our rights
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your
            data from unauthorized access, disclosure, alteration, and
            destruction. These measures include encryption, secure socket layer
            technology, and regular security audits.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Your Rights and Choices
          </h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict the processing of your data</li>
            <li>Request a copy of your data in a portable format</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="mb-6">
            We use cookies and similar tracking technologies to enhance your
            experience on our website and analyze usage patterns. You can manage
            your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            7. International Data Transfers
          </h2>
          <p className="mb-6">
            As a global company, we may transfer your data to countries outside
            your home country. We ensure appropriate safeguards are in place to
            protect your information during such transfers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the new policy on this
            page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <address className="mb-6 not-italic">
            Golden Assurance, Inc.
            <br />
            Email: marketing@futureassurance.org
            <br />
            Phone: 606-271-6175
            <br />
            Address: 116 Agnes Road, Suite 200, Knoxville, Tennessee 37919-6306
          </address>

          <p className="text-sm mt-8">Last updated: November 22, 2024</p>
        </div>
      </main>
      <footer className="bg-muted py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#contact">
            <Button variant="link">Back to Home</Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
