// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/lab_ecofisio_uc/";
    },
  },{id: "nav-publicaciones",
          title: "Publicaciones",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab_ecofisio_uc/es/publications/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab_ecofisio_uc/publications/";
          },
        },{id: "nav-proyectos",
          title: "Proyectos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab_ecofisio_uc/es/projects/";
          },
        },{id: "nav-research-lines",
          title: "Research Lines",
          description: "Our main areas of research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab_ecofisio_uc/projects/";
          },
        },{id: "nav-integrantes",
          title: "Integrantes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab_ecofisio_uc/es/people/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab_ecofisio_uc/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/lab_ecofisio_uc/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/lab_ecofisio_uc/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-climate-change-amp-species-responses",
          title: 'Climate Change &amp;amp; Species Responses',
          description: "Predicting how organisms adapt and survive under global warming scenarios",
          section: "Projects",handler: () => {
              window.location.href = "/lab_ecofisio_uc/projects/climate_change/";
            },},{id: "projects-plant-animal-interaction-networks",
          title: 'Plant-Animal Interaction Networks',
          description: "Evaluating how ecological networks restructure under climate change",
          section: "Projects",handler: () => {
              window.location.href = "/lab_ecofisio_uc/projects/interaction_networks/";
            },},{id: "projects-thermal-ecology-amp-evolutionary-physiology",
          title: 'Thermal Ecology &amp;amp; Evolutionary Physiology',
          description: "Understanding how ectothermic organisms respond to temperature variations",
          section: "Projects",handler: () => {
              window.location.href = "/lab_ecofisio_uc/projects/thermal_ecology/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/lab_ecofisio_uc/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/lab_ecofisio_uc/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
