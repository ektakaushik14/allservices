const Photo1 = require("../Images/dashboard Images/photo1.png");
const Photo2 = require("../Images/dashboard Images/photo2.png");
const Photo3 = require("../Images/dashboard Images/photo3.png");
const Photo4 = require("../Images/dashboard Images/photo4.png");
const Photo5 = require("../Images/dashboard Images/photo5.png");

const ProjectPhoto1 = require("../Images/Project Photo/projectPhoto1.png");
const ProjectPhoto2 = require("../Images/Project Photo/projectPhoto2.png");
const ProjectPhoto3 = require("../Images/Project Photo/projectPhoto3.png");
const ProjectPhoto4 = require("../Images/Project Photo/projectPhoto4.png");
const ProjectPhoto5 = require("../Images/Project Photo/projectPhoto5.png");
const ProjectPhoto6 = require("../Images/Project Photo/projectPhoto6.png");
const ProjectPhoto7 = require("../Images/Project Photo/projectPhoto7.png");
const ProjectPhoto8 = require("../Images/Project Photo/projectPhoto8.png");
const ProjectPhoto9 = require("../Images/Project Photo/projectPhoto9.png");
const ProjectPhoto10 = require("../Images/Project Photo/projectPhoto10.png");

const contentServices = [
  "Answering questions",
  "Generating text",
  "Summarizing text",
  "Transcribing audio",
  "Providing definitions",
  "Providing translations",
  "Providing recommendations",
  "Product descriptions",
  "YouTube video scripts",
  "Sales copywriting",
  "Blog post writing",
  "Article writing",
  "Social media posts",
  "Transcription",
  "Translation",
  "Summarization",
];

const contentServicesWithColor = [
  {
    name: "Answering questions",
    color: "#F9C847",
    description:
      "Provide answers to various questions related to a wide range of topics.",
    secondColor: "#FCCA7F",
    category: "Skill",
    img: Photo1,
    isPaid: false,
    longDesc: "Get precise answers to any questions you have with ease.",
  },
  {
    name: "Generating text",
    color: "#ED6CBC",
    description: "Generate text for a given prompt or topic.",
    secondColor: "#F8A7C9",
    category: "Skill",
    img: Photo2,
    isPaid: false,
    longDesc: "Create unique and compelling text with a single prompt.",
  },
  {
    name: "Code Completion",
    color: "#9933CC",
    description: "Generate text for a given prompt or topic.",
    secondColor: "#B38FD8",
    category: "Skill",
    img: Photo3,
    isPaid: true,
    longDesc: "Speed up your coding with automated code completion.",
  },
  {
    name: "Write Test Cases",
    color: "#339999",
    description: "Generate text for a given prompt or topic.",
    secondColor: "#66CCCC",
    category: "Skill",
    img: Photo4,
    isPaid: true,
    longDesc: "Ensure high-quality software with well-written test cases.",
  },
  {
    name: "Summarizing text",
    color: "#9966F5",
    description:
      "Summarize long pieces of text into shorter, more condensed versions.",
    secondColor: "#BAA7F5",
    category: "Skill",
    img: Photo5,
    isPaid: true,
    longDesc: "Quickly comprehend lengthy text with summarization.",
  },
  {
    name: "Transcribing audio",
    color: "#589CF1",
    description: "Transcribe audio recordings into written text.",
    secondColor: "#7FB9F4",
    category: "Skill",
    img: Photo1,
    isPaid: true,
    longDesc: "Get accurate written transcripts of any audio recordings.",
  },
  {
    name: "Providing definitions",
    color: "#A271F6",
    description: "Provide definitions for a wide range of words and phrases.",
    secondColor: "#A9B9F4",
    category: "Skill",
    img: Photo2,
    isPaid: true,
    longDesc: "Define words accurately and precisely",
  },
  {
    name: "Providing translations",
    color: "#F9C847",
    description: "Provide translations for a wide range of languages.",
    secondColor: "#FCCA7F",
    category: "Skill",
    img: Photo3,
    isPaid: true,
    longDesc: "Translate accurately into desired language",
  },
  {
    name: "Providing recommendations",
    color: "#ED6CBC",
    description:
      "Provide recommendations for a wide range of topics, such as products, services, and content.",
    secondColor: "#F8A7C9",
    category: "Skill",
    img: Photo4,
    isPaid: true,
    longDesc: "Offer helpful suggestions and ideas",
  },
  {
    name: "Product descriptions",
    color: "#9966F5",
    description: "Generate product descriptions for e-commerce websites.",
    secondColor: "#BAA7F5",
    category: "Skill",
    img: Photo5,
    isPaid: true,
    longDesc: "Create descriptive and attractive product summaries",
  },
  {
    name: "YouTube video scripts",
    color: "#589CF1",
    description: "Generate scripts for YouTube videos.",
    secondColor: "#7FB9F4",
    category: "Skill",
    img: Photo1,
    isPaid: true,
    longDesc: "Write engaging scripts for YouTube content",
  },
  {
    name: "Sales copywriting",
    color: "#A271F6",
    description: "Generate sales copy for advertisements and landing pages.",
    secondColor: "#A9B9F4",
    category: "Skill",
    img: Photo2,
    isPaid: true,
    longDesc: "Write persuasive sales copy to boost conversions",
  },
  {
    name: "Blog post writing",
    color: "#F9C847",
    description: "Write blog posts on a variety of topics.",
    secondColor: "#FCCA7F",
    category: "Skill",
    img: Photo3,
    isPaid: true,
    longDesc: "Create informative, engaging blog posts.",
  },
  {
    name: "Article writing",
    color: "#ED6CBC",
    description: "Write articles on a variety of topics.",
    secondColor: "#F8A7C9",
    category: "Skill",
    img: Photo4,
    isPaid: true,
    longDesc: "Produce in-depth articles on current topics.",
  },
  {
    name: "Social media posts",
    color: "#9966F5",
    description: "Generate social media posts for different platforms.",
    secondColor: "#BAA7F5",
    category: "Skill",
    img: Photo5,
    isPaid: true,
    longDesc: "Craft compelling social media updates.",
  },
  {
    name: "Transcription",
    color: "#589CF1",
    description: "Transcribe audio recordings into written text.",
    secondColor: "#7FB9F4",
    category: "Skill",
    img: Photo1,
    isPaid: true,
    longDesc: "Accurately transcribe audio content.",
  },
  {
    name: "Translation",
    color: "#A271F6",
    description: "Provide translations for a wide range of languages.",
    secondColor: "#A9B9F4",
    category: "Skill",
    img: Photo2,
    isPaid: true,
    longDesc: "Translate text accurately and effectively.",
  },
  {
    name: "Summarization",
    color: "#F9C847",
    description:
      "Summarize long pieces of text into shorter, more condensed versions.",
    secondColor: "#FCCA7F",
    category: "Skill",
    img: Photo3,
    isPaid: true,
    longDesc: "Efficiently condense lengthy text.",
  },
];

const projectContentPhotos = [
  ProjectPhoto1,
  ProjectPhoto2,
  ProjectPhoto3,
  ProjectPhoto4,
  ProjectPhoto5,
  ProjectPhoto6,
  ProjectPhoto7,
  ProjectPhoto8,
  ProjectPhoto9,
  ProjectPhoto10,
];

export { contentServices, contentServicesWithColor, projectContentPhotos };
