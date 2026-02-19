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
        },{id: "nav-projects",
          title: "Projects",
          description: "",
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
            },},{id: "news-rellenar-con-noticias",
          title: 'Rellenar con noticias',
          description: "",
          section: "News",},{id: "projects-evolution-of-integrated-phenotypes",
          title: 'Evolution of Integrated Phenotypes',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/lab_ecofisio_uc/projects/evophysio/";
            },},{id: "projects-ecological-networks",
          title: 'Ecological Networks',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/lab_ecofisio_uc/projects/interaction_networks/";
            },},{id: "projects-thermal-biology-and-niche-models",
          title: 'Thermal Biology and Niche Models',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/lab_ecofisio_uc/projects/thermalbio/";
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
