"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mark Johnson",
    role: "Restaurant Owner",
    review:
      "Their AI voice agent handles all our reservations now. Customers love how smooth it sounds and we never miss a booking anymore. Really impressed!",
    image: "/assets/clientsay/user.jpg",
  },
  {
    id: 2,
    name: "Lisa Chen",
    role: "Sales Manager",
    review:
      "The outbound calling system they built for us is amazing. It qualifies leads perfectly and sounds so natural. Our conversion rate doubled!",
    image: "/assets/clientsay/user.jpg",
  },
  {
    id: 3,
    name: "Tom Wilson",
    role: "Clinic Administrator",
    review:
      "Best investment we made this year. The AI handles appointment bookings 24/7 and patients actually prefer it over waiting on hold.",
    image: "/assets/clientsay/user.jpg",
  },
  {
    id: 4,
    name: "Sarah Davis",
    role: "E-commerce Store Owner",
    review:
      "Their order tracking automation is a game changer. Customers get instant updates and we barely get support calls anymore. So worth it!",
    image: "/assets/clientsay/user.jpg",
  },
  {
    id: 5,
    name: "Jake Martinez",
    role: "Real Estate Agent",
    review:
      "The lead qualification system they set up is incredible. It screens potential buyers perfectly and only sends me the serious ones. Saves hours daily!",
    image: "/assets/clientsay/user.jpg",
  },
  {
    id: 6,
    name: "Amy Roberts",
    role: "Insurance Broker",
    review:
      "I was skeptical about AI voices but wow, their system sounds completely human. My clients can't even tell the difference. Fantastic work!",
    image: "/assets/clientsay/user.jpg",
  },
];

const Clientsay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 1)
      ); // rotates 1 testimonial per cycle
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return testimonials.slice(
        (currentIndex * 2) % testimonials.length,
        ((currentIndex * 2) % testimonials.length) + 2
      );
    }
    return [testimonials[currentIndex % testimonials.length]];
  };

  return (
    <div className="mx-auto max-w-7xl py-20 px-4 mb-40 sm:px-6 lg:px-8">
      <div className="text-center">
        <h3 className="text-navyblue text-4xl lg:text-6xl font-semibold">
          What say clients about us.
        </h3>
        <h4 className="text-lg text-darkgray mt-4">
          Event madness gathering innoies, & tech enthusiasts in Speced.
          <br />
          Do more informations.
        </h4>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 transition-all duration-700 ease-in-out">
        {visibleTestimonials().map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <p className="text-darkgray text-base mb-4">{testimonial.review}</p>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <h4 className="text-sm text-gray-500">{testimonial.role}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientsay;
