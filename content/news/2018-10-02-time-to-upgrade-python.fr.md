---
title: "Time to upgrade Python!"
date: "2018-10-02"
layout: post
---

Au 1er janvier 2019, OpenFisca cessera de maintenir sa rétro-compatibilité avec Python 2.7. Les packages OpenFisca se baseront exclusivement sur Python 3.7, ou plus récent.

<!--more-->

[_[English version]_](/en/news/2018-10-02-time-to-upgrade-python)

## Impacts


Les versions des packages OpenFisca (Core et France) publiées après le 1er janvier 2019 nécessiteront Python 3.7, ou plus récent.

Les versions des packages OpenFisca publiées avant cette date pourront toujours être utilisées avec Python 2.7.

Les corrections de bugs et nouvelles fonctionnalités ne seront livrées qu’en Python 3.7.


## Pourquoi ce changement ?


Au 1er janvier 2020, la maintenance de Python 2.7 sera arrêtée par la Python Software Foundation.

Dès le 1er janvier 2019, plusieurs librairies employées par OpenFisca (dont NumPy) cesseront de supporter Python 2 (cf. [Core#693](https://github.com/openfisca/openfisca-core/issues/693)).


## Comment passer à Python 3 ?


Pour la plupart des utilisateurs, réinstaller OpenFisca dans un environnement Python 3 est suffisant.

Pour les mainteneurs de packages Python qui dépendent d’OpenFisca, de nombreux outils et ressources sont disponibles pour faciliter le passage d’un code Python 2 à Python 3.


Nous recommandons:

- Le talk de [Try Hunner à la Pycon 2018](http://www.youtube.com/watch?v=klaGx9Q_SOA&t=7m18s) (20 min, en anglais), qui présente les stratégies de migrations, et les principaux outils disponibles.

- Les outils de migrations automatiques, en particulier [futurize](http://python-future.org/futurize.html).

- Pour une migration graduelle, [future](https://pypi.org/project/future/), qui vous permettra d’adapter votre code à Python 3 tout en maintenant temporairement la compatibilité avec Python 2.7.


Dans tous les cas, n’hésitez pas à contacter la communauté pour toutes les questions que vous auriez au cours de ce processus de migration !


À bientôt,

**L’équipe OpenFisca**
