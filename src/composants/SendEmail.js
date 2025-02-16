import emailjs from "@emailjs/browser";

// Function to send customer and dealership emails
export const sendEmail = async (formData) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID;
  const DEALER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_DEALER_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  try {
    // Send email to customer
    await emailjs.send(SERVICE_ID, CUSTOMER_TEMPLATE_ID, formData, PUBLIC_KEY);

    // Send email to dealership
    await emailjs.send(SERVICE_ID, DEALER_TEMPLATE_ID, formData, PUBLIC_KEY);

    console.log("Emails sent successfully!");
    return true;
  } catch (error) {
    console.error("EmailJS Error:", error);
    return false;
  }
};
