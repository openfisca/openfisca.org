The public-facing website of OpenFisca for an international audience.


## Goal

Create & optimise conversion funnels from person who never heard about OpenFisca to contributor & promoter.


## Intended audience

1. Project managers.
2. Researchers.
3. Developers.
4. Activists & lobbyists.
5. Public policy makers.
6. Datajournalists.
7. Entities impacted by an already modelled tax and benefit system
8. General public.

> This is adapted from our [user taxonomy](https://github.com/openfisca/openfisca-core/wiki/Taxonomie-des-utilisateurs). Prioritisation is made according to the distribution of active users in August 2017, to minimise the risk of targeting an audience where offer is inadequate.


## Conversion funnels

For each type in the [user taxonomy](https://github.com/openfisca/openfisca-core/wiki/Taxonomie-des-utilisateurs), showcase examples of fulfilled **needs**, add an associated CTA to replicate the usage, and indicate tailored **contribution paths**.


### Contribution taxonomy

#### Project managers

- Ensure usage in their projects.
- Promote usage in their peers' projects.
- Update legislation (directly or through setting up a process in their teams).
- Create software that showcases OpenFisca.
- Fund creation of country packages and extensions.
- Ensure code reusability.

#### Researchers

- Enrich a country package model.
- Update legislation.
- Promote usage as a research tool.
- Proclaim model validity.

#### Developers

- Detect and correct bugs.
- Improve performance.
- Improve technical documentation.
- Update legislation.

#### Activists & lobbyists

- Promote usage as a research tool.
- Proclaim model validity.
- Create visualisation & comparison tools.
- Ensure code reusability.

#### Public policy makers

- Proclaim model validity.
- Standardise usage.
- Ensure code reusability.

#### Datajournalists

- Promote usage as a research tool.
- Create visualisation & comparison tools.
- Ensure code reusability.

#### Entities impacted by an already modelled tax and benefit system

- Promote usage.
- Detect and fix legislation errors.

#### General public

- Mobilise other actors in their country to start modelling.


## Metrics

- **Correlated homepage bounce rate & time spent**: measure bounce occurrences where time spent is less than needed to read the value proposition and use this metric to optimise acquisition channels.
- **Newsletter subscriptions**: measure acquisition rate and use this metric to optimise activation channels.
- **API calls**: measure API calls and use this metric to optimise the experimentation process.
- **Contribution rate**: measure the issue-, PR- and email- reception ratios to homepage visits and use this metric to optimise the conversion funnels.


## Installation

In order to build the website locally and contribute to it, you will need to install its dependencies.

### Source code

Clone the repository locally:

```sh
git clone https://github.com/openfisca/openfisca.org
cd openfisca.org
make install
```

### Dependencies

This website is built using [Hugo](https://gohugo.io), a static website editor, and [Node.js](https://nodejs.org).

#### Hugo

[Install Hugo](https://gohugo.io/getting-started/installing/) in version `0.147.1` edition `extended`.

##### With Homebrew

The Hugo version is locked because of the dependencies in the CI environment. The easiest way to install this specific version of Hugo is to use the [Open Terms Archive homebrew tap](https://github.com/OpenTermsArchive/homebrew-tap), that shares the same constraints.

1. Add the Open Terms Archive Homebrew tap: `brew tap OpenTermsArchive/homebrew-tap`
2. Remove any previous installation of Hugo: `brew unlink hugo`
3. Install Hugo: `brew install hugo@0.147.1`

## Usage

### Building the site

```sh
make build
```

The website will be built in the `public` directory.

### Serving the app locally

For development purposes:

```sh
make serve
```

### Linting JavaScript files

To lint the JavaScript files use the following command:

```sh
npm run lint:js
```

To apply automatic corrections use the following command:

```sh
npm run lint:js -- --fix
```

### Linting CSS files

To lint the CSS files use the following command:

```sh
npm run lint:css
```

To apply automatic corrections use the following command:

```sh
npm run lint:css -- --fix
```

## License

The source code in this repository is licensed under an AGPL v3 license.
The content in the showcase is licensed under a CC-BY license by contributors.
