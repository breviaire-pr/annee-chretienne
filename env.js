const sites = [
    {
        title: 'Bible de Sacy',
        url: 'https://bible.sacy.be'
    },
    {
        title: 'Heures de Port-Royal',
        url: 'https://heures.sacy.be'
    },
    {
        title: 'De l’Imitation de Jésus-Christ',
        url: 'https://imitation.sacy.be'
    },
    {
        title: 'Bible de Royaumont',
        url: 'https://royaumont.sacy.be'
    },
    {
        title: 'Considérations de Saint-Cyran',
        url: 'https://considerations.sacy.be'
    },
    {
        title: 'Théologie Familière de Saint-Cyran',
        url: 'https://theologie-familiere.sacy.be'
    },
    {
        title: 'L’Année Chrétienne - Le Tourneux',
        url: 'https://missel.sacy.be'
    },
    {
        title: 'Hiver - Bréviaire Le Tourneux',
        url: 'https://breviaire.sacy.be/hiver'
    },
    {
        title: 'Printemps - Bréviaire Le Tourneux',
        url: 'https://breviaire.sacy.be/printemps'
    },
    {
        title: 'Été - Bréviaire Le Tourneux',
        url: 'https://breviaire.sacy.be/ete'
    },
    {
        title: 'Automne - Bréviaire Le Tourneux',
        url: 'https://breviaire.sacy.be/automne'
    }
]

const UI_ENV = {
    title: 'L’Année Chrétienne - Le Tourneux',
    canonical: 'https://missel.sacy.be',
    dataBasePath:'',
    uiPath: 'ui',
    bookSelectorLabel: 'T.',
    chapterSelectorLabel: 'P.',
    numberFormat: n => String(n).padStart(3, '0'),
    sites,
    footerText: "Digitized by Google",
    links: [
        {
            title: 'Remarque, erreur ? contact@sacy.be',
            url: 'mailto:contact@sacy.be'
        },
        {
            title: 'code source du site web',
            url: 'https://github.com/breviaire-pr/annee-chretienne'
        },
        {
            title: 'autres œuvres de Port-Royal',
            url: 'https://www.sacy.be'
        }
    ]
}