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

### Dependencies

This website is built using [Hugo](https://gohugo.io), a static website editor, and uses [Node.js](https://nodejs.org).

To build it, [install Hugo](https://gohugo.io/getting-started/installing/) and [Node.js](https://nodejs.org), and then:

```sh
git clone https://github.com/openfisca/openfisca.org
cd openfisca.org
make install
```

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
