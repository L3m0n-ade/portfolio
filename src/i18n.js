import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    fallbackLng: "en",
    returnObjects:true,
    resources: {
        en: {
            translation: {
                hi: "Hi!",
                description:{
                    line1: "Hello! I'm Halima Suijkerbuijk, currently a 2nd year student at Fontys ICT. I enjoy creating both back-end & front-end projects, and have mostly worked with web development.",
                    line2: "Below are some of the projects from the past few semesters:"
                },
                fnfdesc:"A multiplayer fishing game, where players can compete with others to score the most points in 2 minutes. Players can choose from several cat avatars to play as, and view scores on the leaderboard.",
                keyboardonly:"(Game only playable with keyboard)",
                recipdesc:"A recipe web app, where users can write, discover and save recipes or articles, leave comments and follow other users. Searching can be done with several filters like category, ingredients, title and more.",
                visit:"Visit",
                jan:"January",
                jun:"June"
            }
        },
        nl: {
            translation: {
                hi: "Hoi!",
                description:{
                    line1: "Hallo! Ik ben Halima Suijkerbuijk, op dit moment een tweedejaars student op Fontys ICT. Ik werk graag aan zowel back-end als front-end projecten, en heb vooral met web development gewerkt.",
                    line2: "Hieronder een aantal projecten van de afgelopen semesters:"
                },
                fnfdesc:"Een multiplayer visspel, waar spelers samen met anderen binnen 2 minuten de meeste punten proberen te halen. Spelers kunnen uit verschillende avatars kiezen om te spelen, en scores op het leaderboard bekijken.",
                keyboardonly:"(Game alleen te spelen met keyboard)",
                recipdesc:"Een web app voor recepten, waar gebruikers recepten of artikelen kunnen schrijven, vinden en opslaan, comments achterlaten en andere gebruikers volgen. Zoeken kan met verschillende filters, zoals categorie, ingredienten, titel en meer.",
                visit:"Bekijk",
                jan:"Januari",
                jun:"Juni"
            }
        }
    }
})