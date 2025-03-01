/* eslint-disable react/prop-types */
import { useState } from "react";
import { sendEmail } from "./SendEmail"; // Import sendEmail function
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContacterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email", // Default to email
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; // Adjust the regex according to your phone number format
    return phoneRegex.test(phone);
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({
      ...prev,
      phone: formattedPhoneNumber,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validatePhoneNumber(formData.phone)) {
      toast.error("Veuillez entrer un numéro de téléphone valide.");
      setIsSubmitting(false);
      return;
    }

    const success = await sendEmail(formData);

    if (success) {
      toast.success("Message envoyé avec succès !");
      setTimeout(() => {
      onClose(); // Close modal after a delay
      }, 1000); // 3 seconds delay
    } else {
      toast.error("Une erreur est survenue lors de l'envoi de votre message.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(240,240,240,0.50)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          ❌
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Nous Contacter</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Nom:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Téléphone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange} // Use handlePhoneChange here
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Votre numéro de téléphone"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Votre email"
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-center">
              Préférence de contact:
            </label>
            <div className="flex justify-center items-center gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Téléphone
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Email
              </label>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Votre message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContacterModal;
