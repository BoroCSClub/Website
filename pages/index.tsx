import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { motion, animate } from "framer-motion";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FocusCards } from "@/components/ui/focus-cards";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useSession, signIn, signOut } from "next-auth/react";
import { FlipWords } from "@/components/ui/flip-words";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/autocomplete";
import { useRouter } from "next/router";
const fs = require("fs");
const path = require("path");
{
  /* 
  TODO:
    Add a secret game on this website along with a cyber security (CTF) challenge
    Maybe do the Student projects also in Markdown to make it simple and easier to manange and write less code that way
*/
}

type RESOURCES = {
  AppDevelopment: string[];
  WebsiteDevelopment: string[];
  GameDevelopment: string[];
  Cybersecurity: string[];
  CompetitiveProgramming: string[];
  ArtificialIntelligence: string[];
};

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const [resources, setResources] = useState<RESOURCES>({
    AppDevelopment: [],
    WebsiteDevelopment: [],
    GameDevelopment: [],
    Cybersecurity: [],
    CompetitiveProgramming: [],
    ArtificialIntelligence: [],
  });

  const RESOURCES: {
    AppDevelopment: string[];
    WebsiteDevelopment: string[];
    GameDevelopment: string[];
    Cybersecurity: string[];
    CompetitiveProgramming: string[];
    ArtificialIntelligence: string[];
  } = {
    AppDevelopment: [],
    WebsiteDevelopment: [],
    GameDevelopment: [],
    Cybersecurity: [],
    CompetitiveProgramming: [],
    ArtificialIntelligence: [],
  };

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("/api/resources");
        const data: RESOURCES = await response.json();
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  function loadResource(filename: string, subteam: string) {
    router.push(
      `http://localhost:3000/Resources/${subteam}/${filename
        .replace(".mdx", "")
        .replace(" ", "")}`
    );
  }

  const navItems = [
    {
      title: "Home",
      href: "#",
      //Replace with CS Club Logo
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      title: "Resources",
      href: "#Resources",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
    {
      title: "Contact",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];

  const words = [
    {
      text: "HHS",
      className: "text-[--platinum]",
    },
    {
      text: "Computer",
      className: "text-[--platinum]",
    },
    {
      text: "Science",
      className: "text-[--platinum]",
    },
    {
      text: "Club.",
      className: "text-[--periwinkle]",
    },
  ];

  const nouns = [
    "Ideas",
    "Innovations",
    "Creativity",
    "Inspiration",
    "Ambitions",
    "Designs",
    "Passion",
    "Possibilities",
  ];

  const images = [
    "https://tse2.mm.bing.net/th?id=OIG3.2DwNx4cdNg4FIwqHgich&pid=ImgGn", // Competitve Programming
    "https://tse1.mm.bing.net/th?id=OIG4.l61AZ_DbIIHF1DgCSros&pid=ImgGn", // App Dev
    "https://tse3.mm.bing.net/th?id=OIG1.qpmQgUNDoHuuATMHWM7w&pid=ImgGn", // Cyber security
    "https://tse4.mm.bing.net/th?id=OIG4.QzdhG4jxbK0myMxuj7tr&pid=ImgGn", // Game Dev
    "https://tse2.mm.bing.net/th?id=OIG3.HH_nzKP4jH11b0q7AcRo&pid=ImgGn", // Web Dev
    "https://tse4.mm.bing.net/th?id=OIG3.OBsW.s.Gt5hEPUGTQ3cK&pid=ImgGn", // A.I.
  ];

  const about = [
    {
      title: "Mission",
      text: "At the HHS Computer Science Club, our mission is to empower students with the skills, knowledge, and passion needed to excel in the world of technology. We believe in learning by doing, and we provide a collaborative environment where students can come together to explore various fields in computer science, share ideas, and create impactful projects.",
    },
    {
      title: "Who We Are",
      text: "We are a diverse and driven group of students from varying backgrounds and levels of experience, united by a shared passion for computer science. Whether you're a veteran coder or just starting your journey, our club provides a space for everyone to grow, learn, and contribute. We ensure that everyone has a voice and can play an active role within the club.",
    },
    {
      title: "What We Do",
      text: "Our club is organized into six subteams, each focusing on a distinct area of computer science. Members can join any of the subteams that interest them. Each subteam organizes its own workshops, projects, and special events, offering something for everyone.",
    },
    {
      title: "Get Involved",
      text: "Our club is always open to new members! Whether you're looking to explore a specific field of computer science, we encourage you to get in touch with us, attend our meetings, and see where your interests align.",
    },
  ];

  const GameDevSubteamInfo = () => {
    return (
      <>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Many people love playing video games because it's fun, but have
              you ever wondered about making your career in game development?
            </span>{" "}
            A game developer has several roles, including developing the concept
            for the game or working to create different aspects of the game. You
            will work directly with code in order to program the game. In
            addition to creating game content and test the game mechanics.
          </p>
        </div>
      </>
    );
  };

  const CybersecuritySubteamInfo = () => {
    return (
      <>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Important introductory hook.
            </span>{" "}
            What you will be doing within the subteam.
          </p>
        </div>
      </>
    );
  };

  const AppDevSubteamInfo = () => {
    return (
      <>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Important introductory hook.
            </span>{" "}
            What you will be doing within the subteam.
          </p>
        </div>
      </>
    );
  };

  const CompetitiveProgrammingSubteamInfo = () => {
    return (
      <>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Important introductory hook.
            </span>{" "}
            What you will be doing within the subteam.
          </p>
        </div>
      </>
    );
  };

  const WebDevSubteamInfo = () => {
    return (
      <>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Important introductory hook.
            </span>{" "}
            What you will be doing within the subteam.
          </p>
        </div>
      </>
    );
  };

  const AiSubteamInfo = () => {
    return (
      <>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Important introductory hook.
            </span>{" "}
            What you will be doing within the subteam.
          </p>
        </div>
      </>
    );
  };

  const subteamInfo = [
    {
      category: "Cybersecurity",
      title: "Protect from scammers and cyber criminals.",
      src: "https://i0.wp.com/www.esearchadvisors.com/blog/wp-content/uploads/2020/02/giphy-5.cyber-security.gif?fit=480%2C360&ssl=1",
      content: <CybersecuritySubteamInfo />,
    },
    {
      category: "Game Development",
      title: "Create the kind of games you enjoy playing.",
      src: "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/5/5967714a5c33ce756eddf38220fccb937064e59c.gif",
      content: <GameDevSubteamInfo />,
    },
    {
      category: "App Development",
      title: "Build apps that fit in your pocket.",
      src: "https://hiddenlogics.com/wp-content/uploads/2020/03/iphone-development.gif",
      content: <AppDevSubteamInfo />,
    },

    {
      category: "Competitive Programming",
      title: "Learn to be efficient and write effective code.",
      src: "https://media.licdn.com/dms/image/C4E12AQGqXjmnyuB71g/article-cover_image-shrink_600_2000/0/1624433257039?e=2147483647&v=beta&t=Xm3dRN6delJi5D3Hl8l8ZYJYvUuSvuPzntU5W3KV6dg",
      content: <CompetitiveProgrammingSubteamInfo />,
    },
    {
      category: "Website Development",
      title: "Create websites that connect the world.",
      src: "https://msoft.af/wp-content/uploads/2023/12/software-1.gif",
      content: <WebDevSubteamInfo />,
    },
    {
      category: "Artificial Intelligence",
      title: "Automate repetitive and tedious tasks.",
      src: "https://miro.medium.com/v2/resize:fit:1320/0*fdExI6MR2LFns1uw.gif",
      content: <AiSubteamInfo />,
    },
  ];

  const GameDevResource = () => {
    return (
      <>
        <div className="bg-[--delftblue] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div className="flex flex-row justify-center">
            <Autocomplete
              label="Game Dev Resources"
              placeholder="Search for a resource"
              defaultSelectedKey={"cat"}
              className="max-w-xs"
            >
              {resources?.GameDevelopment?.map((resource) => (
                <AutocompleteItem
                  onClick={() => loadResource(resource, "GameDevelopment")}
                  key={resource}
                  value={resource.replace(".mdx", "")}
                >
                  {resource.replace(".mdx", "")}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
      </>
    );
  };

  const CybersecurityResource = () => {
    return (
      <>
        <div className="bg-[--delftblue] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div className="flex flex-row justify-center">
            <Autocomplete
              label="Cybersecurity Resources"
              placeholder="Search for a resource"
              defaultSelectedKey={"cat"}
              className="max-w-xs"
            >
              {resources?.Cybersecurity?.map((resource) => (
                <AutocompleteItem
                  onClick={() => loadResource(resource, "Cybersecurity")}
                  key={resource}
                  value={resource.replace(".mdx", "")}
                >
                  {resource.replace(".mdx", "")}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
      </>
    );
  };

  const AppDevelopmentResource = () => {
    return (
      <>
        <div className="bg-[--delftblue] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div className="flex flex-row justify-center">
            <Autocomplete
              label="App Development Resources"
              placeholder="Search for a resource"
              defaultSelectedKey={"cat"}
              className="max-w-xs"
            >
              {resources?.AppDevelopment?.map((resource) => (
                <AutocompleteItem
                  onClick={() => loadResource(resource, "AppDevelopment")}
                  key={resource}
                  value={resource.replace(".mdx", "")}
                >
                  {resource.replace(".mdx", "")}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
      </>
    );
  };

  const CompetitiveProgrammingResource = () => {
    return (
      <>
        <div className="bg-[--delftblue] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div className="flex flex-row justify-center">
            <Autocomplete
              label="Competitive Programming Resources"
              placeholder="Search for a resource"
              defaultSelectedKey={"cat"}
              className="max-w-xs"
            >
              {resources?.CompetitiveProgramming?.map((resource) => (
                <AutocompleteItem
                  onClick={() =>
                    loadResource(resource, "CompetitiveProgramming")
                  }
                  key={resource}
                  value={resource.replace(".mdx", "")}
                >
                  {resource.replace(".mdx", "")}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
      </>
    );
  };

  const WebsiteDevelopmentResource = () => {
    return (
      <>
        <div className="bg-[--delftblue] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div className="flex flex-row justify-center">
            <Autocomplete
              label="Website Development Resources"
              placeholder="Search for a resource"
              defaultSelectedKey={"cat"}
              className="max-w-xs"
            >
              {resources?.WebsiteDevelopment?.map((resource) => (
                <AutocompleteItem
                  onClick={() => loadResource(resource, "WebsiteDevelopment")}
                  key={resource}
                  value={resource.replace(".mdx", "")}
                >
                  {resource.replace(".mdx", "")}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
      </>
    );
  };

  const ArtificialIntelligenceResource = () => {
    return (
      <>
        <div className="bg-[--delftblue] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div className="flex flex-row justify-center">
            <Autocomplete
              label="Artificial Intelligence Resources"
              placeholder="Search for a resource"
              defaultSelectedKey={"cat"}
              className="max-w-xs"
            >
              {resources?.ArtificialIntelligence?.map((resource) => (
                <AutocompleteItem
                  onClick={() =>
                    loadResource(resource, "ArtificialIntelligence")
                  }
                  key={resource}
                  value={resource.replace(".mdx", "")}
                >
                  {resource.replace(".mdx", "")}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
        </div>
      </>
    );
  };

  const resourceInfo = [
    {
      category: "Cybersecurity",
      title: "Learn more about Cybersecurity.",
      src: "/AddImage.jpg",
      content: <CybersecurityResource />,
    },
    {
      category: "Game Development",
      title: "Need help learning game development?",
      src: "/AddImage.jpg",
      content: <GameDevResource />,
    },
    {
      category: "App Development",
      title: "Need a hand in learning about App Development?",
      src: "/AddImage.jpg",
      content: <AppDevelopmentResource />,
    },

    {
      category: "Competitive Programming",
      title: "Need strategies to excel in Competitive Programming?",
      src: "/AddImage.jpg",
      content: <CompetitiveProgrammingResource />,
    },
    {
      category: "Website Development",
      title: "Need guidance on Web Development?",
      src: "/AddImage.jpg",
      content: <WebsiteDevelopmentResource />,
    },
    {
      category: "Artificial Intelligence",
      title: "Curious about understanding Artificial Intelligence?",
      src: "/AddImage.jpg",
      content: <ArtificialIntelligenceResource />,
    },
  ];

  const subteamCards = subteamInfo.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const resourceCards = resourceInfo.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const projects = [
    {
      title: "Student Project",
      src: "/AddImage.jpg",
    },
    {
      title: "Student Project",
      src: "/AddImage.jpg",
    },
    {
      title: "Student Project",
      src: "/AddImage.jpg",
    },
    {
      title: "Student Project",
      src: "/AddImage.jpg",
    },
    {
      title: "Student Project",
      src: "/AddImage.jpg",
    },
    {
      title: "Student Project",
      src: "/AddImage.jpg",
    },
  ];

  if (session) {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[--delftblue] ${poppins.className}`}
      >
        <div className="relative items-center ">
          <FloatingDock
            desktopClassName="fixed bottom-0 left-1/2 mb-5 transform -translate-x-1/2 p-3 max-w-fit z-50 bg-[--periwinkle]"
            items={navItems}
          />
          <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <TypewriterEffectSmooth words={words} />
            <p className="text-[--pompnpower] dark:text-neutral-200 mb-5 text-xl   ">
              Where
              <FlipWords words={nouns} />
              Turn Into Code. {RESOURCES["GameDevelopment"][0]}
            </p>

            {/* About Button */}
            <div className="flex flex-col md:flex-row">
              <Modal>
                <ModalTrigger className="w-40 h-10 rounded-xl bg-[--pompnpower] text-[--gunmetal] border border-[--gunmetal] mr-4  text-sm">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    About
                  </span>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent className="bg-[--delftblue]">
                    <h4 className="text-lg md:text-2xl text-[--platinum] dark:text-neutral-100 font-bold text-center mb-8">
                      {" "}
                      <span className="px-1 py-0.5 rounded-md bg-[--pompnpower] dark:bg-neutral-800 dark:border-[--gunmetal] border border-[--gunmetal]">
                        About
                      </span>{" "}
                      HHS Computer Science Club! 💻
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-[--periwinkle] dark:bg-neutral-800 dark:border-neutral-700 border border-[--pompnpower] flex-shrink-0 overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt="bali images"
                            width="300"
                            height="300"
                            className="rounded-lg h-20 w-20 md:h-32 md:w-32 object-cover flex-shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-xl mx-auto text-[--platinum]">
                      <Accordion
                        variant="bordered"
                        className="text-[--platinum]"
                      >
                        {about.map((content, idx) => (
                          <AccordionItem
                            className="text-[--platinum]"
                            key={idx} // Use idx for a unique key
                            aria-label={`${content.title}`} // Dynamic aria-label
                            title={`${content.title}`} // Dynamic title
                          >
                            {content.text}
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
              <button
                className="w-40 h-10 rounded-xl bg-[--periwinkle] text-[--gunmetal] border border-[--gunmetal]  text-sm"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <h2 className="max-w-7xl text-xl md:text-5xl font-bold text-[--periwinkle] dark:text-neutral-200 font-sans">
            Get to know your Subteam.
          </h2>
          <Carousel items={subteamCards} />
        </div>
        <div className="w-full h-full">
          <h2 className="max-w-7xl mb-10 text-xl md:text-5xl font-bold text-[--periwinkle] dark:text-neutral-200 font-sans">
            Student Projects.
          </h2>
          <FocusCards cards={projects} />
        </div>
        <div className="w-full h-full">
          <h2
            id="Resources"
            className="max-w-7xl mt-10  text-xl md:text-5xl font-bold text-[--periwinkle] dark:text-neutral-200 font-sans"
          >
            Resources.
          </h2>
          <Carousel items={resourceCards} />
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[--delftblue] ${poppins.className}`}
      >
        <div className="relative items-center ">
          <FloatingDock
            desktopClassName="fixed bottom-0 left-1/2 mb-5 transform -translate-x-1/2 p-3 max-w-fit z-50 bg-[--periwinkle]"
            items={navItems}
          />
          <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-row">
              <p className="text-[--pompnpower] dark:text-neutral-200 mb-5 text-xl   ">
                Where
              </p>
              <FlipWords className="text-xl" words={nouns} />
              <p className="text-[--pompnpower] dark:text-neutral-200 mb-5 text-xl   ">
                Turn Into Code.
              </p>
            </div>

            {/* About Button */}
            <div className="flex flex-col md:flex-row">
              <Modal>
                <ModalTrigger className="w-40 h-10 rounded-xl bg-[--pompnpower] text-[--gunmetal] border border-[--gunmetal] mr-4  text-sm">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    About
                  </span>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent className="bg-[--delftblue]">
                    <h4 className="text-lg md:text-2xl text-[--platinum] dark:text-neutral-100 font-bold text-center mb-8">
                      {" "}
                      <span className="px-1 py-0.5 rounded-md bg-[--pompnpower] dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        About
                      </span>{" "}
                      HHS Computer Science Club! 💻
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-[--periwinkle] dark:bg-neutral-800 dark:border-neutral-700 border border-[--pompnpower] flex-shrink-0 overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt="bali images"
                            width="300"
                            height="300"
                            className="rounded-lg h-20 w-20 md:h-32 md:w-32 object-cover flex-shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-xl mx-auto text-[--platinum]">
                      <Accordion
                        variant="bordered"
                        className="text-[--platinum]"
                      >
                        {about.map((content, idx) => (
                          <AccordionItem
                            className="text-[--platinum]"
                            key={idx} // Use idx for a unique key
                            aria-label={`${content.title}`} // Dynamic aria-label
                            title={`${content.title}`} // Dynamic title
                          >
                            {content.text}
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
              <button
                className="w-40 h-10 rounded-xl bg-[--periwinkle] text-[--gunmetal] border border-[--gunmetal]  text-sm"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <h2 className="max-w-7xl text-xl md:text-5xl font-bold text-[--periwinkle] dark:text-neutral-200 font-sans">
            Get to know your Subteam.
          </h2>
          <Carousel items={subteamCards} />
        </div>
        <div className="w-full h-full">
          <h2 className="max-w-7xl mb-10 text-xl md:text-5xl font-bold text-[--periwinkle] dark:text-neutral-200 font-sans">
            Student Projects.
          </h2>
          <FocusCards cards={projects} />
        </div>
        <div className="w-full h-full">
          <h2
            id="Resources"
            className="max-w-7xl mt-10  text-xl md:text-5xl font-bold text-[--periwinkle] dark:text-neutral-200 font-sans"
          >
            Resources.
          </h2>
          <Carousel items={resourceCards} />
        </div>
      </div>
    );
  }
}
