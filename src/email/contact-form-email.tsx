import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  inquiryType: string;
  hearAboutUs: string;
  message: string;
};

export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  phone,
  companyName,
  companyWebsite,
  inquiryType,
  hearAboutUs,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {firstName} {lastName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight text-2xl font-bold mb-6">
                New Contact Form Submission
              </Heading>
              
              <Section className="mb-6">
                <Heading className="text-lg font-semibold mb-3">Contact Information</Heading>
                <Text className="mb-2"><strong>Name:</strong> {firstName} {lastName}</Text>
                <Text className="mb-2"><strong>Email:</strong> {email}</Text>
                <Text className="mb-2"><strong>Phone:</strong> {phone}</Text>
              </Section>

              <Section className="mb-6">
                <Heading className="text-lg font-semibold mb-3">Company Information</Heading>
                <Text className="mb-2"><strong>Company Name:</strong> {companyName}</Text>
                <Text className="mb-2"><strong>Company Website:</strong> {companyWebsite}</Text>
              </Section>

              <Section className="mb-6">
                <Heading className="text-lg font-semibold mb-3">Inquiry Details</Heading>
                <Text className="mb-2"><strong>Inquiry Type:</strong> {inquiryType}</Text>
                <Text className="mb-2"><strong>How they heard about us:</strong> {hearAboutUs}</Text>
              </Section>

              {message && (
                <Section className="mb-6">
                  <Heading className="text-lg font-semibold mb-3">Message</Heading>
                  <Text className="whitespace-pre-wrap">{message}</Text>
                </Section>
              )}

              <Hr />
              <Text className="text-sm text-gray-600">
                This message was sent from the contact form on your agency website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
