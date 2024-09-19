"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const musicData = [
    {
      title: "The Evolution of Jazz",
      description: "Explore the history of jazz, from its roots in New Orleans to its influence on modern music.",
      slug: "https://evolution-of-jazz"
    },
    {
      title: "The Rise of Hip Hop",
      description: "Learn about the cultural movement that gave birth to hip hop and its global impact on music and society.",
      slug: "https://rise-of-hip-hop"
    },
    {
      title: "Classical Music Through the Ages",
      description: "A journey through the different periods of classical music, featuring famous composers like Mozart and Beethoven.",
      slug: "https://classical-music-ages"
    },
    {
      title: "Rock 'n' Roll Revolution",
      description: "Discover the origins of rock 'n' roll and how it shaped modern music, with iconic figures like Elvis and Chuck Berry.",
      slug: "https://rock-n-roll-revolution"
    },
    {
      title: "Electronic Music: A New Era",
      description: "Dive into the world of electronic music, from its early beginnings to the rise of EDM in the 21st century.",
      slug: "https://electronic-music-new-era"
    },
    {
      title: "The Golden Age of Disco",
      description: "Relive the vibrant era of disco music, its cultural impact, and its lasting influence on today's music.",
      slug: "https://golden-age-of-disco"
    }
  ];
  


function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={musicData.map(webinar=>(
            {
                title: webinar.title, description: webinar.description, link: webinar.slug
            }
        ))}/>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
