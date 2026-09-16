/*
  HOW TO ADD A PROJECT
  --------------------
  1. Drop your photo(s) or video(s) into assets/media/
  2. Copy one of the objects below, paste it into the PROJECTS array,
     and edit every field.
  3. Save this file. That's it — no other file needs to change.

  FIELD GUIDE
  -----------
  id            unique, no spaces (used in the URL, e.g. project.html?id=bumblebee)
  title         shown on the work grid and the project page
  category      "research" or "meche" (used by the filter tabs on the work page)
  tag           short label shown next to the title on the grid, e.g. "2024" or "FSAE"
  thumb         path to the image or video used on the work grid
  thumbType     "image" or "video"
  poster        optional; path to a static image shown before a video thumb plays (recommended for video thumbs)
  summary       one sentence, shown only if you add it to the grid caption (optional, currently unused on grid but handy to keep)
  date          e.g. "Sep 2024 \u2013 Dec 2024"
  role          e.g. "Team lead" or "Research assistant"
  tools         array of short strings, e.g. ["SolidWorks", "Arduino"]
  description   array of paragraphs (strings) \u2014 each string is one paragraph
  gallery       array of { type: "image"|"video", src: "assets/media/...", caption: "...", loop: true|false (optional, video only) }
                loop: true plays the video muted/autoplay/looping with no controls (good for a short ambient demo clip).
                Omit loop (or set false) for a normal video with player controls (good for a longer clip like gameplay footage).
  links         array of { label: "...", url: "..." } \u2014 optional, e.g. a paper or GitHub repo
*/

const PROJECTS = [
  {
    id: "bumblebee",
    title: "The Bumblebee",
    category: "meche",
    tag: "2024",
    thumb: "assets/media/bumblebee_2.jpg",
    thumbType: "image",
    date: "Sep 2024 \u2013 Dec 2024",
    role: "ES51: Computer-Aided Machine Design Project",
    tools: ["SolidWorks", "3D printing", "Laser cutting", "Machining", "GD&T"],
    description: [
      "Engineered this scoop-arm robot from design through assembly, as part of an introductory mechanical engineering course. The robot navigates an uneven test field, climbs 30\u00b0 inclines, and manipulates and stores objects using a geared scoop arm.",
      "I was responsible for the robot's powertrain, using CAD to lay out the motors, driveshafts, and wheel mounts within a modified gearbox design. Early cardboard mockups let the whole team test the chassis proportions and wheel placement cheaply before committing to acrylic and 3D-printed parts. Iterating further, we found that mounting the drivetrain assembly on the underside of the baseplate solved a packaging conflict with the scoop subteam while keeping the robot balanced.",
      "After modeling the full drivetrain layout in SolidWorks, I iterated on the design to increase top speed by 22% and wheel torque by 15% over the initial version."
    ],
    gallery: [
      { type: "image", src: "assets/media/bumblebee_2.jpg", caption: "The finished robot at competition, holding balls in its scoop container" },
      { type: "video", src: "assets/media/bumblebee_vid.mp4", caption: "The robot navigating the test field" },
      { type: "image", src: "assets/media/bumblebee_v1.jpg", caption: "Early cardboard mockup, used to test chassis proportions and wheel placement" },
      { type: "image", src: "assets/media/bumblebee_drivetrain_v1.jpg", caption: "Drivetrain CAD, v1: underside layout of the motor, driveshaft, and wheel mounts" },
      { type: "image", src: "assets/media/bumblebee_drivetrain_v2.jpg", caption: "Drivetrain CAD, v2: refined chassis with honeycomb-cut walls for weight reduction" }
    ],
    links: []
  },
  {
    id: "pop-the-pinata",
    title: "Pop the Pi\u00f1ata",
    category: "meche",
    tag: "2026",
    thumb: "assets/media/pinata_MAIN.jpg",
    thumbType: "image",
    date: "Jan 2026 \u2013 May 2026",
    role: "ES50: Intro to Electrical Engineering Project",
    tools: ["Electronics", "Circuit Design", "Arduino", "Soldering", "Photoresistors", "Servo Motor"],
    description: [
      "Built a pi\u00f1ata memory game with 5-zone LED sequencing, photoresistor hit detection, and servo-actuated candy release. Players have to remember and repeat a growing sequence of zones before time runs out.",
      "Five photoresistor sensors (P0\u2013P4), each paired with a 1M\u03a9 pull-down resistor, feed into the Arduino's analog pins to detect which zone was hit. A WS2812-style LED strip on digital pin 6 drives the sequence lighting, and a servo on digital pin 9 releases the candy once a round is won.",
      "Implemented sensor threshold calibration for the photoresistors and a finite-state machine to manage three rounds of looped game logic in Arduino, reducing false-trigger hit detection by 50% through improved sensor design and iterative threshold calibration. The finished build debuted at a campus demo event, where it drew a crowd competing over the promise of free candy."
    ],
    gallery: [
      { type: "image", src: "assets/media/pinata_MAIN.jpg", caption: "The wired pi\u00f1ata under test, with LED strips run through the folds and connected to bench power supplies and multimeters" },
      { type: "video", src: "assets/media/pinata_playing.mp4", caption: "Gameplay: two players competing to match the LED sequence" },
      { type: "image", src: "assets/media/pinata_playing.jpg", caption: "Players competing over the sequence-matching game" },
      { type: "image", src: "assets/media/pinata_2.jpg", caption: "The finished pi\u00f1ata on display at a campus demo event" },
      { type: "image", src: "assets/media/pinata_diagram.jpg", caption: "Circuit diagram: five photoresistors (P0\u2013P4) into the Arduino's analog pins, driving an LED strip and servo motor" }
    ],
    links: []
  },
  {
    id: "fsae-drivetrain",
    title: "FSAE Wheel Hub Cap",
    category: "meche",
    tag: "Formula SAE",
    thumb: "assets/media/hub_cap_MAIN.jpg",
    thumbType: "image",
    date: "Sep 2025 \u2013 May 2026",
    role: "Formula SAE",
    tools: ["Engineering drawing", "Lathe", "CNC mill", "Drill press", "GD&T"],
    description: [
      "Led the drivetrain subteam on Harvard's Formula SAE team, researching, planning, and beginning fabrication of the team's first powertrain wiring harness \u2014 integrating safety circuits with engine electronics to convert an existing Honda motorbike engine into an FSAE-eligible powertrain.",
      "Manufactured the aluminum wheel hub cap shown here on a lathe and CNC mill, as part of the team's first rear suspension assembly. The part's stepped bore and three mounting holes were held to a 10-24 close fit (.201\") to seat correctly within the suspension assembly, shown in the engineering drawing and CAD renders below.",
      "Also standardized the team's machine shop and makerspace training materials and coordinated group trainings, increasing the trained member count by 50%."
    ],
    gallery: [
      { type: "image", src: "assets/media/hub_cap_MAIN.jpg", caption: "Finished aluminum wheel hub cap, machined on a lathe and CNC mill" },
      { type: "image", src: "assets/media/hub_cap_CAD.png", caption: "CAD model of the hub cap" },
      { type: "image", src: "assets/media/hub_cap_drawing_render-1.png", caption: "Engineering drawing used to manufacture the part, with GD&T callouts and tolerances" },
      { type: "image", src: "assets/media/hub_cap_Assembly.png", caption: "The hub cap (pink) as part of the full rear suspension assembly" }
    ],
    links: [
      { label: "Engineering drawing (PDF)", url: "assets/media/hub_cap_drawing.pdf" }
    ]
  },
  {
    id: "fluidic-window",
    title: "Regrowable Optical and Thermal Metamaterials",
    category: "research",
    tag: "Aizenberg Lab",
    thumb: "assets/media/Regrowable_MAIN.mp4",
    thumbType: "video",
    poster: "assets/media/Regrowable_MAIN_poster.jpg",
    date: "Jun 2025 \u2013 Present",
    role: "Aizenberg Lab",
    tools: ["Research planning", "FTIR spectroscopy", "SEM", "Spectrophotometry", "Heat transfer analysis", "Data analysis"],
    description: [
      "Engineered a patented fluidic window system that leverages a polymer-based metamaterial to dynamically modulate its own optical reflectivity (15\u201398%), diffusivity (6\u201386%), and thermal conductivity (0.04\u20130.2 W K\u207b\u00b9 m\u207b\u00b9) within a single layer \u2014 through the controlled growth and dissolution of the metamaterial itself, rather than through moving parts or added layers.",
      "The system works by injecting a polymer solution, water, and compressed air into a sealed window cavity in different combinations, driving the metamaterial through gas, liquid, gel, and solid states. Each state has a distinct optical and thermal signature, so the window's appearance and insulating performance can be tuned on demand.",
      "I explored and characterized the limits of the metamaterial's physical properties \u2014 states of matter, density, and geometry \u2014 using spectrophotometry, FTIR spectroscopy, SEM, and a custom heat transfer experiment, mapping how each variable affects optical transmission, angular scattering, and thermal conductivity.",
      "In model-house testing, the system demonstrated 40% lower power consumption than traditional window systems, and its performance envelope (visible light transmission versus thermal conductivity) matches or exceeds both standard window and wall insulation benchmarks."
    ],
    gallery: [
      { type: "video", src: "assets/media/Regrowable_MAIN.mp4", loop: true, caption: "The metamaterial being manually cycled between states inside a test cell" },
      { type: "image", src: "assets/media/Regrowable_Fig1.png", caption: "The same window cycling through gas, liquid, and gel states, and low- versus high-density solid states, with a view of Harvard's campus behind it" },
      { type: "image", src: "assets/media/Regrowable_Fig2.png", caption: "(a) The window's fluid inputs \u2014 polymer solution, water, and compressed air. (b) The resulting gas / liquid / gel / solid states. (c) The full state space of density, state of matter, and volume the metamaterial can occupy. (d\u2013e) Visible light transmission versus thermal conductivity (K-value), benchmarked against standard window and wall insulation" },
      { type: "image", src: "assets/media/Regrowable_Fig3.png", caption: "(a, c, e) Transmission spectra and thermal conductivity across the material's different states. (b) Angular light transmission, showing how diffusivity changes by state" }
    ],
    links: []
  },
  {
    id: "carbon-dot-synthesis",
    title: "Luminescent Carbon Dots from Waste Plastics",
    category: "research",
    tag: "Rutgers GSET",
    thumb: "assets/media/carbon_dots_main.jpg",
    thumbType: "image",
    date: "Jun 2023 \u2013 Jul 2023",
    role: "Rutgers Governor's School of Engineering and Technology",
    tools: ["Autoclave synthesis", "UV-Vis spectroscopy", "DLS", "Optical microscopy", "Fluorescence microscopy"],
    description: [
      "Waste polypropylene \u2014 one of the most common plastics contributing to microplastic and nanoplastic pollution \u2014 was converted into fluorescent carbon dots (CDs), turning an environmental waste stream into a functional nanomaterial.",
      "Polypropylene pellets and waste were refluxed in toluene, precipitated with ethanol, and dried under high vacuum to yield PP nanoparticles. Those nanoparticles were then redispersed in sulfuric acid and carbonized hydrothermally at temperatures and durations ranging from 120\u00b0C for 6 hours up to 180\u00b0C for 6 hours, before purification into the final carbon dot product.",
      "I optimized these autoclave conditions \u2014 temperature, time, and starting material \u2014 and characterized the resulting particles at each condition using dynamic light scattering, UV-Visible spectroscopy, and optical and fluorescence microscopy. Particle size varied considerably by synthesis condition, from roughly 2\u20134 nm for the higher-temperature pellet reactions up to 100\u2013150 nm for the lower-temperature and waste-derived batches, with the resulting solutions ranging from clear to amber depending on conditions.",
      "Under fluorescence microscopy, the synthesized carbon dots showed clear, bright emission against background debris \u2014 direct visual confirmation that the synthesis had produced genuinely fluorescent nanoparticles rather than just carbonized residue.",
      "Presented these findings at the 2023 IEEE MIT Undergraduate Research Technology Conference, with results published in ACS Materials Letters."
    ],
    gallery: [
      { type: "image", src: "assets/media/carbon_dots_fig1.png", caption: "Motivation: plastic waste fragments from macroplastics down to nanoplastics as it degrades in the environment" },
      { type: "image", src: "assets/media/carbon_dots_fig2.png", caption: "Synthesis route: PP pellets and waste \u2192 reflux in toluene \u2192 precipitation \u2192 PP nanoparticles \u2192 hydrothermal carbonization \u2192 purified PP carbon dots" },
      { type: "image", src: "assets/media/carbon_dots_vials.png", caption: "Resulting carbon dot solutions across five synthesis conditions, ranging from clear to amber" },
      { type: "image", src: "assets/media/carbon_dots_graph.png", caption: "Dynamic light scattering size distributions across synthesis conditions \u2014 particle size varied from ~2 nm to ~150 nm depending on temperature, time, and starting material" },
      { type: "image", src: "assets/media/carbon_dots_main.jpg", caption: "Fluorescence microscopy of the synthesized carbon dots" },
      { type: "image", src: "assets/media/carbon_dots_compare.png", caption: "Fluorescence intensity comparison across two synthesis batches" }
    ],
    links: [
  { label: "Published paper (ACS Materials Letters)", url: "https://pubs.acs.org/doi/abs/10.1021/acsmaterialslett.3c01419" }
]
  },
  {
    id: "battery-rack",
    title: "Modular 9V Battery Rack",
    category: "meche",
    tag: "Active Learning Labs",
    thumb: "assets/media/battery_rack_MAIN.png",
    thumbType: "image",
    date: "Jan 2026 \u2013 Aug 2026",
    role: "Active Learning Labs",
    tools: ["SolidWorks", "Laser cutting", "3D printing", "CNC mill"],
    description: [
      "Harvard's Active Learning Labs needed a way to store and organize 9V batteries for student use across the shop \u2014 compact, stackable, and cheap enough to produce many of. I designed a modular zigzag rack that holds batteries at an angle in individual slots, sized so racks can be joined edge-to-edge to scale up storage capacity.",
      "The geometry started on paper: working out the angle and spacing of each slot by hand (a repeated right-triangle unit set at 15\u00b0 and later 30\u00b0), then translating those dimensions into a repeatable, interlocking tooth-and-slot profile so adjacent panels could key into each other without extra fasteners.",
      "Early prototypes were laser-cut from cardboard and MDF to test the interlocking joints and slot spacing at full scale before committing to a final material \u2014 catching a joint-fit issue that wasn't obvious in the sketches, visible in the taped repair on one of the test panels.",
      "Once the joint geometry was validated, I moved to 3D-printed prototypes (first in white, then in black PLA) to test the full zigzag rack as a single continuous piece, before finalizing the design as a modular, multi-row CAD model sized to fit the lab's existing shelving."
    ],
    gallery: [
      { type: "image", src: "assets/media/rack_sketch1.jpg", caption: "Early hand sketches working out slot dimensions and a repeated unit angle" },
      { type: "image", src: "assets/media/rack_sketch2.jpg", caption: "Refining the angle to 30\u00b0 and the resulting slot spacing" },
      { type: "image", src: "assets/media/rack_sketch3.jpg", caption: "Working out the interlocking tooth-and-slot profile and full rack dimensions" },
      { type: "image", src: "assets/media/plate_v1.jpg", caption: "Laser-cut cardboard and MDF prototypes of the interlocking side panels \u2014 the taped joint on the left panel caught a fit issue before it reached final material" },
      { type: "image", src: "assets/media/rack_v1.jpg", caption: "First 3D-printed prototype of the full zigzag rack (PLA, white)" },
      { type: "image", src: "assets/media/rack_v2.jpg", caption: "Second 3D-printed iteration, refining wall thickness and slot depth" },
      { type: "image", src: "assets/media/battery_rack_holder.png", caption: "CAD side profile of the finalized single-row rack unit" },
      { type: "image", src: "assets/media/battery_rack_MAIN.png", caption: "Final CAD model: multiple rack units joined into a full modular battery storage rack" }
    ],
    links: []
  }
];
