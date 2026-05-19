# ESP - Mesurer l'empreinte carbone de la communication

Matériel pédagogique du cours donné par Projet Celsius à l'École Supérieure de Publicité (M2 RSE & Communication responsable), mai 2026.

## Séance 2 - Calculer le bilan carbone d'une marque

Atelier de 4h où les étudiantes inventent une marque fictive (mode, beauté, lifestyle), reçoivent un dossier de production généré à partir de leurs 6 choix stratégiques, calculent le bilan carbone de la "saison 1" de cette marque sur 6 postes simples (avec 3 chasses méthodo), puis construisent 3 leviers de réduction et pitchent en 3 minutes.

### Fichiers

| Fichier | Pour qui | Contenu |
|---|---|---|
| `bilan-carbone-marque-S2.html` | étudiantes (en classe) | Outil interactif navigable 4 phases : brief, fiche marque, dossier de prod auto-généré, tableur de calcul avec viz temps réel, leviers et message |
| `brief-tp-etudiantes.md` | étudiantes (à imprimer) | Brief de mise en situation, 4 phases, format pitch final |
| `notes-animation-S2.md` | formateur | Déroulé minuté, points de vigilance, débrief plénier, fallback technique |
| `documentation-FE-matrice.md` | formateur | Sources des facteurs d'émission, matrice de génération input → activité, tests de cohérence |
| `test-calculs.js` | dev / formateur | Script Node de validation des ordres de grandeur sur 4 marques témoins |

### Comment utiliser l'outil

1. Ouvrir `bilan-carbone-marque-S2.html` dans n'importe quel navigateur récent (aucune installation requise, Chart.js chargé via CDN)
2. Distribuer l'URL ou le fichier aux étudiantes
3. Suivre le minutage des notes d'animation

### Méthodologie

- Facteurs d'émission : ADEME Base Empreinte 2024 (priorité), AdGreen et Carbon'Clap pour la production audiovisuelle, BL Évolution + SRI pour la pub digitale
- Cadre : Bilan Carbone ABC + GHG Protocol
- 6 postes retenus : énergie/scéno du show, transport invités, fabrication collection, production campagne pub, diffusion media, fin de vie

Toutes les simplifications sont documentées dans `documentation-FE-matrice.md`.

---

Projet Celsius · 2026
