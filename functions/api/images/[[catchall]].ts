const R2_PUBLIC_URL = "https://pub-394ab5a813e24ca2876a62cea5cb9937.r2.dev";

export async function onRequest(context) {
  const { request, env, params } = context;
  const segments = (params.catchall || []);

  if (segments.length < 1) {
    return new Response("Specify a section (e.g., /api/images/hiking)", { status: 400 });
  }

  const section = segments[0];
  const objects = await env.IMAGE_BUCKET.list({ prefix: `${section}/` });
  const images = objects.objects
    .filter((o) => /\.(png|jpg|jpeg|webp|gif|avif)$/i.test(o.key))
    .map((o) => ({
      original: `${R2_PUBLIC_URL}/${o.key}`,
      thumbnail: `${R2_PUBLIC_URL}/${o.key}`,
    }));
  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
}
