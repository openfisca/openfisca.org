---
html_title: "OpenFisca technical working group"
layout: association
slug: technical
---

# Technical working group

## Motivation

The Technical Working Group is a space for technical contributors to meet, exchange and share their experiences, tools and products developed with Openfisca. It is a place to discuss the limitations of Openfisca, the problems encountered, and the improvements that could be made to the software.

The aim of these meetings is to expose technical contributors working on openfisca to the work and thoughts of other members of the community, to showcase tools or products developed by members of the community, and to share feedback on developments made with openfisca with a view to improving it.

It could take place in two sequences.

### Presentation of products or tools that can be used beyond their current use cases.

#### Goal

Discovery of development tools or application already produced by members of the community which, by virtue of their genericity, could easily be re-used by other members of the community and/or made available to them.

#### Non-exhaustive examples:

- [LexImpact application](https://socio-fiscal.leximpact.an.fr/?budget=true&test_case=66&test_case=67&parameters=irpp_economique)
- Parameter editor (for [France](https://parameters.fr.tax-benefit.org/), [New Caledonia](https://parameters.nc.tax-benefit.org/), [Tunisia](https://parameters.tn.tax-benefit.org/))
- [Parameter validator](https://control-center.tax-benefit.org/)
- [`openfisca-survey-manager`](https://github.com/openfisca/openfisca-survey-manager) to manage survey data or administrative data
- Pooling of existing tools and scaling up of these tools to the community level to make them development tools or applications shared by the community.

### Presentation of limitations and problems encountered, desirable or planned improvements

The aim of this sequence is to point out the limitations of openfisca on sufficiently generic use cases in order to discuss them with other players in the community to see if they are faced with the same problems and willing to tackle them collectively to propose solutions or improvements. We could consider coordinating developments to improve openfisca on these points with direct contributions from members of the community and possibly financial support from the association if the development envisaged is sufficiently generic and critical and the association's resources allow it.

#### Non-exhaustive examples:

- Improving the parameter format to allow better management of multi-indexed "table" or "dictionary" type parameters.

- Relax the structure of entities and allow relational links between them beyond the role in the entity (being the owner of a flat, being the father, mother or son of someone, being an employee of a company, having several jobs, etc.).

- Having a dynamic index for data linked to entities (allowing people to die and disappear from tables, or to be born).

---

## Meetings

### Meeting #0 - date to be defined

#### OpenFisca Working Group motivation

Mahdi Ben Jellou will try to convince you of the benefits of creating an OpenFisca working group.
Why set up an OpenFisca working group? Who is it for? How do we work out the practical details? When should we meet?

### Parameters : display, edit, and validate

Emmanuel Raviart from [the LexImpact team at the french Assemblée Nationale](https://leximpact.an.fr/) will present tools for displaying, editing and validating parameters in OpenFisca:

For example, in the case of French legislation, the parameter tree can be browsed using this [parameter explorer](https://legislation.leximpact.dev/en/parameters/), which can be used to generate tables such as [this one](https://legislation.leximpact.dev/en/parameters/impot_revenu.bareme_ir_depuis_1945.bareme/table/). Parameters can be edited and validated using the [parameter editor](https://legislation.leximpact.dev/en//parameters/impot_revenu.bareme_ir_depuis_1945.bareme/table) and the [parameter validator](https://control-center.tax-benefit.org/).
