import Image from "next/image";
import ParallaxElement from "@/components/ParallaxElement";
import Body from "@/components/Body";
import Navbar from "@/components/NavBar";

const texts = [
  { text: "TrackStar", link: "#section-0" },
  { text: "Visit Section 2", link: "#section-1" },
  { text: "Explore Section 3", link: "#section-2" },
];

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar sections={texts} />

      {/* Parallax Section */}
      <ParallaxElement />

      {/* Body Section */}
      <Body />

      {/* Footer or Additional Content */}
      <div className="w-full bg-backdrop text-3xl p-9 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu arcu
        porta magna varius ornare a a tellus. Nam dolor eros, dignissim a
        iaculis non, bibendum eu diam. Proin at vulputate nibh. Proin hendrerit
        a nunc aliquet accumsan. Sed commodo in magna et dictum. Suspendisse
        nibh tortor, hendrerit in nisi nec, fermentum tempus est. In cursus
        dictum est sed vestibulum. Aliquam pharetra nisi nec vestibulum
        vestibulum. Etiam fermentum faucibus ex, sodales volutpat nibh auctor
        id. Integer vitae cursus lacus, ut congue lorem. Vivamus cursus
        tristique sagittis. Vestibulum commodo eros id ligula viverra cursus.
        Mauris vel dignissim urna. Aliquam egestas augue felis, vel pharetra ex
        scelerisque et.
        <br />
        {/* Rest of the content */}
      </div>
    </div>
  );
}
