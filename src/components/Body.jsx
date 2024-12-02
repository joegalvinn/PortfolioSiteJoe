"use client";
import "./bodyStyle.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import Link from "next/link";

const backgroundImages = ["/image-1.jpg", "/image-2.jpg", "/image-3.jpg"];
const images = ["/image-4.png", "/image-5.jpg", "/image-6.jpg"];
const texts = [
  { text: "Project Overview", link: "/TrackStar" },
  { text: "Visit Section 2", link: "/section-2" },
  { text: "Explore Section 3", link: "/section-3" },
];
const bodyTexts = [
  {
    text: "TrackStar is a gym tracker that makes it easier to count and remember your sets, reps and weight. Allowing you to look back at previous workouts and help you stay motivated.",
  },
  { text: "This is section 2 right up in here." },
  { text: "This is section 3 right up in here." },
];
const glitchBackgrounds = [
  "/glitch-background-1.jpg",
  "/glitch-background-2.jpg",
  "/glitch-background-3.jpg",
];

export default function Body() {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 30;

  return (
    <div>
      {backgroundImages.map((backgroundImage, index) => (
        <section className="hero" key={index}>
          <div className="heroInner" id={`section-${index}`}>
            {/* Background Image */}
            <figure
              className="backgroundImage"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            ></figure>
            {/* Smaller image in front */}
            <Link
              href={
                index === 0
                  ? "/TrackStar"
                  : index === 1
                  ? "/ListIt"
                  : "/TheTechScout"
              }
            >
              <div className="smallImage">
                <div className="glitch">
                  <Image
                    src={images[index]}
                    alt={`Small preview ${index + 1}`}
                    className="floatImage rounded-2xl"
                    width={500}
                    height={150}
                  />

                  <div className="glitch__layers ">
                    <div
                      className="glitch__layer"
                      style={{
                        backgroundImage: `url(${glitchBackgrounds[index]})`,
                      }}
                    ></div>
                    <div
                      className="glitch__layer"
                      style={{
                        backgroundImage: `url(${glitchBackgrounds[index]})`,
                      }}
                    ></div>
                    <div
                      className="glitch__layer"
                      style={{
                        backgroundImage: `url(${glitchBackgrounds[index]})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
            {/* Dynamic button */}
            <div className="heroText">
              <main className="main">
                <motion.div
                  className="mask"
                  animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

                    WebkitMaskSize: `${size}px`,
                  }}
                  transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                >
                  <p
                    className="maskText"
                    onMouseEnter={() => {
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                    }}
                  >
                    {bodyTexts[index].text}
                  </p>
                </motion.div>

                <div className="body">
                  <p>{bodyTexts[index].text}</p>
                </div>
              </main>
              <Button
                className="heroButton rounded-xl py-0.5 px-2 border-2 border-white text-white shadow-lg"
                onClick={() => router.push(texts[index].link)}
              >
                {texts[index].text}
              </Button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
