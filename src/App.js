import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomeHeader from './components/HomeHeader';
import Schedule from './components/Schedule';
import InnovativeClasses from './components/InnovativeClasses';
import Footer from './components/Footer';
import Header from "./components/Header";
import Instructor from "./components/Instructor";
import Studio from "./components/Studio";
import InstructorImages from "./components/InstructorImages";
import ContactStudio from "./components/ContactStudio";
import Impressum from "./components/Impressum";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Faq from "./components/Faq";
import poleDanceFirstPoleStepsImg from './img/first_pole_steps_pegasus_pole.jpg';
import poleDanceExoticPoleFlowImg from './img/exotic_pole_flow_pegasus_pole.jpg';
import poleDanceFreeTrainingImg from './img/freies_training_pegasus_pole.jpg';
import poleDancePoleChoreoImg from './img/pole_choreo_pegasus_pole.jpg';
import poleDancePoleFitnessImg from './img/pole_fitness_pegasus_pole.jpg';
import bodyStyleMobilityAndStretchingImg from './img/mobility_and_stretching_pegasus_pole.jpg';
import bodyStylePowerPoleImg from './img/power_pole_pegasus_pole.jpg';
import schnupperStundeImg from './img/schnupper_stunde_pegasus_pole.jpg';
import privatePrivateClassesImg from './img/privatstunde_pegasus_pole.jpg';
import privatePrivateGroupImg from './img/privatstunde_pegasus_pole.jpg';
import privatePrivatePolePartyImg from './img/privat_pole_party_pegasus_pole.jpg';
import InstructorDetailed from "./components/InstructorDetailed";
import ClassGroupTemplate from "./components/ClassGroupTemplate";
import Gewinnspiel from "./components/Gewinnspiel";

function App() {
    const menuList = {
        home               : {
            menuTitle : 'Home',
            pageTitle : null,
            uri       : "/",
        },
        about              : {
            menuTitle : 'Studio',
            pageTitle : "Studio",
            uri       : "/studio"
        },
        schedule           : {
            menuTitle : 'Kursplan',
            pageTitle : "Kursplan",
            uri       : "/kursplan"
        },
        innovativeClasses  : {
            menuTitle : 'Kursangebot',
            pageTitle : "Kursangebot",
            uri       : "/kursangebot"
        },
        contact            : {
            menuTitle : 'Kontakt',
            pageTitle : "Kontakt",
            uri       : "/kontakt"
        },
        impressum          : {
            menuTitle : 'Impressum',
            pageTitle : "Impressum",
            uri       : "/impressum"
        },
        privacyPolicy      : {
            menuTitle : 'Datenschutz',
            pageTitle : "Datenschutzerkl??rung",
            uri       : "/datenschutzerklaerung"
        },
        termsAndConditions : {
            menuTitle : 'AGB',
            pageTitle : "Allgemeine Gesch??ftsbedingungen",
            uri       : "/allgemeine-geschaeftsbedingungen"
        },
        faq                : {
            menuTitle : 'FAQ',
            pageTitle : "H??ufig gestellte Fragen",
            uri       : "/haufig-gestellte-fragen"
        },
        gewinnspiel          : {
            menuTitle : 'Gewinnspiel',
            pageTitle : "Gewinnspiel",
            uri       : "/gewinnspiel"
        },
    };

    const classGroupList = [
        {
            title   : 'Pole Dance Kurse',
            classes : [
                {
                    title        : 'First Pole Steps',
                    subTitle     : 'Einf??hrungskurs, Kursdauer: 4 x 75 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Dieser Kurs ist ein Einf??hrungskurs f??r Anf??nger zum Erlernen der Grundtechniken von Spins, Climbs und Poletricks. Der Fokus liegt beim Aufbau von Technik, Kraft und Flexibilit??t ohne Akrobatik.",
                    ],
                    image        : poleDanceFirstPoleStepsImg,
                    tickets      : [
                        {
                            name      : 'First Pole Steps 4er Ticket',
                            valid     : '4 Wochen',
                            price     : '84 EUR'
                        }
                    ]
                },
                {
                    title        : 'Pole Fitness',
                    subTitle     : 'Level 1-6, Kursdauer: 75 Minuten, fortlaufend',
                    descriptions : [
                        "Voraussetzung: First Pole Steps und eine erfolgreiche Mini-Pr??fung des vorherigen Levels",
                        "In den Pole Fitness Kursen lernst du Schritt f??r Schritt Tricks, Spins und Kombinationen in deinem eigenen Tempo vom Anf??nger bis zum Fortgeschrittenen. Wir trainieren und perfektionieren die Elemente, bis sie richtig sitzen und bauen gleichzeitig wichtige Kraftreserven auf. Jede neue Figur motiviert dich und macht dich stolz, wenn du sie gemeistert hast.",
                        "Um zum n??chsten Level aufzusteigen, muss jeder eine Mini-Level-Pr??fung bestehen. Aber keine Panik, es geht nur darum, dass du die erlernten Figuren sicher beherrschst, denn darauf bauen die folgenden Level auf.",
                    ],
                    image        : poleDancePoleFitnessImg,
                    tickets      : [
                        {
                            name      : 'Pole Fitness Einzelticket',
                            valid     : '2 Wochen',
                            price     : '25 EUR'
                        },
                        {
                            name      : 'Pole Fitness 5er Ticket',
                            timeCount : '5',
                            valid     : '8 Wochen',
                            price     : '115 EUR'
                        },
                        {
                            name      : 'Pole Fitness 10er Ticket',
                            valid     : '16 Wochen',
                            price     : '210 EUR'
                        },
                    ]
                },
                {
                    title        : 'Pole Choreo',
                    subTitle     : 'Level 1-6, Kursdauer: 4 x 90 Minuten',
                    descriptions : [
                        "Voraussetzung: First Pole Steps und je nach aktuellem Kurslevel",
                        "Hier kannst du eine komplette Choreografie zu einem Musikst??ck lernen, die aus den Elementen des Pole Fitness Kurses mit t??nzerischen Bewegungen aufgebaut ist. In diesem Kurs wird sowohl Rhythmus als auch Musikalit??t vermittelt.",
                        "Gerne stelle ich Choreos in verschiedenen Tanz- und Musikstilen nach euren W??nschen zusammen. Du magst Salsa, Bachata, Reggaeton, Tango, Kizomba, Modern Jazz, Rock, Hip-Hop, Contemporary oder andere Stilrichtungen, dann bist du in meinen Kursen genau richtig!",
                        "Ich freue mich auf eure Ideen.",
                        "Pole Choreo wird nicht fortlaufend, sondern als Special angeboten. Wenn ich einen neuen Kurs plane, informiere ich euch ??ber die genauen Details der Choreo auf der Webseite sowie ??ber Social Media.",
                        "Bei der Choreografie trainieren wir paarweise an einer Stange und tanzen in 2 Gruppen. Somit kannst du visuell viel von anderen lernen. Diese Kurse dauern 90 Minuten, sodass jeder Teilnehmer auf seine Kosten kommt.",
                    ],
                    image        : poleDancePoleChoreoImg,
                    tickets      : [
                        {
                            name      : 'Pole Choreo 4er Ticket',
                            valid     : '4 Woche',
                            price     : '92 EUR'
                        }
                    ]
                },
                {
                    title        : 'Exotic Pole Flow',
                    subTitle     : 'All Level, Kursdauer: 4 x 90 Minuten (4 Wochen Kurs)',
                    descriptions : [
                        "Voraussetzung: First Pole Steps",
                        "Tauche ein in die exotische, sinnliche Welt des Pole Dance. Es ist mehr als Tanzen auf High Heels.",
                        "Trau dich und erwecke die G??ttin in dir!",
                        "Exotic Pole Flow vereint dynamische und sinnliche Bewegungen, Floorwork, Bodywaves, Legwaves, Heel Clacks und ein bisschen Akrobatik in einer Choreographie an und um die Pole.",
                        "Exotic Pole Flow wird nicht fortlaufend, sondern als Special angeboten. Wenn ich einen neuen Kurs plane, informiere ich euch ??ber die genauen Details der Choreo auf der Webseite sowie ??ber Social Media.",
                        "Bei der Choreografie trainieren wir paarweise an einer Stange und tanzen in 2 Gruppen. Somit kannst du visuell viel von anderen lernen. Diese Kurse dauern 90 Minuten, sodass jeder Teilnehmer auf seine Kosten kommt.",
                    ],
                    image        : poleDanceExoticPoleFlowImg,
                    tickets      : [
                        {
                            name      : 'Exotic Pole Flow 4 Wochen Kurs',
                            valid     : '4 Wochen',
                            price     : '92 EUR'
                        }
                    ]
                },
                {
                    title        : 'Freies Training',
                    subTitle     : 'All Level, Kursdauer: 75 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Du m??chtest neben dem regul??ren Kurstraining selbstst??ndig im Studio trainieren, weil es zu Hause ???",
                        "??? keine Stange ist.",
                        "??? nicht genug Platz um die Stange herum ist.",
                        "??? die Decke zu niedrig ist.",
                        "??? alleine trainieren einfach langweilig ist.",
                        "Dann komm gerne zum Freies Training ins Studio. Du mietest dir eine Stange und trainierst alleine oder mit deinen Freunden, auf eigene Gefahr und ohne Anleitung von Trainern.",
                    ],
                    image        : poleDanceFreeTrainingImg,
                    tickets      : [
                        {
                            name      : 'Freies Training Einzelticket',
                            valid     : '2 Wochen',
                            price     : '10 EUR'
                        },
                        {
                            name      : 'Freies Training 5er Ticket',
                            valid     : '8 Wochen',
                            price     : '40 EUR'
                        },
                        {
                            name      : 'Freies Training 10er Ticket',
                            valid     : '16 Wochen',
                            price     : '60 EUR'
                        },
                    ]
                },
            ]
        },
        {
            title   : 'Bodystyle Kurse',
            classes : [
                {
                    title        : 'Power Pole',
                    subTitle     : 'All level, Kursdauer: 60 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Kraft-, Konditionsaufbau und Funktionales Training mit der Stange.",
                        "Auch f??r Teilnehmer ohne Pole-Kenntnisse geeignet.",
                        "Dieser Kurs bietet Kraft- und Konditionstraining mit und ohne Stange und hilft deine Wunschtricks viel schneller zu erreichen und dich und deinen K??rper fit zu halten.",
                    ],
                    image        : bodyStylePowerPoleImg,
                    tickets      : [
                        {
                            name      : 'Bodystyle Einzelticket',
                            valid     : '2 Wochen',
                            price     : '16 EUR'
                        },
                        {
                            name      : 'Bodystyle 5er Ticket',
                            valid     : '8 Wochen',
                            price     : '70 EUR'
                        },
                        {
                            name      : 'Bodystyle 10er Ticket',
                            valid     : '16 Wochen',
                            price     : '120 EUR'
                        },
                    ]
                },
                {
                    title        : 'Mobility and Stretching',
                    subTitle     : 'All level, Kursdauer: 60 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Wolltest du schon immer einen sch??nen Spagat oder eine Br??cke und spektakul??re Figuren an der Pole ausf??hren k??nnen? Dann ist dieser Mobility and Stretching Kurs genau das Richtige f??r dich, um an der Verbesserung deiner Beweglichkeit von Schultern, Wirbels??ule, H??fte und Beinen gezielt zu arbeiten. Es ist eine ideale Erg??nzung zu den Pole Fitness Kursen, um dich schneller zu verbessern. Wir wechseln w??chentlich zwischen R??cken- und Schulterstretching sowie Spagattraining (Frauen- und M??nnerspagat) ab, damit ausreichend Zeit f??r jeden Bereich bleibt.\n" +
                        "W??hrend des Stretching-Trainings arbeiten wir an der Muskelkraft und aktiver Beweglichkeit, sodass du zum Beispiel bessere Spagate in der Luft machen kannst.\n" +
                        "Manchmal bauen wir auch leichte Bodenakrobatik-Elemente in unser Training ein.",
                        "In Bodystyle Kursen setze ich neben der Stange auch folgende Ger??te ein, die die Effektivit??t des Trainings steigern bzw. unterst??tzen:",
                        "- Elastisches Fitnessb??nder",
                        "- Yoga-Bl??cke",
                        "- Gewichtsmanschetten f??r Fu??gelenke",
                    ],
                    image        : bodyStyleMobilityAndStretchingImg,
                    tickets      : [
                        {
                            name      : 'Bodystyle Einzelticket',
                            valid     : '2 Wochen',
                            price     : '16 EUR'
                        },
                        {
                            name      : 'Bodystyle 5er Ticket',
                            valid     : '8 Wochen',
                            price     : '70 EUR'
                        },
                        {
                            name      : 'Bodystyle 10er Ticket',
                            valid     : '16 Wochen',
                            price     : '120 EUR'
                        },
                    ]
                },
            ]
        },
        {
            title   : 'Schnupperstunde',
            classes : [
                {
                    title        : 'Schnupperstunde',
                    subTitle     : '',
                    descriptions : [
                        "Pole Fitness (75 Minuten)",
                        "Bodystyle (60 Minuten)",
                        "Du w??rdest Pole Dance, Bodystyling gerne mal ausprobieren? Melde dich zu einer Schnupperstunde an! Anmelden kannst du dich ??ber unseren Stundenplan und im Buchungsvorgang direkt online bezahlen. Geschnuppert werden kann in allen laufenden Level 1 Kursen und Bodystyle Kursen. Eine Schnupperstunde ist pro Person nur einmal buchbar.",
                    ],
                    image        : schnupperStundeImg,
                    tickets      : [
                        {
                            name      : 'Schnupperstunde Pole Einzelticket',
                            valid     : '2 Wochen',
                            price     : '16 EUR'
                        },
                        {
                            name      : 'Schnupperstunde Bodystyle Einzelticket',
                            valid     : '2 Wochen',
                            price     : '10 EUR'
                        },
                    ]
                },
            ]
        },
        {
            title   : 'Private Classes and Events',
            classes : [
                {
                    title        : 'Privatstunde',
                    subTitle     : 'All level, 75 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Privatstunden sind besonders zu empfehlen, wenn du bestimmte Figuren lernen oder schneller vorankommen m??chtest. Wenn du ein wenig zu sch??chtern bist, um in einer Gruppe zu trainieren, dann komme zu einer Privatstunde.",
                        "Dieses Training wird so gestaltet, dass es f??r dich zu 100 % entspricht. Also teile mir gerne deine W??nsche mit. Termin nach Vereinbarung.",
                    ],
                    image        : privatePrivateClassesImg,
                    tickets      : [
                        {
                            name      : 'Privatstunde 1 Person Einzelticket',
                            valid     : '1 Jahr',
                            price     : '70 EUR'
                        },
                        {
                            name      : 'Privatstunde 2 Personen Einzelticket',
                            valid     : '1 Jahr',
                            price     : '45 EUR Pro Person'
                        },
                    ]
                },
                {
                    title        : 'Privatgruppe',
                    subTitle     : 'All level, 75 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "M??chtest du Pole Dance ausprobieren oder trainieren, findest aber im Kursplan keinen passenden Termin? Gerne vereinbare ich f??r euch ein Training an dem Tag, der euch passt. Wir k??nnen das Training nach euren W??nschen gestalten ??? ob ihr nur Figuren oder doch eine Choreo lernen m??chtet. Mindestteilnehmerzahl: 3 Personen, Termin nach Vereinbarung.",
                    ],
                    image        : privatePrivateGroupImg,
                    tickets      : [
                        {
                            name      : 'Privatgruppe 3 - 5 Personen Einzelticket',
                            valid     : '1 Jahr',
                            price     : '35 EUR Pro Person'
                        },
                        {
                            name      : 'Privatgruppe 6 - 9 Personen Einzelticket',
                            valid     : '1 Jahr',
                            price     : '30 EUR Pro Person'
                        },
                        {
                            name      : 'Privatgruppe 10 - 12 Personen Einzelticket',
                            valid     : '1 Jahr',
                            price     : '27 EUR Pro Person'
                        },
                    ]
                },
                {
                    title        : 'Private Pole Party',
                    subTitle     : '90 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Special Event!",
                        "Ob Junggesellinnenabschied, Geburtstags??berraschung, M??delsabend oder einfach nur so. Ihr seid herzlich willkommen. Komm mit deinen Freundinnen vorbei und mache den Abend zu einem unvergesslichen Erlebnis! Ich werde euch mit einem Prosecco in entspannter und gut gelaunter Atmosph??re begr????en. Den Stundeninhalt k??nnen wir gern vorher individuell mit euch besprechen, von klassisch akrobatisch bis hin zu verf??hrerisch sexy, von einzelnen Tricks und Spins bis hin zu einer Choreografie, bin ich f??r euch da! Ihr k??nnt gerne zum Abschied jede Menge Erinnerungsfotos machen, um diesen besonderen Abend noch unvergesslicher zu machen.",
                        "Schreib mir einfach eine E-Mail mit dem gew??nschten Termin und der ungef??hren Teilnehmerzahl und ich melde mich schnellstm??glich bei dir zur??ck.",
                        "Die Kosten betragen 180 Euro f??r bis zu 6 Teilnehmer*innen und 25 Euro f??r jede weitere Person.",
                        "(max. 22 Teilnehmer)",
                        "Die Veranstaltung dauert insgesamt 90 Minuten. Termin nach Vereinbarung.",

                    ],
                    image        : privatePrivatePolePartyImg,
                },
            ]
        },
    ];

    const faqList = [
        {
            question : 'Was ist Pole Dance und was ist Aerial Yoga?',
            answer   : [
                "Pole Dance ist eine neue Trendsportart, eine Mischung aus Tanz, Fitness und Akrobatik und hat als Sportart in den letzten Jahren viel Hype bekommen. Es verbindet Kraft, Ausdauer, Flexibilit??t, Koordination, vereint t??nzerische Elemente mit Eleganz und ??sthetik und f??hrt zu einem besseren K??rpergef??hl und mehr Selbstbewusstsein.",
                "Wie der Name schon sagt, werden beim Pole Dance, Figuren und Bewegungen an und um eine Stange mit begleitender Musik ausgef??hrt. Ein powervolles und umfassendes Ganzk??rpertraining, bei dem die Arm- und Oberk??rpermuskulatur besonders beansprucht wird, um das eigene K??rpergewicht zu halten. Hinzu kommt die Gelenkigkeit und Beweglichkeit, die dem Tanz ihre Eleganz verleihen.",
                "",
                "Aerial Yoga ist eine faszinierende neue Trainingsform mit einem Artistik-Tuch. Sie verbindet Luftakrobatik (engl. Aerial Arts), t??nzerische Elemente mit effektivem funktionellem Schlingentraining und Yoga. Der Spa??faktor ist besonders beim Schwingen, Schaukeln und Drehen riesig. Neben den Kr??ftigungs- und Dehnungs??bungen l??dt diese gem??tlich-herausfordernde Artistik-H??ngematte auch zum Entspannen ein.",
            ]
        },
        {
            question : 'Welche Voraussetzungen ben??tige ich um Pole Dance / Aerial Yoga zu trainieren?',
            answer   : [
                "Keine! Du musst keine vorherige Sport- oder Tanzerfahrung, Kraft oder Flexibilit??t zu haben. Geschlecht und Alter und wie gro?? oder schwer du bist, spielen keine Rolle. Jeder ist bei uns herzlich willkommen! Wir beginnen mit den Grundlagen und bringen dir alles bei. Du w??rdest uns vorher nicht glauben, was du alles schaffen kannst! Das Einzige, was du mitbringen solltest, ist die Motivation, dich fit zu halten und diesen Sport zu erlernen. Das Wichtigste ist, dass du Spa?? am Tanzen hast.",
                "Jeder Anfang ist schwer. Wer dran bleibt und nicht aufgibt, wird mit viel Ehrgeiz und ??bung schnell die ersten Erfolgserlebnisse haben.",
            ]
        },
        {
            question : 'Was muss ich mitbringen und vor dem Training beachten?',
            answer   : [
                "Neben deiner Motivation solltest du Geduld und Freude mitbringen! Auf Bildern und Videos sieht es meist einfacher aus, als es ist.",
                "Bring deine Sportkleidung mit, am besten eine kurze Hose und ein kurzes Top oder Sport-BH (um genug Hautkontakt an der Stange zu haben), ein Handtuch und genug Fl??ssigkeit. (Bitte keine Flasche aus Glas!)",
                "Es ist empfehlenswert, auch l??ngere Trainingsbekleidung f??rs Aufw??rmen anzuziehen. Schuhe werden f??r das Training nicht ben??tigt, wir trainieren barfu??. Nat??rlich f??r Exotic Pole m??glicherweise High Heels mitbringen ??? jeder so, wie er mag.",
                "F??r Aerial Yoga und Bodystyling (Mobility, Stretching, Functional Training) empfehlen wir eine lange Hose tragen.",
                "Au??erdem sollte auf das Tragen von Schmuck w??hrend des Trainings verzichtet werden, da hier eine hohe Verletzungsgefahr und Besch??digungen an Stange / Yoga Tuch bestehen.",
                "Vor dem Training oder am selben Tag das Eincremen oder Ein??len vermeiden (ansonsten kein Halt an der Stange).",
                "Verwende einen Haargummi f??r lange Haare.",
                "Piercings m??ssen abgeklebt werden.",
                "Bitten erscheine 15 Min. vor Kursbeginn zur Vorbereitung auf den Kurs (Umziehen, Toilette, Fragen stellen etc.), damit wir p??nktlich mit dem Training beginnen k??nnen.",
                "Solltest du sp??ter als 5 Minuten nach Kursbeginn eintreffen, kannst du leider nicht am Kurs teilnehmen, da die Verletzungsgefahr zu gro?? ist."
            ]
        },
        {
            question : 'Ist das Alter egal?',
            answer   : [
                "Ja, grunds??tzlich kannst du unseren Sport in jedem Alter lernen. Unsere Kurse sind allerdings didaktisch auf Erwachsene ausgelegt, Kinder unter 14 Jahren k??nnen nicht teilnehmen. Es gibt keine Altersbegrenzung nach oben ??? lasst euch nicht erz??hlen, dass ihr zu alt f??r Pole Dance oder f??r Aerial Yoga seid!",
                "Wenn du mindestens 14 Jahre alt und aus gesundheitlicher Sicht Sport machen darfst, aber noch nicht vollj??hrig bist, darfst du mit schriftlicher Einverst??ndniserkl??rung deiner Eltern bei uns mitmachen.",
                "Exotic Pole und das Tragen von High Heels erlauben wir Teilnehmerinnen erst ab einem Alter von 16, bzw. 18 Jahren."
            ]
        },
        {
            question : 'Wie melde ich mich an?',
            answer   : [
                "F??r die Teilnahme an den Kursen ist eine Voranmeldung und Bezahlung erforderlich, da wir uns auf den Unterricht vorbereiten und die Pl??tze begrenzt sind. Der Platz ist nach der Buchung f??r den Teilnehmer reserviert und verbindlich.",
                "Gehe einfach zum Stundenplan und klicke auf den gew??nschten Kurs!"
            ]
        },
        {
            question : 'Bekommt jeder Teilnehmer eine eigene Stange / ein eigenes Yoga-Tuch?',
            answer   : [
                "Beim Pole Fitness bist du alleine an einer Stange und bei den Kopf??ber- und Hebefiguren stellen wir Crashmatten auf, um dir Sicherheit zu geben. Das Gleiche gilt f??r Aerial Yoga Kurse.",
                "Bei der Choreografie trainieren wir paarweise an einer Stange bzw.  an einem Tuch und tanzen in 2 Gruppen. Somit kannst du visuell viel von anderen lernen. Diese Kurse dauern 90 Minuten, sodass jeder Teilnehmer auf seine Kosten kommt.",
            ]
        },
        {
            question : 'Kann ich eine Kursstunde absagen?',
            answer   : [
                "Ja, wenn das Training rechtzeitig (mind. 24h vor Kursbeginn) gek??ndigt wird. Falls du (aus welchen Gr??nden auch immer) absagen musst, ist eine R??kerstattung der Geb??hr bis zu 24 Stunden vor Kursbeginn m??glich. Absagen haben schriftlich per E-Mail an info@pegasuspole.de zu erfolgen.",
                "Sollte der Kurs zu einem sp??teren Zeitpunkt gek??ndigt werden oder der/die Teilnehmer*in erscheint nicht zum Kurs/Workshop, muss dieser bezahlt werden.",
            ]
        },
        {
            question : 'Darf jemand beim Training zuschauen?',
            answer   : [
                "Aus Respekt auf unsere Teilnehmer ist das Zuschauen beim gesamten Kurs nicht m??glich. Es ist uns sehr wichtig, dass sich jeder Trainierende wohlf??hlt. Besucher k??nnen sich aber gern einen kurzen Eindruck vom Kurs verschaffen und vorbeikommen, um das Studio zu besichtigen, oder sogar selbst ein Probetraining machen.",
            ]
        },
        {
            question : 'Ben??tige ich Hilfsmittel, um nicht an der Stange abzurutschen?',
            answer   : [
                "Damit du von der Stange nicht abrutschst, solltest du ein Handtuch mitnehmen, da du w??hrend des Trainings ??fters schwitzen wirst und die Stange im Bedarfsfall reinigen kannst.",
                "Zus??tzlich gibt es verschiedene Gripmittel, die man nutzen kann, um besseren Halt an der Stange zu haben. Diese werden dir in den ersten Unterrichtsstunden vorgestellt und jeder kann sich f??r seine optimalste L??sung entscheiden."
            ]
        },
        {
            question : 'Kann ich eine Schnupperstunde machen?',
            answer   : [
                "Ja, du kannst bei uns eine Schnupperstunde machen, um dir einen ersten Eindruck verschaffen.",
                "Eine Schnupperstunde kostet 16 ??? und ist pro Person nur einmal buchbar."
            ]
        },
        {
            question : 'Gibt es bei euch Parkpl??tze?',
            answer   : [
                "Ja. Und diese sind sogar kostenlos. Auf der Hausvorderseite stehen jede Menge Parkpl??tze zur Verf??gung."
            ]
        },
        {
            question : 'In welcher Sprache wird unterrichtet?',
            answer   : [
                "Die Kurse werden auf Deutsch unterrichtet, aber auf Anfrage gebe ich gerne Privatstunden auf Englisch oder Ungarisch (Einzel bzw. Gruppentraining)."
            ]
        },
        {
            question : 'Gibt es einen Studentenrabatt f??r die Kurse?',
            answer   : [
                "10% Erm????igung nur bei Vorlage eines g??ltigen Studenten- oder Sch??lerausweises."
            ]
        },
        {
            question : 'Welche Coronamassnahmen gelten momentan?',
            answer   : [
                "Aktuell gelten keine Coronamassnahmen mehr. Wir d??rfen ohne Maske trainieren und ein Zertifikat ist nicht zwingend erforderlich. Solltest du dich jedoch krank f??hlen, bitten wir dich darum, dich von dem Kurs abzumelden."
            ]
        }
    ];

    return (
        <Router>
            <NavBar menus={menuList}/>
            <Routes>
                <Route
                    path={menuList.home.uri}
                    element={
                        <>
                            <HomeHeader/>
                            <main>
                                <section>
                                    <Instructor/>
                                    <InstructorImages/>
                                </section>
                                <Schedule/>
                                <InnovativeClasses/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.about.uri}
                    element={
                        <>
                            <Header title={menuList.about.pageTitle}/>
                            <main>
                                <section>
                                    <InstructorDetailed/>
                                </section>
                                <Studio/>
                                <InnovativeClasses/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.schedule.uri}
                    element={
                        <>
                            <Header title={menuList.schedule.pageTitle}/>
                            <main>
                                <Schedule/>
                            </main>

                        </>
                    }
                />
                <Route
                    path={menuList.innovativeClasses.uri}
                    element={
                        <>
                            <Header title={menuList.innovativeClasses.pageTitle}/>
                            <main>
                                <div className="container">
                                    <section>
                                        <div className="container-fluid">
                                            <div className="container">
                                                {
                                                    classGroupList.map((classData, index) =>
                                                        <ClassGroupTemplate
                                                            key={index}
                                                            title={classData.title}
                                                            classes={classData.classes}
                                                        />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.contact.uri}
                    element={
                        <>
                            <Header title={menuList.contact.pageTitle}/>
                            <main>
                                <ContactStudio/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.impressum.uri}
                    element={
                        <>
                            <Header title={menuList.impressum.pageTitle}/>
                            <main>
                                <Impressum/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.privacyPolicy.uri}
                    element={
                        <>
                            <Header title={menuList.privacyPolicy.pageTitle}/>
                            <main>
                                <PrivacyPolicy/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.termsAndConditions.uri}
                    element={
                        <>
                            <Header title={menuList.termsAndConditions.pageTitle}/>
                            <main>
                                <TermsAndConditions/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.faq.uri}
                    element={
                        <>
                            <Header title={menuList.faq.pageTitle}/>
                            <main>
                                <Faq faqList={faqList}/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.gewinnspiel.uri}
                    element={
                        <>
                            <Header title={menuList.gewinnspiel.pageTitle}/>
                            <main>
                                <Gewinnspiel/>
                            </main>
                        </>
                    }
                />
            </Routes>
            <Footer menus={menuList}/>
        </Router>
    );
}

export default App;
