const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/wordpress.png",
  },
  {
    imgPath: "/images/logos/sql.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/figma.png",
  },
  {
    imgPath: "/images/logos/html.png",
  },
  {
    imgPath: "/images/logos/css.png",
  },
  {
    imgPath: "/images/logos/js.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Project Timeline",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react1.png",
  },
  {
    name: "Wordpress",
    imgPath: "/images/logos/wordpres.png",
  },
  {
    name: "Javascript",
    imgPath: "/images/logos/javascript.png",
  },
  {
    name: "Flutter",
    imgPath: "/images/logos/flutter.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Wordpress",
    modelPath: "/models/wordpress.glb",
    scale: 0.15,
    rotation: [-5, 0, 0.15],
  },
  {
    name: "JavaScript",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Threejs",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "< . . . />",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Frontend Developer",
    date: "Present",
    responsibilities: [
      "Transform UI/UX designs into responsive, interactive web pages using HTML, CSS, and JavaScript.",
      "Collaborate with designers and other developers to implement clean, user-friendly interfaces.",
      "Utilize modern frameworks and custom code to solve layout, responsiveness, and accessibility issues.",
    ],
  },
  {
    review: "Donna brought creativity and technical expertise to the team, significantly improving our frontend performance. Her work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer",
    date: "Present",
    responsibilities: [
      "Build full-featured websites by integrating both front-end visuals and back-end functionality.",
      "Maintain website performance, responsiveness, and compatibility through testing and optimization.",
      "Develop structured, semantic code that supports SEO and improves overall site usability.",
    ],
  },
  {
    review: "Donna’s work brought a high level of quality and efficiency. She delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "Present",
    responsibilities: [
      "Learn React fundamentals such as components, props, and state to build interactive user interfaces..",
      "Practice creating reusable and dynamic components to make the code more efficient and modular.",
      "Explore the use of JSX and functional components to render UI elements and respond to user interactions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "...",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "...",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "...",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "...",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "...",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "...",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url : "https://github.com/dpval",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/dpval",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};