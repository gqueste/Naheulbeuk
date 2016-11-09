export const Origins = [
  {
    id: 'humain',
    title: 'Humain',
    conditions: [],
    details : "<h3>Humain</h3>" +
    "<p>L'humain est le personnage le plus polyvalent, il peut faire n'importe quoi, s'équiper comme il veut.</p>" +
    "<p>La charge transportée dépendra de sa force.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un humain. Le problème des humains, c'est qu'ils n'ont rien de spécial... Ni caractéristique exceptionnelle, ni défaut particulier. J'ai décidé de devenir aventurier car je refusais de passer ma vie à vendre des fraises sur un marché, à réparer des filets de pêche ou à planter des navets.</p>"+
    "<p>Si je ne choisis pas de métier, j'ai le droit de sélectionner deux compétences au choix dans la liste des compétences (sauf « appel du sauvage »). Sinon, je prendrai ce qui vient avec le métier que j'ai choisi.</p>" +
    "<p>Ensuite, je pourrai toujours me décider plus tard de choisir un métier, si je m'ennuie, mais à partir du niveau 3 seulement. Ou bien, je continuerai comme si de rien n'était, et je développerai des compétences supplémentaires avec mes niveaux.</p>"+
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<h4>Je peux développer les compétences suivantes :</h4>"
  },
  {
    id: 'barbare',
    title: 'Barbare',
    conditions: [
      {
        carac : 'Courage',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Force',
        op : 'Min',
        value : 13
      }
    ],
    details : "<h3>Barbare</h3>" +
    "<p>Personnage destiné à la BASTON ! Pas d'arbalète ni arme complexe. Pas d'armure complète.</p>" +
    "<p>Mauvais feeling avec la magie : n'utilise ni objet magique, ni armure enchantée. Pas de bouclier.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un Barbare. Rien à voir avec les paysans. Je suis né dans les grandes plaines, là où on chasse les bêtes poilues à la lance. Le soir, on racontait des histoires de baston au coin du feu. Alors moi aussi, je voulais partir frapper des gens à l'aventure. J'évite les trucs compliqués dans la vie, je n'aime pas trop la magie. Je n'aime pas grand-chose en fait, à part le vent dans mes cheveux, frapper des gens, essayer des nouvelles armes et m'entraîner. Je ne porte jamais de grosse armure, parce que c'est un truc pour les lâches, et ça m'empêche de bouger. Et sinon je ne sais pas lire, mais c'est pas grave parce que les livres parlent de trucs sans intérêt. Des fois, je parle à un dieu, il s'appelle Crôm. Il aime donner des baffes.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>AMBIDEXTRIE (AD) : possibilité d'utiliser deux armes en même temps dans les combats – sujet à restrictions.</li>" +
    "<li>CHERCHER DES NOISES : le héros frappe toujours en premier lors d'un combat.</li>" +
    "<li>SENTIR DES PIEDS : éloigne les animaux (bivouac milieu naturel) – gêne les alliés pour dormir en milieu confiné.</li>" +
    "<li>TÊTE VIDE : immunité à certains sortilèges ayant pour cible l'esprit du héros.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Armes de bourrin (armes à 2 mains)</li>" +
    "<li>Bourre-pif (accès au combat à mains nues)</li>" +
    "<li>Chevaucher (monter un animal)</li>" +
    "<li>Escalader</li>" +
    "<li>Intimider (pour faire peur aux ennemis)</li>" +
    "<li>Nager</li>" +
    "<li>Pister</li>" +
    "<li>Tirer correctement (utiliser des armes de jet)</li>" +
    "<li>Truc de mauviette (résistance à la douleur)</li>" +
    "</ul>"
  },
  {
    id: 'nain',
    title: 'Nain',
    conditions: [
      {
        carac : 'Courage',
        op : 'Min',
        value : 11
      },
      {
        carac : 'Force',
        op : 'Min',
        value : 12
      }
    ],
    details : "<h3>Nain</h3>" +
    "<p>Personnage destiné au combat rapproché, à l'exploration. Bon pour la fouille et le marchandage.</p>" +
    "<p>Les armes à 1 main classiques sont utilisées à 2 mains (+1 aux dégâts). Pas d'arme à distance sauf hache.</p>" +
    "<p>Utilisation de bouclier possible avec arme « naine » à 1 main (d'artisan Nain ou Durandil).</p>" +
    "<p>Relativement réfractaire à la Magie (sauf arme / protection). Pas de restriction d'armure.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un Nain. J'ai grandi sous les montagnes, dans les mines avec d'autres Nains. En fait, je ne connais pas grand-chose du monde extérieur, mais ça ne m'intéresse pas, du fait que c'est souvent tout pourri. J'aime la bière, les pièces d'or, les minéraux, les cavernes, la pierre, les haches. Et c'est déjà bien. Et quand on dit que je suis chiant, c'est même pas vrai : j'ai seulement du caractère. Il paraît que j'ai un talent spécial pour trouver les trésors... Ouais, d'accord, mais à ce moment je ne vois pas pourquoi on devrait partager. Je n'aime pas trop la magie, sauf quand c'est pour enchanter une arme ou une armure, parce que là c'est vachement bien du coup. D'ailleurs, on fait ça très bien chez nous, les armes enchantées.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DU TONNEAU (INT) : le héros a du mal à se tenir en présence d'alcool.</li>" +
    "<li>INSTINCT DU TRÉSOR (INT) : donne un bonus aux épreuves pour trouver des trésors.</li>" +
    "<li>PÉNIBLE (INT) : le héros agace les membre de son groupe, et ça peut lui valoir des baffes.</li>" +
    "<li>RADIN (CHA, INT) : donne un bonus au marchandage, mais également un malus au partage !</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Appel des renforts (fuir sans se faire frapper dans le dos)</li>" +
    "<li>Arnaque et carambouille (bonnes affaires chez les marchands)</li>" +
    "<li>Bourre-pif (accès au combat à mains nues)</li>" +
    "<li>Bricolo du dimanche (fabriquer des objets)</li>" +
    "<li>Chercher des noises (attaque le premier)</li>" +
    "<li>Fariboles (baratin pour déstabiliser, marchander, distraire, captiver...)</li>" +
    "<li>Forgeron (améliorer/réparer des armes)</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Tirer correctement (hache de jet)</li>" +
    "<li>Truc de mauviette (résistance à la douleur)</li>" +
    "</ul>"
  },
  {
    id: 'hautElfe',
    title: 'Haut Elfe',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 11
      },
      {
        carac : 'Charisme',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Force',
        op : 'Max',
        value : 12
      }
    ],
    details : "<h3>Haut Elfe</h3>" +
    "<p>Personnage très polyvalent, doué pour la reconnaissance, la prêtrise, la magie, les combats tactiques.</p>" +
    "<p>Armures max : PR4. Pas d'armes à 2 mains. Peut utiliser toute forme de magie.</p>" +
    "<p>Transport de charges limité à 10 kilos – Excellente vue, nyctalopie moyenne.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je viens d'une cité, contrairement aux autres elfes qui vivent dans des cabanes au milieu des branches. Ma lignée n'a pas décidé de fuir les villes et de devenir un elfe des bois, j'ai donc conservé l'intelligence de mes ancêtres car j'ai grandi en milieu civilisé, auprès des humains même si ces derniers ne sentent pas très bon. Je suis également très beau et plutôt adroit, et je sais rester modeste. Mes qualités indéniables sont un atout pour n'importe quel groupe d'aventuriers, d'ailleurs je peux même partir seul à l'aventure. Le seul problème, c'est que je n'ai rien glandé pendant ma jeunesse, aussi je n'ai pas appris à faire grand-chose de mes dix doigts. Je suis attiré par la magie, la connaissance, la littérature, l'architecture et l'art sous toutes ses formes. Cela dit, quand il faut aller au combat, et bien, j'y vais aussi.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>ÉRUDITION (INT) : le héros sait lire, écrire et compter sans passer d'épreuve.</li>" +
    "<li>RUNES BIZARRES (INT) : permet de lire ou d'interpréter les écritures étranges et symboles.</li>" +
    "<li>TOMBER DANS LES PIÈGES : le héros est toujours le premier à tomber dans un piège si l'équipe en croise un.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Chef de groupe (décisionnel, persuader les alliés)</li>" +
    "<li>Chevaucher</li>" +
    "<li>Jonglage et danse</li>" +
    "<li>Nager</li>" +
    "<li>Premiers soins</li>" +
    "<li>Tirer correctement (utiliser des armes de jet)</li>" +
    "</ul>"
  },
  {
    id: 'demiElfe',
    title: 'Demi Elfe',
    conditions: [
      {
        carac : 'Charisme',
        op : 'Min',
        value : 10
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 11
      }
    ],
    details : "<h3>Demi Elfe</h3>" +
    "<p>Personnage polyvalent. Transport de charges limité à 15 kilos – Excellente vue, nyctalopie moyenne.</p>" +
    "<p>Armure max : PR5. Pas d'arme à 2 mains.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis né de l'union imprévue d'une elfe et d'un humain (ou l'inverse). Je ne sais plus trop. Mes parents ont cru bien faire, mais cela m'a causé pas mal de problèmes dans ma jeunesse car je n'étais vraiment accepté par aucun des deux peuples. Il est clair que j'ai gardé quelques avantages inhérents à mon sang elfique, cela dit je suis resté seul une bonne partie de ma vie. J'ai appris à me débrouiller dans cette jungle, alors je suis un peu touche-à-tout. Je suis rodé pour détecter les mensonges et l'hypocrisie. On dit que je suis plutôt charismatique, mais dès qu'on parle de mes origines, c'est la catastrophe, et ça dégénère. Pour le reste, j'ai la bonne moyenne en ce qui concerne les aptitudes au combat. Et pourquoi vous me regardez comme ça ? Qu'est-ce que je vous ai fait ?</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>DÉTECTION : bonus pour toutes les épreuves de détection des pièges et du danger.</li>" +
    "<li>CHOURAVER (AD) : donne un bonus pour toutes les épreuves de vol à la tire.</li>" +
    "<li>MÉFIANCE (INT) : permet de savoir si un autre personnage ment.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Bricolo du dimanche (fabriquer des objets)</li>" +
    "<li>Chevaucher (monter un animal)</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Escalader</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Mendier et pleurnicher (gagner des PO entre deux aventures)</li>" +
    "<li>Nager</li>" +
    "<li>Tirer correctement (utiliser des armes de jet)</li>" +
    "</ul>"
  },
  {
    id: 'elfeSylvain',
    title: 'Elfe Sylvain',
    conditions: [
      {
        carac : 'Charisme',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 10
      },
      {
        carac : 'Force',
        op : 'Max',
        value : 11
      }
    ],
    details : "<h3>Elfe Sylvain</h3>" +
    "<p>Personnage doué en milieu naturel, dangereux sur les attaques à distance. Pas d'arme à 2 mains.</p>" +
    "<p>Transport de charges limité à 10 kilos – Sens développés, nyctalopie totale. Armure max : PR4.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis né au milieu des arbres, et j'y ai passé la plus grande partie de mon enfance. Mes parents étaient gentils, tout comme nos amis les animaux de la forêt, et nos voisins qui cueillaient souvent des framboises avec nous. Dans ma famille on tire à l'arc, on aime les poneys et on ne fait pas de mal aux gens quand on a le choix. Nous aimons l'art, les chansons, sentir le vent dans nos cheveux propres.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>CHEVAUCHER (AD, CHA) : permet de monter à cheval sans épreuve, ou d'essayer de monter d'autres animaux.</li>" +
    "<li>NAÏVETÉ TOUCHANTE (CHA) : l'air gentil du héros lui permet de désamorcer certains conflits.</li>" +
    "<li>PREMIERS SOINS (AD, INT) : permet d'essayer de soigner un ami sur une épreuve de moyenne AD/INT.</li>" +
    "<li>TIRER CORRECTEMENT (AD) : le personnage peut utiliser, sans malus, un arc ou d'autres armes de jet (selon origine).</li>" +
    "<li>TOMBER DANS LES PIÈGES : le héros est toujours le premier à tomber dans un piège si l'équipe en croise un.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Comprendre les animaux</li>" +
    "<li>Déplacement silencieux</li>" +
    "<li>Jonglage et danse</li>" +
    "<li>Nager</li>" +
    "<li>Pister</li>" +
    "<li>Tête vide (résiste aux sorts psychiques, faute de neurones)</li>" +
    "</ul>"
  },
  {
    id: 'elfeNoir',
    title: 'Elfe Noir',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 13
      }
    ],
    details : "<h3>Elfe Noir</h3>" +
    "<p>Personnage polyvalent, dangereux à distance aussi bien qu'au corps à corps.</p>" +
    "<p>Transport de charges limité à 15 kilos – Pas de bouclier, pas d'arme à 2 mains.</p>" +
    "<p>Sens développés, nyctalopie totale. Armure max : PR3.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un elfe noir, on nous appelle aussi les drows, ou parfois les Elfes du Chaos. C'est sans doute parce que les gens aiment donner des noms bizarres à tout ce qu'ils n'arrivent pas à comprendre. En vérité, “drow” est une expression qui a une véritable signification dans notre langue, mais ça je vais le garder pour moi. Il paraît que nous avons été créés accidentellement par les dieux, à partir de la lignée des Elfes Meuldor. Moi, je m'en tape, en fait. Je suis attiré par le Chaos comme tous mes compatriotes, ce qui signifie non pas que je suis un serviteur du mal, mais que je m'intéresse un peu à tout, sauf aux trucs de blaireaux. Je n'écoute pas de musique niaise, je ne coiffe pas des poneys, et je ne me laisse pas convaincre par les prédicateurs des sectes de crétins. Je comprends les blagues de cul, contrairement aux Elfes Sylvains. Je n'ai pas de principes établis pour guider ma vie, et c'est tant mieux. Cela me permet de frapper les gens dans le dos, le cas échéant. De toutes façons, je ne les aime pas trop, les gens.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>AGORAPHOBIE (INT) : le héros a du mal à garder son sang-froid en présence de foule.</li>" +
    "<li>DÉPLACEMENT SILENCIEUX (AD) : donne un bonus aux épreuves de discrétion et d'infiltration.</li>" +
    "<li>DÉTECTION : bonus pour toutes les épreuves de détection des pièges et du danger.</li>" +
    "<li>TIRER CORRECTEMENT (AD) : le personnage peut utiliser, sans malus, un arc ou d'autres armes de jet (selon origine).</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Ambidextrie (1 arme dans chaque main, 2AT/assaut si AD = 14)</li>" +
    "<li>Chouraver</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Escalader</li>" +
    "<li>Forgeron (améliorer/réparer des armes)</li>" +
    "<li>Frapper lâchement</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Pister</li>" +
    "<li>Runes bizarres (lecture des langages compliqués)</li>" +
    "</ul>"
  },
  {
    id: 'orque',
    title: 'Orque',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Max',
        value : 8
      },
      {
        carac : 'Charisme',
        op : 'Max',
        value : 10
      },
      {
        carac : 'Force',
        op: 'Min',
        value : 12
      }
    ],
    details : "<h3></h3>" +
    "<p>Personnage doué pour le combat « en première ligne » et l'exploration. Problèmes de communication.</p>" +
    "<p>Excellent odorat : peut flairer le sang ou le danger à 50m. Mauvaise vue, mais nyctalopie totale.</p>" +
    "<p>Réfractaire à toute forme de magie. Pas d'arbalète, pas d'arme complexe. Pas de restriction d'armure.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Moi orque. Moi taper. Aime bien manger, boire, et taper. Quand rencontrer des gens, taper ! Si pas donner manger à moi, moi taper aussi. Grandi dans les grottes, avec beaucoup orques. Souvent taper. Pas trop aime les humains, eux moches.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>AGORAPHOBIE (INT) : le héros a du mal à garder son sang-froid en présence de foule.</li>" +
    "<li>APPEL DU SAUVAGE : le héros a du mal à choisir son camp en présence d'une horde.</li>" +
    "<li>APPEL DU TONNEAU (INT) : le héros a du mal à se tenir en présence d'alcool.</li>" +
    "<li>BOURRE-PIF : le héros peut se battre à mains nues de façon efficace et accéder à des coups spéciaux.</li>" +
    "<li>INSTINCT DE SURVIE : capacité spéciale permettant de toujours trouver la nourriture.</li>" +
    "<li>SENTIR DES PIEDS : éloigne les animaux (bivouac milieu naturel) – gêne les alliés pour dormir en milieu confiné.</li>" +
    "<li>TÊTE VIDE : immunité à certains sortilèges ayant pour cible l'esprit du héros.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Armes de bourrin (armes à 2 mains)</li>" +
    "<li>Chercher des noises (attaque le premier)</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Intimider (pour faire peur aux ennemis)</li>" +
    "<li>Truc de mauviette (résistance à la douleur)</li>" +
    "</ul>"
  },
  {
    id: 'demiOrque',
    title: 'Demi-Orque',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Max',
        value : 10
      },
      {
        carac : 'Adresse',
        op : 'Max',
        value : 11
      },
      {
        carac: 'Force',
        op: 'Min',
        value : 12
      }
    ],
    details : "<h3>Demi-Orque</h3>" +
    "<p>Personnage d'appui, assez polyvalent. Flaire le danger à 25m.</p>" +
    "<p>Bon odorat, bonne ouïe, nyctalopie moyenne. Pas d'arbalète ou arme complexe.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'ai un très bon odorat : je peux flairer le sang ou le danger à 25 mètres (ennemis). J'ai une assez bonne vision nocturne, il paraît que ça vient du sang de mon père. Je n'ai pas connu mes parents, d'ailleurs ils ne se sont pas connus longtemps eux non plus. Et j'aime pas trop les gens. Alors j'évite les trucs compliqués dans la vie et du coup, je me méfie de la magie. Comme je suis plus malin que les orques sang-pur, je peux éventuellement utiliser une armure ou une arme enchantée si ça m'évite de me faire démolir. Quand on parle d'armure, il me faudrait pas un truc trop lourd, j'aime bien garder une certaine liberté de mouvement. Et sinon je ne sais pas lire, mais c'est pas grave car ça ne m'intéresse pas.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>AGORAPHOBIE (INT) : le héros a du mal à garder son sang-froid en présence de foule.</li>" +
    "<li>CHERCHER DES NOISES : le héros frappe toujours en premier lors d'un combat.</li>" +
    "<li>INSTINCT DE SURVIE : capacité spéciale permettant de toujours trouver la nourriture.</li>" +
    "<li>SENTIR DES PIEDS : éloigne les animaux (bivouac milieu naturel) – gêne les alliés pour dormir en milieu confiné.</li>" +
    "<li>TÊTE VIDE : immunité à certains sortilèges ayant pour cible l'esprit du héros.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Armes de bourrin (armes à 2 mains)</li>" +
    "<li>Bourre-pif (accès au combat à mains nues)</li>" +
    "<li>Escalader</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Intimider (pour faire peur aux ennemis)</li>" +
    "<li>Nager</li>" +
    "<li>Tirer correctement (utiliser des armes de jet)</li>" +
    "<li>Truc de mauviette (résistance à la douleur)</li>" +
    "</ul>"
  },
  {
    id: 'gobelin',
    title: 'Gobelin',
    conditions: [
      {
        carac : 'Courage',
        op : 'Max',
        value : 10
      },
      {
        carac : 'Intelligence',
        op : 'Max',
        value : 10
      },
      {
        carac : 'Charisme',
        op: 'Max',
        value: 8
      }
    ],
    details : "<h3>Gobelin</h3>" +
    "<p>Personnage doué pour l'infiltration et le bricolage, les expériences, les manœuvres un peu lâches.</p>" +
    "<p>Sens développés, nyctalopie. Peut flairer le danger à 50m. Ne parle pas la langue commune.</p>" +
    "<p>N'utilise pas de magie, quel que soit le support. Armure max : PR4.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Zwavezedah ! Zwavezedah ! Glibi tiplakidilu touga zovonichi !</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>AGORAPHOBIE (INT) : le héros a du mal à garder son sang-froid en présence de foule.</li>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>APPEL DU SAUVAGE : le héros a du mal à choisir son camp en présence d'une horde.</li>" +
    "<li>ATTIRE LES MONSTRES : au début du combat, le héros est toujours pris pour cible par les monstres et les ennemis.</li>" +
    "<li>INSTINCT DE SURVIE : capacité spéciale permettant de toujours trouver la nourriture.</li>" +
    "<li>INSTINCT DU TRÉSOR (INT) : donne un bonus aux épreuves pour trouver des trésors.</li>" +
    "<li>SENTIR DES PIEDS : éloigne les animaux (bivouac milieu naturel) – gêne les alliés pour dormir en milieu confiné.</li>" +
    "<li>TÊTE VIDE : immunité à certains sortilèges ayant pour cible l'esprit du héros.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Bricolo du dimanche (fabriquer des objets)</li>" +
    "<li>Désamorcer (un piège non magique)</li>" +
    "<li>Escalader</li>" +
    "<li>Forgeron (améliorer/réparer des armes)</li>" +
    "</ul>"
  },
  {
    id: 'Ogre',
    title: 'Ogre',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Max',
        value : 9
      },
      {
        carac : 'Charisme',
        op : 'Max',
        value : 10
      },
      {
        carac : 'Adresse',
        op : 'Max',
        value : 11
      },
      {
        carac : 'Force',
        op : 'Min',
        value : 13
      }
    ],
    details : "<h3>Ogre</h3>" +
    "<p>Personnage doué pour taper les gens, parfait comme allié d'exploration et comme transporteur.</p>" +
    "<p>Excellent odorat : flaire le sang ou le danger à 50m. Armure max : PR4.</p>" +
    "<p>Relativement réfractaire à la magie (sauf arme / protection). Pas d'arbalète, d'arc, ni d'armes complexes.</p>" +
    "<p>Transporte facilement 50 kilos. Bonus : capacité « Super bourrin » (PRD-5 contre une attaque de l'ogre)</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Akala miamiam. Eto gladoul bidulu ! Huk huk ! Sprotch cuicui !</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>ARMES DE BOURRIN : possibilité d'utiliser des armes à deux mains.</li>" +
    "<li>APPEL DU TONNEAU (INT) : le héros a du mal à se tenir en présence d'alcool.</li>" +
    "<li>APPEL DU VENTRE (INT) : le héros doit se nourrir souvent, ou bien il s'attaque aux équipiers.</li>" +
    "<li>INSTINCT DE SURVIE : capacité spéciale permettant de toujours trouver la nourriture.</li>" +
    "<li>INTIMIDER (COU, CHA) : le héros peut tenter d'effrayer quelqu'un à l'aide de son courage et son charisme.</li>" +
    "<li>SENTIR DES PIEDS : éloigne les animaux (bivouac milieu naturel) – gêne les alliés pour dormir en milieu confiné.</li>" +
    "<li>TÊTE VIDE : immunité à certains sortilèges ayant pour cible l'esprit du héros.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Bourre-pif (accès au combat à mains nues)</li>" +
    "<li>Chercher des noises (attaque le premier)</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Langues des monstres</li>" +
    "<li>Truc de mauviette (résistance à la douleur)</li>" +
    "</ul>"
  },
  {
    id: 'hobbit',
    title: 'Hobbit',
    conditions: [
      {
        carac : 'Courage',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 10
      },
      {
        carac : 'Force',
        op: 'Max',
        value: 10
      }
    ],
    details : "<h3>Hobbit</h3>" +
    "<p>Personnage courageux mais peu gâté par la nature. Excellent cuistot, bon pour le moral des troupes.</p>" +
    "<p>Les armes à 1 main classiques sont utilisées à 2 mains (sans modification aux dégâts). Armure max : PR3.</p>" +
    "<p>Relativement réfractaire à la Magie (sauf arme / protection). Pas d'arc.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Bon ben, me voilà ! Je suis un semi-homme, et je ne sais pas trop pourquoi j'ai décidé de partir à l'aventure. À l'origine, j'avais mis un rôti au four et il me fallait des herbes, je suis sorti et j'ai oublié la clé à l'intérieur de ma petite maison. Je n'ai pas pu rentrer chez moi du coup, et je me suis retrouvé comme ça dehors. Alors je me suis dit : “Bah ! Je vais partir à l'aventure, du coup !”. Mais les gens me regardent un peu bizarrement.</p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DU TONNEAU (INT) : le héros a du mal à se tenir en présence d'alcool.</li>" +
    "<li>CUISTOT (AD) : permet à tout le groupe de récupérer des PV supplémentaires quand il prépare un repas.</li>" +
    "<li>INSTINCT DE SURVIE : capacité spéciale permettant de toujours trouver la nourriture.</li>" +
    "<li>ATTIRE LES MONSTRES : au début du combat, le héros est toujours pris pour cible par les monstres et les ennemis.</li>" +
    "<li>RESSEMBLE À RIEN : permet de se faire oublier, de passer inaperçu.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Appel des renforts (fuir sans se faire frapper dans le dos)</li>" +
    "<li>Chouraver (vol à la tire)</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Fariboles (baratin pour déstabiliser, marchander, distraire, captiver...)</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Frapper lâchement (amélioration dégâts des lames courtes)</li>" +
    "<li>Instinct du trésor (sentir trésors et cachettes)</li>" +
    "<li>Mendier et pleurnicher (gagner des PO entre deux aventures)</li>" +
    "<li>Tirer correctement (utiliser des armes de jet : lance-pierre, poignard et shuriken seulement)</li>" +
    "</ul>"
  },
  {
    id: 'gnome',
    title: 'Gnôme',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 10
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 13
      },
      {
        carac : 'Force',
        op: 'Max',
        value: 8
      }
    ],
    details : "<h3>Gnome</h3>" +
    "<p>Personnage contorsionniste, doué pour l'infiltration et l'esquive. Peut chevaucher n'importe quoi.</p>" +
    "<p>N'utilise pas de magie, sauf sur arme ou protection. Ne parle pas la langue commune.</p>" +
    "<p>Armes autorisées : poignards, couteaux – Transport de charges limité à deux kilos. Armure max : PR2.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p></p>" +
    "<h4>Je suis né avec les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>AMBIDEXTRIE (AD) : possibilité d'utiliser deux armes en même temps dans les combats – sujet à restrictions.</li>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>CHEVAUCHER (AD, CHA) : permet de monter à cheval sans épreuve, ou d'essayer de monter d'autres animaux.</li>" +
    "<li>CHOURAVER (AD) : donne un bonus pour toutes les épreuves de vol à la tire.</li>" +
    "<li>DÉPLACEMENT SILENCIEUX (AD) : donne un bonus aux épreuves de discrétion et d'infiltration.</li>" +
    "<li>INSTINCT DU TRÉSOR (INT) : donne un bonus aux épreuves pour trouver des trésors.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Comprendre les animaux</li>" +
    "<li>Désamorcer (un piège non magique)</li>" +
    "<li>Détection (pièges et embûches, danger)</li>" +
    "<li>Escalader</li>" +
    "<li>Jonglage et danse</li>" +
    "<li>Mendier et pleurnicher (gagner des PO entre deux aventures)</li>" +
    "<li>Nager</li>" +
    "<li>Serrurier (crocheter les mécanismes des portes/coffres)</li>" +
    "</ul>"
  }
];