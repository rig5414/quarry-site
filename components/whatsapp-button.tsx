"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Phone number with country code
  const phoneNumber = "254721964647";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20products.`;

  return (
    <>
      <div
        className="fixed bottom-16 right-6 z-50 flex items-center"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded && (
          <div className="mr-3 bg-green-500 text-gray-800 py-2 px-4 rounded-lg shadow-lg text-sm font-medium animate-fade-in whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-transform duration-300 hover:scale-110 animate-bounce-vibrate flex items-center justify-center p-0 group"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon text-white group-hover:text-black transition-colors duration-300" />
        </a>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes bounce-vibrate {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) rotate(0deg);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          40% {
            transform: translateY(-20px) rotate(3deg);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          42%{
            transform: translateY(-20px) rotate(-3deg);
          }
          44%{
            transform: translateY(-20px) rotate(2deg);
          }
          46%{
            transform: translateY(-20px) rotate(-2deg);
          }
          60% {
            transform: translateY(-10px) rotate(1deg);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          62%{
            transform: translateY(-10px) rotate(-1deg);
          }
          70% {
            transform: translateY(-5px) rotate(0.5deg);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          72%{
            transform: translateY(-5px) rotate(-0.5deg);
          }
        }

        @keyframes fade-in {
          from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-bounce-vibrate {
        animation: bounce-vibrate 2.5s ease-in-out infinite;
      }

      .animate-fade-in {
        animation: fade-in 0.3s ease-out forwards;
      }

      .whatsapp-icon {
        width: 68%;
        height: 68%;
      }

      .whatsapp-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #25d366;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        transition: transform 0.3s ease-in-out;
      }

      .whatsapp-button:hover {
        transform: scale(1.1);
      }
    `}
     </style>
    </>
  );
}
