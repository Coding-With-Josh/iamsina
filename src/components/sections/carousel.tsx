import Link from "next/link";
import ThreeDPhotoCarousel from "../ui/three-d-carousel";

export default function Carousel() {
  return (
    <section id="carousel" className="w-full h-full md:h-[900px] bg-black rounded-t-[4rem] py-9 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center scale-90">
              <h2 className="tracking-tight mt-8 font-sans text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
          Check out my designs
        </h2>
        <h3>
           <p className="mt-2 text-lg text-neutral-400 text-center max-w-2xl">
              I've created hundreds of amazing designs. Take a look at some of my favorites below.
            </p>
        </h3>
      </div>
     <ThreeDPhotoCarousel />
     <Link href="https://drive.google.com/drive/folders/14QaZNNx5tD5dLn2fEVwgPueaVWGIF1y1" target="_blank" rel="noopener noreferrer" className="mt-8 text-lg text-green-300 hover:underline">
        <h3>
           <p className="mt- text-lg text-neutral-400 text-center max-w-2xl">
            View more
              </p>
        </h3>
        </Link>
    </section>
  );
}