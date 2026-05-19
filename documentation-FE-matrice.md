# Documentation - Facteurs d'émission et matrice de génération
## Atelier ESP S2 · Calcul du bilan carbone d'une marque

Ce document est l'anti-sèche méthodologique de l'atelier. Il documente la base de facteurs d'émission utilisée, la matrice de génération des données d'activité à partir des choix de marque, et les hypothèses sous-jacentes. À garder pour soi (pas distribué aux étudiantes), à mobiliser en débrief si nécessaire.

---

## Base de facteurs d'émission utilisée

Toutes les valeurs sont en kgCO2e par unité, sauf indication contraire. Sources : ADEME Base Empreinte 2024 sauf mention contraire.

### Énergie (poste 1)

| Activité | Unité | FE | Source |
|---|---|---|---|
| Électricité France | kWh | 0.06 | ADEME 2023 (mix élec FR) |
| Gaz naturel | kWh PCI | 0.227 | ADEME |
| Bois scénographie | kg | 0.46 | ADEME (bois transformé moyen) |
| Métal scénographie (acier) | kg | 2.5 | ADEME (acier construction) |
| Textile scénographie | kg | 9 | ADEME (textile mix) |
| Repas cocktail moyen | couvert | 1.5 | ADEME (repas omnivore moyen) |

### Transport (poste 2)

| Activité | Unité | FE | Source |
|---|---|---|---|
| Avion long-courrier | pkm | 0.15 | ADEME (sans RF, simplifié) |
| Avion court-courrier | pkm | 0.23 | ADEME (sans RF, simplifié) |
| Train TGV France | pkm | 0.003 | SNCF / ADEME |
| Voiture VP moyenne | véhicule-km | 0.193 | ADEME (parc moyen FR) |

**Nota** : pour le transport invités, on divise le FE voiture par 2 pour approximer un taux d'occupation de 2 personnes/véhicule (mix VTC seul et co-voiturage proches).

### Fabrication (poste 3)

| Matière | FE / kg fini | Source |
|---|---|---|
| Coton conventionnel | 11 | ADEME (cycle de vie complet PAP) |
| Polyester (synthétique) | 9 | ADEME |
| Mix textile moyen (coton-poly) | 10 | calculé |
| Cuir / maroquinerie | 17 | ADEME (cycle de vie cuir traité) |
| Parfum + flaconnage | 9 | Étude ADEME parfums |
| Cosmétique / soin | 6 | ADEME cosmétique |
| Lifestyle / objet déco | 5 | ADEME mobilier-déco moyen |
| Confection / assemblage | 3 | ADEME (étape confection isolée) |

| Logistique amont | FE | Source |
|---|---|---|
| Route France | 0.10 kgCO2e/tkm | ADEME |
| Route internationale | 0.09 kgCO2e/tkm | ADEME |
| Mix Asie (route + maritime + air) | 0.05 kgCO2e/tkm | Pondération Celsius |
| Maritime pur | 0.01 kgCO2e/tkm | ADEME |

### Production campagne (poste 4)

| Activité | Unité | FE | Source |
|---|---|---|---|
| Jour de tournage (mid-budget) | jour | 3000 | AdGreen + Carbon'Clap (moyenne mid) |
| Heure de post-production | h | 4 | Estimation AdGreen (serveurs + matériel) |
| Déplacement équipe | pkm | 0.16 | Mix avion court / train / voiture |

**Nota** : 3000 kgCO2e/jour de tournage est une moyenne agrégée qui inclut énergie plateau, déplacements quotidiens équipe, catering, déchets. C'est une approximation pédagogique - en pratique on ventilerait davantage.

### Diffusion media (poste 5)

| Activité | Unité | FE | Source |
|---|---|---|---|
| TV - 1 GRP | GRP | 0.5 | Estimation Celsius (diffusion + visionnage agrégé) |
| Pub digitale - 1 impression | impression | 0.002 | SRI / BL Évolution 2021 (moyenne 1-4 g) |
| Affichage OOH - 1 face × 1 semaine | face-sem | 5 | adOOHcc / UPE 2024 |

**Nota** : le FE digital impression est l'objet de débats méthodologiques. SRI donne 1-4 gCO2e/impression selon le format. On prend 2g comme moyenne pédagogique. Scope3 propose des valeurs plus granulaires en production (à mentionner en S3).

### Fin de vie (poste 6)

| Filière | FE / kg | Source |
|---|---|---|
| Recyclage matière | 0.5 | ADEME (énergie de traitement, non négatif simplifié) |
| Incinération avec valorisation | 1.5 | ADEME (mix incinération France) |
| Décharge | 0.8 | ADEME (CET) |

**Nota** : pour simplifier, on ne crédite pas les émissions évitées du recyclage (qui pourraient mettre le FE en négatif). Approximation pédagogique - en pratique l'ACV crédite les fonctions évitées.

---

## Matrice de génération - comment les choix de marque produisent les données d'activité

### Volume saison 1 (pièces vendues sur 12 mois)

Volume = `base × multiplicateur d'ambition`

| Prix \ Ambition | Nationale | Européenne | Internationale |
|---|---|---|---|
| Accessible (15-50€) | 15 000 | 30 000 | 45 000 |
| Mid (50-150€) | 5 000 | 10 000 | 15 000 |
| Premium (150-500€) | 1 500 | 3 000 | 4 500 |
| Luxe (500€+) | 500 | 1 000 | 1 500 |

### Grammage moyen par pièce

| Catégorie | Grammage (kg/pièce) |
|---|---|
| Prêt-à-porter | 0.35 |
| Accessoires | 0.6 |
| Beauté parfum | 0.15 |
| Beauté cosmétique | 0.20 |
| Lifestyle / déco | 0.8 |

### Distribution invités selon lieu × ambition

Le pourcentage d'invités locaux/EU/intercontinentaux est calculé par croisement.

**Base par lieu** :

| Lieu | % local | % EU | % intercont |
|---|---|---|---|
| Paris | 70% | 20% | 10% |
| Ville FR | 55% | 30% | 15% |
| Capitale EU | 25% | 50% | 25% |
| Hors EU | 15% | 25% | 60% |

**Multiplicateur ambition** :

| Ambition | × local | × EU | × intercont |
|---|---|---|---|
| Nationale | 1.3 | 0.6 | 0.3 |
| Européenne | 1.0 | 1.0 | 1.0 |
| Internationale | 0.7 | 0.9 | 1.6 |

Le résultat est renormalisé pour que la somme reste 100%.

**Distances moyennes A/R** (km) :

| Lieu | Local | EU | Intercont |
|---|---|---|---|
| Paris | 30 | 1500 | 6000 |
| Ville FR | 200 | 1500 | 6500 |
| Capitale EU | 50 | 1200 | 7000 |
| Hors EU | 100 | 9000 | 11000 |

### Taille du show - énergie et scénographie

| Invités | Élec (kWh) | Gaz (kWh) | Bois (kg) | Métal (kg) | Textile (kg) |
|---|---|---|---|---|---|
| 100 | 1200 | 300 | 200 | 80 | 50 |
| 250 | 2200 | 600 | 450 | 180 | 110 |
| 500 | 4200 | 1100 | 850 | 350 | 220 |

### Production campagne selon positionnement prix

| Prix | Jours tournage | Heures postprod | Taille équipe |
|---|---|---|---|
| Accessible | 2 | 30 | 8 |
| Mid | 3 | 50 | 12 |
| Premium | 4 | 80 | 15 |
| Luxe | 5 | 120 | 20 |

Distance moyenne de déplacement équipe selon lieu : Paris 200 km, Ville FR 500 km, Capitale EU 1500 km, Hors EU 6000 km.

### Diffusion media

**Stratégie organic + RP** : pas de TV, pas de digital paid, pas d'OOH (juste presse et bouche-à-oreille, négligeable en BC strict).

**Stratégie mix paid digital** :
- TV : 200 GRP (light TV pour notoriété)
- Digital impressions : 5M (luxe) / 15M (premium) / 30M (mid) / 50M (accessible)
- OOH : 50 faces

**Stratégie 360°** :
- TV : 300 GRP (luxe) / 600 (premium) / 1000 (mid) / 1500 (accessible)
- Digital : 15M (luxe) / 50M (premium) / 100M (mid) / 200M (accessible)
- OOH : 200 faces

### Logistique amont

| Ambition | Distance moyenne | Mode | FE retenu |
|---|---|---|---|
| Nationale | 800 km | Route France | 0.10 kgCO2e/tkm |
| Européenne | 2000 km | Route internationale | 0.09 kgCO2e/tkm |
| Internationale | 6000 km | Mix Asie | 0.05 kgCO2e/tkm |

### Fin de vie collection

Hypothèses fixes (mêmes pour toutes les marques) :
- 25% recyclage
- 55% incinération avec valorisation
- 20% décharge

Hypothèse simplifiée. En pratique varie selon catégorie (la maroquinerie a une durée de vie plus longue, le textile fast-fashion plus courte).

---

## Tests de cohérence - 4 marques témoins

| Marque (test) | Total | Top poste | Per piece |
|---|---|---|---|
| Luxe niche FR (Kintsu) | 30 tCO2e | Campagne (53%) | 60 kgCO2e |
| Mid PAP EU paid (Onde) | 163 tCO2e | Diffusion + Fab + Transport ~25-30% chacun | 16 kgCO2e |
| Mass global PAP 360 (Crash) | 1444 tCO2e | Transport (55%) + Diffusion (28%) | 32 kgCO2e |
| Parfum premium Milan paid (Aura) | 155 tCO2e | Transport (64%) | 52 kgCO2e |

**Cohérence avec le réel** :
- Un défilé luxe niche à Paris : 5-20 tCO2e estimé, la campagne pouvant ajouter 10-30 tCO2e → cohérent.
- Une production mid PAP avec mass paid : 100-300 tCO2e selon volume et géo → cohérent.
- Un show mass intercontinental + 360 paid : 500-2000 tCO2e selon ampleur → cohérent (références : Louis Vuitton Cruise, Burberry Show).

---

## Limites assumées du dispositif

À mentionner si une étudiante pose des questions précises :

1. **Pas de Radiative Forcing sur l'avion**. Multiplicateur 2-3 généralement ajouté, omis ici pour simplifier.
2. **FE digital uniforme**. En réalité varie x10 entre formats (vidéo CTV vs banner display).
3. **Pas de scope 3 induit** (effets de la pub sur la conso, méthode Purpose Disruptors). Sujet S3.
4. **Approximations sur la fabrication**. Une ACV propre prendrait en compte les fibres précises, la teinture, les finitions séparément.
5. **Fin de vie simplifiée**. Pas de crédit pour le recyclage matière (qui pourrait être en négatif en ACV).
6. **Pas de scope 1 fugitives** (clim, réfrigérants). Négligeable dans 99% des cas marque.

Toutes ces simplifications sont assumées et défendables pour un exercice pédagogique de 2h30. Le but n'est pas l'exhaustivité, c'est l'acquisition de la mécanique de raisonnement.

---

*Projet Celsius · Mai 2026*
