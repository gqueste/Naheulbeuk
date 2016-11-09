export const Professions = [
  {
    id: 'guerrier',
    title: 'Guerrier',
    conditions: [
      {
        carac : 'Courage',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Force',
        op : 'Min',
        value : 12
      }
    ],
    details : "<h3>Guerrier</h3>" +
    "<p>Personnage destiné à la baston en première ligne.</p>" +
    "<p>N'utilise pas la magie (parchemins, sorts), sauf arme ou protection enchantée.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'aime le combat ! C'est mon truc. Je veux des armes, des armures, je veux rentrer dans le tas. Je veux courir vers mon destin, et marcher sur les cadavres de ceux qui vont se mettre en travers de mon chemin. À mort, les mauviettes !</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>ARMES DE BOURRIN : possibilité d'utiliser des armes à deux mains (sous réserve de restriction d'origine).</li>" +
    "<li>BOURRE-PIF : le héros peut se battre à mains nues de façon efficace et accéder à des coups spéciaux.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Ambidextrie (utilisation simultanée de 2 armes)</li>" +
    "<li>Chercher des noises (attaque le premier)</li>" +
    "<li>Chevaucher</li>" +
    "<li>Forgeron (améliorer/réparer des armes)</li>" +
    "<li>Intimider (pour faire peur aux ennemis)</li>" +
    "<li>Tirer correctement (utiliser des armes de jet)</li>" +
    "<li>Truc de mauviette (résistance à la douleur)</li>" +
    "</ul>"
  },
  {
    id: 'assassin',
    title: 'Assassin',
    conditions: [
      {
        carac : 'Adresse',
        op : 'Min',
        value : 13
      }
    ],
    details : "<h3>Assassin</h3>" +
    "<p>Personnage destiné à l'infiltration, aux manœuvres un peu lâches.</p>" +
    "<p>Si l'intelligence naturelle est supérieure à 10 : peut utiliser des objets magiques. Armure max : PR3.</p>" +
    "<p>En cas d'esquive réussie, il a 50 % de chances de pouvoir attaquer à l'assaut suivant (4, 5, 6 au D6).</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'aime bien tuer des gens. C'est même un peu dommage, je ne suis bon qu'à ça... J'ai grandi en ourdissant des plans secrets pour me débarrasser des imbéciles qui m'entouraient. Je sais me glisser furtivement, frapper là où ça fait mal. Je n'ai pas d'états d'âme... Ce n'est pas de la cruauté, je fais juste mon boulot. J'aime ce qui est tranchant et pointu, ce qui fait couler le sang. Quant aux autres aventuriers... Hum, du moment qu'ils ne me trahissent pas, ils n'ont rien à craindre de moi.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>TIRER CORRECTEMENT (AD) : Le personnage peut utiliser un arc ou d'autres armes de jet (selon origine).</li>" +
    "<li>FRAPPER LÂCHEMENT : Permet de doubler les dégâts d’une attaque lorsque celle-ci est placée dans le dos, une fois par combat.</li>" +
    "<li>DÉPLACEMENT SILENCIEUX (AD) : bonus aux épreuves de discrétion et d'infiltration</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Ambidextrie (utilisation simultanée de 2 armes)</li>" +
    "<li>Chercher des noises (attaque le premier)</li>" +
    "<li>Chevaucher (monter un animal)</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Escalader</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Nager</li>" +
    "<li>Ressemble à rien (être difficile à reconnaître)</li>" +
    "</ul>"
  },
  {
    id: 'voleur',
    title: 'Voleur',
    conditions: [
      {
        carac : 'Adresse',
        op : 'Min',
        value : 12
      }
    ],
    details : "<h3>Voleur</h3>" +
    "<p>Personnage destiné à l'infiltration, aux manœuvres un peu lâches, à l'exploration, à l'escamotage.</p>" +
    "<p>Si l'intelligence naturelle est supérieure à 10 : peut utiliser des objets magiques. Armure max : PR3.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>C'est bien plus facile de s'emparer des biens des autres que de travailler pour les obtenir. D'ailleurs, c'est aussi plus facile de survivre dans une compagnie d'aventuriers quand on ne passe pas son temps à l'avant à se prendre des flèches et à combattre les monstres. Je suis un peu fourbe, et je préfère quand ce sont les autres qui affrontent le danger. Néanmoins, il y a des moments où il faut prendre ses responsabilités... Par exemple, quand on me demande d'entrer dans un couloir suspect pour détecter les pièges. J'ai horreur de ces moments-là !</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>CHOURAVER (AD) : donne un bonus pour toutes les épreuves de vol à la tire.</li>" +
    "<li>DÉPLACEMENT SILENCIEUX (AD) : donne un bonus aux épreuves de discrétion et d'infiltration.</li>" +
    "<li>DÉTECTION (INT) : bonus pour toutes les épreuves de détection des pièges et du danger.</li>" +
    "<li>SERRURIER (AD) : peut tenter de crocheter des mécanismes et serrures, sans malus à l'épreuve.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Arnaque et carambouille (bonnes affaires chez les marchands)</li>" +
    "<li>Désamorcer (un piège non magique)</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Escalader</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Frapper lâchement (amélioration dégâts des lames courtes)</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Ressemble à rien (être difficile à reconnaître)</li>" +
    "</ul>"
  },
  {
    id: 'pretre',
    title: 'Prêtre',
    conditions: [
      {
        carac : 'Charisme',
        op : 'Min',
        value : 12
      }
    ],
    details : "<h3>Prêtre</h3>" +
    "<p>Personnage ayant accès à de nombreux prodiges, dont les pouvoirs dépendent du dieu choisi.</p>" +
    "<p>Le prêtre reçoit également les restrictions et avantages relatifs au dieu (ou démon) affilié.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Et oui, je suis un prêtre ! Mes parents ne voulaient pas, mais bon, tant pis pour eux. Je prêche la bonne parole de l'entité mystique qui m'a inspirée, et j'essaie d'appliquer chaque jour ses principes. L'avantage, c'est qu'il me permet de faire appel à ses pouvoirs par le biais d'un certain nombre de prodiges. Je peux ainsi montrer au monde que mon dieu est le plus puissant ! Et c'est bien utile parfois pour se débarrasser des monstres impies. Sinon, moi-même je n'ai pas de talent particulier à la base, sauf mon aura personnelle qui fait que les gens m'écoutent et que j'inspire un certain respect.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>ÉRUDITION (INT) : le héros sait lire, écrire et compter sans passer d'épreuve.</li>" +
    "<li>MÉFIANCE (INT) : permet de savoir si un autre personnage ment.</li>" +
    "<li>RÉCUPÉRATION (PA) : besoin de lire/méditer 1H par jour pour régénérer ses pouvoirs (en plus du sommeil).</li>" +
    "<li>SPÉCIALE : selon dieu affilié. Le choix de certains dieux peut donner accès à une ou plusieurs compétences</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Arnaque et carambouille (bonnes affaires chez les marchands)</li>" +
    "<li>Chevaucher</li>" +
    "<li>Cuistot (améliore les repas et la récupération induite)</li>" +
    "<li>Fariboles (baratin pour déstabiliser, marchander, distraire, captiver...)</li>" +
    "<li>Premiers soins</li>" +
    "<li>Radin (bonus pour marchander, malus pour partager)</li>" +
    "<li>Runes bizarres (lecture des langages compliqués)</li>" +
    "</ul>"
  },
  {
    id: 'mage',
    title: 'Mage',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 12
      }
    ],
    details : "<h3>Mage</h3>" +
    "<p>Personnage qui lance des sorts variés, qui sait parlementer, qui peut résoudre les énigmes et détecter la magie.</p>" +
    "<p>Armes utilisables : bâton, poignard, dague, gourdin (corps à corps). Pas d'arc ou arbalètes. N’utilise pas de bouclier.</p>" +
    "<p>Peut utiliser toute forme de magie, parchemin, protections magiques, potions, etc. Bâton non obligatoire.</p>" +
    "<p>Transport de charge limitée, dépendant de l'origine. Armure max : PR2.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Mon truc, c'est la maîtrise de la puissance astrale, et l'apprentissage de mon art. Je n'ai pas fait des études compliquées pendant des années pour me la couler douce dans un bureau ou au milieu des champs de navets ! Alors attention, ça va chauffer pour les miches des gobelins.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>ÉRUDITION (INT) : le héros sait lire, écrire et compter sans passer d'épreuve.</li>" +
    "<li>RÉCUPÉRATION (PA) : besoin de lire/méditer 1H par jour pour régénérer ses pouvoirs (en plus du sommeil).</li>" +
    "<li>RUNES BIZARRES (INT) : permet de lire ou d'interpréter les écritures étranges et symboles.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Appel des renforts (fuir sans se faire frapper dans le dos)</li>" +
    "<li>Chef de groupe (décisionnel, persuader les alliés)</li>" +
    "<li>Chevaucher</li>" +
    "<li>Fariboles (baratin pour déstabiliser, marchander, distraire, captiver...)</li>" +
    "<li>Langues des monstres</li>" +
    "<li>Premiers soins</li>" +
    "</ul>"
  },
  {
    id: 'paladin',
    title: 'Paladin',
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
        carac : 'Charisme',
        op : 'Min',
        value : 11
      },
      {
        carac : 'Force',
        op : 'Min',
        value : 9
      }
    ],
    details : "<h3>Paladin</h3>" +
    "<p>Personnage doué pour le combat au corps à corps, charismatique, pouvant faire appel occasionnellement à des prodiges.</p>" +
    "<p>Restrictions/avantages : liées au dieu auquel le paladin a voué son âme (voir fiches descriptive pour chaque dieu).</p>" +
    "<p>Doit posséder une relique du dieu en question pour utiliser ses pouvoirs (sinon, il ne sera qu'un aspirant paladin).</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un paladin ! J'ai toujours rêvé de porter la parole de mon dieu à travers la Terre de Fangh, de préférence à coups d'épée dans la face des récalcitrants. Je dois suivre un certain nombre de directives, mais finalement c'est plutôt sympa... J'ai l'impression d'avoir un vrai but dans la vie, pas comme ces aventuriers sans foi qui font semblant d'avoir une quête !</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>CHEVAUCHER (AD, CHA) : permet de monter à cheval sans épreuve, ou d'essayer de monter d'autres animaux.</li>" +
    "<li>INTIMIDER (COU, CHA) : le héros peut tenter d'effrayer quelqu'un à l'aide de son courage et son charisme.</li>" +
    "<li>RÉCUPÉRATION (PA) : besoin de lire/méditer 1H par jour pour régénérer ses pouvoirs (en plus du sommeil).</li>" +
    "<li>SPÉCIALE : selon dieu affilié. Le choix de certains dieux peut donner accès à une ou plusieurs compétences</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Armes de bourrin (armes à 2 mains – possibilité selon dieu choisi)</li>" +
    "<li>Chercher des noises (attaque le premier)</li>" +
    "<li>Érudition (savoir lire, écrire et compter)</li>" +
    "<li>Fariboles (convaincre en racontant n'importe quoi)</li>" +
    "<li>Premiers soins</li>" +
    "</ul>"
  },
  {
    id: 'ranger',
    title: 'Ranger',
    conditions: [
      {
        carac : 'Charisme',
        op : 'Min',
        value : 10
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 10
      }
    ],
    details : "<h3>Ranger</h3>" +
    "<p>Personnage très polyvalent, très bon en soutien et en exploration.</p>" +
    "<p>Armure max : PR4.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un aventurier plutôt polyvalent... Habile à la fois au combat, à la dissimulation et au pistage, je suis également capable de tirer à l'arc et de prodiguer des soins. C'est pour ça qu'en général, on me désigne comme chef de groupe. Je suis à l'aise aussi bien en milieu naturel qu'en ville, mais j'ai une préférence pour les milieux forestiers dans lesquels je peux me fondre avec l'agilité d'une fouine. En dehors de ça, j'ai beaucoup de succès avec le sexe opposé et je suis plutôt modeste.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>DÉPLACEMENT SILENCIEUX (AD) : donne un bonus aux épreuves de discrétion et d'infiltration.</li>" +
    "<li>DÉTECTION (INT) : bonus pour toutes les épreuves de détection des pièges et du danger.</li>" +
    "<li>CHEVAUCHER (AD, CHA) : permet de monter à cheval sans épreuve, ou d'essayer de monter d'autres animaux.</li>" +
    "<li>NAGER (AD, FO) : le héros a déjà appris à nager et peut passer des épreuves en immersion.</li>" +
    "<li>PISTER (INT) : bonus aux épreuves de pistage, recherche de traces, filature.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Ambidextrie (1 arme dans chaque main, 2AT/assaut si AD = 14)</li>" +
    "<li>Chef de groupe (décisionnel, persuader les alliés)</li>" +
    "<li>Comprendre les animaux</li>" +
    "<li>Désamorcer (un piège non magique)</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Escalader</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Premiers soins</li>" +
    "<li>Tirer correctement</li>" +
    "</ul>"
  },
  {
    id: 'menestrel',
    title: 'Ménestrel',
    conditions: [
      {
        carac : 'Charisme',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 11
      }
    ],
    details : "<h3>Ménestrel</h3>" +
    "<p>Personnage un peu bruyant mais sympathique, et presque polyvalent. Bon pour la négociation.</p>" +
    "<p>Armure max : PR2. Peut utiliser les objets magiques et parchemins, et les instruments.</p>" +
    "<p>Armes autorisées : bâton, poignard, dague, gourdin. Pas de bouclier. Pas d'arbalètes.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'aime la poésie, la musique, les spectacles, les activités artistiques ! J'aime la route et les chemins, sentir la rosée du matin sur mon visage, lorsque j'arrive à l'entrée d'un petit village campagnard qui sent bon le pain chaud. Je suis un fidèle compagnon pour quiconque se liera d'amitié avec moi, et ce n'est pas parce que je chante que je suis une mauviette... Je peux aussi combattre et tirer les cheveux très fort !</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>ATTIRE LES MONSTRES : au début du combat, le héros est toujours pris pour cible par les monstres et les ennemis.</li>" +
    "<li>CHEVAUCHER (AD, CHA) : permet de monter à cheval sans épreuve, ou d'essayer de monter d'autres animaux.</li>" +
    "<li>ÉRUDITION (INT) : le héros sait lire, écrire et compter sans passer d'épreuve.</li>" +
    "<li>FARIBOLES (INT, CHA) : bonus pour déstabiliser, distraire et captiver l'auditoire à l'aide de son baratin.</li>" +
    "<li>JONGLAGE ET DANSE (AD) : possibilité d'improviser des spectacle pour distraire les gens.</li>" +
    "<li>NAÏVETÉ TOUCHANTE (CHA) : l'air gentil du héros lui permet de désamorcer certains conflits.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Mendier et pleurnicher (gagner des PO entre deux aventures)</li>" +
    "<li>Premiers soins</li>" +
    "<li>Runes bizarres (lecture des langages compliqués)</li>" +
    "<li>Tirer correctement</li>" +
    "</ul>"
  },
  {
    id: 'marchand',
    title: 'Marchand',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 12
      },
      {
        carac : 'Charisme',
        op : 'Min',
        value : 11
      }
    ],
    details : "<h3>Marchand</h3>" +
    "<p>Personnage doué pour accéder à son enrichissement personnel. Bon pour les relations publiques.</p>" +
    "<p>Armure max : PR3. Pas d'arme à deux mains. Peut utiliser les objet magiques.</p>" +
    "<p>Peut utiliser les parchemins s'il sait lire...</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'aime l'argent et j'aime le commerce. Oui, bon, ce n'est pas honteux, après tout beaucoup d'autres gens aiment l'argent, comme les aventuriers ou les politiciens, mais on a tendance à passer l'éponge car on considère que c'est normal. Les marchands, par contre sont les amis de tout le monde quand il s'agit de récupérer quelques pièces en échange de matériel récupéré n'importe où, et au contraire deviennent des « escrocs » quand ils ont quelque chose à vendre. Mais bon, notre métier c'est quand même de faire du profit, comme tout le monde.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>ARNAQUE ET CARAMBOUILLE (CHA) : permet d'arnaquer les marchands pour obtenir des remises.</li>" +
    "<li>ÉRUDITION (INT) : le héros sait lire, écrire et compter sans passer d'épreuve.</li>" +
    "<li>FARIBOLES (INT, CHA) : bonus pour déstabiliser, distraire et captiver l'auditoire à l'aide de son baratin.</li>" +
    "<li>MÉFIANCE (INT) : permet de savoir si un autre personnage ment.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Chef de groupe (décisionnel, persuader les alliés)</li>" +
    "<li>Chevaucher</li>" +
    "<li>Cuistot (améliore les repas et la récupération induite)</li>" +
    "<li>Forgeron (améliorer/réparer des armes)</li>" +
    "<li>Instinct du trésor (sentir trésors et cachettes)</li>" +
    "<li>Runes bizarres (lecture des langages compliqués)</li>" +
    "</ul>"
  },
  {
    id: 'ingenieur',
    title: 'Ingénieur',
    conditions: [
      {
        carac : 'Adresse',
        op : 'Min',
        value : 11
      }
    ],
    details : "<h3>Ingénieur</h3>" +
    "<p>Personnage doué pour le bricolage, l'utilisation de l'environnement, les plans (y compris mauvais).</p>" +
    "<p>Armure max : PR3. Utilisation possible de magie si intelligence supérieure à 10. Pas d'arme à 2 mains.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'ai un talent : je peux fabriquer des trucs à partir de n'importe quoi. Alors évidemment, c'est parfois un peu dangereux, mais il reste que ça permet à l'humanité d'avancer, et je pense qu'il y a de quoi en être fier. Je suis plutôt adroit, je ne suis pas forcément un grand combattant mais j'arrive souvent à tirer mon épingle du jeu grâce à mon imagination.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>BRICOLO DU DIMANCHE : possibilité de fabriquer des objets variés à partir de matières premières, des réparations.</li>" +
    "<li>DÉSAMORCER : le héros peut s'aider d'un bonus pour désamorcer des pièges ou mécanismes.</li>" +
    "<li>FORGERON (AD) : capacité spéciale permettant de réparer ou d'améliorer des armes.</li>" +
    "<li>RESSEMBLE À RIEN : permet de se faire oublier, de passer inaperçu.</li>" +
    "<li>SERRURIER (AD) : peut tenter de crocheter des mécanismes et serrures, sans malus à l'épreuve.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Appel des renforts (fuir sans se faire frapper dans le dos)</li>" +
    "<li>Cuistot (améliore les repas et la récupération induite)</li>" +
    "<li>Chevaucher</li>" +
    "<li>Érudition (savoir lire, écrire et compter – INT minimum 10)</li>" +
    "<li>Nager</li>" +
    "<li>Premiers soins</li>" +
    "</ul>"
  },
  {
    id: 'pirate',
    title: 'Pirate',
    conditions: [
      {
        carac : 'Courage',
        op : 'Min',
        value : 11
      },
      {
        carac : 'Adresse',
        op : 'Min',
        value : 11
      }
    ],
    details : "<h3>Pirate</h3>" +
    "<p>Personnage polyvalent, roublard et plutôt habile. Se promène une mauvaise réputation.</p>" +
    "<p>Ne peut changer de métier (pirate pour la vie !). Armure max : PR3. Pas d'arme à deux mains.</p>" +
    "<p>Peut utiliser les objets magiques ou parchemins.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>Je suis un pirate, un vrai. Je suis absolument réfractaire à toute forme de réglementation et d'ordre. Je peux aussi bien faire le solitaire que joindre une coterie quelconque, voler, mendier, régner sur les mers. Je n'ai aucun code et je me fiche des religions, et je n'ai que faire des notions du bien et du mal. Je peux faire un peu tout et n'importe quoi, mais surtout, j'aime les choses simples de la vie : l'alcool, la fête, l'argent facile.</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>APPEL DU TONNEAU (INT) : le héros a du mal à se tenir en présence d'alcool.</li>" +
    "<li>ARNAQUE ET CARAMBOUILLE (CHA) : permet d'arnaquer les marchands pour obtenir des remises.</li>" +
    "<li>CHOURAVER (AD) : donne un bonus pour toutes les épreuves de vol à la tire.</li>" +
    "<li>ESCALADER (AD) : permet de grimer un peu partout avec un bonus aux épreuves.</li>" +
    "<li>NAGER (AD, FO) : le héros a déjà appris à nager et peut passer des épreuves en immersion.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Détection (pièges et embûches, danger)</li>" +
    "<li>Fouiller dans les poubelles (trouver les meilleurs objets quand on fouille)</li>" +
    "<li>Instinct du trésor (sentir trésors et cachettes)</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Mendier et pleurnicher (gagner des PO entre deux aventures)</li>" +
    "<li>Tirer correctement</li>" +
    "</ul>"
  },
  {
    id: 'noble',
    title: 'Noble',
    conditions: [
      {
        carac : 'Intelligence',
        op : 'Min',
        value : 10
      },
      {
        carac : 'Charisme',
        op : 'Min',
        value : 11
      }
    ],
    details : "<h3>Noble</h3>" +
    "<p>Personnage destiné à... se la jouer en toute situation.</p>" +
    "<p>Aucune restriction particulière, car le noble pense qu'il peut tout faire – ce qui est faux, bien sûr.</p>" +
    "<p>Consulter le guide « origines et métiers » pour en savoir plus.</p>" +
    "<p>J'ai l'énorme avantage d'avoir été bien né. Mes parents sont puissants et influents, et j'ai donc reçu une éducation bien supérieure à celle des autres manants, ce qui fait de moi un être beau, intelligent, riche et surtout modeste. Je pense d'ailleurs qu'il est anormal que le destin du monde soit confié à des paysans sortis de nulle part, et c'est pourquoi j'ai décidé de partir à l'aventure moi-même, afin de relever le niveau. Forces du mal, prenez garde !</p>" +
    "<h4>J'ai développé les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>APPEL DES RENFORTS : permet de fuir un combat sans risquer d'être blessé.</li>" +
    "<li>ATTIRE LES MONSTRES : au début du combat, le héros est toujours pris pour cible par les monstres et les ennemis.</li>" +
    "<li>CHEVAUCHER (AD, CHA) : permet de monter à cheval sans épreuve, ou d'essayer de monter d'autres animaux.</li>" +
    "<li>ÉRUDITION (INT) : le héros sait lire, écrire et compter sans passer d'épreuve.</li>" +
    "<li>PÉNIBLE (INT) : le héros agace les membre de son groupe, et ça peut lui valoir des baffes.</li>" +
    "</ul>" +
    "<h4>Je peux développer les compétences suivantes :</h4>" +
    "<ul>" +
    "<li>Arnaque et carambouille (bonnes affaires chez les marchands)</li>" +
    "<li>Chef de groupe (décisionnel, persuader les alliés)</li>" +
    "<li>Jonglage et danse</li>" +
    "<li>Méfiance (découvrir si un PNJ ment)</li>" +
    "<li>Nager</li>" +
    "<li>Runes bizarres (lecture des langages compliqués)</li>" +
    "</ul>"
  }
];