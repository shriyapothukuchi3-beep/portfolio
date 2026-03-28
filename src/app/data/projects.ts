export interface Project {
  id: string;
  title: string;
  category: 'ux-ui' | 'design' | 'animation';
  description: string;
  image: string;
  tags: string[];
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  projectLink?: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'brew-and-blend',
    title: 'Brew & Blend — Coffee Shop Website',
    category: 'ux-ui',
    description:
      'A warm and inviting e-commerce website for an artisanal coffee shop, guiding users from discovery to purchase.',
    image:
      '/images/Brewandblend.png',
    tags: ['UX/UI Design', 'E-commerce', 'Web Design', 'Figma'],
    year: '2024',
    overview:
      "Brew & Blend is a warm and inviting e-commerce website for an artisanal coffee shop. The site guides visitors through a curated coffee experience — from discovering signature blends and learning about individual drinks, to shopping for beans and getting in touch. With a rich brown and terracotta color palette, flowing wave motifs, and earthy photography, the design reflects the brand's core philosophy: coffee as a ritual, not just a routine.",
    challenge:
      "Design a multi-page coffee shop website that balances product education with e-commerce functionality — helping users who don't yet know their preferred roast discover the right blend, while also serving returning customers who want to browse and buy quickly. The site needed to feel warm and artisanal without sacrificing clarity or usability.",
    solution:
      'A fully navigable multi-page site where users move from discovery to purchase without friction. Featured blends come with roast levels and tasting notes, a Coffee Finder Quiz matches undecided users to their perfect cup, and individual drink spotlights educate before they commit. A sign-up incentive at checkout converts casual visitors into returning customers.',
    projectLink:
      'https://www.figma.com/proto/g0jC4V3ucp36hXXUv5cpwp/coffee?node-id=2-15&page-id=0%3A1&starting-point-node-id=2%3A11&t=l1OnZQaLQxSx0rYI-1',
  },
  {
    id: 'meet-up-social-app',
    title: 'Meet Up? — Social Meetup App',
    category: 'ux-ui',
    description:
      'A community-driven mobile app designed to help people connect through shared interests and real-world events.',
       image:
      '/images/Meetup.png',
      tags: ['UX/UI Design', 'Mobile App', 'Community', 'Figma'],
    year: '2024',
    overview:
      "Meet Up? is a community-driven mobile app designed to help people connect through shared interests and real-world events. Users can discover what's happening today, join groups like anime clubs or casual lunches, attend meetings both in-person and virtually, and track their social growth over time. With a playful illustrated aesthetic and a warm, encouraging tone, the app makes stepping out of your comfort zone feel approachable and fun.",
    challenge:
      'Many people — especially college students and young adults — want to build meaningful social connections but struggle with the awkward first step of putting themselves out there. The challenge was to design a social app that lowers the barrier to meeting new people, supports both in-person and virtual engagement, and keeps users motivated to stay socially active without feeling pressured.',
    solution:
      "A home screen that makes showing up easy — today's events and online friends are front and center, so there's always a reason to act. Joining an event takes just a few taps: pick in-person or virtual, see who's coming, confirm the location, and go. A weekly social summary celebrates progress and gently nudges users to keep engaging, turning a daunting habit into a rewarding one.",
    projectLink:
      'https://www.figma.com/proto/ktb0fSYTvjDRVppMyANplE/Interactive-design?node-id=18-156&p=f&viewport=40%2C332%2C0.14&t=ofDvv5RijmfbS8Hh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=18%3A156&page-id=0%3A1',
  },
  {
    id: 'rentique',
    title: 'Rentique — Circular Fashion Rental App',
    category: 'ux-ui',
    description:
      'An IoT-driven sustainable fashion rental app that merges style, technology, and environmental responsibility.',
    image:
      '/images/Rentique.png',
      tags: ['UX/UI Design', 'Sustainable Fashion', 'IoT', 'Figma'],
    year: '2024',
    overview:
      "Rentique is an IoT-driven sustainable fashion rental app that merges style, technology, and environmental responsibility into one seamless experience. Using RFID-tagged garments and smart racks, every rental becomes fully traceable — from cleaning history and wear count to real-time sustainability impact. Designed for younger consumers who want to look good without the guilt, Rentique makes circular fashion feel premium, personal, and effortless.",
    challenge:
      "Current rental services are manual, opaque, and trust-deficient — users have no way of knowing how clean a garment really is, how many times it's been worn, or what environmental difference their choice actually makes. Sustainable fashion exists, but it won't be chosen unless it feels like an upgrade, not a compromise.",
    solution:
      'RFID tags give every garment a digital passport — tracking usage, cleanliness, and location automatically. IoT smart racks light up to guide users directly to their reserved item, and QR-based returns trigger the cleaning workflow instantly. The ECO Dashboard translates every rental into real impact metrics — CO₂ saved, textile waste prevented, tier progression — making sustainability visible and rewarding. The result: renting feels smarter than buying.',
    projectLink:
      'https://www.figma.com/proto/LZ9fBZD7E9q4abMLuCjJpn/Untitled?node-id=1-3&p=f&viewport=25%2C214%2C0.2&t=GM5VvFUB7Ia7Q592-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&page-id=0%3A1',
  },
  {
    id: 'convergence',
    title: 'Convergence — Manga-Style Illustration Collage',
    category: 'design',
    description:
      'A hand-drawn black and white illustration collage composed of multiple manga-inspired character studies and scenes.',
    image: '/images/Final.png',
    tags: ['Illustration', 'Manga', 'Collage', 'Black & White'],
    year: '2024',
    overview:
      'A hand-drawn black and white illustration collage composed of multiple manga-inspired character studies and scenes, unified through bold compositional layering. The piece weaves together expressive close-ups, full figures, dragons, celestial imagery, and floral motifs into a single cohesive artwork that feels simultaneously fragmented and intentional.',
    challenge:
      'Create a visually complex multi-character composition that draws from manga aesthetics without feeling like a random assembly of parts — each element needed to hold its own while contributing to a unified visual story.',
    solution:
      'Composition came before character — early sketches focused purely on overlapping shapes and diagonal tension to find a layout with natural movement. Once the central arrow structure locked in as the anchor, each zone was filled deliberately: tight eye close-ups for emotional pull, varied scales for depth, and a consistent grayscale palette that lets line work do all the talking.',
  },
  {
    id: 'cumbia',
    title: 'Cumbia — Digital Illustration',
    category: 'design',
    description:
      'A bold digital illustration capturing the energy and motion of traditional Latin dance.',
    image: '/images/color-final-prototype.png',
    tags: ['Illustration', 'Digital Art', 'Motion', 'Visual Storytelling'],
    year: '2024',
    overview:
      "A bold digital illustration capturing the energy and motion of traditional Latin dance, rendered through high-contrast neon line work against a deep black background. The piece pairs an elaborately detailed dancer in full skirt motion with a stark flat silhouette, creating a striking visual tension between complexity and simplicity.",
    challenge:
      'Translate the raw kinetic energy of live dance into a static image — conveying movement, rhythm, and cultural vibrancy without losing visual clarity or impact.',
    solution:
      "Six early explorations tested everything from abstract swirls to flat graphic silhouettes before the final direction locked in. The dense contour lines rippling across the dancer's skirt were inspired directly by the layered, billowing fabric of traditional cumbia costumes — reinterpreted through neon yellow-green and crimson to capture the heat of the dance floor rather than replicate it literally.",
  },
  {
    id: 'derby-car',
    title: 'Derby Car — 3D Animation',
    category: 'animation',
    description:
      'A fully self-produced 3D animated piece built in Autodesk Maya, covering the complete production pipeline.',
    image:
      '/images/Derbycar.png',
    tags: ['3D Animation', 'Maya', 'Modeling', 'Rigging'],
    year: '2024',
    overview:
      'A fully self-produced 3D animated piece built in Autodesk Maya, covering the complete production pipeline from modeling and rigging to final animation. The project demonstrates end-to-end technical skill in bringing a derby car to life through movement.',
    challenge:
      'Execute every stage of the 3D production pipeline independently — modeling a believable derby car, building a rig that would allow natural and dynamic movement, and animating it in a way that communicated weight, speed, and personality.',
    solution:
      'Built from scratch in Maya, the car was modeled with attention to the battered, characterful aesthetic of derby vehicles, then rigged to support realistic motion. The animation focused on conveying physical weight and momentum — letting the movement itself tell the story rather than relying on environment or effects.',
    projectLink: 'https://vimeo.com/1067220024?share=copy&fl=sv&fe=ci',
    videoUrl: 'https://vimeo.com/1067220024?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'character-walk-cycle',
    title: 'Character Walk Cycle — 3D Animation',
    category: 'animation',
    description:
      'A 3D character walk cycle animated in Autodesk Maya, focusing on believable human locomotion.',
    image:
      '/images/Walk.png',
    tags: ['3D Animation', 'Character Animation', 'Maya', 'Walk Cycle'],
    year: '2024',
    overview:
      'A 3D character walk cycle animated in Autodesk Maya, focusing on the fundamentals of believable human locomotion. Working from a pre-built model, the project hones in purely on the craft of animation — translating technical keyframes into natural, fluid movement.',
    challenge:
      'A walk cycle is deceptively simple — the smallest timing or weight shift error reads immediately as unnatural. The challenge was to animate a convincing, grounded walk that felt alive rather than mechanical.',
    solution:
      'By focusing on weight distribution, hip sway, and follow-through across each step, the animation moves beyond a basic loop into something that feels physically grounded. Every keyframe was tuned to ensure momentum carried naturally from one pose to the next.',
    projectLink: 'https://vimeo.com/1177111010?share=copy&fl=sv&fe=ci',
    videoUrl: 'https://vimeo.com/1177111010?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'ball-bounce',
    title: 'Ball Bounce — 3D Animation',
    category: 'animation',
    description:
      'A 3D ball bounce animation in Autodesk Maya built around one of the most fundamental animation exercises.',
    image:
      '/images/Bouncingball.png',
    tags: ['3D Animation', 'Maya', 'Timing', 'Squash and Stretch'],
    year: '2024',
    overview:
      'A 3D ball bounce animation in Autodesk Maya, built around one of the most fundamental exercises in animation — using a simple object to demonstrate mastery of the core principles of motion.',
    challenge:
      "A bouncing ball is the animator's baseline test. Getting it right means nailing timing, squash and stretch, arc of motion, and the subtle ease-in and ease-out that separates convincing physics from a floating object.",
    solution:
      "Animated across a curved ramp environment, the ball's trajectory, speed, and deformation were carefully key framed to sell the illusion of real weight and momentum — proving that the principles of great animation live in the details, not the complexity of the subject.",
    projectLink: 'https://vimeo.com/1177111644?share=copy&fl=sv&fe=ci',
    videoUrl: 'https://vimeo.com/1177111644?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'peg-jump',
    title: 'Peg Jump — 3D Animation',
    category: 'animation',
    description:
      'A 3D animation of a peg character jumping across platforms in Maya with a custom set and animation approach.',
    image:
      '/images/Peg.png',
    tags: ['3D Animation', 'Maya', 'Environment Design', 'Character Motion'],
    year: '2024',
    overview:
      'A 3D animation of a peg character jumping across platforms in Maya, built using a custom set and animation approach. The project demonstrates environmental storytelling through set design alongside character animation, bringing a simple figure to life within a purposefully constructed scene.',
    challenge:
      'Animate a convincing jump sequence that sells weight, airtime, and landing impact — while also designing a set that gives the motion context and scale without overshadowing the character.',
    solution:
      "The platform layout was designed to create natural anticipation — varying heights and gaps that make each jump feel deliberate and earned. The peg's animation focused on the key principles of squash, stretch, and follow-through, ensuring each takeoff and landing communicated real physical weight despite the character's minimal form.",
    projectLink: 'https://vimeo.com/1067221403?share=copy&fl=cl&fe=ci',
    videoUrl: 'https://vimeo.com/1067221403?share=copy&fl=cl&fe=ci',
  },
];