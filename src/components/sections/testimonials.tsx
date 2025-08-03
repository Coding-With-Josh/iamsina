const testimonials = [
  {
    name: "Vlocc",
    username: "@vloccks",
    avatar: "https://pbs.twimg.com/profile_images/1745212766988779520/J4SmkzRb_normal.jpg",
    text: "This design is absolutely stunning! The attention to detail is incredible.",
    link: "https://x.com/vloccks/status/1941002014898770416",
    time: "2:15 PM · Apr 16, 2024",
    likes: 42,
    reply: "",
    replies: "Read 5 replies"
  },
  {
    name: "Teni",
    username: "@TeniEntertainer",
    avatar: "https://pbs.twimg.com/profile_images/1891854269982167079/9piu1jf3_normal.jpg",
    text: "I'm blown away by this creative work! The colors and composition are perfect.",
    link: "https://x.com/TeniEntertainer/status/1891854269982167079",
    time: "10:30 AM · Mar 28, 2024",
    likes: 36,
    reply: "",
    replies: "Read 3 replies"
  },
  {
    name: "Alao Visuals",
    username: "@alaovisuals_",
    avatar: "https://pbs.twimg.com/profile_images/1940024645085798746/ve1bk8MU_normal.jpg",
    text: "This sets a new standard for design in our industry. Absolutely phenomenal work!",
    link: "https://x.com/alaovisuals_/status/1940024645085798746",
    time: "4:45 PM · Apr 14, 2024",
    likes: 28,
    reply: "",
    replies: "Read 7 replies"
  },
  {
    name: "Growth Panda",
    username: "@Growthpanda_",
    avatar: "https://pbs.twimg.com/profile_images/1940354420073775378/xjibb-tP_normal.jpg",
    text: "The UX/UI here is next level. I can tell a lot of thought went into every interaction.",
    link: "https://x.com/Growthpanda_/status/1940354420073775378",
    time: "11:20 AM · Apr 15, 2024",
    likes: 31,
    reply: "",
    replies: "Read 4 replies"
  },
  {
    name: "Mezeshaiuje",
    username: "@Mezeshaiuje",
    avatar: "https://pbs.twimg.com/profile_images/1940032934854934552/knBJT1OR_normal.jpg",
    text: "This is exactly the kind of innovative design we need more of. Bravo!",
    link: "https://x.com/Mezeshaiuje/status/1940032934854934552",
    time: "5:10 PM · Apr 14, 2024",
    likes: 19,
    reply: "",
    replies: "Read 2 replies"
  },
  {
    name: "Emma Bryan",
    username: "@emmabryan01",
    avatar: "https://pbs.twimg.com/profile_images/1926050066969542900/TA1gxakI_normal.jpg",
    text: "The way you've balanced form and function here is masterful. Truly inspiring work!",
    link: "https://x.com/emmabryan01/status/1926050066969542900",
    time: "9:05 AM · Apr 5, 2024",
    likes: 27,
    reply: "",
    replies: "Read 6 replies"
  }
];

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="relative w-full h-full bg-gradient-to-b from-green-100 to-green-200 py-24 rounded-t-[48px]">
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
              {testimonials.map((t, i) => (
                <div key={i} className="mb-4 break-inside-avoid">
                  <article className="rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg p-4 text-black">
                    <div className="flex items-center gap-3 mb-2">
                      <a href={t.link} target="_blank" rel="noopener noreferrer">
                        <img src={t.avatar} alt={t.name} width={48} height={48} className="rounded-full border border-neutral-700" />
                      </a>
                      <div>
                        <a href={t.link} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
                          {t.name}
                        </a>
                        <div className="text-xs text-neutral-400">
                          <a href={t.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{t.username}</a>
                        </div>
                      </div>
                    </div>
                    {t.reply && (
                      <div className="text-xs text-green-400 mb-1">
                        {t.reply}
                      </div>
                    )}
                    <p className="mb-2 text-base text-neutral-100">{t.text}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{t.time}</span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></svg>
                        {t.likes}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs">
                      <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">{t.replies}</a>
                      <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:underline">View on Twitter</a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}