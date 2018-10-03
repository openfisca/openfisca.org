---
title: "Time to upgrade Python!"
date: "2018-10-02"
layout: post
---

On January 1st 2019, OpenFisca will stop maintaining backward compatibility with Python 2.7. From then on, OpenFisca packages will be exclusively based on Python 3.7, or more recent.

<!--more-->

[_[Version française]_](/fr/news/2018-10-02-time-to-upgrade-python)

## Impact

OpenFisca package versions (Core and France) released after January 1st 2019 will need Python 3.7, or more recent.

OpenFisca package versions released before that date will still be usable with Python 2.7.

Bug fixes and new features will only be delivered in Python 3.7.

## Why this change?

On January 1st 2020, the Python Software Foundation will stop maintaining 2.7.

On January 1st 2019, several libraries used by OpenFisca (including NumPy) will stop supporting Python 2.7 (see [Core#693](https://github.com/openfisca/openfisca-core/issues/693))

## How to switch to Python 3?

Most users only need to reinstall OpenFisca in a Python 3 environment to start using the Python 3 version.

For maintainers of Python packages depending on OpenFisca, many tools and resources are available to ease migrating code from Python 2 to Python 3.

We recommend:

- The [Try Hunner talk at Pycon 2018](http://www.youtube.com/watch?v=klaGx9Q_SOA&t=7m18s) (20 min), that introduces migration strategies and the main tools available.

- Automatic migration tools, such as [futurize](http://python-future.org/futurize.html).

- For a gradual migration, [future](https://pypi.org/project/future/) allows you to adapt your code to Python 3 while temporarily maintain compatibility with Python 2.7.

In all cases, don’t hesitate to contact the community if you face issues during the migration process!

See you soon!

**The OpenFisca team**
