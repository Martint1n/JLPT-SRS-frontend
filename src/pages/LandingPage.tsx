import Hero from '../components/Hero.js';
import Footer from '../components/Footer.js';
import Section, { type SectionProps } from '../components/Section.js';

const SECTIONS: SectionProps[] = [
  {
    id: 'immersion',
    number: '01',
    title: 'Immersion',
    tagline: "S'exposer massivement à la langue cible",
    content:
      "L'immersion, c'est consommer du contenu natif — séries, podcasts, livres — dans la langue que vous apprenez. Pas pour tout comprendre dès le début, mais pour habituer votre cerveau aux sons, rythmes et structures de la langue.",
    more:
      "La théorie de Stephen Krashen est claire : on n'apprend pas une langue, on l'acquiert. Et on l'acquiert uniquement par l'exposition à du contenu compréhensible. Des heures d'écoute, de lecture légère, de visionnage — même sans tout comprendre — construisent une intuition linguistique que l'étude formelle seule ne peut pas reproduire. Pour le japonais : commencez par les animés que vous connaissez déjà, NHK Easy News, des vlogs simples sur YouTube.",
    bg: '#050d1a',
  },
  {
    id: 'comprehension',
    number: '02',
    title: 'Compréhension',
    tagline: "Comprendre avant de parler",
    content:
      "La compréhension précède toujours la production. Vous avez appris votre langue maternelle en écoutant des années avant de parler. La même logique s'applique à n'importe quelle langue.",
    more:
      "Krashen appelle ça l'hypothèse i+1 : le contenu optimal est celui que vous comprenez à 95–98%, avec juste un peu de nouveauté. Chercher à parler trop tôt force une production artificielle qui crée de mauvaises habitudes. Laissez la compréhension s'installer d'abord — l'expression viendra naturellement, sans effort forcé.",
    bg: '#060f1d',
  },
  {
    id: 'repetition',
    number: '03',
    title: 'Répétition',
    tagline: "La mémoire espacée comme alliée",
    content:
      "Anki et les systèmes de répétition espacée (SRS) permettent de mémoriser du vocabulaire efficacement en révisant les mots exactement avant de les oublier. 15 à 20 minutes par jour suffisent.",
    more:
      "Le cerveau oublie selon une courbe prévisible. Anki exploite cette courbe : il vous montre une carte au bon moment, ancrant la mémoire plus profondément à chaque révision. Moins de temps pour plus de rétention. Pour le japonais : le deck Core 2000 ou Tango N5/N4 sont d'excellents points de départ. L'objectif n'est pas de tout mémoriser — c'est d'apprendre à reconnaître.",
    bg: '#071120',
  },
  {
    id: 'accumulation',
    number: '04',
    title: 'Accumulation',
    tagline: "La progression naturelle par exposition",
    content:
      "Le vocabulaire s'accumule progressivement. Chaque heure passée dans la langue enrichit votre cerveau sans effort conscient. La courbe est lente au début, puis devient exponentielle.",
    more:
      "À 1 000 mots, vous comprenez environ 75% d'un texte courant. À 5 000 mots, 95%. À 10 000 mots, vous êtes à l'aise dans presque toutes les situations. Ce qui semble une montagne au départ devient une pente douce une fois les 2 000 premiers mots acquis — parce qu'alors chaque lecture vous expose naturellement à du vocabulaire répété, que votre cerveau absorbe sans effort.",
    bg: '#060e1c',
  },
  {
    id: 'parcours',
    number: '05',
    title: 'Mon Parcours',
    tagline: "Apprendre le japonais depuis zéro",
    content:
      "Je suis parti de zéro en japonais en mars 2026, depuis la Nouvelle-Zélande. Hiragana appris en une semaine, puis vocabulaire N5 sur Anki, NHK Easy News pour l'immersion légère, animés familiers pour le plaisir.",
    more:
      "Ma routine : 20 min d'Anki le matin, 30 min de NHK Easy le midi, 1 épisode sans sous-titres le soir si possible. Je vise le N3 en décembre 2026, puis une école de langue à Tokyo d'avril 2027 à avril 2028. Le japonais est à la fois mon outil et mon projet — et cette méthode est la seule qui m'ait jamais permis de progresser sans que ça ressemble à du travail.",
    bg: '#050c18',
  },
];

export default function App() {
  return (
    <>
      <Hero />
      {SECTIONS.map(s => (
        <Section key={s.id} {...s} />
      ))}
      <Footer />
    </>
  );
}
