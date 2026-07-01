import { useEffect, useState } from "react";
import "@/App.css";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Star,
  ChevronDown,
  UtensilsCrossed,
  MessageCircle,
} from "lucide-react";

const PHONE = "tel:+917026600600";
const PHONE_DISPLAY = "+91 70266 00600";
const WHATSAPP = "https://wa.me/917026600600";
const MAPS = "https://maps.google.com/?q=Zaatar+Bengaluru+Bellandur+Suraamy+Plaza";
const INSTA = "https://instagram.com/zaatar.bengaluru";

const DISHES = [
  {
    tag: "Signature Grill",
    name: "Mushakkal Grill Platter",
    desc: "A royal assortment of kebabs, tikkas & grilled meats, chargrilled to smoky perfection.",
    price: "₹1,750",
    img: "https://images.unsplash.com/photo-1771285119408-04cca3b35036?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    tag: "BBQ Favourite",
    name: "BBQ Chicken Mini Platter",
    desc: "Juicy BBQ chicken served with warm pita, creamy hummus & house mayo dip.",
    price: "₹690",
    img: "https://images.pexels.com/photos/32986482/pexels-photo-32986482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    tag: "Arabian Classic",
    name: "Alfaham Dajaj",
    desc: "Authentic Arabian grilled chicken, marinated overnight in secret spices & slow-charred.",
    price: "₹520",
    img: "https://images.unsplash.com/photo-1771285119318-b342c3ecc51c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    tag: "Indian Heart",
    name: "Zaatar Special Biryani",
    desc: "Fragrant long-grain rice layered with tender meat & aromatic Bengaluru-loved spices.",
    price: "₹380",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    tag: "Dessert Dream",
    name: "Kunafa",
    desc: "Golden, crisp pastry soaked in sweet syrup with a molten cheese centre — melts in your mouth.",
    price: "₹280",
    img: "https://images.unsplash.com/photo-1608196699808-7b9132c8bc7c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    tag: "Best Value",
    name: "Unlimited Feast",
    desc: "Endless Arabian & Indian delights — grills, mains, breads & more, all you can eat.",
    price: "₹499",
    unit: "+ GST / person",
    img: "https://images.unsplash.com/photo-1777716003985-68fed08d0c7e?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
];

const GALLERY = [
  { label: "Outdoor Seating", img: "https://images.unsplash.com/photo-1655487817238-69aa04339d33?crop=entropy&cs=srgb&fm=jpg&q=85&w=700" },
  { label: "Arabian Platters", img: "https://images.pexels.com/photos/33233601/pexels-photo-33233601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700" },
  { label: "Grilled to Perfection", img: "https://images.unsplash.com/photo-1771285119318-b342c3ecc51c?crop=entropy&cs=srgb&fm=jpg&q=85&w=700" },
  { label: "Hummus & Pita", img: "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?crop=entropy&cs=srgb&fm=jpg&q=85&w=700" },
  { label: "Biryani Nights", img: "https://images.pexels.com/photos/35539329/pexels-photo-35539329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=700" },
  { label: "Sweet Kunafa", img: "https://images.unsplash.com/photo-1677671862144-1c3e9fcde82b?crop=entropy&cs=srgb&fm=jpg&q=85&w=700" },
];

const REVIEWS = [
  {
    text: "Absolutely delicious — one bite and the whole thing melts in your mouth. BBQ chicken platter with pita is a must!",
    author: "Aarav M.",
  },
  {
    text: "Amazing outdoor seating, friendly staff, and the Alfaham Dajaj is outstanding. Competitive prices for Bangalore.",
    author: "Priya S.",
  },
  {
    text: "Best place for an unlimited Arabian feast in Bellandur. The kunafa is a dream. We keep coming back!",
    author: "Rohan K.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Stars = ({ n = 5 }) => (
  <span className="stars" aria-label={`${n} stars`}>
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
    ))}
  </span>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
      <a href="#top" className="nav-brand" data-testid="nav-brand">
        Zaatar <span>Bengaluru</span>
      </a>
      <div className="nav-links">
        <a href="#about" data-testid="nav-about">About</a>
        <a href="#menu" data-testid="nav-menu">Menu</a>
        <a href="#feast" data-testid="nav-feast">Unlimited Feast</a>
        <a href="#gallery" data-testid="nav-gallery">Gallery</a>
        <a href="#contact" data-testid="nav-contact">Find Us</a>
      </div>
      <a href={PHONE} className="btn btn-gold nav-cta" data-testid="nav-reserve-btn">
        <Phone size={16} /> Reserve
      </a>
    </nav>
  );
};

const Hero = () => (
  <section className="hero" id="top" data-testid="hero-section">
    <div className="container">
      <motion.div
        className="hero-rating"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-testid="hero-rating"
      >
        <Stars n={5} />
        <strong>4.3</strong>
        <span style={{ opacity: 0.75 }}>· 5,100+ Google reviews</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Where <span className="accent">Arabic Flavours</span> Meet Bengaluru Nights
      </motion.h1>

      <motion.p
        className="lead"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        Shawarmas, sizzling grills, biryani & melt-in-your-mouth kunafa — Arabian
        hospitality with an Indian heart, right opposite Microsoft Office, Bellandur.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href={PHONE} className="btn btn-primary" data-testid="hero-reserve-btn">
          <Phone size={18} /> Reserve a Table
        </a>
        <a href="#menu" className="btn btn-outline" data-testid="hero-menu-btn">
          <UtensilsCrossed size={18} /> View Menu
        </a>
      </motion.div>
    </div>
    <a href="#about" className="hero-scroll" data-testid="hero-scroll">
      Scroll
      <ChevronDown size={18} className="animate-bounce" />
    </a>
  </section>
);

const About = () => (
  <section className="about" id="about" data-testid="about-section">
    <div className="container about-grid">
      <motion.div
        className="about-copy"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="eyebrow">Our Story</div>
        <h2 className="section-title">A Restaurant Where Every Platter Tells a Story</h2>
        <p>
          Zaatar brings the warmth of Arabian hospitality and bold, smoky grilled
          flavours to the heart of Bellandur. From fragrant shawarmas to slow-charred
          Alfaham and molten kunafa, every dish is crafted to feel like home — with a
          Bengaluru soul.
        </p>
        <p>
          Rated <strong>4.3★ by over 5,000 diners</strong>, we're the neighbourhood
          favourite for families, office crews and late-night cravings alike.
        </p>
        <div className="about-stats">
          <div className="stat" data-testid="stat-rating">
            <div className="num">4.3★</div>
            <div className="lbl">Google Rating</div>
          </div>
          <div className="stat" data-testid="stat-reviews">
            <div className="num">5,100+</div>
            <div className="lbl">Happy Reviews</div>
          </div>
          <div className="stat" data-testid="stat-feast">
            <div className="num">₹499</div>
            <div className="lbl">Unlimited Feast</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="about-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="https://images.pexels.com/photos/32986482/pexels-photo-32986482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720"
          alt="Zaatar Arabian grill platter"
        />
        <div className="about-badge">
          "One bite and the whole thing melts in your mouth."
        </div>
      </motion.div>
    </div>
  </section>
);

const Menu = () => (
  <section className="menu" id="menu" data-testid="menu-section">
    <div className="container">
      <div className="menu-head">
        <div className="eyebrow">Signature Dishes</div>
        <h2 className="section-title">Flavours You'll Crave</h2>
        <p>
          From royal grill platters to Arabian classics and Bengaluru's favourite
          biryani — here's what everyone's talking about.
        </p>
      </div>
      <div className="dish-grid">
        {DISHES.map((d, i) => (
          <motion.article
            key={d.name}
            className="dish-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            data-testid={`dish-card-${i}`}
          >
            <div className="dish-img">
              <span className="dish-tag">{d.tag}</span>
              <img src={d.img} alt={d.name} loading="lazy" />
            </div>
            <div className="dish-body">
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <div className="dish-price">
                {d.price} {d.unit && <small>{d.unit}</small>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Feast = () => (
  <section className="feast" id="feast" data-testid="feast-section">
    <div className="container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="eyebrow">The Signature Offering</div>
        <h2>Unlimited Arabian Feast</h2>
        <div className="price-pill">
          ₹499 <small>+ GST / person</small>
        </div>
        <p className="sub">
          Endless grills, mains, breads, biryani and more — eat all you can, the
          Arabian way. The best value feast in Bellandur.
        </p>
        <a href={PHONE} className="btn btn-gold" data-testid="feast-book-btn">
          <Phone size={18} /> Book Your Table
        </a>
      </motion.div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="gallery" id="gallery" data-testid="gallery-section">
    <div className="container">
      <div className="gallery-head">
        <div className="eyebrow">The Vibe</div>
        <h2 className="section-title">A Feast for the Senses</h2>
      </div>
      <div className="gallery-grid">
        {GALLERY.map((g, i) => (
          <motion.div
            key={g.label}
            className="gallery-item"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            data-testid={`gallery-item-${i}`}
          >
            <img src={g.img} alt={g.label} loading="lazy" />
            <div className="overlay">
              <span>{g.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="reviews" id="reviews" data-testid="reviews-section">
    <div className="container">
      <div className="reviews-head">
        <div className="eyebrow">Loved by Bengaluru</div>
        <h2 className="section-title">What Our Diners Say</h2>
      </div>
      <div className="review-grid">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={i}
            className="review-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            data-testid={`review-card-${i}`}
          >
            <div className="quote-mark">"</div>
            <Stars n={5} />
            <p>{r.text}</p>
            <div className="author">— {r.author}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact" id="contact" data-testid="contact-section">
    <div className="container">
      <div className="menu-head" style={{ textAlign: "left", margin: "0 0 50px" }}>
        <div className="eyebrow">Find Us</div>
        <h2 className="section-title">Come Say Marhaba</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-row">
            <div className="icon"><MapPin size={20} /></div>
            <div>
              <h4>Location</h4>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" data-testid="contact-address">
                Suraamy Plaza, Palm Ave, Green Glen Layout, Bellandur, Bangalore —
                opposite Microsoft Office
              </a>
            </div>
          </div>
          <div className="info-row">
            <div className="icon"><Phone size={20} /></div>
            <div>
              <h4>Reserve / Call</h4>
              <a href={PHONE} data-testid="contact-phone">{PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="info-row">
            <div className="icon"><Clock size={20} /></div>
            <div>
              <h4>Hours</h4>
              <p>Open daily · Lunch &amp; Dinner · 12:00 PM – 11:30 PM</p>
            </div>
          </div>
          <div className="info-row">
            <div className="icon"><Instagram size={20} /></div>
            <div>
              <h4>Instagram</h4>
              <a href={INSTA} target="_blank" rel="noopener noreferrer" data-testid="contact-instagram">
                @zaatar.bengaluru
              </a>
            </div>
          </div>
          <div className="contact-actions">
            <a href={PHONE} className="btn btn-primary" data-testid="contact-call-btn">
              <Phone size={18} /> Call to Reserve
            </a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-dark" data-testid="contact-directions-btn">
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </div>

        <div className="map-card" data-testid="contact-map">
          <iframe
            title="Zaatar Bengaluru location"
            src="https://www.google.com/maps?q=Zaatar+Bengaluru+Bellandur+Suraamy+Plaza&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer" data-testid="footer">
    <div className="container">
      <div className="footer-brand">Zaatar <span>Bengaluru</span></div>
      <div className="footer-tag">Indo Arabian Restaurant · Bellandur, Bangalore</div>
      <div className="footer-links">
        <a href={PHONE} data-testid="footer-phone"><Phone size={16} /> {PHONE_DISPLAY}</a>
        <a href={INSTA} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram"><Instagram size={16} /> @zaatar.bengaluru</a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" data-testid="footer-maps"><MapPin size={16} /> Google Maps</a>
      </div>
      <div className="footer-copy">© 2024 Zaatar Bengaluru. All rights reserved.</div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="zaatar" data-testid="zaatar-app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Feast />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-fab"
      >
        <MessageCircle size={28} fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}

export default App;
