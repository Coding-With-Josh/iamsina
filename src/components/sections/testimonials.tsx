// components/TestimonialSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { TweetData } from '@/types/tweet';

const tweetUrls = [
  "https://twitter.com/vloccks/status/1941002014898770416",
  "https://twitter.com/TeniEntertainer/status/1891854269982167079",
  "https://twitter.com/alaovisuals_/status/1940024645085798746",
  "https://twitter.com/Growthpanda_/status/1940354420073775378",
  "https://twitter.com/Mezeshaiuje/status/1940032934854934552",
  "https://twitter.com/emmabryan01/status/1926050066969542900"
];

export default function TestimonialSection() {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const fetchedTweets = await Promise.all(
          tweetUrls.map(async (url) => {
            const response = await fetch(`/api/tweet?url=${encodeURIComponent(url)}`);
            if (!response.ok) throw new Error('Failed to fetch tweet');
            return await response.json() as TweetData;
          })
        );
        setTweets(fetchedTweets);
      } catch (err) {
        setError('Failed to load testimonials');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();

    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading testimonials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">{error}</p>
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
                  <div 
                    className="rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg p-4"
                    dangerouslySetInnerHTML={{ __html: tweet.html }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}