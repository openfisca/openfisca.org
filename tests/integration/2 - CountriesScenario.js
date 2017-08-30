description: "A countries page must list three available countries, have a link to existing github repository and legislation explorer.",

steps: [
  UseCaseComponent.goToCountriesPage(),
  {
    "CountriesComponent.frInfo": true,
    "CountriesComponent.frLegislationExplorer": true,

    "CountriesComponent.tnInfo": true,
    "CountriesComponent.tnLegislationExplorer": true,

    "CountriesComponent.snInfo": true,
  },
  CountriesComponent.goHome(),
]
