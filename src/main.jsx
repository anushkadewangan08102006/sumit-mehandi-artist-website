import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  X,
  ZoomIn,
} from "lucide-react";

import {
  categories,
  designs,
  faqs,
  gallery,
  getCategory,
  getDesignsByCategory,
  getWhatsAppUrl,
  heroImages,
  instagramVideos,
  siteConfig,
} from "./data";

import "./styles.css";
import "./hero.css";
import "./reel.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function useReveal() {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.18 },
    variants: fadeUp,
  };
}

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Navbar({ dark = false }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav ${dark ? "nav-dark" : ""}`}>
        <Link to="/" className="brand" onClick={close}>
          <i>Sumit</i>
          <span>MEHNDI ARTIST · BANGALORE</span>
        </Link>

        <nav>
          <a href="/#about">About</a>
          <a href="/#designs">Designs</a>
          <a href="/#reels">Reels</a>
          <a href="/#faq">FAQ</a>
        </nav>

        <a
          className="button nav-book"
          href={getWhatsAppUrl("Hi Sumit, I would like to book a mehndi appointment in Bangalore.")}
          target="_blank"
          rel="noreferrer"
        >
          Book Your Mehndi <ArrowUpRight size={15} />
        </a>

        <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
          >
            <button className="mobile-close" onClick={close} aria-label="Close menu">
              <X size={28} />
            </button>
            <a href="/#about" onClick={close}>About</a>
            <a href="/#designs" onClick={close}>Designs</a>
            <a href="/#reels" onClick={close}>Watch the Unfold</a>
            <a href="/#faq" onClick={close}>FAQ</a>
            <button
              className="button"
              onClick={() => {
                close();
                navigate("/book");
              }}
            >
              Book Your Mehndi <ArrowUpRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <Navbar dark />
      <div className="hero-slides">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="hero-image"
            style={{ backgroundImage: `url("${image}")` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{
              opacity: active === index ? 1 : 0,
              scale: active === index ? 1 : 1.06,
            }}
            transition={{ duration: 1.15, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="hero-shade" />
      <div className="hero-grain" />

      <motion.div className="hero-copy" {...useReveal()}>
        {/* <p className="eyebrow">BRIDAL · WEDDING · CONTEMPORARY</p>
        <p className="eyebrow">✦BANGALORE · BY APPOINTMENT</p> */}
        <h1>
          Best Mehendi Artist
          <br />
          <em>in Bangalore.</em>
        </h1>
        <p className="hero-text">
          Affordable, premium, and thoughtfully crafted bridal mehendi stories for weddings and
          beautiful beginnings across Bangalore.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/book">
            Book Your Mehndi <ArrowUpRight size={15} />
          </Link>
          <a className="button ghost" href="#designs">
            Explore Designs <ArrowDownRight size={15} />
          </a>
        </div>
      </motion.div>

      <div className="hero-foot">
        <span>BEST MEHNDI ARTIST IN BANGALORE</span>
        <div className="slide-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
        <span>SCROLL TO DISCOVER ↓</span>
      </div>
    </section>
  );
}

function About() {
  const reveal = useReveal();
  return (
    <section className="section about" id="about">
      <motion.div {...reveal}>
        <p className="eyebrow">THE ARTIST</p>
        <h2>
          Bridal Mehendi Artist,
          <br />
          <em>near you.</em>
        </h2>
        <p className="body-copy">
          Sumit Mehandi Artist is regarded as one of the best mehendi artists in Bangalore, creating intricate bridal and wedding mehendi with
          a balance of traditional Indian artistry and contemporary elegance.
          Every design is shaped around the person wearing it.
        </p>
        <p className="body-copy">
          From detailed bridal compositions to minimal engagement designs, we offer affordable mehendi artist services.
          Every appointment is approached with patience, precision, and an eye
          for beautiful detail.
        </p>
        <Link className="text-link" to="/book">
          Start your mehndi story <ArrowUpRight size={15} />
        </Link>
      </motion.div>

      <motion.div className="artist-photo" {...reveal}>
        <img
          src="/images/logo.png"
          alt="Sumit Mehandi Artist creating bridal mehndi in Bangalore"
          loading="lazy"
        />
        <div className="round-seal">
          <strong>∞</strong>
          <small>MADE WITH<br />INTENTION</small>
        </div>
      </motion.div>

      <div className="numbers">
        <div><strong>01</strong><span>BRIDAL ARTISTRY</span></div>
        <div><strong>02</strong><span>PERSONALISED STORIES</span></div>
        <div><strong>03</strong><span>BANGALORE SERVICE</span></div>
      </div>
    </section>
  );
}

function CategorySection() {
  const reveal = useReveal();
  return (
    <section className="section category-section" id="designs">
      <motion.div className="section-top" {...reveal}>
        <div>
          <p className="eyebrow">FIND YOUR STYLE</p>
          <h2>
            Wedding Mehendi Artist
            <br />
            <em>for every occasion.</em>
          </h2>
        </div>
        <p className="body-copy">
          Explore designs created by our budget mehendi artist for every kind of celebration—from full
          bridal stories to delicate festive details in Bangalore.
        </p>
      </motion.div>

      <motion.div className="category-grid" {...reveal}>
        {categories.map((category) => (
          <Link className="category" to={`/designs/${category.slug}`} key={category.slug}>
            <img src={category.image} alt={`${category.title} in Bangalore`} loading="lazy" />
            <span>
              {category.title}
              <i>↗</i>
            </span>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="section gallery">
      <div className="section-top gallery-heading">
        <div>
          <p className="eyebrow">THE PORTFOLIO</p>
          <h2>
            Details worth
            <br />
            <em>remembering.</em>
          </h2>
        </div>
      </div>
      <div className="gallery-row">
        {[...gallery, ...gallery].map((item, index) => {
          const realIndex = index % gallery.length;
          return (
            <article
              key={`${item.title}-${index}`}
              className="gallery-item-card"
              onClick={() => setSelectedIndex(realIndex)}
            >
              <div className="gallery-img-wrapper">
                <img src={item.image} alt={`${item.title} mehndi design by Sumit`} loading="lazy" />
                <div className="zoom-badge">
                  <ZoomIn size={18} />
                  <span>Click to view full size</span>
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <ImageLightbox
          items={gallery}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}
    </section>
  );
}

function Reels() {
  const reelItems = [...instagramVideos, ...instagramVideos];

  return (
    <section className="reel-section" id="reels">
      <div className="reel-copy">
        <p className="eyebrow">BEHIND THE ART</p>

        <h2>
          Watch
          <br />
          <em>the unfold.</em>
        </h2>

        <p className="body-copy">
          A glimpse into the details, movement and little moments behind the
          mehndi you see on the final day.
        </p>

        <a
          className="text-link"
          href={siteConfig.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Follow on Instagram <Instagram size={15} />
        </a>
      </div>

      <div className="reel-window">
        <div className="reel-track">
          {reelItems.map((reel, index) => (
            <a
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="reel-card"
              key={`${reel.url}-${index}`}
              aria-label={`Open Instagram Reel ${index + 1}`}
            >
              <div
                className="reel-card-image"
                style={{
                  backgroundImage: `url("${reel.image}")`,
                }}
              />

              <div className="reel-card-overlay">
                <Instagram size={20} />
                <span>WATCH REEL ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
function Quote() {
  return (
    <section className="quote">
      <div className="quote-mark">“</div>
      <blockquote>
        “The most beautiful designs are the ones that
        <em> become part of your story.</em>”
      </blockquote>
      <p>SUMIT MEHNDI ARTIST <span>✦</span> BANGALORE</p>
      <div className="stars">★★★★★</div>
    </section>
  );
}

function Areas() {
  return (
    <section className="section areas">
      <p className="eyebrow">WHERE WE CREATE</p>
      <div>
        <h2>
          Mehendi artist
          <br />
          <em>services near you.</em>
        </h2>
        <p className="body-copy">
          Serving brides, families and celebrations across Bangalore, with
          appointments tailored to your venue and wedding schedule.
        </p>
      </div>
      <div className="area-list">
        <span>Bangalore</span>
        <span>Indiranagar</span>
        <span>Whitefield</span>
        <span>Koramangala</span>
        <span>HSR Layout</span>
        <span>Electronic City</span>
        <span>Yelahanka</span>
        <span>Hebbal</span>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section faq" id="faq">
      <p className="eyebrow">QUESTIONS</p>
      <h2>
        Frequently
        <br />
        <em>asked.</em>
      </h2>

      <div>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={faq.question}>
            <button onClick={() => setOpen(open === index ? null : index)}>
              {faq.question}
              <ChevronDown className={open === index ? "rotated" : ""} size={21} />
            </button>
            <AnimatePresence initial={false}>
              {open === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="contact">
      <div>
        <p className="eyebrow">YOUR DATE, YOUR STORY</p>
        <h2>
          Book your
          <br />
          <em>mehendi artist.</em>
        </h2>
        <p>
          Tell us what you are celebrating and we’ll help you find the right
          design and booking option.
        </p>
        <a className="contact-link" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
          <Phone size={14} /> {siteConfig.phone}
        </a>
      </div>

      <BookingForm />
    </section>
  );
}

function BookingForm() {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState("");
  const [designChoice, setDesignChoice] = useState("");

  const submit = (event) => {
    event.preventDefault();

    if (designChoice === "yes") {
      const slug =
        occasion === "Bridal" ? "bridal" :
          occasion === "Engagement" ? "engagement" :
            occasion === "Festival" ? "festival" :
              occasion === "Relatives" || occasion === "Wedding Guest" ? "relatives" :
                "custom";

      navigate(`/designs/${slug}`);
      return;
    }

    const message = `Hi Sumit, I would like to book mehndi for ${occasion || "an occasion"} in Bangalore. I don't want to select a design yet.`;
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit}>
      <label>
        WHAT OCCASION?
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value="">Select an occasion</option>
          <option>Bridal</option>
          <option>Wedding Guest</option>
          <option>Relatives</option>
          <option>Festival</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        DO YOU WANT TO SELECT A DESIGN?
        <select value={designChoice} onChange={(e) => setDesignChoice(e.target.value)} required>
          <option value="">Choose one</option>
          <option value="yes">Yes, show me designs</option>
          <option value="no">No, talk to me on WhatsApp</option>
        </select>
      </label>

      <button className="button submit" type="submit">
        Continue <ArrowUpRight size={15} />
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer>
      <div className="brand">
        <i>Sumit</i>
        <span>MEHNDI ARTIST · BANGALORE</span>
      </div>
      <p>© {new Date().getFullYear()} Sumit Mehandi Artist. All rights reserved.</p>
      <div>
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /></a>
        <a href={getWhatsAppUrl("Hi Sumit, I would like to enquire about mehndi booking.")} target="_blank" rel="noreferrer"><MessageCircle size={15} /></a>
      </div>
    </footer>
  );
}

function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sumit Mehandi Artist",
    "description": "Professional bridal, wedding, and contemporary mehendi artist in Bangalore. Affordable mehendi designs.",
    "url": "https://sumitmehandiartist.in/",
    "telephone": "+91 9665751029",
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "priceRange": "₹₹",
    "image": "https://sumitmehandiartist.in/images/bridal-mehndi-artist-bangalore-1.jpeg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Sumit Mehandi Artist | Best Mehendi Artist in Bangalore</title>
        <meta name="description" content="Looking for the best mehendi artist in Bangalore? Sumit Mehandi Artist offers affordable bridal, wedding, and festival mehendi designs." />
        <link rel="canonical" href="https://sumitmehandiartist.in/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Hero />
      <About />
      <CategorySection />
      <Gallery />
      <Reels />
      <Quote />
      <Areas />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

function ImageLightbox({ items, currentIndex, onClose, onNavigate }) {
  const item = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  const title = item.name || item.title || "Mehndi Design";
  const image = item.image;
  const price = item.price;
  const description = item.description || item.text;
  const category = item.category;

  const whatsappUrl = getWhatsAppUrl(
    `Hi Sumit, I am interested in booking the "${title}"${category ? ` (${category})` : ""} mehndi design.`
  );

  return (
    <AnimatePresence>
      <motion.div
        className="image-lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={onClose} aria-label="Close modal">
            <X size={26} />
          </button>

          {items.length > 1 && (
            <>
              <button
                className="lightbox-nav prev"
                onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className="lightbox-nav next"
                onClick={() => onNavigate((currentIndex + 1) % items.length)}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div className="lightbox-image-stage">
            <motion.img
              key={image}
              src={image}
              alt={title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lightbox-full-img"
            />
          </div>

          <div className="lightbox-details-panel">
            <div className="lightbox-details-left">
              <span className="lightbox-counter">
                {currentIndex + 1} of {items.length}
              </span>
              <h3>{title}</h3>
              {description && <p>{description}</p>}
            </div>

            <div className="lightbox-details-right">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button lightbox-book-btn"
              >
                Book This Design <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function DesignCard({ design, onImageClick }) {
  return (
    <motion.article
      className="design-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="design-card-img-wrapper" onClick={onImageClick}>
        <img
          src={design.image}
          alt={`${design.name} - ${design.category} mehndi design`}
          loading="lazy"
          className="clickable-design-image"
        />
        <div className="zoom-badge">
          <ZoomIn size={18} />
          <span>Click to view full size</span>
        </div>
      </div>
      <div className="design-card-body">
        <p className="design-label">SUMIT MEHNDI ARTIST</p>
        <h3>{design.name}</h3>
        <p>{design.description}</p>
        <div className="design-meta">

          <a
            href={getWhatsAppUrl(`Hi Sumit, I would like to book the "${design.name}" mehndi design.`)}
            target="_blank"
            rel="noreferrer"
          >
            Book Now <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function DesignsPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { slug } = useParams();
  const category = getCategory(slug);
  const list = useMemo(() => getDesignsByCategory(slug), [slug]);

  const serviceSchema = category ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": category.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sumit Mehandi Artist"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "description": category.description
  } : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!category) {
    return (
      <div className="not-found">
        <Navbar />
        <h1>Designs not found.</h1>
        <Link className="button" to="/">Back Home</Link>
      </div>
    );
  }

  return (
    <div className="design-page">
      <Helmet>
        <title>{category.title} | Best Mehendi Artist in Bangalore</title>
        <meta name="description" content={category.description} />
        <link rel="canonical" href={`https://sumitmehandiartist.in/designs/${slug}`} />
        {serviceSchema && (
          <script type="application/ld+json">
            {JSON.stringify(serviceSchema)}
          </script>
        )}
      </Helmet>
      <Navbar />
      <section className="design-hero">
        <Link className="back-link" to="/#designs"><ArrowLeft size={15} /> Back to categories</Link>
        <p className="eyebrow">MEHNDI COLLECTION · BANGALORE</p>
        <h1>{category.title}</h1>
        <p>{category.description}</p>
        <p className="starting-price">
          {category.title} Starting from {category.startingPrice}
        </p>
      </section>

      <section className="design-grid">
        {list.map((design, index) => (
          <DesignCard
            key={design.id}
            design={design}
            onImageClick={() => setSelectedIndex(index)}
          />
        ))}
      </section>

      <section className="design-bottom">
        <h2>
          Can’t find exactly what
          <br />
          <em>you imagined?</em>
        </h2>
        <p>Tell us your idea and we can create a custom direction for you.</p>
        <a
          className="button"
          href={getWhatsAppUrl(`Hi Sumit, I want a custom ${category.title} mehndi design.`)}
          target="_blank"
          rel="noreferrer"
        >
          Talk on WhatsApp <MessageCircle size={15} />
        </a>
      </section>

      {selectedIndex !== null && (
        <ImageLightbox
          items={list}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}

      <Footer />
    </div>
  );
}

function BookPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="book-page">
      <Helmet>
        <title>Book Mehndi Artist Bangalore | Sumit Mehandi Artist</title>
        <meta name="description" content="Book the best bridal and affordable mehendi artist in Bangalore. Contact us on WhatsApp to discuss your occasion and date." />
        <link rel="canonical" href="https://sumitmehandiartist.in/book" />
      </Helmet>
      <Navbar />
      <div className="book-inner">
        <p className="eyebrow">BOOK YOUR DATE</p>
        <h1>
          Let’s create your
          <br />
          <em>mehndi story.</em>
        </h1>
        <p>
          Choose your occasion and decide whether you would like to browse
          designs first or speak directly on WhatsApp.
        </p>
        <BookingForm />
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const reveal = useReveal();
  return (
    <section className="section why-choose-us" id="why-choose-us">
      <motion.div {...reveal}>
        <p className="eyebrow">WHY SUMIT MEHANDI ARTIST</p>
        <h2>
          Why choose us for your
          <br />
          <em>mehndi in Bangalore?</em>
        </h2>
        <p className="body-copy">
          We combine decades of heritage henna craftsmanship with modern hygiene, punctuality, and personalized attention to make every celebration special.
        </p>
      </motion.div>

      <div className="why-grid">
        <motion.div className="why-card" {...reveal}>
          <div className="why-icon">✦</div>
          <h3>Intricate & Custom Designs</h3>
          <p>
            From traditional Indian bridal figures and peacocks to contemporary minimal patterns, every design is tailored to your taste.
          </p>
        </motion.div>

        <motion.div className="why-card" {...reveal}>
          <div className="why-icon">✦</div>
          <h3>100% Natural Henna</h3>
          <p>
            We prepare chemical-free, natural henna paste ensuring deep, rich reddish-brown stains that are safe for all skin types.
          </p>
        </motion.div>

        <motion.div className="why-card" {...reveal}>
          <div className="why-icon">✦</div>
          <h3>At-Home Doorstep Service</h3>
          <p>
            Enjoy comfortable home or venue appointments anywhere across Bangalore without travelling to a studio.
          </p>
        </motion.div>

        <motion.div className="why-card" {...reveal}>
          <div className="why-icon">✦</div>
          <h3>Punctual & Patient Artists</h3>
          <p>
            Our experienced artists arrive on time and dedicate genuine care and speed for both individual brides and large guest groups.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MehndiArtistBangalorePage() {
  const reveal = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sumit Mehandi Artist",
    "description": "Professional bridal, wedding, engagement, and festival mehendi artist in Bangalore. Affordable packages with home service.",
    "url": "https://sumitmehandiartist.in/mehndi-artist-bangalore",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Bangalore",
      "Indiranagar",
      "Whitefield",
      "Koramangala",
      "HSR Layout",
      "Electronic City",
      "Yelahanka",
      "Hebbal"
    ],
    "priceRange": "₹400 - ₹21,000",
    "image": "https://sumitmehandiartist.in/images/bridal-mehndi-artist-bangalore-1.jpeg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="seo-landing-page">
      <Helmet>
        <title>Mehndi Artist in Bangalore | Sumit Mehandi Artist</title>
        <meta
          name="description"
          content="Looking for a professional mehendi artist in Bangalore? Sumit Mehandi Artist provides affordable bridal, wedding, engagement, and festival mehendi designs across Bangalore."
        />
        <link rel="canonical" href="https://sumitmehandiartist.in/mehndi-artist-bangalore" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="seo-hero">
        <motion.div className="seo-hero-content" {...reveal}>
          <p className="eyebrow">BANGALORE · PROFESSIONAL MEHNDI ARTIST</p>
          <h1>Mehndi Artist in Bangalore</h1>
          <p className="hero-text">
            Sumit Mehandi Artist brings elegant, detailed, and contemporary mehendi stories to brides, families, and celebrations across Bangalore.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/book">
              Book Your Mehndi <ArrowUpRight size={15} />
            </Link>
            <a className="button ghost" href="#services">
              Explore Services <ArrowDownRight size={15} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Bangalore Introduction Section */}
      <section className="section seo-intro">
        <motion.div {...reveal}>
          <p className="eyebrow">ABOUT OUR SERVICES IN BANGALORE</p>
          <h2>
            Bridal & Event Mehendi Artist
            <br />
            <em>in Bangalore.</em>
          </h2>
          <p className="body-copy">
            Sumit Mehandi Artist is regarded as one of the best mehendi artists in Bangalore, specializing in bridal, wedding guest, engagement, and festival mehendi designs. We blend traditional Indian motifs with refined contemporary elegance.
          </p>
          <p className="body-copy">
            With at-home appointments across Bangalore, every session is delivered with patience, precision, natural henna, and attention to detail.
          </p>
          <Link className="text-link" to="/book">
            Start your booking <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </section>

      {/* Services Grid (Bridal, Wedding, Engagement, Festival) */}
      <section className="section seo-services" id="services">
        <motion.div {...reveal}>
          <p className="eyebrow">MEHNDI SERVICES IN BANGALORE</p>
          <h2>
            Tailored mehendi offerings
            <br />
            <em>for every occasion.</em>
          </h2>
        </motion.div>

        <div className="seo-services-grid">
          {/* Bridal Mehndi */}
          <motion.article className="seo-service-card" {...reveal}>
            <div className="seo-card-img">
              <img src="/images/bridal-mehndi-artist-bangalore-1.jpeg" alt="Bridal Mehndi Artist in Bangalore" loading="lazy" />
            </div>
            <div className="seo-card-content">
              <span className="eyebrow">BRIDAL SPECIALIST</span>
              <h3>Bridal Mehndi</h3>
              <p>
                Intricate bridal mehendi designs in Bangalore featuring traditional figures, peacock motifs, and customized wedding details.
              </p>
              <p className="starting-price">Starting from ₹4,000</p>
              <div className="seo-card-actions">
                <Link className="button" to="/book">
                  Book Your Mehndi <ArrowUpRight size={15} />
                </Link>
                <Link className="text-link" to="/designs/bridal">
                  Explore Bridal Designs <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Wedding & Guest Mehndi */}
          <motion.article className="seo-service-card" {...reveal}>
            <div className="seo-card-img">
              <img src="/images/arabic-mehndi-design-bangalore.jpeg" alt="Wedding Mehndi Artist in Bangalore" loading="lazy" />
            </div>
            <div className="seo-card-content">
              <span className="eyebrow">WEDDING & GUESTS</span>
              <h3>Family & Guest Mehndi</h3>
              <p>
                Beautiful and affordable mehendi designs in Bangalore for family members, relatives, and wedding guests.
              </p>
              <p className="starting-price">Starting from ₹400</p>
              <div className="seo-card-actions">
                <Link className="button" to="/book">
                  Book Your Mehndi <ArrowUpRight size={15} />
                </Link>
                <Link className="text-link" to="/designs/relatives">
                  Explore Guest Designs <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Engagement Mehndi */}
          <motion.article className="seo-service-card" {...reveal}>
            <div className="seo-card-img">
              <img src="/images/best-mehndi-artist-bangalore-carousel-1.jpeg" alt="Engagement Mehndi Artist in Bangalore" loading="lazy" />
            </div>
            <div className="seo-card-content">
              <span className="eyebrow">ENGAGEMENT CEREMONY</span>
              <h3>Engagement Mehndi</h3>
              <p>
                Graceful engagement mehendi designs near you for your special pre-wedding celebration.
              </p>
              <p className="starting-price">Starting from ₹4,000</p>
              <div className="seo-card-actions">
                <Link className="button" to="/book">
                  Book Your Mehndi <ArrowUpRight size={15} />
                </Link>
                <Link className="text-link" to="/designs/engagement">
                  Explore Engagement Designs <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Festival Mehndi */}
          <motion.article className="seo-service-card" {...reveal}>
            <div className="seo-card-img">
              <img src="/images/festival-mehndi-design-bangalore.jpeg" alt="Festival Mehndi Artist in Bangalore" loading="lazy" />
            </div>
            <div className="seo-card-content">
              <span className="eyebrow">FESTIVALS & CELEBRATIONS</span>
              <h3>Festival Mehndi</h3>
              <p>
                Affordable mehendi designs for Karwa Chauth, Teej, Diwali, and festive events across Bangalore.
              </p>
              <p className="starting-price">Starting from ₹400</p>
              <div className="seo-card-actions">
                <Link className="button" to="/book">
                  Book Your Mehndi <ArrowUpRight size={15} />
                </Link>
                <Link className="text-link" to="/designs/festival">
                  Explore Festival Designs <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Existing Mehndi Gallery */}
      <Gallery />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Actual Bangalore Service Areas */}
      <Areas />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Banner */}
      <section className="section seo-cta-banner">
        <motion.div {...reveal}>
          <p className="eyebrow">BOOK YOUR APPOINTMENT</p>
          <h2>
            Ready to book the best mehendi
            <br />
            <em>artist in Bangalore?</em>
          </h2>
          <p className="body-copy">
            Tell us your event date and location to secure your appointment today.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/book">
              Book Your Mehndi <ArrowUpRight size={15} />
            </Link>
            <a
              className="button ghost"
              href={getWhatsAppUrl("Hi Sumit, I would like to book a mehndi appointment in Bangalore.")}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <MessageCircle size={15} />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs/:slug" element={<DesignsPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/mehndi-artist-bangalore" element={<MehndiArtistBangalorePage />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
