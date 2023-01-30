Thank you for wanting to contribute to OpenFisca! :smiley:

Feel free to contact us or send us pull requests over GitHub.
For more information on how to do so, please see our [contribution guidelines](https://openfisca.org/doc/contribute/index.html).

## Referencing your reuse in the showcase

If you have built a product with OpenFisca, we would love to reference it in the [public showcase](https://openfisca.org/en/showcase/)! This is a good way for you to gain more visibility, but it is also a very important contribution to OpenFisca. Doing so helps the core team raise funds for maintaining the ecosystem alive and adding features to the software, and making connection between similar reusers. It also helps maintainers of the country packages you depend on know how useful their efforts are, and focus on the most used parts of legislation.

### Complete the reuse information 

Add a Yaml file to the `content/showcase/` folder using the following naming convention: (to be completed according to #122). Exemple: `legislation_explorer.yml`

Edit the information with the template below:

```yml
title: Explorateur de la législation # max length 80
description: # in both languages, max length 200
  fr: Explorez les formules et les paramètres de la législation française.
  en: Explore French legislation formulas and parameters.
country: FR # ISO 3166-2 format, see https://en.wikipedia.org/wiki/ISO_3166-2
website: https://legislation.fr.openfisca.org # valid URL
author:
  type: collective # could be individual|collective|ngo|research_center|business|local_government|national_government
  name: OpenFisca France # max length 120
  contact: contact@openfisca.org # valid email adress
  link: https://fr.openfisca.org # optional valid URL
```

Good to know: to move a reuse from the main showcase to the disused subset, add the until date by following the exemple below

```yml
until: 2020-03-01 # optional, YYYY-MM-DD
```

### Add an illustration image

Add an PNG image to the `static/img/showcase/` folder, named as the `.yml` file, exemple `legislation_explorer.png`. It must be in 1280 × 720 pixels dimension. 

It is strongly recommended to use a image compression tool to to significantly reduce the weight of your image. [ImageOptim](https://imageoptim.com) is a good solution - choose "lossy" settings that usually give more than 50% compression gains, but do not remove image metadata.

### License

By publishing your reuse, you publish the description, illustration and all associated metadata under a [Creative commons Attribution](https://creativecommons.org/licenses/by/4.0/) (CC-BY) license. This enables the Core team and other contributors to easily feature your product in, for example, yearly activity reports, conferences, social media, and other public events.
