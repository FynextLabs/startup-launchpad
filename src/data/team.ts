import t1 from "@/assets/team-1-us.png";
import t2 from "@/assets/team-2-aus.png";
import t3 from "@/assets/team-3-lk.png";
import t4 from "@/assets/team-4-in.png";
import t5 from "@/assets/team-5-nl.png";
import t6 from "@/assets/team-6-br.png";
import t7 from "@/assets/team-7-ca.png";
import t8 from "@/assets/team-8-in-pm.png";

export type Member = {
  name: string;
  title: string;
  location: string;
  flag: string;
  experience: string;
  bio: string;
  scars: string;
  photo: string;
};

export const team: Member[] = [
  {
    name: "Jake Morrison",
    title: "Co-founder · Full Stack Lead",
    location: "Austin, USA",
    flag: "🇺🇸",
    experience: "12 years",
    bio: "Started coding in his teens, shipped his first SaaS at 22. Loves clean APIs, boring infra and very early mornings.",
    scars: "Burned through $40k of personal savings on a music-tech startup that ran out of runway 3 months before product-market fit.",
    photo: t1,
  },
  {
    name: "Chloe Bennett",
    title: "Product Designer",
    location: "Melbourne, Australia",
    flag: "🇦🇺",
    experience: "9 years",
    bio: "Designs friendly interfaces founders can actually maintain. Half UX nerd, half illustrator.",
    scars: "Co-founded a wellness app that won design awards but couldn't crack paid acquisition. Shut down after 18 months.",
    photo: t2,
  },
  {
    name: "Dinesh Perera",
    title: "Backend Engineer",
    location: "Colombo, Sri Lanka",
    flag: "🇱🇰",
    experience: "10 years",
    bio: "Postgres whisperer. Builds the kind of in-house tooling that keeps cloud bills low and founders sane.",
    scars: "Built a marketplace MVP for a friend's startup — beautiful tech, zero customers. Learned distribution > stack.",
    photo: t3,
  },
  {
    name: "Aanya Kapoor",
    title: "Frontend Engineer",
    location: "Bengaluru, India",
    flag: "🇮🇳",
    experience: "7 years",
    bio: "Turns Figma chaos into pixel-tight React. Cares deeply about accessibility and tiny micro-interactions.",
    scars: "Tried bootstrapping an edtech tool through college. It taught 200 students and exactly zero paying ones.",
    photo: t4,
  },
  {
    name: "Lars van Dijk",
    title: "DevOps & Infra",
    location: "Amsterdam, Netherlands",
    flag: "🇳🇱",
    experience: "15 years",
    bio: "Has run more pagers than he'd like to admit. Obsessed with cutting cloud costs without cutting corners.",
    scars: "Was CTO of a logistics startup that burned through a Series A in 14 months. Still has the Slack notifications PTSD.",
    photo: t5,
  },
  {
    name: "Camila Souza",
    title: "Growth & Analytics",
    location: "São Paulo, Brazil",
    flag: "🇧🇷",
    experience: "8 years",
    bio: "Lives in spreadsheets and experiment dashboards. Helps founders find which knobs actually move the needle.",
    scars: "Ran growth at a fintech that crashed during a regulation change. Learned that timing eats strategy for breakfast.",
    photo: t6,
  },
  {
    name: "Ryan Caldwell",
    title: "Mobile & QA",
    location: "Toronto, Canada",
    flag: "🇨🇦",
    experience: "6 years",
    bio: "Ships React Native apps that don't crash on day one. Will absolutely test that weird edge case.",
    scars: "Solo-launched a habit tracker. Got 50k downloads, $0 revenue. Great resume bullet, terrible business.",
    photo: t7,
  },
  {
    name: "Humphrey Rawat",
    title: "Project Manager · The Glue",
    location: "Uttarakhand, India 🏔️",
    flag: "🇮🇳",
    experience: "11 years",
    bio: "Runs the whole show from a quiet town in the Himalayan mountains of Uttarakhand. The first person you'll talk to — he turns your messy idea into a clear plan, then keeps the team shipping. Famous for replying faster than your IDE autocompletes.",
    scars: "Founded a travel-tech startup that ran out of cash right before tourist season. The pivot, the layoffs, the founder loneliness — he's lived all of it. That's exactly why he started suggesting we team up to help others avoid the same potholes.",
    photo: t8,
  },
];
