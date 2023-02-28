---
title: Write rules as code
hero:
  title: The most widely adopted free and open-source engine to write rules as code
  subtitle: "Government departments, lawmakers and civil society finally share a common language to debate and activate social and fiscal policies: OpenFisca enables collaboratively modelling laws and regulations and making them computable over open APIs for developers, datascientists and researchers."
  testimonials:
    - image: oecd.png
      author: OECD Observatory of Public Service Innovation
      title: Rules as Code enables “better policy outcomes and enhanced service delivery”
      link: https://oecd-opsi.org/publications/cracking-the-code/
    - image: wgs.png
      author: World Government Summit
      title: Edge of Government Innovation Award 2023
      link: https://www.khaleejtimes.com/uae/abu-dhabi-expands-green-corner-initiative-to-cut-water-electricity-consumption-by-20
    - image: joinup.png
      author: European Commission Joinup programme
      title: Recognised as “Most innovative open-source software” in 2019
      link: https://joinup.ec.europa.eu/collection/sharing-and-reuse-it-solutions/sharing-reuse-awards-2019-results#oss-inno
for_who:
  - title: Policy experts and governments
    description: OpenFisca enables institutions to efficiently share regulation updates and to pool IT costs. Interconnecting rules across public bodies in the form of legible parameters and executable code provides algorithmic transparency and reduces the bill for the taxpayer.
    icon: landmark
  - title: Developers and datascientists
    description: OpenFisca enables developers to easily deliver apps calculating complex taxes and benefits through its JSON web API, and datascientists to compute large-scale through its vectorial Python API. Contributing formulas and coding extensions enables building services for any business.
    icon: terminal-square
  - title: Economists and researchers
    description: OpenFisca enables economists and researchers to use survey and administrative data to simulate the impact of any past or future reform on the income distribution of a given population. Linking all computed taxes and benefits enables analysing how multiple reforms interact.
    icon: line-chart
build_with:
  title: Some services built with OpenFisca
  cta: Browse all services
how_to:
  title: Get started with OpenFisca
  steps:
    - title: Choose a country package
      image: choose-a-package.png
      description: Define the jurisdiction in which you operate and access its rules model.
      links:
        - href: /en/packages
          label: See all available packages
          icon: package
    - title: Run a simulation
      large: true
      description: Calculate values on situations you provide, of one person or of millions.
      links:
        - href: https://legislation.demo.openfisca.org/swagger
          label: Try the web API
        - href: https://openfisca.org/doc/installation/howto-web-no-local-install.html
          label: Try the Python API
      tabs:
        - title: Web API example
          gist: https://gist.github.com/openfisca-bot/409ae3837f14b7dc6a2563a2537beec1.js
        - title: Python API example
          gist: https://gist.github.com/openfisca-bot/128e09ee447dee4b7fb8df35833ba833.js
    - title: Improve the model
      image: improve-the-model.png
      description: Collaborate with other contributors to model new laws, update legal values, handle edge cases, add tests, improve documentation… Country packages are open-source, so you're never alone!
      links:
        - href: https://openfisca.slack.com
          label: Join the OpenFisca Slack space
          icon: slack
---
