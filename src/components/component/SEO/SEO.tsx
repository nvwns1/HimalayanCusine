import Head from "next/head";
import React from "react";

const SEO = () => {
  const title = "Himalayan Spices - Authentic Himalayan Cuisine";
  const description =
    "Experience the authentic flavors of the Himalayas at Himalayan Spices Restaurant in London. Enjoy our traditional dishes crafted with the freshest ingredients.";
  const url = "https://www.himalayanspices.co/";
  const image = "https://www.himalayanspices.co/homePage/hero/momo.jpg";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
