import Image from "next/image";

export default function FeaturesSection() {
    const images = [
        {
            url: "/gallery-images/pic-1.jpg",
            alt: "Gallery Image 1"
        },
        {
            url: "/gallery-images/pic-2.jpg",
            alt: "Gallery Image 2"
        },
        {
            url: "/gallery-images/pic-3.jpg",
            alt: "Gallery Image 3"
        },
        {
            url: "/gallery-images/pic-4.jpg",
            alt: "Gallery Image 4"
        },
        {
            url: "/gallery-images/pic-5.png",
            alt: "Gallery Image 5"
        },
        {
            url: "/gallery-images/pic-6.jpg",
            alt: "Gallery Image 6"
        },
        {
            url: "/gallery-images/pic-7.png",
            alt: "Gallery Image 7"
        },
        {
            url: "/gallery-images/pic-8.png",
            alt: "Gallery Image 8"
        },
        {
            url: "/gallery-images/pic-9.png",
            alt: "Gallery Image 9"
        },
        {
            url: "/gallery-images/pic-10.png",
            alt: "Gallery Image 10"
        },
        {
            url: "/gallery-images/pic-11.png",
            alt: "Gallery Image 11"
        },
        {
            url: "/gallery-images/pic-12.png",
            alt: "Gallery Image 12"
        },
        {
            url: "/gallery-images/pic-13.jpg",
            alt: "Gallery Image 13"
        }
    ];
    return (
        <section id="features" className="z-10 py-16 bg-white text-black h-[100rem]">
            <div className="pt-12">
                <div className="mt-4 z-10 flex flex-col items-center justify-center">
                    <div className="mx-auto max-w-lg md:max-w-4xl sm:text-center">
                        <div className="mx-auto flex gap-3 justify-center items-center">
                            <h2 className="z-[9999] font-bold tracking-tight text-black text-4xl md:text-5xl lg:text-[98px]">My Work</h2>
                            <h2 className="font-bold tracking-tight text-black text-4xl md:text-5xl lg:text-[98px]">Slaps</h2>
                        </div>
                        <p className="mt-6 px-6 md:text-lg md:leading-8 text-neutral-800 text-center leading-5">
                            I create unique and engaging designs that resonate with audiences. My work spans various industries, 👉 showcasing versatility and creativity.
                        </p>
                    </div>
                </div>
            </div>
            {/* Feature Image Gallery - two endless rows, opposite directions */}
            <div className="pt-12">
                <div className="h-screen">
                    <div className="relative h-full">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white via-white to-white opacity-5"></div>
                        <div className="h-full">
                            <div className="w-full h-full transform-rotate-10" style={{ transform: 'scale(1) rotate(-10deg) translateZ(0px)' }}>
                                <div className="h-full scale-125 flex flex-col justify-center items-center gap-10">
                                    {/* Row 1: left to right */}
                                    <div className="overflow-hidden w-full">
                                        <div className="flex animate-marquee space-x-6 pr-6 w-max">
                                            {[...images, ...images].map((img, i) => (
                                                <div key={"row1-" + i}>
                                                    <Image
                                                        src={img.url}
                                                        alt={img.alt}
                                                        width={450}
                                                        height={300}
                                                        className="cursor-pointer border-8 border-neutral-700 rounded-xl h-64 w-auto md:w-[450px] md:h-[300px] object-cover aspect-video"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Row 2: right to left */}
                                    <div className="overflow-hidden w-full">
                                        <div className="flex animate-marquee-reverse space-x-6 pr-6 w-max">
                                            {[...images, ...images].map((img, i) => (
                                                <div key={"row2-" + i}>
                                                    <Image
                                                        src={img.url}
                                                        alt={img.alt}
                                                        width={450}
                                                        height={300}
                                                        className="cursor-pointer border-8 border-black rounded-xl h-64 w-auto md:w-[450px] md:h-[300px] object-cover aspect-video"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white via-white to-white opacity-5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
