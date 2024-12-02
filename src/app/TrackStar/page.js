"use client";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import TrackStarVideoPlayer from "@/components/TrackStarVideo";

export default function TrackStarPage() {
  return (
    <div className="scroller">
      <section id="tilesSection" className="tilesSection">
        <div className="link">
          <Link
            href="/"
            className="fixed rounded-xl py-0.5 px-2 border-2 m-2 border-white text-white shadow-lg text-xl"
          >
            ⇦
          </Link>
        </div>
        <div className="titleContainer">
          <h1>TrackStar</h1>
        </div>
        <div>
          <div className="tiles">
            <a className="tile" href="#">
              <Image
                src="/gym pic.jpg"
                alt="Gym Picture"
                className="TrackStarImage"
                layout="intrinsic"
                width={300}
                height={200}
              />
              <div className="details">
                <span className="title">Exercise Input Page</span>
                <span className="info">
                  Easily add exercises using this comprehensive tool
                </span>
              </div>
            </a>
            <a className="tile" href="#">
              <Image
                src="/Screenshot 2024-11-29 124837.jpg"
                alt="Screenshot"
                className="TrackStarImage"
                layout="intrinsic"
                width={300}
                height={200}
              />
              <div className="details">
                <span className="title">Individual Exercise Log Page</span>
                <span className="info">
                  Access a dedicated page for each exercise, complete with your
                  notes and details
                </span>
              </div>
            </a>
            <a className="tile" href="#">
              <Image
                src="/TrackStar Wirefram.jpg"
                alt="Wireframe"
                className="TrackStarImage"
                layout="intrinsic"
                width={300}
                height={200}
              />
              <div className="details">
                <span className="title">Original WireFrame Design</span>
                <span className="info">
                  I think a well-crafted wireframe that highlights key features
                  and design is essential to start with
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="scroll-button-down">
          <button
            onClick={() =>
              document
                .getElementById("videoSection")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="arrow2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </section>
      <div>
        <div className="scroll-button-up">
          <button
            onClick={() =>
              document
                .getElementById("tilesSection")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <section id="videoSection" className="videoSection">
          <div className="videoContainer">
            <TrackStarVideoPlayer autoplay={true} loop={true} muted={true} />
          </div>
        </section>
      </div>
    </div>
  );
}
