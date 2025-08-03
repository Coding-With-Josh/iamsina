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
    <section id="testimonial" className="z-[-1] flex flex-col items-center justify-center relative w-full bg-gradient-to-b from-green-100 to-green-200 py-24 rounded-t-[48px]">
      <div className="w-full px-4">
        <div className="pb-12 w-full">
          <div className="flex w-full flex-col items-center justify-center pb-12 pt-14">
            <h3>
              <span className="tracking-tight mt-8 font-sans text-black text-4xl sm:text-5xl lg:text-6xl font-bold">
                Join the club
              </span>
            </h3>
            <p className="mt-4 text-lg text-neutral-400 text-center max-w-2xl">
              Of-course I deliver premium quality designs. Just ask!
            </p>
          </div>
          <div className="w-full overflow-x-hidden">
            <div className="columns-1 sm:columns-2 md:columns-3 max-w-7xl mx-auto gap-4 [column-fill:balance]">
              {tweetIds.map((tweetId, i) => (
                <div key={i} className="break-inside-avoid w-full overflow-hidden rounded-xl">
                  <div className="pl-4 pr-2">
                    <Tweet id={tweetId} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}