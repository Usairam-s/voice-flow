"use client";

// import Image from "next/image";

// const Newsletter = () => {
//   return (
//     <div className="-mt-32 relative z-3">
//       <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
//         <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
//           {/* COLUMN-1 */}
//           <div className="hidden lg:block">
//             <div className="float-right pt-20 relative">
//               <Image
//                 src={"/assets/newsletter/bgImage.png"}
//                 alt="bgimg"
//                 width={588}
//                 height={334}
//               />
//               <div className="absolute top-10 right-0">
//                 <Image
//                   src={"/assets/newsletter/leaf.svg"}
//                   alt="leafimg"
//                   width={81}
//                   height={81}
//                 />
//               </div>
//               <div className="absolute bottom-8 left-2">
//                 <Image
//                   src={"/assets/newsletter/circel.svg"}
//                   alt="circleimg"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* COLUMN-2 */}
//           <div className="p-10 flex flex-col justify-center">
//             <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
//               Contact us to discuss your project
//             </h3>
//             <h4 className="text-base font-normal mb-7 text-offwhite">
//               Project dicussed well and having all requirement details make much
//               easy to work with.
//             </h4>
//             <div className="flex gap-0">
//               <input
//                 type="Email address"
//                 name="q"
//                 className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4"
//                 placeholder="@enter email-address"
//                 autoComplete="off"
//               />
//               <button className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg">
//                 <Image
//                   src={"/assets/newsletter/plane.svg"}
//                   alt="plane-img"
//                   width={20}
//                   height={20}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;

import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone: any) => {
    setFormData((prev) => ({
      ...prev,
      phone: phone,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2d903d5e-b1b5-4e5b-a237-34d2979419db", // Replace with your actual access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || "No additional message provided",
          subject: "New Project Inquiry from Website",
          from_name: "Your Website Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        //@ts-ignore
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        //@ts-ignore
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      //@ts-ignore
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <div className="-mt-32 relative z-3">
        <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
            {/* COLUMN-1 */}
            <div className="hidden lg:block">
              <div className="float-right pt-20 relative">
                <Image
                  src={"/assets/newsletter/bgImage.png"}
                  alt="bgimg"
                  width={588}
                  height={334}
                />
                <div className="absolute top-10 right-0">
                  <Image
                    src={"/assets/newsletter/leaf.svg"}
                    alt="leafimg"
                    width={81}
                    height={81}
                  />
                </div>
                <div className="absolute bottom-8 left-2">
                  <Image
                    src={"/assets/newsletter/circel.svg"}
                    alt="circleimg"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
                Contact Us
              </h3>
              <h4 className="text-base font-normal mb-7 text-offwhite">
                Project discussed well and having all requirement details make
                much easy to work with.
              </h4>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Thank you! Your message has been sent successfully. We'll
                  get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Oops! Something went wrong. Please try again or contact us
                  directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="flex gap-0">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Input */}
                <div className="flex gap-0">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone Input with Library */}
                <div className="phone-input-container">
                  <PhoneInput
                    country={"pk"} // default to Pakistan
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={isSubmitting}
                    inputStyle={{
                      width: "100%",
                      height: "52px",
                      fontSize: "14px",
                      border: "none",
                      borderRadius: "8px",
                      paddingLeft: "60px",
                      outline: "none",
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    buttonStyle={{
                      border: "none",
                      borderRadius: "8px 0 0 8px",
                      backgroundColor: "white",
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    dropdownStyle={{
                      borderRadius: "8px",
                      maxHeight: "200px",
                    }}
                    containerStyle={{
                      borderRadius: "8px",
                    }}
                    searchStyle={{
                      padding: "8px",
                      fontSize: "14px",
                    }}
                    placeholder="Enter phone number"
                    enableSearch={true}
                    searchPlaceholder="Search countries..."
                    specialLabel=""
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex gap-0">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-vertical"
                    placeholder="Tell us about your project requirements or any other details that would help us understand your needs better... (Optional)"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-0 pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-midblue hover:bg-blue-700"
                    } transition-colors text-white font-medium py-4 px-6 rounded-lg w-full flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Image
                          src={"/assets/newsletter/plane.svg"}
                          alt="plane-img"
                          width={20}
                          height={20}
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Custom styles for phone input */}
        <style jsx global>{`
          .phone-input-container .react-tel-input {
            border-radius: 8px !important;
          }

          .phone-input-container .react-tel-input:focus-within {
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3) !important;
          }

          .phone-input-container .flag-dropdown {
            border-radius: 8px 0 0 8px !important;
          }

          .phone-input-container .selected-flag:hover,
          .phone-input-container .selected-flag:focus {
            background-color: #f3f4f6 !important;
          }

          .phone-input-container .country-list {
            border-radius: 8px !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          }

          .phone-input-container .country {
            padding: 8px 12px !important;
          }

          .phone-input-container .country:hover {
            background-color: #eff6ff !important;
          }

          .phone-input-container .search-box {
            border-radius: 6px !important;
            border: 1px solid #d1d5db !important;
            margin: 8px !important;
            padding: 8px !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Newsletter;
