const services = [
  {
    heading: "Write copy & content that converts",
    subheading:
      "Your AI sidekick is trained to produce high-converting marketing copy",
    icon: (
      <img src="https://ouch-cdn2.icons8.com/nb7EqXPIE0T6jB9GhaJr5-hpgEgb08ZlBEJuwJ6l44A/rs:fit:256:408/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTIv/MTljOGFlMjItZjUz/ZC00YWVmLWI0ZGYt/Nzc5YzA3NTczOTcx/LnN2Zw.png" />
    ),
  },
  {
    heading: "Brainstorm new ideas.",
    subheading:
      "Breakthrough writer’s block with Jasper who will help you spark fresh ideas.",
    icon: (
      <img
        src="https://ouch-cdn2.icons8.com/5CpUU1aIyaolDz2TzIqgGl_S6H76dEEq_tvru1LJZFo/rs:fit:256:376/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjU4/LzY1MzU5ZjFkLWI3/MzItNDQ5OS1iZTEx/LTFhYTU5ZjBjNTAw/YS5wbmc.png"
        alt=""
      />
    ),
  },
  {
    heading: "10X your content output",
    subheading:
      "Whether you're a creator or director of a content team, Jasper helps you scale up.",
    icon: (
      <img
        src="https://ouch-cdn2.icons8.com/RnE8A8DE87HjtJv0IuAlHXMuA7AKHamm-7ncxQ4S4Ts/rs:fit:256:363/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjg0/L2NhYjczMjQ4LTI4/OTQtNDk4NS04MDIz/LTExMzZmMWViODYw/Ny5zdmc.png"
        alt=""
      />
    ),
  },
  {
    heading: "Write better, everywhere.",
    subheading:
      "Whether you’re writing emails, captions, or love letters, Jasper will help craft the perfect message.",
    icon: (
      <img
        src="https://ouch-cdn2.icons8.com/wTBNtZRMvAk96eF15gmG-UbT0dt7h3ffZ4nB1ZAVaO0/rs:fit:256:252/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDIz/L2RkMTJkMTQ3LWRh/OWQtNGY3ZC04ZDIx/LWZmMTllM2Q1Nzk3/My5wbmc.png"
        alt=""
      />
    ),
  },
  {
    heading: "Create content in 26 languages",
    subheading:
      "Jasper can read and write content in 25 languages including English, Spanish, Japanese, and Portuguese.",
    icon: (
      <img
        src="https://ouch-cdn2.icons8.com/b6MYZh-mB9x6ZKF9UJbUe4xIu8t0AK-D7S7LKBS72Oc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDk1/LzYzYzdjMDMwLWY4/MWYtNDI4MC1hYjE2/LTc5MDY2MmM3NGI3/Yi5wbmc.png"
        alt=""
      />
    ),
  },
  {
    heading: "Build an AI-Powered business.",
    subheading:
      "Empower your team or customers with an AI sidekick to improve your processes and product.",
    icon: (
      <img
        src="https://ouch-cdn2.icons8.com/TANmZh5N99Zic3exJaJJeJy8Rt-6Lrfx1iFfHD8biTk/rs:fit:256:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI1/LzlhYmY2MGJmLTZi/YjYtNDQ5Yi04YmFi/LWU5YWZkOWUzN2Zi/NS5zdmc.png"
        alt=""
      />
    ),
  },
  {
    heading: "Collaborate with your team",
    subheading:
      "Invite team members from all around the world to work on content and see updates in real-time.",
    icon: (
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    ),
  },
  {
    heading: "Have fun! Jasper is a joy.",
    subheading:
      "AI is an exciting, new technology that can unlock your imagination to create some amazing things.",
    icon: (
      <img
        src="https://ouch-cdn2.icons8.com/xn-dWiyla2gD1jS1jBWzqQODehWOfeOoduRhncKhOxE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUy/LzJjNTZjOTFjLWQ2/OWMtNDRkMC05N2M1/LWJlN2VhMWFiZDhj/MC5zdmc.png"
        alt=""
      />
    ),
  },
];

export default services;
