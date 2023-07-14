module.exports = {
    source: './build',
    destination: './build',
    routes: {
      '/': {
        initial: true,
        inlineCss: true,
      },
      '/about': {
        inlineCss: true,
      },
      '/projects': {
        inlineCss: true,
      },
      '/project/:id': {
        inlineCss: true,
      },
      '/skills': {
        inlineCss: true,
      },
      '/curriculum': {
        inlineCss: true,
      },
      '/contact': {
        inlineCss: true,
      },
      '/Portfolio/': {
        initial: true,
        inlineCss: true,
      },
      '/Portfolio/about': {
        inlineCss: true,
      },
      '/Portfolio/projects': {
        inlineCss: true,
      },
      '/Portfolio/project/:id': {
        inlineCss: true,
      },
      '/Portfolio/skills': {
        inlineCss: true,
      },
      '/Portfolio/curriculum': {
        inlineCss: true,
      },
      '/Portfolio/contact': {
        inlineCss: true,
      },
    },
  };