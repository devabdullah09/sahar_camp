import { Experience } from '../types'

// Nevada 2023 Images
import nevada23Thumb from '../assets/OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/088A2970.jpg'
import nevada23Img1 from '../assets/OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/088A2470.jpg'
import nevada23Img2 from '../assets/OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/088A2490.jpg'
import nevada23Img3 from '../assets/OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/DSC03227.jpg'
import nevada23Img4 from '../assets/OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/WhatsApp Image 2023-09-30 at 10.24.12 PM.jpeg'
import nevada23Bottom from '../assets/OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/bottom.jpg'
import nevada23Video from '../assets/OUR EXPERIENCES/1. Nevada, USA/Sahar video.mp4'

// Ethos Mexico Images
import mexicoThumb from '../assets/OUR EXPERIENCES/2. Ethos, Mexico/Pictures/f5d74a18-260f-40b8-8336-029fba6642e0.jpg'
import mexicoImg1 from '../assets/OUR EXPERIENCES/2. Ethos, Mexico/Pictures/0fcee42d-eda1-4b4d-8f39-ebbace7b7f1f.jpg'
import mexicoImg2 from '../assets/OUR EXPERIENCES/2. Ethos, Mexico/Pictures/33c8af0f-4363-436a-b727-0e95a7ed607f.jpg'
import mexicoImg3 from '../assets/OUR EXPERIENCES/2. Ethos, Mexico/Pictures/5a54e104-1c1d-421b-a319-4ac5d0ee2656.jpg'
import mexicoImg4 from '../assets/OUR EXPERIENCES/2. Ethos, Mexico/Pictures/f5d74a18-260f-40b8-8336-029fba6642e0.jpg'
import mexicoBottom from '../assets/OUR EXPERIENCES/2. Ethos, Mexico/Pictures/bottom.jpg'

// Nevada 2022 Images
import nevada22Thumb from '../assets/OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06355.jpg'
import nevada22Img1 from '../assets/OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06055.jpg'
import nevada22Img2 from '../assets/OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06093.jpg'
import nevada22Img3 from '../assets/OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06131.jpg'
import nevada22Img4 from '../assets/OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06203.jpg'
import nevada22Bottom from '../assets/OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/bottom.jpg'

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Nevada, USA',
    slug: 'nevada-2023',
    label: 'SAHAR CAMP NEVADA, USA',
    description:
      'Experience the transformative power of the desert landscape. Our Nevada gatherings combine adventure, wellness, and connection with nature in one of America\'s most stunning environments.',
    image: nevada23Thumb,
    video: nevada23Video,
    images: [nevada23Img1, nevada23Img2, nevada23Img3, nevada23Img4],
    bottomImage: nevada23Bottom,
    fullDescription: {
      subtitle: 'Camp in the desert of Black Rock City',
      introParagraph:
        'Designing a camp experience for one week, accommodating 120 people, and open to 80,000 visitors of this ephemeral city.',
      sections: [
        {
          title: 'Type of Project & Artists',
          content: `Type of Project: Designing a camp experience for one week, accommodating 120 people, and open to 80,000 visitors of this ephemeral city.

Artists: Lemurian / Deer Jade / Santiago Bartolomé / Bora Uzer / Unders / Sam Shure / Sharon Pieksma / Santiago Bartolomé / Pascale Caristo / Iam Nada / Nicholas Petricca / Iveta Mukuchyan / N810 / Yael DrumAddict / Oren Baba`,
        },
        {
          title: 'Location & Dates',
          content: `Location: Black Rock City, Nevada, USA

Dates: August 28, 2023, to September 4, 2023

Duration: One week of construction, followed by one week of an unforgettable experience.`,
        },
        {
          title: 'Camp Manifesto',
          content: `Morocco is a tree whose roots go deep into Africa, yet breathes through its leaves in the world. We believe in the power of its culture which through its beauty, authenticity, and art, keeps inspiring many of us.

But, far too many are those who, through the cultural appropriation of Morocco, forget what are its roots, and therefore its history.`,
        },
        {
          title: 'Our Mission',
          content: `Our mission is to give back the Moroccan culture to those who rightfully belong to it, starting with its nomadic culture. Our mission is to create an extraordinary experience, reminding contemporary societies so paradoxical in their development that nomadism is the source of humanity.

Give voice to those who have been mute for far too long, allow them to share their art internationally, working in symbiosis with the absorption of this heterotopia called home, that once carried out in the body, will allow them to deprogram their visible or invisible borders.`,
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Ethos, Baja California, Mexico',
    slug: 'ethos-mexico',
    label: 'SAHAR CAMP BAJA CALIFORNIA, MEXICO',
    description:
      'Embark on a journey through Baja California\'s blend of creative culture and raw nature with artisan workshops, hot air balloon rides, and ocean adventures.',
    image: mexicoThumb,
    images: [mexicoImg1, mexicoImg2, mexicoImg3, mexicoImg4],
    bottomImage: mexicoBottom,
    fullDescription: {
      subtitle: 'Dinner experience',
      introParagraph:
        'Designing a dinner experience for Ethos activation with the Experience House community for one night in the splendid moroccan restaurant Kous Kous del Vale.',
      sections: [
        {
          title: 'Type of Project',
          content: `Type of Project: Designing a dinner experience for Ethos activation with the Experience House community for one night in the splendid moroccan restaurant Kous Kous del Vale.

Artists: Pascale Caristo & Friends
Location: Kous Kous Del Valle, Valle de Guadalupe, B.C, Mexico
Dates: July 7, 2023
Duration: One Night`,
        },
        {
          title: 'The Culinary Experience',
          content: `Our renowned chef, Moumen, hailing from the enchanting city of Marrakech, has masterfully crafted a menu that is a culinary journey through the flavors of Morocco. From vibrant tagines to aromatic couscous, our farm-to-table dishes are a celebration of authentic and soul-warming cuisine. With the vineyard's beauty as our backdrop, you'll savor each bite while the sun dips below the horizon, painting the sky in hues of orange and gold.`,
        },
        {
          title: 'The Gathering',
          content: `For this special evening, we've curated an intimate atmosphere with a carefully selected group of 40 people, where friends and family come together to revel in each other's company. This is more than just a dinner; it's a gathering of kindred spirits, sharing stories and making memories.`,
        },
        {
          title: 'The Music',
          content: `Pascale Caristo, a mesmerizing musician and singer, possesses the unique ability to channel different voices through her music. She'll serenade you with melodies that transcend boundaries, taking you on a profound journey of emotions. Joining her is the remarkable French musician, Bergot, who is a virtuoso with an astonishing collection of 400 instruments. Together, they'll create a musical tapestry that will resonate deep within your soul.`,
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Nevada, USA — Sahar 22',
    slug: 'nevada-2022',
    label: 'SAHAR CAMP NEVADA, USA',
    description:
      'Return to the desert for Sahar 22, a celebration of music, mindfulness, and communal creativity beneath the endless Nevada sky.',
    image: nevada22Thumb,
    images: [nevada22Img1, nevada22Img2, nevada22Img3, nevada22Img4],
    bottomImage: nevada22Bottom,
    fullDescription: {
      subtitle: 'Camp in the desert of Black Rock City',
      introParagraph:
        'Designing a camp experience for one week, accommodating 64 people, and open to 80,000 visitors of this ephemeral city.',
      sections: [
        {
          title: 'Type of Project & Artists',
          content: `Type of Project: Designing a camp experience for one week, accommodating 64 people, and open to 80,000 visitors of this ephemeral city.

Artists: Deer Jade / Santiago Bartolomé / Pascale Caristo / Glitter / La Hasna / Zineb Boujamaa / Amine Bendriouich / Moulinex`,
        },
        {
          title: 'Location & Dates',
          content: `Location: Black Rock City, Nevada, USA

Dates: August 28, 2022, to September 4, 2022

Duration: One week of construction, followed by one week of an unforgettable experience.`,
        },
        {
          title: 'Camp Manifesto',
          content: `Morocco is a tree whose roots go deep into Africa, yet breathes through its leaves in the world. We believe in the power of its culture which through its beauty, authenticity, and art, keeps inspiring many of us.

But, far too many are those who, through the cultural appropriation of Morocco, forget what are its roots, and therefore its history.`,
        },
        {
          title: 'Our Mission',
          content: `Our mission is to give back the Moroccan culture to those who rightfully belong to it, starting with its nomadic culture. Our mission is to create an extraordinary experience, reminding contemporary societies so paradoxical in their development that nomadism is the source of humanity.

Give voice to those who have been mute for far too long, allow them to share their art internationally, working in symbiosis with the absorption of this heterotopia called home, that once carried out in the body, will allow them to deprogram their visible or invisible borders.`,
        },
      ],
    },
  },
]
