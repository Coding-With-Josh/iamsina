import { Tweet } from 'react-tweet'

const tweetIds = [
  "1941002014898770416", // @vloccks
  "1891854269982167079", // @TeniEntertainer
  "1940024645085798746", // @alaovisuals_
  "1940354420073775378", // @Growthpanda_
  "1940032934854934552", // @Mezeshaiuje
  "1926050066969542900", // @emmabryan01
];

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="relative w-full h-full bg-gradient-to-b from-green-100 to-green-200 py-24 z-[-30] rounded-t-[48px]">
      <div className="px-2">
        <div className="pb-12">
          <div className="flex w-full flex-col items-center justify-center pb-12 pt-14">
            <h3>
              <span className="tracking-tight mt-8 font-sans text-black text-4xl sm:text-5xl lg:text-6xl font-bold">
                Join the club
              </span>
            </h3>
            <p className="mt- text-lg text-neutral-400 text-center max-w-2xl">
              Of-course I deliver premium quality designs. Just ask!
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="columns-1 sm:columns-2 md:columns-4 max-w-4xl md:max-w-6xl px-2">
              {tweetIds.map((tweetId, i) => (
                <div key={i} className="mb-4 break-inside-avoid">
                    <Tweet id={tweetId} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}