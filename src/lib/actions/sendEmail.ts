"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const EMAIL_CONFIG = {
  // Use test mode for development, production mode for live site
  isTestMode: process.env.NODE_ENV === 'development',
  testRecipient: 'delivered@resend.dev', // Resend's official test address
  productionRecipient: process.env.CONTACT_EMAIL || 'digitalmarketingcanada5@gmail.com',
  sender: process.env.EMAIL_FROM || 'Agency Contact Form <onboarding@resend.dev>',
};

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  inquiryType: string;
  hearAboutUs: string;
  message: string;
}

// Simple validation function
const validateString = (value: string, maxLength: number): boolean => {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
};

const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

export const sendContactEmail = async (formData: ContactFormData) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    companyWebsite,
    inquiryType,
    hearAboutUs,
    message,
  } = formData;

  // Server-side validation
  if (!validateString(firstName, 100)) {
    return {
      error: "Invalid first name",
    };
  }
  if (!validateString(lastName, 100)) {
    return {
      error: "Invalid last name",
    };
  }
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email address",
    };
  }
  if (!validateString(phone, 50)) {
    return {
      error: "Invalid phone number",
    };
  }
  if (!validateString(companyName, 200)) {
    return {
      error: "Invalid company name",
    };
  }
  if (!validateString(companyWebsite, 500)) {
    return {
      error: "Invalid company website",
    };
  }
  if (!validateString(inquiryType, 100)) {
    return {
      error: "Please select an inquiry type",
    };
  }
  if (!validateString(hearAboutUs, 100)) {
    return {
      error: "Please select how you heard about us",
    };
  }
  if (message && !validateString(message, 5000)) {
    return {
      error: "Message is too long",
    };
  }

  let data;
  try {
    // Determine recipient based on environment
    const recipient = EMAIL_CONFIG.isTestMode 
      ? EMAIL_CONFIG.testRecipient 
      : EMAIL_CONFIG.productionRecipient;

    console.log(`Sending email in ${EMAIL_CONFIG.isTestMode ? 'TEST' : 'PRODUCTION'} mode to: ${recipient}`);

    data = await resend.emails.send({
      from: EMAIL_CONFIG.sender,
      to: recipient,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        firstName,
        lastName,
        email,
        phone,
        companyName,
        companyWebsite,
        inquiryType,
        hearAboutUs,
        message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
    success: true,
  };
};
