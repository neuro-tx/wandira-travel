import React from 'react'
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Home = () => {
  const destinations = [
    {
      title: "Barcelona Tour",
      activities: 196,
      image: "/assets/images/card-img-1.png",
      person: "/assets/images/david.webp"
    },
    {
      title: "Australia Tour",
      activities: 196,
      image: "/assets/images/card-img-2.png",
      person: "/assets/images/david.webp"

    },
    {
      title: "London, United State",
      activities: 196,
      image: "/assets/images/card-img-3.png",
      person: "/assets/images/dummy.jpg"

    },
    {
      title: "Australia Tour",
      activities: 196,
      image: "/assets/images/card-img-4.png",
      person: "/assets/images/david.webp"

    },
    {
      title: "Japan Tour",
      activities: 196,
      image: "/assets/images/card-img-5.png",
      person: "/assets/images/james.webp"

    },
    {
      title: "Japan Tour",
      activities: 196,
      image: "/assets/images/card-img-6.png",
      person: "/assets/images/michael.webp"

    },
  ];


  const trips = [
    {
      title: "Thornridge Cir. Shiloh",
      location: "St George’s Ln Singapore",
      price: "$300",
      image: "/assets/images/trip (1).jpg",
      tags: ["Mountains", "City"],
    },
    {
      title: "Roraima Tepui",
      location: "Canaima Park, Venezuela",
      price: "$790",
      image: "/assets/images/trip (2).jpg",
      tags: ["Solo travel", "Budget"],
    },
    {
      title: "Socotra Island",
      location: "Yemen",
      price: "$870",
      image: "/assets/images/trip (3).jpg",
      tags: ["Luxury", "Beach"],
    },
    {
      title: "San Lake Baikal",
      location: "Siberia, Russia",
      price: "$604",
      image: "/assets/images/trip (4).jpg",
      tags: ["Sports", "Adventurous"],
    },
    {
      title: "Anse Source d’Argent",
      location: "La Digue, Seychelles",
      price: "$870",
      image: "/assets/images/trip (5).jpg",
      tags: ["Beach", "Luxury"],
    },
    {
      title: "Aysén Region",
      location: "Patagonia, Chile",
      price: "$604",
      image: "/assets/images/trip (6).jpg",
      tags: ["Sports", "Adventurous"],
    },
    {
      title: "Taman Negara",
      location: "Peninsular Malaysia",
      price: "$300",
      image: "/assets/images/trip (7).jpg",
      tags: ["Mountains", "Budget"],
    },
    {
      title: "Zhangye Landform",
      location: "Gansu, China",
      price: "$790",
      image: "/assets/images/trip (8).jpg",
      tags: ["Solo travel", "City"],
    },
  ];


  return (
    <div className=" overflow-x-hidden w-full">
      {/*    topic   partition  */}

      <div className="w-full h-[670px] bg-cover bg-center inset-0 backdrop-blur-sm z-0 "
        style={{
          backgroundImage: `
      linear-gradient(120deg, rgb(244, 236, 247) 0%, rgba(250, 250, 251, 0.39) 50%, transparent 100%),
      url(/assets/images/hero-img.png)  `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div class="flex justify-between items-center px-8 pt-6">
          <div className="flex items-center gap-2 pl-[90px] pr-[90px]"
            style={{}}>
            <img src="/assets/images/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent font-bold text-3xl">Wandira</span>
          </div>
          <div className="flex items-center gap-4 pl-[90px] pr-[90px]"
            style={{}}>
            <span class="text-white">Admin Panel</span>
            <img src="/assets/images/david.webp" alt="Avatar" class="w-12 h-12 rounded-full " />
            <button class="w-12 h-12 rounded-full bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 bg-white transition"
              style={{ backgroundColor: "rgba(230, 225, 225, 0.35)" }}
              onClick={() => window.location.href = "/About"}>
              <HiArrowLeftStartOnRectangle size={25} color="red" />

            </button>
          </div>
        </div>
        <div class="flex flex-col justify-center px-10 md:px-20 lg:px-32 h-full max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-purple-600   bg-clip-text text-transparent mb-4">
            Plan Your Trip with Ease
          </h1>
          <p class="text-purple-950 text-lg mb-6">
            Customize your travel itinerary in minutes—pick your destination, set your preferences, and explore with confidence.
          </p>
          <button class=" w-48 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition ">
            Get Started
          </button>
        </div>
      </div>

      {/*                 middel     partition          */}

      <div className="w-full overflow-x-hidden px-4 mt-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 text-left mb-2">
            Featured Travel Destinations
          </h2>
          <p className="text-gray-500 text-left mb-8 mt-8">
            Check out some of the best places you can visit around the world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-md group"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-full shadow">
                  3.5
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4 flex flex-col items-left">
                  <p className="text-2xl font-semibold p-2">{dest.title}</p>
                  <div className="flex flex-row items-center">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={dest.person}
                      alt=""
                    />
                    <p className="text-sm text-gray-200">{dest.activities} Activities</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*            Thrid  partition                */}

      <div className=" min-h-screen py-16 px-6 mt-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 mb-2">Handpicked Trips</h2>
          <p className="text-gray-500 text-lg mb-10">
            Browse well-planned trips designed for different travel styles and interests
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trips.map((trip, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-white px-3 py-1 text-sm font-semibold rounded-full shadow text-gray-800">
                    {trip.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {trip.title}
                  </h3>
                  <div className="flex flex-row p-2">
                    <CiLocationOn size={20} color="black" />

                    <p className="text-sm text-gray-500 mb-4">{trip.location}</p>

                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trip.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Pagination */}


        <div className="flex flex-col items-center gap-6 mt-10">
          <hr className='w-[80%] border-t border-gray-200 mx-auto my-8 ' />
          <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-4">
            <button className="px-4 py-2 rounded-lg shadow-xl  text-gray-700 bg-white hover:bg-gray-100 flex items-center gap-1">
              <ArrowLeft size={16} /> Previous
            </button>

            <div className='flex justify-around gap-6'>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  className={`w-9 h-9 rounded-lg text-sm font-medium ${num === 1
                      ? "bg-purple-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>


            <button className="px-4 py-2 rounded-lg shadow-xl text-gray-700 bg-white hover:bg-gray-100 flex items-center gap-1">
              Next <ArrowRight size={16} />
            </button>
          </div>

          <div className='flex items-center flex-row justify-between max-w-6xl w-full mt-10'>
             <div className=" flex items-center flex-rowmt-4">
                <img src="/assets/images/logo.svg" alt="Wandira Logo" className="w-6 h-6  " />
              <span className="text-2xl font-semibold  bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                Wandira
              </span>
            </div>

            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:underline">
                Terms & Condition
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default Home
