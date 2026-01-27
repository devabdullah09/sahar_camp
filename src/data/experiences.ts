import { Experience } from '../types'
import { getR2Url, getLandingVideo } from '../config/r2-assets'

// Get R2 URLs for all assets
// Nevada 2023 Images
const nevada23Img4 = getR2Url('OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/WhatsApp Image 2023-09-30 at 10.24.12 PM.jpeg')
const nevada23Bottom = getR2Url('OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/bottom.jpg')
const nevada23Video = getR2Url('OUR EXPERIENCES/1. Nevada, USA/Sahar video.mp4')
// Additional gallery images for 2023
const nevada23Gallery1 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2470.jpg')
const nevada23Gallery2 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2473.jpg')
const nevada23Gallery3 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2490.jpg')
const nevada23Gallery4 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2536.jpg')
const nevada23Gallery5 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2547.jpg')
const nevada23Gallery6 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2557.jpg')
const nevada23Gallery7 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2589.jpg')
const nevada23Gallery8 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2638.jpg')
const nevada23Gallery9 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2755.jpg')
const nevada23Gallery10 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2760.jpg')
const nevada23Gallery11 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2803.jpg')
const nevada23Gallery12 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2832.jpg')
const nevada23Gallery13 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2946.jpg')
const nevada23Gallery14 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2970.jpg')
const nevada23Gallery15 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A2975.jpg')
const nevada23Gallery16 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A3055.jpg')
const nevada23Gallery17 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/088A3096.jpg')
const nevada23Gallery18 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03198.jpg')
const nevada23Gallery19 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03200.jpg')
const nevada23Gallery20 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03207.jpg')
const nevada23Gallery21 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03221.jpg')
const nevada23Gallery22 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03223.jpg')
const nevada23Gallery23 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03227.jpg')
const nevada23Gallery24 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03256.jpg')
const nevada23Gallery25 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03287.jpg')
const nevada23Gallery26 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03373.jpg')
const nevada23Gallery27 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03388.jpg')
const nevada23Gallery28 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03417.jpg')
const nevada23Gallery29 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03485.jpg')
const nevada23Gallery30 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/DSC03514.jpg')
const nevada23Gallery31 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/WhatsApp Image 2023-09-21 at 9.49.20 AM.jpeg')
const nevada23Gallery32 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/WhatsApp Image 2023-09-30 at 10.22.40 PM.jpeg')
const nevada23Gallery33 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/WhatsApp Image 2023-09-30 at 10.24.12 PM.jpeg')
const nevada23Gallery34 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/image00009.jpeg')
const nevada23Gallery35 = getR2Url('OUR EXPERIENCES/nevda-2023/pictures/image00011.jpeg')

// Nevada 2025 Gallery Images
const nevada25Gallery1 = getR2Url('OUR EXPERIENCES/nevda-2025/DSC01704.jpg')
const nevada25Gallery2 = getR2Url('OUR EXPERIENCES/nevda-2025/DSC01749.jpg')
const nevada25Gallery3 = getR2Url('OUR EXPERIENCES/nevda-2025/DSC01756.jpg')
const nevada25Gallery4 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF0012.jpg')
const nevada25Gallery5 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF0027.jpg')
const nevada25Gallery6 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF2002.jpg')
const nevada25Gallery7 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF2003.jpg')
const nevada25Gallery8 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF2006.jpg')
const nevada25Gallery9 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF2041.jpg')
const nevada25Gallery10 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF2056.jpg')
const nevada25Gallery11 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7159.jpg')
const nevada25Gallery12 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7181.jpg')
const nevada25Gallery13 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7201.jpg')
const nevada25Gallery14 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7215.jpg')
const nevada25Gallery15 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7234.jpg')
const nevada25Gallery16 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7268.jpg')
const nevada25Gallery17 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7293.jpg')
const nevada25Gallery18 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7297.jpg')
const nevada25Gallery20 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7314.jpg')
const nevada25Gallery21 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7315.jpg')
const nevada25Gallery22 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7318.jpg')
const nevada25Gallery23 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7320.jpg')
const nevada25Gallery24 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7322.jpg')
const nevada25Gallery25 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7323.jpg')
const nevada25Gallery26 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7324.jpg')
const nevada25Gallery27 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7325.jpg')
const nevada25Gallery28 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7337.jpg')
const nevada25Gallery29 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7345.jpg')
const nevada25Gallery30 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7368.jpg')
const nevada25Gallery31 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7372.jpg')
const nevada25Gallery32 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7424.jpg')
const nevada25Gallery33 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7435.jpg')
const nevada25Gallery34 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7441.jpg')
const nevada25Gallery35 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7453.jpg')
const nevada25Gallery36 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7470.jpg')
const nevada25Gallery37 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7484.jpg')
const nevada25Gallery38 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7510.jpg')
const nevada25Gallery39 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7511.jpg')
const nevada25Gallery40 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7547.jpg')
const nevada25Gallery41 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7550.jpg')
const nevada25Gallery42 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7564.jpg')
const nevada25Gallery43 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7594.jpg')
const nevada25Gallery44 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7596.jpg')
const nevada25Gallery45 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7607.jpg')
const nevada25Gallery46 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7610.jpg')
const nevada25Gallery47 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7632.jpg')
const nevada25Gallery48 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7665.jpg')
const nevada25Gallery49 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7668.jpg')
const nevada25Gallery50 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7680.jpg')
const nevada25Gallery51 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7692.jpg')
const nevada25Gallery52 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7693.jpg')
const nevada25Gallery53 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7710.jpg')
const nevada25Gallery54 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7711.jpg')
const nevada25Gallery55 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7740.jpg')
const nevada25Gallery56 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7757.jpg')
const nevada25Gallery57 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7831.jpg')
const nevada25Gallery58 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF7835.jpg')
const nevada25Gallery59 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8015.jpg')
const nevada25Gallery60 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8020.jpg')
const nevada25Gallery61 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8026.jpg')
const nevada25Gallery62 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8030.jpg')
const nevada25Gallery63 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8070.jpg')
const nevada25Gallery64 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8083.jpg')
const nevada25Gallery65 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8221.jpg')
const nevada25Gallery66 = getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8280.jpg')

// Nevada 2022 Images
const nevada22Thumb = getR2Url('OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06355.jpg')
const nevada22Img1 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06306.jpg')
const nevada22Img2 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06316-2.jpg')
const nevada22Img3 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06324.jpg')
const nevada22Img4 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06329-2.jpg')
const nevada22Img5 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06355.jpg')
const nevada22Img6 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/Sunset.jpg')
// Additional gallery images for 2022
const nevada22Gallery1 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06055.jpg')
const nevada22Gallery2 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06093.jpg')
const nevada22Gallery3 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06120.jpg')
const nevada22Gallery4 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06131.jpg')
const nevada22Gallery5 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06136.jpg')
const nevada22Gallery6 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06143.jpg')
const nevada22Gallery7 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06203.jpg')
const nevada22Gallery8 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06205.jpg')
const nevada22Gallery9 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06244.jpg')
const nevada22Gallery10 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06254.jpg')
const nevada22Gallery11 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06255.jpg')
const nevada22Gallery12 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06285.jpg')
const nevada22Gallery13 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06289.jpg')
const nevada22Gallery14 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06295-2.jpg')
const nevada22Gallery15 = getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06302.jpg')
const nevada22Bottom = getR2Url('OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/bottom.jpg')

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Sahar nevada, USA 2022',
    slug: 'sahar-nevada-usa-2022',
    label: 'Sahar nevada, USA 2022',
    description:
      'Return to the desert for Sahar 22, a celebration of music, mindfulness, and communal creativity beneath the endless Nevada sky.',
    image: getR2Url('OUR EXPERIENCES/nevda-2022/pictures/DSC06116-2.jpg'),
    images: [nevada22Img1,  nevada22Img6],
    galleryImages: [
      nevada22Img1,
      nevada22Img2,
      nevada22Img3,
      nevada22Img4,
      nevada22Img5,
      nevada22Img6,
      nevada22Gallery1,
      nevada22Gallery2,
      nevada22Gallery3,
      nevada22Gallery4,
      nevada22Gallery5,
      nevada22Gallery6,
      nevada22Gallery7,
      nevada22Gallery8,
      nevada22Gallery9,
      nevada22Gallery10,
      nevada22Gallery11,
      nevada22Gallery12,
      nevada22Gallery13,
      nevada22Gallery14,
      nevada22Gallery15,
    ],
    bottomImage: nevada22Bottom,
    fullDescription: {
      subtitle: 'Camp in the desert of Black Rock City',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Designing a camp experience for one week, accommodating 64 people, and open to 80,000 visitors of this ephemeral city.

Artists: Deer Jade / Santiago Bartolomé / Pascale Caristo / Glitter / La Hasna / Zineb Boujamaa / Amine Bendriouich / Moulinex

Location: Black Rock City, Nevada, USA

Dates: August 28, 2022, to September 4, 2022

Duration: One week of construction, followed by one week of an unforgettable experience.`,
        },
        {
          title: 'Camp manifesto',
          content: `Morocco is a tree whose roots go deep into Africa,
Yet breathes through its leaves in the world.

We believe in the power of its culture which through its beauty,
Authenticity, and art, keeps inspiring many of us.

But, far too many are those who, through the cultural appropriation of Morocco, Forget what are its roots, and therefore its history.

Our mission is to give back the Moroccan culture to those who rightfully belong to it, Starting with its nomadic culture.

Our mission is to create an extraordinary experience, reminding contemporary societies so paradoxical in their development that nomadism is the source of humanity.

Give voice to those who have been mute for far too long,

Allow them to share their art internationally,

Working in symbiosis with the absorption of this heterotopia called home,

That once carried out in the body, will allow them to deprogram their visible or invisible

borders.`,
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Sahar nevada, USA 2023',
    slug: 'sahar-nevada-usa-2023',
    label: 'Sahar nevada, USA 2023',
    description:
      'Experience the transformative power of the desert landscape. Our Nevada gatherings combine adventure, wellness, and connection with nature in one of America\'s most stunning environments.',
    image: getR2Url('OUR EXPERIENCES/nevda-2023/pictures/WhatsApp Image 2023-09-21 at 9.49.20 AM.jpeg'),
    video: nevada23Video,
    images: [nevada23Gallery19, nevada23Gallery33, nevada23Gallery15, nevada23Img4],
    galleryImages: [

      nevada23Gallery1,
      nevada23Gallery2,
      nevada23Gallery3,
      nevada23Gallery4,
      nevada23Gallery5,
      nevada23Gallery6,
      nevada23Gallery7,
      nevada23Gallery8,
      nevada23Gallery9,
      nevada23Gallery10,
      nevada23Gallery11,
      nevada23Gallery12,
      nevada23Gallery13,
      nevada23Gallery14,
      nevada23Gallery15,
      nevada23Gallery16,
      nevada23Gallery17,
      nevada23Gallery18,
      nevada23Gallery19,
      nevada23Gallery20,
      nevada23Gallery21,
      nevada23Gallery22,
      nevada23Gallery23,
      nevada23Gallery24,
      nevada23Gallery25,
      nevada23Gallery26,
      nevada23Gallery27,
      nevada23Gallery28,
      nevada23Gallery29,
      nevada23Gallery30,
      nevada23Gallery31,
      nevada23Gallery32,
      nevada23Gallery33,
      nevada23Gallery34,
      nevada23Gallery35,
    ],
    bottomImage: nevada23Bottom,
    fullDescription: {
      subtitle: 'Camp in the desert of Black Rock City',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Designing a camp experience for one week, accommodating 120 people, and open to 80,000 visitors of this ephemeral city.

Artists: Lemurian / Deer Jade / Santiago Bartolomé / Bora Uzer / Unders / Sam Shure / Sharon Pieksma / Santiago Bartolomé / Pascale Caristo / Iam Nada / Nicholas Petricca / Iveta Mukuchyan / N810 / Yael DrumAddict / Oren Baba

Location: Black Rock City, Nevada, USA

Dates: August 28, 2023, to September 4, 2023

Duration: One week of construction, followed by one week of an unforgettable experience.`,
        },
        {
          title: 'Camp manifesto',
          content: `Morocco is a tree whose roots go deep into Africa,
Yet breathes through its leaves in the world.

We believe in the power of its culture which through its beauty,
Authenticity, and art, keeps inspiring many of us.

But, far too many are those who, through the cultural appropriation of Morocco, Forget what are its roots, and therefore its history.

Our mission is to give back the Moroccan culture to those who rightfully belong to it, Starting with its nomadic culture.

Our mission is to create an extraordinary experience, reminding contemporary societies so paradoxical in their development that nomadism is the source of humanity.

Give voice to those who have been mute for far too long,

Allow them to share their art internationally,

Working in symbiosis with the absorption of this heterotopia called home,

That once carried out in the body, will allow them to deprogram their visible or invisible

borders.`,
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Sahar nevada, USA 2025',
    slug: 'sahar-nevada-usa-2025',
    label: 'Sahar nevada, USA 2025',
    description:
      'Experience the transformative power of the desert landscape. Our Nevada gatherings combine adventure, wellness, and connection with nature in one of America\'s most stunning environments.',
    image: getR2Url('OUR EXPERIENCES/nevda-2025/DSCF8002.jpg'),
    images: [nevada25Gallery66, nevada25Gallery20, nevada25Gallery21, nevada23Img4], // First two images for manifesto section
    galleryImages: [
      nevada25Gallery1,
      nevada25Gallery2,
      nevada25Gallery3,
      nevada25Gallery4,
      nevada25Gallery5,
      nevada25Gallery6,
      nevada25Gallery7,
      nevada25Gallery8,
      nevada25Gallery9,
      nevada25Gallery10,
      nevada25Gallery11,
      nevada25Gallery12,
      nevada25Gallery13,
      nevada25Gallery14,
      nevada25Gallery15,
      nevada25Gallery16,
      nevada25Gallery17,
      nevada25Gallery18,
      nevada25Gallery20,
      nevada25Gallery21,
      nevada25Gallery22,
      nevada25Gallery23,
      nevada25Gallery24,
      nevada25Gallery25,
      nevada25Gallery26,
      nevada25Gallery27,
      nevada25Gallery28,
      nevada25Gallery29,
      nevada25Gallery30,
      nevada25Gallery31,
      nevada25Gallery32,
      nevada25Gallery33,
      nevada25Gallery34,
      nevada25Gallery35,
      nevada25Gallery36,
      nevada25Gallery37,
      nevada25Gallery38,
      nevada25Gallery39,
      nevada25Gallery40,
      nevada25Gallery41,
      nevada25Gallery42,
      nevada25Gallery43,
      nevada25Gallery44,
      nevada25Gallery45,
      nevada25Gallery46,
      nevada25Gallery47,
      nevada25Gallery48,
      nevada25Gallery49,
      nevada25Gallery50,
      nevada25Gallery51,
      nevada25Gallery52,
      nevada25Gallery53,
      nevada25Gallery54,
      nevada25Gallery55,
      nevada25Gallery56,
      nevada25Gallery57,
      nevada25Gallery58,
      nevada25Gallery59,
      nevada25Gallery60,
      nevada25Gallery61,
      nevada25Gallery62,
      nevada25Gallery63,
      nevada25Gallery64,
      nevada25Gallery65,
      nevada25Gallery66,
    ],
    bottomVideo: getLandingVideo('251112_BM_Sahart_16x9_FINAL_below.mp4'),
    fullDescription: {
      subtitle: 'Camp in the desert of Black Rock City',
      introParagraph: '',
      sections: [
        {
          title: '',
          content: `Type of Project: Designing and hosting an immersive camp experience for one week, welcoming 140 camp members and open to interaction with the 80,000 citizens of this ephemeral city.

Artists: Amémé / Deer Jade / Lemurian / Bora Uzer / Unders / Molyness / Sharon Pieksma / Jojo Abot / Inès Rau / Monolink and many more…

Location: Black Rock City, Nevada, USA

Dates: August 27, 2025 to September 3, 2025

Duration: One week of collective construction, followed by one week of shared rituals, music, art, and unforgettable moments in the desert.`,
        },
        {
          title: 'Camp manifesto',
          content: `We return.

We remember.

We are home 

She rose from the dust

La Kahina, 

queen of the desert.

She walked with fire.

Her daughters rise,

carried by the wind,

Embodying her spirit.

Firekeepers, 

guardians of Sahar,

Enlightened by the moon.

Yes, We remember.

Dance with the elements, she whispers:

"call the water, the dust, the fire,

& the earth mother of them all"

Remember, she said, 

the freedom code of the desert.

We are nomads, 

once again.

So it is.`,
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Sahar nevada, USA 2026',
    slug: 'sahar-nevada-usa-2026',
    label: 'Sahar nevada, USA 2026',
    description:
      'Coming soon... An upcoming experience in the Nevada desert.',
    image: nevada22Thumb, // Placeholder - will be updated when images are provided
    images: [nevada22Img1, nevada22Img2, nevada22Img3, nevada22Img4], // Placeholder
    bottomImage: nevada22Bottom, // Placeholder
    fullDescription: {
      subtitle: 'Coming soon',
      introParagraph:
        'Details for Sahar nevada, USA 2026 will be announced soon.',
      sections: [
        {
          title: 'Coming Soon',
          content: 'This experience is coming out soon. Stay tuned for more details.',
        },
      ],
    },
  },
]
