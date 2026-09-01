export const siteConfig = {
  name: "Sumit Mehandi Artist",
  location: "Bangalore, Karnataka",
  whatsapp: "+919665751029", // demo number — replace later
  phone: "+919665751029", // demo number — replace later
  instagram: "https://www.instagram.com/sumit_mehandi_bangalore/",
  email: "sumitmehandiartistartist@gmail.com",
  website: "https://example.com",
};

export const heroImages = [
  "/images/best-mehndi-artist-bangalore-carousel-1.jpeg",
  "/images/best-mehndi-artist-bangalore-carousel-2.jpeg",
  "/images/best-mehndi-artist-bangalore-carousel-3.jpeg",
  "/images/best-mehndi-artist-bangalore-carousel-4.png",
  "/images/festival-mehndi-design-bangalore.jpeg",
  "/images/bridal-mehndi-artist-bangalore-6.jpeg",
];

export const categories = [
  {
    slug: "bridal",
    title: "Bridal Mehndi",
    description: "Premium and intricate bridal mehendi artist in Bangalore, crafting memorable stories for your special day.",
    image: "/images/bridal-mehndi-artist-bangalore-1.jpeg",
    startingPrice: "₹4,000",
  },
  {
    slug: "festival",
    title: "Festival Mehndi",
    description: "Affordable mehendi designs in Bangalore for festivals and occasions with a modern Indian touch.",
    image: "/images/festival-mehndi-design-bangalore.jpeg",
    startingPrice: "₹400",
  },
  {
    slug: "relatives",
    title: "Guest Mehndi",
    description: "Beautiful and budget mehendi artist in Bangalore for family, friends, and wedding guests.",
    image: "/images/arabic-mehndi-design-bangalore.jpeg",
    startingPrice: "₹400",
  },
  {
    slug: "engagement",
    title: "Engagement Mehndi",
    description: "Graceful engagement mehendi artist near you for your first celebration together.",
    image: "/images/best-mehndi-artist-bangalore-carousel-1.jpeg",
    startingPrice: "₹4,000",
  },
  {
    slug: "Leg",
    title: "Leg Mehendi",
    description: "Detailed leg mehendi designs by professional artists in Bangalore.",
    image: "/images/leg-mehndi-artist-bangalore.jpeg",
    startingPrice: "₹400",
  },
  {
    slug: "Both",
    title: "Full Hand & Leg",
    description: "Complete bridal mehendi packages for hands and legs in Bangalore.",
    image: "/images/full-hand-leg-mehndi-bangalore.jpeg",
    startingPrice: "₹9,000",

  },
];

const bridalImages = [
  "/images/bridal-mehndi-artist-bangalore-1.jpeg",
  "/images/bridal-mehndi-artist-bangalore-2.jpeg",
  "/images/bridal-mehndi-artist-bangalore-3.jpeg",
  "/images/bridal-mehndi-artist-bangalore-4.jpeg",
  "/images/bridal-mehndi-artist-bangalore-5.jpeg",
  "/images/bridal-mehndi-artist-bangalore-6.jpeg",

];
const Festivalimages = [
  "/images/festival-mehndi-design-bangalore.jpeg",
  "/images/festival-mehndi-design-bangalore-1.jpeg",
  "/images/festival-mehndi-design-bangalore-2.jpeg",
  "/images/festival-mehndi-design-bangalore-3.jpeg",
  "/images/festival-mehndi-design-bangalore-4.jpeg",
  "/images/festival-mehndi-design-bangalore-5.jpeg",
  "/images/arabic-mehndi-design-bangalore.jpeg",
  "/images/wedding-guest-mehndi-bangalore-1.jpeg",
  "/images/festival-mehndi-design-bangalore-6.png",

];
const Guestimages = [
  "/images/arabic-mehndi-design-bangalore.jpeg",
  "/images/wedding-guest-mehndi-bangalore-1.jpeg",
  "/images/wedding-guest-mehndi-bangalore-2.jpeg",
  "/images/wedding-guest-mehndi-bangalore-3.jpeg",
  "/images/wedding-guest-mehndi-bangalore-4.jpeg",
  "/images/wedding-guest-mehndi-bangalore-5.jpeg",
  "/images/wedding-guest-mehndi-bangalore-6.jpeg",
  "/images/wedding-guest-mehndi-bangalore-8.jpeg",
  "/images/wedding-guest-mehndi-bangalore-9.jpeg",
];
const Legimages = [
  "/images/leg-mehndi-artist-bangalore.jpeg",
  "/images/leg-mehndi-artist-bangalore-1.jpeg",
  "/images/leg-mehndi-artist-bangalore-2.jpeg",
  "/images/leg-mehndi-artist-bangalore-3.jpeg",
  "/images/leg-mehndi-artist-bangalore-4.jpeg",
  "/images/leg-mehndi-artist-bangalore-5.jpeg",
  "/images/leg-mehndi-artist-bangalore-6.jpeg",
  "/images/leg-mehndi-artist-bangalore-7.jpeg",
  "/images/leg-mehndi-artist-bangalore-8.jpeg",
  "/images/leg-mehndi-artist-bangalore-9.jpeg",
  "/images/leg-mehndi-artist-bangalore-10.jpeg",
  "/images/leg-mehndi-artist-bangalore-11.jpeg",
];
const bothimages = [
  "/images/full-hand-leg-mehndi-bangalore.jpeg",
  "/images/full-hand-leg-mehndi-bangalore-1.jpeg",
  "/images/full-hand-leg-mehndi-bangalore-2.jpeg",
  "/images/full-hand-leg-mehndi-bangalore-3.jpeg",
  "/images/full-hand-leg-mehndi-bangalore-4.jpeg",
  "/images/full-hand-leg-mehndi-bangalore-5.jpeg",
  "/images/full-hand-leg-mehndi-bangalore-6.jpeg",
];
const engimages = [
  "/images/best-mehndi-artist-bangalore-carousel-1.jpeg",
  "/images/engagement-mehndi-artist-bangalore-1.jpeg",
  "/images/engagement-mehndi-artist-bangalore-2.jpeg",
  "/images/engagement-mehndi-artist-bangalore-3.jpeg",
  "/images/engagement-mehndi-artist-bangalore-4.jpeg",
  "/images/engagement-mehndi-artist-bangalore-5.jpeg",
  "/images/engagement-mehndi-artist-bangalore-6.jpeg",
  "/images/engagement-mehndi-artist-bangalore-7.jpeg",
  "/images/engagement-mehndi-artist-bangalore-8.jpeg",
  "/images/engagement-mehndi-artist-bangalore-9.jpeg",
];

const categoryPrices = {
  bridal: [8000, 4100, 4100, 13000, 21000, 9000, 12000],
  festival: [999, 1299, 1499, 1799, 1999, 2299],
  relatives: [799, 999, 1199, 1499, 1699, 1999],
  engagement: [1999, 2499, 2999, 3499, 3999, 4499],
  Leg: [2499, 2999, 3499, 3999, 4499, 4999],
  Both: [3999, 4499, 4999, 5999, 6499, 6999],
};

export const designs = categories.flatMap((category) => {
  let images = [];

  if (category.slug === "bridal") {
    images = bridalImages;
  } else if (category.slug === "festival") {
    images = Festivalimages;
  } else if (category.slug === "relatives") {
    images = Guestimages;
  } else if (category.slug === "Leg") {
    images = Legimages;
  } else if (category.slug === "Both") {
    images = bothimages;
  } else if (category.slug === "engagement") {
    images = engimages;
  }

  return Array.from({ length: images.length }, (_, index) => ({
    id: `${category.slug}-${index + 1}`,
    category: category.slug,
    name: `${category.title} ${String(index + 1).padStart(2, "0")}`,

    price: `₹${categoryPrices[category.slug][index]}`,

    description:
      `A beautifully composed ${category.title.toLowerCase()} design by the best mehendi artist in Bangalore, featuring intricate detailing.`,

    image: images[index],
  }));
});
export const instagramVideos = [
  {
    url: "https://www.instagram.com/p/DY_XER3Jf-d/",
    image: "/images/reel1.png",
  },
  {
    url: "https://www.instagram.com/p/DTAT7kiiQkm/",
    image: "/images/reel2.png",
  },
  {
    url: "https://www.instagram.com/p/Dama6t3JLfi/",
    image: "/images/reel3.png",
  },
  {
    url: "https://www.instagram.com/p/DbYojrVJbaS/",
    image: "/images/reel4.png",
  },
  {
    url: "https://www.instagram.com/p/DZCaQilqayR/",
    image: "/images/reel5.png",
  },
  {
    url: "https://www.instagram.com/p/DY8l6s9qumY/",
    image: "/images/reel6.png",
  },
  {
    url: "https://www.instagram.com/p/DSAdBYNCVRZ/",
    image: "/images/reel7.png",
  },
];

export const gallery = [
  {
    // title: "Bridal Story",
    // text: "Intricate details for the bride.",
    image: "/images/bridal-mehndi-artist-bangalore-5.jpeg",
  },
  {
    // title: "Fine Details",
    // text: "Peacocks, florals and Indian motifs.",
    image: "/images/full-hand-leg-mehndi-bangalore.jpeg",
  },
  {
    // title: "Wedding Details",
    // text: "Personalised elements that tell a story.",
    image: "/images/best-mehndi-artist-bangalore-carousel-4.png",
  },
  {
    // title: "Traditional Touch",
    // text: "Classic patterns with a refined finish.",
    image: "/images/bridal-mehndi-artist-bangalore-6.jpeg",
  },
  {
    image: "/images/leg-mehndi-artist-bangalore.jpeg",
  }
];

export const faqs = [
  {
    question: "Do you provide bridal mehndi in Bangalore?",
    answer:
      "Yes. Sumit Mehandi Artist offers professional bridal, wedding guest, engagement, and custom mehendi services across all areas of Bangalore.",
  },
  {
    question: "Are you an affordable mehendi artist in Bangalore?",
    answer:
      "Yes, we offer a range of packages starting from ₹400 for guests and festivals, making us a budget-friendly and affordable mehendi artist in Bangalore without compromising on quality.",
  },
  {
    question: "Do you provide mehendi artist services near me in Bangalore?",
    answer:
      "Yes, we travel across Bangalore! Whether you are in Indiranagar, Whitefield, Koramangala, HSR Layout, or anywhere else, we provide at-home mehendi services near you.",
  },
  {
    question: "How can I book a mehndi artist?",
    answer:
      "Choose a design from our gallery or simply contact us on WhatsApp. We can discuss your occasion, date, location, and preferred style.",
  },
  {
    question: "Can I request a custom bridal design?",
    answer:
      "Absolutely. Custom motifs, names, portraits, wedding elements, and personalised stories can be seamlessly incorporated into your bridal mehendi design.",
  },
  {
    question: "How early should I book?",
    answer:
      "For weddings and bridal appointments, early booking is recommended (at least a few weeks in advance) so your preferred date and artist availability can be confirmed.",
  },
];

export function getDesignsByCategory(slug) {
  return designs.filter((design) => design.category === slug);
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
