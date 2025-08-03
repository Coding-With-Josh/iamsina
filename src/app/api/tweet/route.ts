// app/api/tweet/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // First get oEmbed data
    const oembedResponse = await fetch(
      `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&omit_script=true`
    );
    const oembedData = await oembedResponse.json();

    // Extract additional data from the HTML (fallback method)
    const authorName = oembedData.author_name || 'Twitter User';
    const authorUrl = `https://twitter.com/${oembedData.author_name?.replace(/\s+/g, '') || 'user'}`;
    
    return NextResponse.json({
      url: oembedData.url || url,
      html: oembedData.html,
      author_name: authorName,
      author_url: authorUrl,
      author_profile_image_url: `https://unavatar.io/twitter/${authorName}`,
      text: extractTextFromHtml(oembedData.html),
      created_at: new Date().toISOString(), // oEmbed doesn't provide this
      like_count: 0, // oEmbed doesn't provide this
      reply_count: 0 // oEmbed doesn't provide this
    });
  } catch (error) {
    console.error('Error fetching tweet:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tweet' },
      { status: 500 }
    );
  }
}

// Helper function to extract text from HTML
function extractTextFromHtml(html: string): string {
  if (!html) return 'Check out this tweet!';
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || 'Check out this tweet!';
}