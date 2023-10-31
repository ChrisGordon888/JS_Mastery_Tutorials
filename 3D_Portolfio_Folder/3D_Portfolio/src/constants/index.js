import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    UT_AustinLogo,
    starbucks,
    tesla,
    shopify,
    carrent,
    BrainFreq,
    jobit,
    tripguide,
    threejs,
    CosmicCreator,
    YogaAlliance,
    CosmicSexuality,
    ActivationCoaching,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "React Native",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Development",
      company_name: "The University of Texas at Austin",
      icon: UT_AustinLogo,  // You can add an icon URL/path if you have one
      iconBg: "#383E56",
      date: "2023",
      points: [
        "Completed an intensive Coding Bootcamp with a focus on full stack web development.",
        "Acquired over 25 CEUs, mastering key web development skills such as JavaScript, React, Node.js, SQL, NoSQL, ORM techniques, and more.",
        "Engaged in hands-on projects and collaborated with peers to develop fully functional web applications."
      ],
    },
    {
      title: "Owner",
      company_name: "Cosmic Creators Collective LLC/ The Cosmic Exchange Record Label",
      icon: CosmicCreator,  // You can add an icon URL/path if you have one
      iconBg: "#383E56",
      date: "2021",
      points: [
        "Developing and creating a space for creative projects including music production, yogic healing, and therapeutic modalities.",
        "Managing all aspects from content creation to merchandise and services."
      ],
    },
    {
      title: "300 Hour Traditional Ashtanga Yoga Certification",
      company_name: "",  // This can be the name of the institute or school if you want to add it
      icon: YogaAlliance,  // You can add an icon URL/path if you have one
      iconBg: "#383E56",
      date: "2020",
      points: [
        "Engaged in a comprehensive 300hr yoga training program focused on traditional Ashtanga techniques.",
        "Gained deep insights into yogic philosophy, asana practice, pranayama, meditation, and more.",
        "Achieved certification, allowing for the guidance and instruction of these practices to individuals."
      ],
    },
    {
      title: "Cosmic Yoga Training & Certification",
      company_name: "Pioneered by Shalom Melchizedek and Victoria Leanna",
      icon: CosmicSexuality,  // You can add an icon URL/path if you have one
      iconBg: "#383E56",
      date: "2020",
      points: [
        "Completed a comprehensive 100-hour training program focused on holistic spiritual development and the unity of masculine and feminine principles.",
        "Engaged in a rigorous curriculum designed to deepen understanding of ancient techniques and practices for personal and professional applications.",
        "Achieved certification, allowing for the guidance and instruction of these practices to individuals and couples."
      ],
    },
    {
      title: "NESLA Apprenticeship Program",
      company_name: "New-Earth Self-Leadership Academy",
      icon: ActivationCoaching,  // You can add an icon URL/path if you have one
      iconBg: "#383E56",
      date: "2019",
      points: [
        "Engaged in a 9-month intensive into Shamanic Healing, Human Design, and Interdimensional Lucidity.",
        "Received one-to-one mentoring tailored to individual needs.",
        "Explored Human Design including Strategy, Authority, Aura Type, and the deeper workings of our individual uniqueness.",
        "Developed Lucid Dreaming and Out-of-Body Experience skills, with an emphasis on astral travel techniques and multi-dimensional co-creation with the \"Higher Self\"."
      ],
    },
    
   // Other experiences...
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Brain Freq",
      description:
        "A frequency brainwave entrainment app. Brain Freq provides a convenient solution for your binaural meditation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: BrainFreq,
      source_code_link: "https://github.com/ChrisGordon888/Project-3_BrainFreq",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };