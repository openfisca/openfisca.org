description: "A countries page must list three available countries, have a link to existing github repository and legislation explorer.",

steps: [
  {
    "CountriesComponent.frSection": true,
  },
  CountriesComponent.goToFrSection(),
  {
    "CountriesComponent.countryTitle": frTitle,
    "CountriesComponent.countryInfo": frGithub,
    "CountriesComponent.countryLegislationExplorer": frExplorer,
  },
  CountriesComponent.goToTnSection(),
  {
    "CountriesComponent.countryTitle": tnTitle,
    "CountriesComponent.countryInfo": tnGithub,
    "CountriesComponent.countryLegislationExplorer": tnExplorer,
  },
  CountriesComponent.goToSnSection(),
  {
    "CountriesComponent.countryTitle": snTitle,
    "CountriesComponent.countryInfo": snGithub,
    "CountriesComponent.countryLegislationExplorer": false,
  },
]
