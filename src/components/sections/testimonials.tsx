'use client';

import { useEffect, useState } from 'react';

interface TweetData {
  html: string;
  url: string;
  author_name: string;
  author_url: string;
  author_profile_image_url: string;
  text: string;
  created_at: string;
  like_count: number;
  reply_count: number;
}

export default function TestimonialSection() {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [loading, setLoading] = useState(true);

  const tweetUrls = [
    "https://twitter.com/vloccks/status/1941002014898770416",
    "https://twitter.com/TeniEntertainer/status/1891854269982167079",
    "https://twitter.com/alaovisuals_/status/1940024645085798746",
    "https://twitter.com/Growthpanda_/status/1940354420073775378",
    "https://twitter.com/Mezeshaiuje/status/1940032934854934552",
    "https://twitter.com/emmabryan01/status/1926050066969542900"
  ];

  useEffect(() => {
    const loadTweets = async () => {
      try {
        const promises = tweetUrls.map(url => 
          fetch(`/api/tweet?url=${encodeURIComponent(url)}`)
            .then(res => res.json())
            .then(data => ({
              ...data,
              author_profile_image_url: data.author_profile_image_url || '',
              like_count: data.like_count || 0,
              reply_count: data.reply_count || 0,
              created_at: formatTwitterDate(data.created_at || new Date().toISOString())
            }))
            .catch(() => null)
        );

        const results = await Promise.all(promises);
        setTweets(results.filter(Boolean));
      } catch (error) {
        console.error("Error loading tweets:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTweets();

    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function formatTwitterDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleString('en-US', options).replace(',', ' ·');
  }

  function getUsernameFromUrl(url: string): string {
    try {
      const parsed = new URL(url);
      return `@${parsed.pathname.split('/')[1]}`;
    } catch {
      return '@user';
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse">Loading testimonials...</div>
      </div>
    );
  }

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
              {tweets.map((tweet, i) => (
                <div key={i} className="mb-4 break-inside-avoid">
                  <article className="rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg p-4 text-black">
                    <div className="flex items-center gap-3 mb-2">
                      <a href={tweet.author_url} target="_blank" rel="noopener noreferrer">
                        <img 
                          src={tweet.author_profile_image_url} 
                          alt={tweet.author_name} 
                          width={48} 
                          height={48} 
                          className="rounded-full border border-neutral-700" 
                        />
                      </a>
                      <div>
                        <a href={tweet.author_url} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
                          {tweet.author_name}
                        </a>
                        <div className="text-xs text-neutral-400">
                          <a href={tweet.author_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {getUsernameFromUrl(tweet.author_url)}
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mb-2 text-base text-neutral-100">{tweet.text}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{tweet.created_at}</span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
                          <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                        </svg>
                        {tweet.like_count}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs">
                      <a href={tweet.url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                        {tweet.reply_count > 0 ? `Read ${tweet.reply_count} ${tweet.reply_count === 1 ? 'reply' : 'replies'}` : 'Read more on Twitter'}
                      </a>
                      <a href={tweet.url} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:underline">View on Twitter</a>
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