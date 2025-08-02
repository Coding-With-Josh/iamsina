const testimonials = [
  {
    name: "Nikhil",
    username: "@nikhil_hrem",
    avatar: "https://pbs.twimg.com/profile_images/1755291334964039680/nIoT5gIK_normal.jpg",
    text: "This design really speaks to the Nigerian creative spirit!",
    link: "https://twitter.com/nikhil_hrem/status/1742983975340327184",
    time: "7:58 PM · Jan 4, 2024",
    likes: 2,
    reply: "Replying to @nolansym",
    replies: "Read 2 replies"
  },
  {
    name: "Paul Copplestone - e/postgres",
    username: "@kiwicopple",
    avatar: "https://pbs.twimg.com/profile_images/1664343166630109202/xcBMGPSE_normal.jpg",
    text: "Your work sets a new standard for design in Nigeria! 🔥",
    link: "https://twitter.com/kiwicopple/status/1743049700583116812",
    time: "12:20 AM · Jan 5, 2024",
    likes: 3,
    reply: "Replying to @nolansym",
    replies: "Read 1 reply"
  },
  {
    name: "Dan Kulkov",
    username: "@DanKulkov",
    avatar: "https://pbs.twimg.com/profile_images/1778434561556320256/knBJT1OR_normal.jpg",
    text: "Your portfolio truly captures the essence of modern Nigerian design.",
    link: "https://twitter.com/DanKulkov/status/1754067409366073443",
    time: "10:00 AM · Feb 4, 2024",
    likes: 3,
    reply: "Replying to @nolansym",
    replies: "Read more on Twitter"
  },
  {
    name: "Zach",
    username: "@thezachhan",
    avatar: "https://pbs.twimg.com/profile_images/1803806797330792448/TA1gxakI_normal.jpg",
    text: "Wow, the design and UX are on point—definitely representing Nigerian excellence!",
    link: "https://twitter.com/thezachhan/status/1753968111059861648",
    time: "3:25 AM · Feb 4, 2024",
    likes: 1,
    reply: "",
    replies: "Read 1 reply"
  },
  {
    name: "Soham Patil",
    username: "@realsoham774",
    avatar: "https://pbs.twimg.com/profile_images/1854971219197804544/9--Lms3a_normal.jpg",
    text: "Beautiful work! I’ll be using this style in my next Nigerian project for sure.",
    link: "https://twitter.com/realsoham774/status/1754174981897118136",
    time: "5:08 PM · Feb 4, 2024",
    likes: 3,
    reply: "Replying to @nolansym",
    replies: "Read 1 reply"
  },
  {
    name: "Mertcan",
    username: "@sitenley",
    avatar: "https://pbs.twimg.com/profile_images/1913389697943916544/c7DmG44F_normal.jpg",
    text: "Thanks Jordan, amazing work showing the best of Nigerian design culture! 🤩",
    link: "https://twitter.com/sitenley/status/1743632296802988387",
    time: "2:55 PM · Jan 6, 2024",
    likes: 1,
    reply: "Replying to @nolansym",
    replies: "Read 1 reply"
  },
  {
    name: "wayne 🦇🔊",
    username: "@whatt4",
    avatar: "https://pbs.twimg.com/profile_images/1745212766988779520/J4SmkzRb_normal.jpg",
    text: "Proud to be part of this—excited to see more Nigerian design shine.",
    link: "https://twitter.com/whatt4/status/1754110885168021921",
    time: "12:53 PM · Feb 4, 2024",
    likes: 1,
    reply: "",
    replies: "Read 1 reply"
  },
  {
    name: "frus",
    username: "@itsfrus",
    avatar: "https://pbs.twimg.com/profile_images/1027250923020734465/ve1bk8MU_normal.jpg",
    text: "This looks really promising! Nigerian creatives will love this approach.",
    link: "https://twitter.com/itsfrus/status/1760248682828419497",
    time: "11:22 AM · Feb 21, 2024",
    likes: 1,
    reply: "",
    replies: "Read more on Twitter"
  },
  {
    name: "Ranveer",
    username: "@ranveer_io",
    avatar: "https://pbs.twimg.com/profile_images/1528108904789557248/xjibb-tP_normal.jpg",
    text: "Respect for pushing Nigerian design forward! 🫡",
    link: "https://twitter.com/ranveer_io/status/1760230134601122153",
    time: "10:09 AM · Feb 21, 2024",
    likes: 0,
    reply: "Replying to @nolansym",
    replies: "Read more on Twitter"
  },
  {
    name: "Krish",
    username: "@krishnalpanara",
    avatar: "https://pbs.twimg.com/profile_images/1481712106710122497/9piu1jf3_normal.jpg",
    text: "Insane value here—Nigerian design community definitely benefits from this.",
    link: "https://twitter.com/krishnalpanara/status/1760184980356088267",
    time: "7:09 AM · Feb 21, 2024",
    likes: 1,
    reply: "Replying to @nolansym",
    replies: "Read more on Twitter"
  },
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
