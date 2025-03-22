"use client";
import { ReactElement, useEffect, useState } from "react";
import { Moon, Sun, FileLock, Zap, Smile, User } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface WhyCardData {
  title: string;
  icon: ReactElement;
  description: string;
}

interface ReviewCardData {
  title: string;
  img: ReactElement;
  description: string;
}

const whyCards: WhyCardData[] = [
  {
    title: "Fast & Reliable",
    icon: <Zap className="size-10 text-white" />,
    description: "Swift is built with performance in mind, ensuring you can manage your server without delays."
  },
  {
    title: "Secure",
    icon: <FileLock className="size-10 text-white" />,
    description: "Our system is designed with top-tier security features to protect your data and server."
  },
  {
    title: "Easy to Use",
    icon: <Smile className="size-10 text-white" />,
    description: "A user-friendly interface makes managing your server intuitive and efficient."
  }
];

const reviewsCards: ReviewCardData[] = [
  {
    title: "John Doe",
    img: <User className="size-10 text-white" />,
    description: "\"Swift is the best server management tool I have ever used. It's fast, reliable, and easy to use.\""
  },
  {
    title: "Jane Smith",
    img: <User className="size-10 text-white" />,
    description: "\"An incredible tool that has saved me countless hours. Highly recommended!\""
  },
  {
    title: "Alex Johnson",
    img: <User className="size-10 text-white" />,
    description: "\"Managing my server has never been easier. Swift is a game-changer!\""
  }
];

export default function Home() {
  return (
    <div className="relative flex h-full w-screen flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 w-full max-w-6xl">
        <Section title="Let's start managing your server easier, not harder" subtitle="With Swift, you will have access to many features that help you manage your server easier and faster." />
        <CardsSection title="Why Swift?" cards={whyCards} subtitle="Discover the key benefits of using Swift for your server management." />
        <CardsSection title="Reviews" cards={reviewsCards} subtitle="See what our users have to say about Swift." />

        <section className="mt-20 text-center w-full">
          <h2 className="text-3xl font-bold">Affiliation Program</h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Join our affiliation program and unlock exclusive commands and features for your server.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-6 w-60 rounded-lg bg-black px-6 py-2 text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Contact Us
          </motion.button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const Section = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="h-screen flex flex-col justify-center text-center">
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-6xl font-bold"
    >
      {title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="text-lg text-neutral-600 dark:text-neutral-400 mt-4 max-w-xl mx-auto"
    >
      {subtitle}
    </motion.p>
    <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="rounded-lg bg-primary px-6 py-2 text-primary-foreground transition hover:bg-opacity-80 cursor-pointer"
      >
        Documentation
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="rounded-lg bg-secondary px-6 py-2 text-secondary-foreground transition hover:bg-opacity-80 cursor-pointer"
      >
        Contact Us
      </motion.button>
    </div>
  </section>
);

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between border-b border-neutral-200 px-4 py-4 bg-white dark:bg-black dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <h1 className="text-base font-bold md:text-2xl">Swift</h1>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 transition">
          {darkMode ? <Sun className="size-6 text-yellow-400" /> : <Moon className="size-6 text-gray-800 dark:text-gray-200" />}
        </button>
        <button className="w-24 rounded-lg bg-black px-6 py-2 text-white transition hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Login
        </button>
      </div>
    </nav>
  );
};

const CardsSection = ({ title, cards, subtitle }: { title: string; cards: (WhyCardData | ReviewCardData)[]; subtitle: string }) => (
  <section className="mt-20 text-center w-full">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">{subtitle}</p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        >
          <CardSpotlight className="h-96 w-96 flex flex-col items-center justify-center gap-4">
            {"icon" in card && card.icon || "img" in card && card.img}
            <p className="text-xl font-bold relative z-20 mt-2 text-white">{card.title}</p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">{card.description}</p>
          </CardSpotlight>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-20 w-full text-center py-6 border-t border-neutral-200 dark:border-neutral-800">
    <p>&copy; 2025 Swift. All rights reserved.</p>
    <a
      href="https://discord.gg/zyj2KS4GAH"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 dark:text-blue-400 mt-2"
    >
      Join our Discord
    </a>
  </footer>
);
