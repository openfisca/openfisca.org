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
package: template  # the name of the OpenFisca country package used by this reuse
website: https://legislation.demo.openfisca.org  # prefer HTTPS over HTTP
author:
  type: collective # one of individual, collective, ngo, research_center, business, local_government, or national_government
  name: OpenFisca  # 120 characters max
  contact: contact@openfisca.org  # this email address will only be used by the Core team for questions related to the reuse
  link: https://openfisca.org  # optional URL of the author organisation
source:
  repository: https://github.com/openfisca/legislation-explorer  # URL of the source code
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

### License

By publishing your reuse, you publish the description, illustration and all associated metadata under a [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/) (CC-BY) license, attributed to the `author` listed in the document. This enables the Core team and other contributors to easily feature your product in, for example, yearly activity reports, conferences, social media, and other public events.
