export default function imagekitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  
  if (!urlEndpoint) {
    // Fallback for local development without ImageKit configured
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  const params = [`w-${width}`];
  if (quality) params.push(`q-${quality}`);
  params.push("f-auto"); // Auto format (WebP/AVIF)
  
  const transformation = `tr:${params.join(",")}`;
  return `${urlEndpoint}/${transformation}${src}`;
}