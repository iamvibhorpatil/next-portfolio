import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vibhor Patil",
  initials: "VSP",
  url: "https://iamvibhor.online/",
  location: "Maharashtra, India",
  locationLink: "https://maps.app.goo.gl/4LZPR2GZNr1opywr6",
  description:
    "I enjoy helping people bring their ideas to life. Always eager to learn, grow. Experienced in Vuejs and PHP(Laravel)",
  summary:
    "Hi, I’m Vibhor Patil, a Full Stack Laravel Developer based in Nagpur, Maharashtra. With expertise in HTML, CSS, JavaScript,Vuejs, PHP (Laravel), and MySQL, I’m passionate about building innovative web solutions. I've worked on multiple projects, enhancing both my technical and collaboration skills. My goal is to keep growing as a developer and stay ahead of emerging technologies.",
  avatarUrl: "/me.jpg",
  skills: [
    "Bootstrap",
    "Tailwind",
    "Javascript",
    "Vuejs",
    "Ajax",
    "PHP",
    "MySQL",
    "AWS",
    "Laravel",
    "Restful API",
    "Touch Typing",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vibhorpatil808@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamvibhorpatil",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vibhorpatil/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iaminros",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Yellow Metal Fintech Pvt Ltd",
      href: "https://www.yellowmetal.co/",
      badges: [],
      location: "Bangalore, Karnataka",
      title: "Backend Engineer",
      logoUrl: "/ym_logo2.svg",
      start: "March 2025",
      end: "Present",
      description: "Contributing to the digital infrastructure of a fast-growing fintech startup delivering doorstep gold loans across rural India. I design and develop scalable backend systems using Laravel, Vue.js, and AWS, playing a key role in building tech that reaches the grassroots.",
    },
    {
      company: "EMT Times Pvt Ltd",
      href: "",
      badges: [],
      location: "Nagpur, Maharashtra",
      title: "Full Stack Developer",
      logoUrl: "/emt_logo.png",
      start: "July 2024",
      end: "February 2025",
      description: "",
    },
    {
      company: "ICEICO Technologies Pvt Ltd",
      href: "https://iceico.in/",
      badges: [],
      location: "Nagpur, Maharashtra",
      title: "Full Stack Developer",
      logoUrl: "/iceico_logo.jpg",
      start: "March 2023",
      end: "June 2024",
      description:
        "I implemented seamless communication between the front-end and back-end by developing backend functionality using PHP and MySQL. I proficiently worked on Laravel projects and RESTful APIs, contributing to diverse web development initiatives.",
    },
    {
      company: "ICEICO Technologies Pvt Ltd",
      href: "https://iceico.in/",
      badges: [],
      location: "Nagpur, Maharashtra",
      title: "Web Developer (Intern)",
      logoUrl: "/iceico_logo.jpg",
      start: "September 2022",
      end: "February 2023",
      description:
        "I learned cool coding skills like JavaScript, PHP, and SQL, and even used them in various projects. I also became familiar with Git, a powerful tool for managing code. It was a great experience to put my knowledge into practice.",
    },
  ],
  education: [
    {
      school: "Rashtrasant Tukadoji Maharaj Nagpur University",
      href: "https://www.nagpuruniversity.ac.in/",
      degree: "Master's Degree of Computer Science",
      logoUrl: "/rtmnu.jpg",
      start: "2025",
      end: "2023",
    },
    {
      school: "Rashtrasant Tukadoji Maharaj Nagpur University",
      href: "https://www.nagpuruniversity.ac.in/",
      degree: "Bachelor's Degree of Information Technology",
      logoUrl: "/rtmnu.jpg",
      start: "2022",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "EMT Times",
      href: "https://emttimes.com/",
      dates: "",
      active: true,
      description:
        "Under Construction",
      technologies: [
        "Bootstrap",
        "Javascript",
        "Animate CSS",
        "Laravel",
        "Sweet Alert",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://emttimes.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/web/emt.mp4",
    },
    {
      title: "Shopping & Shoppers",
      href: "https://shoppingnshoppers.com/",
      dates: "",
      active: true,
      description: "Under Construction",
      technologies: [
        "Bootstrap",
        "Javascript",
        "Animate CSS",
        "Laravel",
        "Sweet Alert",
        "RazorPay",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://shoppingnshoppers.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/web/shopping.mp4",
    },
    {
      title: "Vindhyeshvari Urban Nidhi Limited",
      href: "https://vunl.co.in/",
      dates: "",
      active: true,
      description:
        "Led the end-to-end development of the Vindhyeshvari Urban Nidhi website using Laravel and Bootstrap, incorporating a binary matrix tree structure in the admin panel for efficient MLM functionality.",
      technologies: [
        "Bootstrap",
        "Javascript",
        "Animate CSS",
        "JQuery",
        "Ajax",
        "PHP",
        "Laravel",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://vunl.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/web/vunl.mp4",
    },
    {
      title: "Apni Prajahit Party",
      href: "https://apniprajahitparty.org/",
      dates: "",
      active: true,
      description:
        "I used JavaScript to create dynamic features, MySQL to manage the database, and made sure the website was fully responsive. I also included member registration, improved payment processing, and ID card creation to provide a complete online experience.",
      technologies: [
        "Bootstrap",
        "Javascript",
        "JQuery",
        "Ajax",
        "PHP",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://apniprajahitparty.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/web/app.mp4",
    },
    {
      title: "Raje Dharmarao Arts & Commerce College",
      href: "https://rdcedu.in/",
      dates: "",
      active: true,
      description:
        "Elevated a College website with responsive design, while integrating PHP, MySQL, and Bootstrap to manage staff, academic data, and library information, delivering an outstanding digital experience.",
      technologies: [
        "Bootstrap",
        "Javascript",
        "JQuery",
        "Ajax",
        "PHP",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://rdcedu.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/web/rdc.mp4",
    },
    {
      title: "ICEICO",
      href: "https://iceico.in/",
      dates: "",
      active: true,
      description:
        "I contributed to the development and maintenance of my company's website, leveraging my expertise in web development and design to create a seamless user experience for visitors",
      technologies: [
        "Bootstrap",
        "Javascript",
        "JQuery",
        "Ajax",
        "PHP",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://iceico.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/web/iceico.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
