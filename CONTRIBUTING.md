Thank you for wanting to contribute to OpenFisca! :smiley: For general information on how to do so, please see our [contribution guidelines](https://openfisca.org/doc/contribute/index.html).

## Referencing your reuse in the showcase

If you have built a product with OpenFisca, we would love to reference it in the [public showcase](https://openfisca.org/en/showcase/)!

This is a good way for you to gain more visibility, but it is also a very important contribution to OpenFisca. Doing so helps the Core team make connections between similar reusers and raise funds for maintaining the ecosystem alive and adding features to the software. It also helps maintainers of the country packages you depend on know how useful their efforts are, and focus on the most used parts of legislation.

Referencing your reuse is fast and easy. Follow the instructions below and [contact us](mailto:contact@openfisca.org?subject=Referencing%20reuse) if you encounter any problem!

### Describe your reuse

Create a YAML file in the [`content/showcase/` folder](https://github.com/openfisca/openfisca.org/tree/master/data/showcase), in [snake case](https://en.wikipedia.org/wiki/Snake_case). For example, if your product is called “Legislation Explorer”, you would create a file named `legislation_explorer.yml`.

Fill in that file with information following the template below:

```yml
title: Legislation Explorer  # 80 characters max
description:  # in both languages, 200 characters max
  en: Explore legislation formulas and parameters modelled with OpenFisca.
  fr: Explorez les formules et les paramètres de la législation modélisée.  # deepl.com can be used for automated translation
package: OpenFisca-Country-Template  # name of the Python package that this reuse depends on
website: https://legislation.demo.openfisca.org  # prefer HTTPS over HTTP
author:
  type: collective # one of individual, collective, ngo, research_center, business, local_institution, or state_institution
  name: OpenFisca  # 120 characters max
  contact: contact@openfisca.org  # this email address will only be used by the Core team for questions related to the reuse
  link: https://openfisca.org  # optional URL of the author organisation
source:
  repository: https://github.com/openfisca/legislation-explorer  # URL of the source code; if you have several repositories, choose the one that interfaces most with OpenFisca APIs and add others in a comment
  license: AGPL-3.0-only  # SPDX license identifier, see https://spdx.org/licenses/
```

#### Disused reuses

If a reuse becomes disused, it should still be referenced for historical purposes. This is done by adding the date at which it became disused in an `until` entry.

```yml
until: 2022-12-31  # optional, YYYY-MM-DD format
```

#### Proprietary source

If the source code of your reuse is not open, do not fill in the `source` parameter and indicate it as a comment with the following format:

```yml
# source: proprietary
```

### Add an illustration

Add an image in the PNG format to the [`static/img/showcase/` folder](https://github.com/openfisca/openfisca.org/tree/master/static/img/showcase), with the same name as the `.yml` file. For example: `legislation_explorer.png`.

The file should be in 16:9 format, at least 1280 × 720 pixels. To ensure fast loading and minimise the environmental impact of the OpenFisca website, the maximum allowed picture weight is 400 kB.

It is strongly recommended to use an image compression tool such as [ImageOptim](https://imageoptim.com) to reduce the image weight. Choosing “lossy” settings at 90% quality will usually yield over 50% compression gains.

## Referencing your package

By referencing your package on the [dedicated page](https://openfisca.org/en/packages/) of the OpenFisca website you give it visibility so that others can use it. We do our best to make this process as easy as possible, [contact us](mailto:contact@openfisca.org?subject=Referencing%20package) if you need.

### Describe your package

Create a YAML file in the [`data/packages/` folder](https://github.com/openfisca/openfisca.org/tree/master/data/packages) with the following syntax: `${jurisdiction}.yml` where jurisdiction is a valid [ISO 3166-2 format](https://en.wikipedia.org/wiki/ISO_3166-2), e.g: `ZZ.yml` (note that this format accepts subdivisions, for example `ES-B` for Barcelona, Spain). In case several packages are available for the same jurisdiction, you can add a modifier with the following syntax `${jurisdiction}_${modifier}.yml`, e.g: `ES-B_mining.yml`.

Fill in that file with information following the template below:

```yml
name: OpenFisca-Country-Template  # name of the package on package managers, i.e. what you would `pip install`
title:  # usually just the name of the jurisdiction, but can be more precise for specific cases
  en: Country Template
  fr: Modèle de pays  # deepl.com can be used for automated translation
jurisdiction: ZZ  # ISO 3166-2 format, see https://en.wikipedia.org/wiki/ISO_3166-2
source:
  repository: https://github.com/openfisca/country-template  # URL of the source code
  licence: AGPL-3.0-only  # SPDX license identifier, see https://spdx.org/licenses/
website: https://openfisca.org  # optional URL of a website describing the model and its community
legislation_explorer: https://legislation.demo.openfisca.org/  # optional URL of an interactive user interface for navigating implemented legislation
openapi_spec: https://api.demo.openfisca.org/latest/spec  # optional URL of an OpenAPI specification file
```

> ISO-3166-2 is used in package filenames rather than the package manager identifier because the filesystem and package manager identifiers have different constraints. In particular, package managers respect case (even though they might resolve differently-cased names to the same package), while many filesystems do not. A secondary reason is that most package manager IDs are prefixed with `OpenFisca`, which does not make much sense in the context of the OpenFisca website. Going with ISO-3166-2 enables package maintainers to be creative with their package names while maintaining clear discoverability for Core maintainers.

### License

By publishing your reuse, you publish the description, illustration and all associated metadata under a [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/) (CC-BY) license, attributed to the `author` listed in the document. This enables the Core team and other contributors to easily feature your product in, for example, yearly activity reports, conferences, social media, and other public events.
