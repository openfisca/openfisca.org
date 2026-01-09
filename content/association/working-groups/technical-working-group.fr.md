---
html_title: "Groupe de travail technique OpenFisca"
layout: association
url: /fr/association/groupes-de-travail/technique/
---

# Groupe de travail technique

## Motivation

Le groupe de travail technique est un espace où les contributeurs techniques peuvent se rencontrer, échanger et partager leurs expériences, leurs outils et les produits développés avec Openfisca. C'est un lieu où l'on discute des limites d'Openfisca, des problèmes rencontrés et des améliorations qui pourraient être apportées au logiciel.

L'objectif de ces réunions est d'exposer les contributeurs techniques travaillant sur Openfisca au travail et aux réflexions des autres membres de la communauté, de présenter les outils ou produits développés par les membres de la communauté et de partager les commentaires sur les développements réalisés avec Openfisca en vue de l'améliorer.

Cela pourrait se dérouler en deux temps.

### Présentation de produits ou d'outils pouvant être utilisés au-delà de leurs cas d'utilisation actuels.

#### Objectif

Découverte d'outils de développement ou d'applications déjà produits par des membres de la communauté qui, en raison de leur caractère générique, pourraient facilement être réutilisés par d'autres membres de la communauté et/ou mis à leur disposition.

#### Exemples non exhaustifs :

- [Application LexImpact](https://socio-fiscal.leximpact.an.fr/?budget=true&test_case=66&test_case=67&parameters=irpp_economique)

- Éditeur de paramètres ([FR](https://parameters.fr.tax-benefit.org/), [NC](https://parameters.nc.tax-benefit.org/), [TN](https://parameters.tn.tax-benefit.org/))

- [Validateur de paramètres](https://control-center.tax-benefit.org/)

- [`openfisca-survey-manager`](https://github.com/openfisca/openfisca-survey-manager) pour gérer les données d'enquête ou les données administratives

- Mise en commun des outils existants et extension de ces outils au niveau communautaire afin d'en faire des outils ou des applications de développement partagés par la communauté.

### Présentation des limites et des problèmes rencontrés, des améliorations souhaitables ou prévues

L'objectif de cette séquence est de souligner les limites d'openfisca sur des cas d'utilisation suffisamment génériques afin d'en discuter avec d'autres acteurs de la communauté pour voir s'ils sont confrontés aux mêmes problèmes et s'ils sont prêts à les aborder collectivement afin de proposer des solutions ou des améliorations. Nous pourrions envisager de coordonner les développements visant à améliorer openfisca sur ces points avec la contribution directe des membres de la communauté et éventuellement le soutien financier de l'association si le développement envisagé est suffisamment générique et critique et si les ressources de l'association le permettent.

#### Exemples non exhaustifs :

- Améliorer le format des paramètres afin de permettre une meilleure gestion des paramètres de type « table » ou « dictionnaire » multi-indexés.

- Assouplir la structure des entités et autoriser les liens relationnels entre elles au-delà du rôle dans l'entité (être propriétaire d'un appartement, être le père, la mère ou le fils de quelqu'un, être employé d'une entreprise, avoir plusieurs emplois, etc.).

- Disposer d'un index dynamique pour les données liées aux entités (permettant aux personnes de mourir et de disparaître des tables, ou de naître).

---

## Réunions

### Réunion n°0 - date à définir

#### Motivation du groupe de travail OpenFisca

Mahdi Ben Jellou tentera de vous convaincre des avantages de la création d'un groupe de travail OpenFisca.
Pourquoi créer un groupe de travail OpenFisca ? À qui s'adresse-t-il ? Comment régler les détails pratiques ? Quand devons-nous nous réunir ?

### Paramètres : afficher, modifier et valider

Emmanuel Raviart, de l'équipe LexImpact de l'Assemblée nationale française (https://leximpact.an.fr/), présentera des outils permettant d'afficher, de modifier et de valider les paramètres dans OpenFisca :

Par exemple, dans le cas de la législation française, l'arborescence des paramètres peut être parcourue à l'aide de cet explorateur de paramètres (https://legislation. leximpact.dev/en/parameters/), qui peut être utilisé pour générer des tableaux tels que [celui-ci](https://legislation.leximpact.dev/en/parameters/impot_revenu.bareme_ir_depuis_1945.bareme/table/). Les paramètres peuvent être modifiés et validés à l'aide de l'[éditeur de paramètres](https://legislation.leximpact.dev/en//parameters/impot_revenu.bareme_ir_depuis_1945.bareme/table) et du [validateur de paramètres](https://control-center.tax-benefit.org/).
