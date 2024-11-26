"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 md:px-32">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg font-medium mb-6">
            Welcome to Golden Assurance, By using our services, you agree to be
            bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By accessing or using Global Trade Solutions' services, you agree to
            be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any part of these terms, you
            may not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Description of Services
          </h2>
          <p className="mb-4">
            Global Trade Solutions provides international trade facilitation
            services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Cross-border payments</li>
            <li>Escrow services</li>
            <li>Freight insurance</li>
            <li>Import/export assistance for heavy machinery</li>
            <li>Bulk commodity insurance</li>
            <li>Global purchasing services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p className="mb-6">
            To access certain services, you may be required to create an
            account. You are responsible for maintaining the confidentiality of
            your account information and for all activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. User Obligations
          </h2>
          <p className="mb-4">You agree to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Provide accurate and complete information when using our services
            </li>
            <li>
              Use our services only for lawful purposes and in accordance with
              these Terms
            </li>
            <li>
              Not use our services for any illegal or unauthorized purpose
            </li>
            <li>
              Comply with all applicable laws and regulations in your use of our
              services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Fees and Payments
          </h2>
          <p className="mb-6">
            Fees for our services are set forth on our website or in separate
            agreements. You agree to pay all fees and charges incurred in
            connection with your use of our services. We reserve the right to
            change our fees upon notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Intellectual Property
          </h2>
          <p className="mb-6">
            All content, trademarks, and intellectual property on our website
            and in our services are owned by Global Trade Solutions. You may not
            use, reproduce, or distribute our intellectual property without our
            express written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            7. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Global Trade Solutions shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Your use or inability to use our services</li>
            <li>
              Any unauthorized access to or use of our servers and/or any
              personal information stored therein
            </li>
            <li>
              Any interruption or cessation of transmission to or from our
              services
            </li>
            <li>
              Any bugs, viruses, trojan horses, or the like that may be
              transmitted to or through our services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            8. Indemnification
          </h2>
          <p className="mb-6">
            You agree to indemnify and hold Global Trade Solutions and its
            affiliates, officers, agents, and employees harmless from any claim
            or demand, including reasonable attorneys' fees, made by any third
            party due to or arising out of your breach of these Terms or your
            violation of any law or the rights of a third party.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            9. Governing Law and Jurisdiction
          </h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with
            the laws of the State of New York, without regard to its conflict of
            law provisions. You agree to submit to the personal jurisdiction of
            the courts located within New York County, New York for the purpose
            of litigating all such claims or disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            10. Modifications to Terms
          </h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time. We will
            provide notice of any material changes by posting the new Terms on
            our website. Your continued use of our services after any such
            changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Termination</h2>
          <p className="mb-6">
            We may terminate or suspend your account and access to our services
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach these Terms.
            Upon termination, your right to use our services will immediately
            cease.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            12. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
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
