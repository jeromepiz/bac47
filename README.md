# Le Mystère du Bac 47

Enquête de prévention sécurité pour les équipes de collecte des déchets, dans l'univers de *L'Affaire de la Benne 3*.

Mardi, 5h40, impasse des Tilleuls : un ripeur se coince les doigts dans le lève-conteneur. Avec la Commissaire Vigie (et Pipo), les joueurs mènent l'enquête en 5 chapitres, environ 15 minutes :

1. **La photo** : repérer 7 anomalies sur la photo prise par un riverain.
2. **Les témoins** : confronter les déclarations aux pièces (trace GPS, ticket de pesée).
3. **La chronologie** : remettre la matinée dans l'ordre.
4. **Les causes** : retrouver les 6 faits qui ont mené à l'accident, sans chercher de coupable.
5. **Les bons réflexes** : 5 situations de tournée.

L'écran de fin donne les règles à retenir et des questions de débrief pour l'animateur.

**Jouer** : https://jeromepiz.github.io/bac47/ (téléphone, tablette ou ordinateur, sans installation).

## Fichiers

- `index.html` : le jeu
- `decor_rue.jpg`, `perso_*.jpg` : décor et portraits
- `*.mp3` : voix des répliques (`_f` = version « Inspectrice »)
- `script_voix.txt` : texte de chaque réplique avec son identifiant
- `prompts_gemini.md` : prompts utilisés pour les images

## Suivi des résultats (Google Sheets)

À la fin de chaque partie, le jeu envoie une ligne vers un Google Sheets : date, nom, titre, agence, score sur 120, grade, durée et score par chapitre. L'écran d'accueil prévient les joueurs que ces informations sont enregistrées.

Mise en place, une seule fois :

1. Créer un Google Sheets vide, puis ouvrir **Extensions > Apps Script**.
2. Remplacer le contenu par celui de `google-sheets/Code.gs`, puis enregistrer.
3. **Déployer > Nouveau déploiement**, type **Application Web** : exécuter en tant que « Moi », accès « Tout le monde ». Autoriser l'accès demandé par Google.
4. Copier l'adresse de l'application Web (`https://script.google.com/macros/s/.../exec`) et la coller dans `index.html`, à la ligne `var SHEET_URL = '...'`.

Si le script a été créé à part (et non depuis le tableur), renseigner l'identifiant du tableur dans `ID_TABLEUR`.

Ces données servent au suivi de l'animation, pas à l'évaluation individuelle des salariés. Vider le tableau à la fin de la campagne.

## Crédits

Illustrations générées avec Gemini. Voix générées avec [ElevenLabs](https://elevenlabs.io) (forfait gratuit : attribution obligatoire, usage non commercial). Portraits de la Commissaire Vigie et de Pipo repris de *L'Affaire de la Benne 3*.
