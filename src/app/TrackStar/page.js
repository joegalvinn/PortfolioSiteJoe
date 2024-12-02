"use client";
import "./page.css";
import Image from "next/image";
import Link from "next/link";

export default function TrackStarPage() {
  return (
    <div>
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
              <span className="title">Lorem Ipsum Dolor</span>
              <span className="info">
                Quisque vel felis lectus donec vitae dapibus magna
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
              <span className="title">Lorem Ipsum Dolor</span>
              <span className="info">
                Quisque vel felis lectus donec vitae dapibus magna
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
              <span className="title">Lorem Ipsum Dolor</span>
              <span className="info">
                Quisque vel felis lectus donec vitae dapibus magna
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
