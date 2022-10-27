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
import poleDanceFirstPoleStepsImg from './img/pole-dance-first-pole-steps.jpg';
import poleDanceExoticPoleFlowImg from './img/pole-dance-exotic-pole-flow.jpg';
import poleDanceFreeTrainingImg from './img/pole-dance-free-training.jpg';
import poleDancePoleChoreoImg from './img/pole-dance-pole-choreo.jpg';
import poleDancePoleFitnessImg from './img/pole-dance-pole-fitness.jpg';
import bodyStyleMobilityAndStretchingImg from './img/body-style-mobility-and-stretching.jpg';
import bodyStylePowerPoleImg from './img/body-style-power-pole.jpg';
import privatePrivateClassesImg from './img/private-private-classes.jpg';
import privatePrivateGroupImg from './img/private-private-group.jpg';
import privatePrivatePolePartyImg from './img/private-private-pole-party.jpg';
import InstructorDetailed from "./components/InstructorDetailed";
import ClassGroupTemplate from "./components/ClassGroupTemplate";

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
            menuTitle : 'Schedule',
            pageTitle : "Schedule",
            uri       : "/schedule"
        },
        innovativeClasses  : {
            menuTitle : 'Kurse',
            pageTitle : "Kurse",
            uri       : "/kurse"
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
            pageTitle : "Datenschutzerklärung",
            uri       : "/datenschutzerklaerung"
        },
        termsAndConditions : {
            menuTitle : 'AGB',
            pageTitle : "Allgemeine Geschäftsbedingungen",
            uri       : "/allgemeine-geschaeftsbedingungen"
        },
        faq                : {
            menuTitle : 'FAQ',
            pageTitle : "Häufig gestellte Fragen",
            uri       : "/faq"
        },
    };

    const classGroupList = [
        {
            title   : 'Pole Dance Kurses',
            classes : [
                {
                    title        : 'First Pole Steps',
                    subTitle     : 'Einführungskurs, Kursdauer: 4 x 75 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Dieser Kurs ist ein Einführungskurs für Anfänger zum Erlernen der Grundtechniken von Spins, Climbs und Poletricks. Der Fokus liegt beim Aufbau von Technik, Kraft und Flexibilität ohne Akrobatik.",
                    ],
                    image        : poleDanceFirstPoleStepsImg,
                    tickets      : [
                        {
                            name      : 'First Pole Steps 4er Ticket',
                            timeCount : '4',
                            valid     : '4 Wochen',
                            price     : '84 EUR'
                        }
                    ]
                },
                {
                    title        : 'Pole Fitness',
                    subTitle     : 'Level 1-6, Kursdauer: 75 Minuten, fortlaufend',
                    descriptions : [
                        "Voraussetzung: First Pole Steps und eine erfolgreiche Mini-Prüfung des vorherigen Levels",
                        "In den Pole Fitness Kursen lernst du Schritt für Schritt Tricks, Spins und Kombinationen in deinem eigenen Tempo vom Anfänger bis zum Fortgeschrittenen. Wir trainieren und perfektionieren die Elemente, bis sie richtig sitzen und bauen gleichzeitig wichtige Kraftreserven auf. Jede neue Figur motiviert dich und macht dich stolz, wenn du sie gemeistert hast.",
                        "Um zum nächsten Level aufzusteigen, muss jeder eine Mini-Level-Prüfung bestehen. Aber keine Panik, es geht nur darum, dass du die erlernten Figuren sicher beherrschst, denn darauf bauen die folgenden Level auf.",
                    ],
                    image        : poleDancePoleFitnessImg,
                    tickets      : [
                        {
                            name      : 'Pole Fitness Einzelticket',
                            timeCount : '1',
                            valid     : '1 Woche',
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
                            timeCount : '10',
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
                        "Hier kannst du eine komplette Choreografie zu einem Musikstück lernen, die aus den Elementen des Pole Fitness Kurses mit tänzerischen Bewegungen aufgebaut ist. In diesem Kurs wird sowohl Rhythmus als auch Musikalität vermittelt.",
                        "Gerne stelle ich Choreos in verschiedenen Tanz- und Musikstilen nach euren Wünschen zusammen. Du magst Salsa, Bachata, Reggaeton, Tango, Kizomba, Modern Jazz, Rock, Hip-Hop, Contemporary oder andere Stilrichtungen, dann bist du in meinen Kursen genau richtig!",
                        "Ich freue mich auf eure Ideen.",
                        "Pole Choreo wird nicht fortlaufend, sondern als Special angeboten. Wenn ich einen neuen Kurs plane, informiere ich euch über die genauen Details der Choreo auf der Webseite sowie über Social Media.",
                        "Bei der Choreografie trainieren wir paarweise an einer Stange und tanzen in 2 Gruppen. Somit kannst du visuell viel von anderen lernen. Diese Kurse dauern 90 Minuten, sodass jeder Teilnehmer auf seine Kosten kommt.",
                    ],
                    image        : poleDancePoleChoreoImg,
                    tickets      : [
                        {
                            name      : 'Pole Choreo 4er Ticket',
                            timeCount : '4',
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
                        "Trau dich und erwecke die Göttin in dir!",
                        "Exotic Pole Flow vereint dynamische und sinnliche Bewegungen, Floorwork, Bodywaves, Legwaves, Heel Clacks und ein bisschen Akrobatik in einer Choreographie an und um die Pole.",
                        "Exotic Pole Flow wird nicht fortlaufend, sondern als Special angeboten. Wenn ich einen neuen Kurs plane, informiere ich euch über die genauen Details der Choreo auf der Webseite sowie über Social Media.",
                        "Bei der Choreografie trainieren wir paarweise an einer Stange und tanzen in 2 Gruppen. Somit kannst du visuell viel von anderen lernen. Diese Kurse dauern 90 Minuten, sodass jeder Teilnehmer auf seine Kosten kommt.",
                    ],
                    image        : poleDanceExoticPoleFlowImg,
                    tickets      : [
                        {
                            name      : 'Exotic Pole Flow Ticket',
                            timeCount : '4',
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
                        "Du möchtest neben dem regulären Kurstraining selbstständig im Studio trainieren, weil es zu Hause …",
                        "… keine Stange ist.",
                        "… nicht genug Platz um die Stange herum ist.",
                        "… die Decke zu niedrig ist.",
                        "… alleine trainieren einfach langweilig ist.",
                        "Dann komm gerne zum Freies Training ins Studio. Du mietest dir eine Stange und trainierst alleine oder mit deinen Freunden, auf eigene Gefahr und ohne Anleitung von Trainern.",
                    ],
                    image        : poleDanceFreeTrainingImg,
                    tickets      : [
                        {
                            name      : 'Freies Training Einzelticket',
                            timeCount : '1',
                            valid     : '1 Woche',
                            price     : '10 EUR'
                        },
                        {
                            name      : 'Freies Training 5er Ticket',
                            timeCount : '5',
                            valid     : '8 Wochen',
                            price     : '40 EUR'
                        },
                        {
                            name      : 'Freies Training 10er Ticket',
                            timeCount : '10',
                            valid     : '16 Wochen',
                            price     : '60 EUR'
                        },
                    ]
                },
            ]
        },
        {
            title   : 'Bodystyle Kurses',
            classes : [
                {
                    title        : 'Power Pole',
                    subTitle     : 'All level, Kursdauer: 60 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Kraft-, Konditionsaufbau und Funktionales Training mit der Stange.",
                        "Auch für Teilnehmer ohne Pole-Kenntnisse geeignet.",
                        "Dieser Kurs bietet Kraft- und Konditionstraining mit und ohne Stange und hilft deine Wunschtricks viel schneller zu erreichen und dich und deinen Körper fit zu halten.",
                    ],
                    image        : bodyStylePowerPoleImg,
                    tickets      : [
                        {
                            name      : 'Bodystyle Einzelticket',
                            timeCount : '1',
                            valid     : '1 Woche',
                            price     : '16 EUR'
                        },
                        {
                            name      : 'Bodystyle 5er Ticket',
                            timeCount : '5',
                            valid     : '8 Wochen',
                            price     : '70 EUR'
                        },
                        {
                            name      : 'Bodystyle 10er Ticket',
                            timeCount : '10',
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
                        "Wolltest du schon immer einen schönen Spagat oder eine Brücke und spektakuläre Figuren an der Pole ausführen können? Dann ist dieser Mobility and Stretching Kurs genau das Richtige für dich, um an der Verbesserung deiner Beweglichkeit von Schultern, Wirbelsäule, Hüfte und Beinen gezielt zu arbeiten. Es ist eine ideale Ergänzung zu den Pole Fitness Kursen, um dich schneller zu verbessern. Wir wechseln wöchentlich zwischen Rücken- und Schulterstretching sowie Spagattraining (Frauen- und Männerspagat) ab, damit ausreichend Zeit für jeden Bereich bleibt.\n" +
                        "Während des Stretching-Trainings arbeiten wir an der Muskelkraft und aktiver Beweglichkeit, sodass du zum Beispiel bessere Spagate in der Luft machen kannst.\n" +
                        "Manchmal bauen wir auch leichte Bodenakrobatik-Elemente in unser Training ein.",
                        "In Bodystyle Kursen setze ich neben der Stange auch folgende Geräte ein, die die Effektivität des Trainings steigern bzw. unterstützen:",
                        "- Elastisches Fitnessbänder",
                        "- Yoga-Blöcke",
                        "- Gewichtsmanschetten für Fußgelenke",
                    ],
                    image        : bodyStyleMobilityAndStretchingImg,
                    tickets      : [
                        {
                            name      : 'Bodystyle Einzelticket',
                            timeCount : '1',
                            valid     : '1 Woche',
                            price     : '16 EUR'
                        },
                        {
                            name      : 'Bodystyle 5er Ticket',
                            timeCount : '5',
                            valid     : '8 Wochen',
                            price     : '70 EUR'
                        },
                        {
                            name      : 'Bodystyle 10er Ticket',
                            timeCount : '10',
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
                        "Du würdest Pole Dance, Bodystyling gerne mal ausprobieren? Melde dich zu einer Schnupperstunde an! Anmelden kannst du dich über unseren Stundenplan und im Buchungsvorgang direkt online bezahlen. Geschnuppert werden kann in allen laufenden Pole First Steps bzw. Level 1 Kursen, Bodystyle Kursen. Eine Schnupperstunde ist pro Person nur einmal buchbar.",
                    ],
                    image        : bodyStylePowerPoleImg,
                    tickets      : [
                        {
                            name      : 'Schnupperstunde Pole Einzelticket',
                            timeCount : '1',
                            valid     : '1 Woche',
                            price     : '16 EUR'
                        },
                        {
                            name      : 'Schnupperstunde Bodystyle Einzelticket',
                            timeCount : '1',
                            valid     : '1 Woche',
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
                        "Privatstunden sind besonders zu empfehlen, wenn du bestimmte Figuren lernen oder schneller vorankommen möchtest. Wenn du ein wenig zu schüchtern bist, um in einer Gruppe zu trainieren, dann komme zu einer Privatstunde.",
                        "Dieses Training wird so gestaltet, dass es für dich zu 100 % entspricht. Also teile mir gerne deine Wünsche mit. Termin nach Vereinbarung.",
                    ],
                    image        : privatePrivateClassesImg,
                    tickets      : [
                        {
                            name      : 'Privatstunde 1 Person Einzelticket',
                            timeCount : '1',
                            valid     : '1 Jahr',
                            price     : '70 EUR'
                        },
                        {
                            name      : 'Privatstunde 2 Personen Einzelticket',
                            timeCount : '1',
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
                        "Möchtest du Pole Dance ausprobieren oder trainieren, findest aber im Kursplan keinen passenden Termin? Gerne vereinbare ich für euch ein Training an dem Tag, der euch passt. Wir können das Training nach euren Wünschen gestalten – ob ihr nur Figuren oder doch eine Choreo lernen möchtet. Mindestteilnehmerzahl: 3 Personen, Termin nach Vereinbarung.",
                    ],
                    image        : privatePrivateGroupImg,
                    tickets      : [
                        {
                            name      : 'Privatgruppe 3 - 5 Personen Einzelticket',
                            timeCount : '1',
                            valid     : '1 Jahr',
                            price     : '35 EUR Pro Person'
                        },
                        {
                            name      : 'Privatgruppe 6 - 9 Personen Einzelticket',
                            timeCount : '1',
                            valid     : '1 Jahr',
                            price     : '30 EUR Pro Person'
                        },
                        {
                            name      : 'Privatgruppe 10 - 12 Personen Einzelticket',
                            timeCount : '1',
                            valid     : '1 Jahr',
                            price     : '27 EUR Pro Person'
                        },
                    ]
                },
                {
                    title        : 'Private Pole Party / Junggesellenabschied / Geburtstagsparty',
                    subTitle     : '90 Minuten',
                    descriptions : [
                        "Voraussetzung: keine",
                        "Special Event!",
                        "Ob Junggesellinnenabschied, Geburtstagsüberraschung, Mädelsabend oder einfach nur so. Ihr seid herzlich willkommen. Komm mit deinen Freundinnen vorbei und mache den Abend zu einem unvergesslichen Erlebnis! Ich werde euch mit einem Prosecco in entspannter und gut gelaunter Atmosphäre begrüßen. Den Stundeninhalt können wir gern vorher individuell mit euch besprechen, von klassisch akrobatisch bis hin zu verführerisch sexy, von einzelnen Tricks und Spins bis hin zu einer Choreografie, bin ich für euch da! Ihr könnt gerne zum Abschied jede Menge Erinnerungsfotos machen, um diesen besonderen Abend noch unvergesslicher zu machen.",
                        "Schreib mir einfach eine E-Mail mit dem gewünschten Termin und der ungefähren Teilnehmerzahl und ich melde mich schnellstmöglich bei dir zurück.",
                        "Die Kosten betragen 180 Euro für bis zu 6 Teilnehmer*innen und 25 Euro für jede weitere Person.",
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
                "Pole Dance ist eine neue Trendsportart, eine Mischung aus Tanz, Fitness und Akrobatik und hat als Sportart in den letzten Jahren viel Hype bekommen. Es verbindet Kraft, Ausdauer, Flexibilität, Koordination, vereint tänzerische Elemente mit Eleganz und Ästhetik und führt zu einem besseren Körpergefühl und mehr Selbstbewusstsein.",
                "Wie der Name schon sagt, werden beim Pole Dance, Figuren und Bewegungen an und um eine Stange mit begleitender Musik ausgeführt. Ein powervolles und umfassendes Ganzkörpertraining, bei dem die Arm- und Oberkörpermuskulatur besonders beansprucht wird, um das eigene Körpergewicht zu halten. Hinzu kommt die Gelenkigkeit und Beweglichkeit, die dem Tanz ihre Eleganz verleihen.",
                "",
                "Aerial Yoga ist eine faszinierende neue Trainingsform mit einem Artistik-Tuch. Sie verbindet Luftakrobatik (engl. Aerial Arts), tänzerische Elemente mit effektivem funktionellem Schlingentraining und Yoga. Der Spaßfaktor ist besonders beim Schwingen, Schaukeln und Drehen riesig. Neben den Kräftigungs- und Dehnungsübungen lädt diese gemütlich-herausfordernde Artistik-Hängematte auch zum Entspannen ein."
            ]
        },
        {
            question : 'Welche Voraussetzungen benötige ich um Pole Dance / Aerial Yoga zu trainieren?',
            answer   : [
                "Keine! Du musst keine vorherige Sport- oder Tanzerfahrung, Kraft oder Flexibilität zu haben. Geschlecht und Alter und wie groß oder schwer du bist, spielen keine Rolle. Jeder ist bei uns herzlich willkommen! Wir beginnen mit den Grundlagen und bringen dir alles bei. Du würdest uns vorher nicht glauben, was du alles schaffen kannst! Das Einzige, was du mitbringen solltest, ist die Motivation, dich fit zu halten und diesen Sport zu erlernen. Das Wichtigste ist, dass du Spaß am Tanzen hast.",
                "Jeder Anfang ist schwer. Wer dran bleibt und nicht aufgibt, wird mit viel Ehrgeiz und Übung schnell die ersten Erfolgserlebnisse haben."
            ]
        },
        {
            question : 'Was muss ich mitbringen und vor dem Training beachten?',
            answer   : [
                "Neben deiner Motivation solltest du Geduld und Freude mitbringen! Auf Bildern und Videos sieht es meist einfacher aus, als es ist.",
                "Bring deine Sportkleidung mit, am besten eine kurze Hose und ein kurzes Top oder Sport-BH (um genug Hautkontakt an der Stange zu haben), ein Handtuch und genug Flüssigkeit. (Bitte keine Flasche aus Glas!)",
                "Es ist empfehlenswert, auch längere Trainingsbekleidung fürs Aufwärmen anzuziehen. Schuhe werden für das Training nicht benötigt, wir trainieren barfuß. Natürlich für Exotic Pole möglicherweise High Heels mitbringen – jeder so, wie er mag.",
                "Für Aerial Yoga und Bodystyling (Mobility, Stretching, Functional Training) empfehlen wir eine lange Hose tragen.",
                "Außerdem sollte auf das Tragen von Schmuck während des Trainings verzichtet werden, da hier eine hohe Verletzungsgefahr und Beschädigungen an Stange / Yoga Tuch bestehen.",
                "Vor dem Training oder am selben Tag das Eincremen oder Einölen vermeiden (ansonsten kein Halt an der Stange).",
                "Verwende einen Haargummi für lange Haare.",
                "Piercings müssen abgeklebt werden."
            ]
        },
        {
            question : 'Ist das Alter egal?',
            answer   : [
                "Ja, grundsätzlich kannst du unseren Sport in jedem Alter lernen. Unsere Kurse sind allerdings didaktisch auf Erwachsene ausgelegt, Kinder unter 14 Jahren können nicht teilnehmen. Es gibt keine Altersbegrenzung nach oben – lasst euch nicht erzählen, dass ihr zu alt für Pole Dance oder für Aerial Yoga seid! ",
                "Wenn du mindestens 14 Jahre alt und aus gesundheitlicher Sicht Sport machen darfst, aber noch nicht volljährig bist, darfst du mit schriftlicher Einverständniserklärung deiner Eltern bei uns mitmachen. ",
                "Exotic Pole und das Tragen von High Heels erlauben wir Teilnehmerinnen erst ab einem Alter von 16, bzw. 18 Jahren."
            ]
        },
        {
            question : 'Wie melde ich mich an?',
            answer   : [
                "Für die Teilnahme an den Kursen ist eine Voranmeldung und Bezahlung erforderlich, da wir uns auf den Unterricht vorbereiten und die Plätze begrenzt sind. Der Platz ist nach der Buchung für den Teilnehmer reserviert und verbindlich.",
                "Gehe einfach zum Stundenplan und klicke auf den gewünschten Kurs!"
            ]
        },
        {
            question : 'Bekommt jeder Teilnehmer eine eigene Stange / ein eigenes Yoga-Tuch?',
            answer   : [
                "Beim Pole Fitness bist du alleine an einer Stange und bei den Kopfüber- und Hebefiguren stellen wir Crashmatten auf, um dir Sicherheit zu geben. Das Gleiche gilt für Aerial Yoga Kurse.",
                "Bei der Choreografie trainieren wir paarweise an einer Stange bzw.  an einem Tuch und tanzen in 2 Gruppen. Somit kannst du visuell viel von anderen lernen. Diese Kurse dauern 90 Minuten, sodass jeder Teilnehmer auf seine Kosten kommt."
            ]
        },
        {
            question : 'Kann ich eine Kursstunde absagen?',
            answer   : [
                "Ja, wenn das Training rechtzeitig (mind. 24h vor Kursbeginn) gekündigt wird. Falls du (aus welchen Gründen auch immer) absagen musst, ist eine Rükerstattung der Gebühr bis zu 24 Stunden vor Kursbeginn möglich. Absagen haben schriftlich per E-Mail an info@pegasuspole.de zu erfolgen."
            ]
        },
        {
            question : 'Darf jemand beim Training zuschauen?',
            answer   : [
                "Aus Respekt auf unsere Teilnehmer ist das Zuschauen beim gesamten Kurs nicht möglich. Es ist uns sehr wichtig, dass sich jeder Trainierende wohlfühlt. Besucher können sich aber gern einen kurzen Eindruck vom Kurs verschaffen und vorbeikommen, um das Studio zu besichtigen, oder sogar selbst ein Probetraining machen."
            ]
        },
        {
            question : 'Benötige ich Hilfsmittel, um nicht an der Stange abzurutschen?',
            answer   : [
                "Damit du von der Stange nicht abrutschst, solltest du ein Handtuch mitnehmen, da du während des Trainings öfters schwitzen wirst und die Stange im Bedarfsfall reinigen kannst.",
                "Zusätzlich gibt es verschiedene Gripmittel, die man nutzen kann, um besseren Halt an der Stange zu haben. Diese werden dir in den ersten Unterrichtsstunden vorgestellt und jeder kann sich für seine optimalste Lösung entscheiden."
            ]
        },
        {
            question : 'Kann ich eine Schnupperstunde machen?',
            answer   : [
                "Ja, du kannst bei uns eine Schnupperstunde machen, um dir einen ersten Eindruck verschaffen.",
                "Eine Schnupperstunde kostet 15 € und ist pro Person nur einmal buchbar."
            ]
        },
        {
            question : 'Gibt es bei euch Parkplätze?',
            answer   : [
                "Ja. Und diese sind sogar kostenlos. Auf der Hausvorderseite stehen jede Menge Parkplätze zur Verfügung."
            ]
        },
        {
            question : 'Welche Coronamassnahmen gelten momentan?',
            answer   : [
                "Aktuell gelten keine Coronamassnahmen mehr. Wir dürfen ohne Maske trainieren und ein Zertifikat ist nicht zwingend erforderlich. Solltest du dich jedoch krank fühlen, bitten wir dich darum, dich von dem Kurs abzumelden."
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
                                <Schedule title='Schedule'/>
                                <InnovativeClasses/>
                            </main>
                        </>
                    }
                />
                <Route
                    path={menuList.about.uri}
                    element={
                        <>
                            <Header headerClassName='about-header-background' title={menuList.about.pageTitle}/>
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
                            <Header headerClassName='schedule-header-background' title={menuList.schedule.pageTitle}/>
                            <main>
                                <Schedule title='Innovative Classes'/>
                            </main>

                        </>
                    }
                />
                <Route
                    path={menuList.innovativeClasses.uri}
                    element={
                        <>
                            <Header headerClassName='classes-header-background' title={menuList.innovativeClasses.pageTitle}/>
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
                            <Header headerClassName='contact-header-background' title={menuList.contact.pageTitle}/>
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
                            <Header headerClassName='impressum-header-background' title={menuList.impressum.pageTitle}/>
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
                            <Header headerClassName='privacy-policy-header-background' title={menuList.privacyPolicy.pageTitle}/>
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
                            <Header headerClassName='impressum-header-background' title={menuList.termsAndConditions.pageTitle}/>
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
                            <Header headerClassName='faq-header-background' title={menuList.faq.pageTitle}/>
                            <main>
                                <Faq faqList={faqList}/>
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
