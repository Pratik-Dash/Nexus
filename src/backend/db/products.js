import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "x182",
    title: "Hogwarts Legacy",
    developer: "Avalanche Software.",
    publisher:"Warner Bros. Games",
    releaseDate:"02-10-23",
    price: 2999,
    thumbnail:"https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360",
    categoryName: ["Action","Advanture, Open world"],
    rating:4.3,
    productDetailsImages:["https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-00-1920x1080-6ae741e030bb.jpg?h=270&quality=medium&resize=1&w=480","https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-01-1920x1080-abc96a86b4f0.jpg?h=270&quality=medium&resize=1&w=480","https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-02-1920x1080-bfdc2c908ac6.jpg?h=270&quality=medium&resize=1&w=480","https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-04-1920x1080-52b6c523cebc.jpg?h=270&quality=medium&resize=1&w=480"],

    description:"Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
      longDesc:"Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it. Live the Unwritten.",
      specifications:{
        minimum:[{os:"Windows 10 64-bit (Version 1909 or Newer)"},
          {processor:"Intel Core i5-8400 OR AMD Ryzen 5 2600"},
          {memory:"8GB"},
          {storage:"85GB"},
          {directx:"12"},
          {graphics:"NVIDIA GeForce GTX 1070 or AMD RX Vega 56"}
      ],
        recommended:[
         { os:"Windows 10 64-bit (Version 1909 or Newer)"},
         { processor:"Intel Core i7-8700 OR AMD Ryzen 5 3600"},
          {memory:"16GB"},
          {storage:"155GB"},
         { directx:"12"},
          {graphics:"NVIDIA GeForce 1080 Ti or AMD RX 5700 XT"}
      ]
        
      },
      privacyStatement:"HOGWARTS LEGACY software © 2023 Warner Bros. Entertainment Inc. Developed by Avalanche Software. WIZARDING WORLD and HARRY POTTER Publishing Rights © J.K. Rowling. PORTKEY GAMES, HOGWARTS LEGACY, WIZARDING WORLD AND HARRY POTTER characters, names and related indicia © and ™ Warner Bros. Entertainment Inc. WARNER BROS. GAMES LOGO, WB SHIELD: ™ & © Warner Bros. Entertainment Inc. (s23)"
  },
  {
    _id: "x183",
    title: "Saints Row",
    developer: "Deep Silver Volition",
    publisher:"Deep Silver",
    releaseDate:"08-23-22",
    price: 836,
    categoryName: ["Action","Open World"],
    rating:3,
    productDetailsImages:["https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-00-1920x1080-75eedb4b77d7.jpg","https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-01-1920x1080-4d66e9941e02.jpg","https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-02-1920x1080-4636b4228a4c.jpg","https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-03-1920x1080-4efee536bd50.jpg"],
    thumbnail:"https://cdn1.epicgames.com/offer/0d23bb77ee2f45b7a571bde68caddb09/EGS_SaintsRow_DeepSilverVolition_S2_1200x1600-d95f6c911a764ad44302f021a3174a24?h=480&quality=medium&resize=1&w=360",

    description:"Welcome to Santo Ileso, a vibrant fictional city in the American Southwest. In a world rife with crime, a group of young friends embark on their own criminal venture, as they rise to the top in their bid to become Self Made.",
      longDesc:"As the future Boss, with Neenah, Kevin, and Eli by your side, you’ll form The Saints – and take on Los Panteros, The Idols, and Marshall as you build your empire across the streets of Santo Ileso and battle for control of the city. Ultimately Saints Row is the story of a start-up company, it’s just that the business The Saints are in happens to be crime.",
      specifications:{
        minimum:[{os:"Windows 10 64-bit (Version 1909 or Newer)"},
          {processor:"Intel Core i3-3240 / Ryzen 3 1200"},
          {memory:"8GB"},
          {storage:"155GB"},
          {directx:"12"},
          {graphics:"AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)"}
      ],
        recommended:[
         { os:"Windows 10 64-bit (Version 1909 or Newer)"},
         { processor:"ntel Core i5 12600 / AMD Ryzen 7 5800X"},
          {memory:"16GB"},
          {storage:"100GB"},
         { directx:"12"},
          {graphics:"AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)"}
      ]
        
      },
      privacyStatement:"©2021 and published by Deep Silver, a division of Plaion GmbH, Austria. Developed by Deep Silver Volition LLC. Deep Silver, Saints Row, Volition and their respective logos are trademarks of Plaion GmbH. All other trademarks, logos and copyrights are property of their respective owners. All Rights Reserved."
  },
  
  {
    _id: "x184",
    title: "STAR WARS Jedi: Survivor™",
    developer: "Respawn Entertainment",
    publisher:"PlayStation PC LLC",
    releaseDate:"04-28-23",
    price: 3499,
    rating:4.5,
    categoryName: ["Action"],
    thumbnail:"https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S2_1200x1600-fd090aecb23a065b29ea101939798edd?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-03-1920x1080-3198394f10eb.jpg","https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-04-1920x1080-541c462eff64.jpg","https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-05-1920x1080-077601862943.jpg","https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-06-1920x1080-644551f70f21.jpg"],

    description:"The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person galaxy-spanning action-adventure game from Respawn Entertainment and Lucasfilm Games.",
      longDesc:"The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person galaxy-spanning action-adventure game from Respawn Entertainment and Lucasfilm Games.",
      specifications:{
        minimum:[{os:"Windows 10 64-bit (Version 1909 or Newer)"},
          {processor:"4 core / 8 threads | Intel Core i7-7700 | Ryzen 5 1400"},
          {memory:"8GB"},
          {storage:"155GB"},
          {directx:"12"},
          {graphics:"AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)"}
      ],
        recommended:[
         { os:"Windows 10 64-bit (Version 1909 or Newer)"},
         { processor:"4 core / 8 threads | Intel Core i5 11600K | Ryzen 5 5600X"},
          {memory:"16GB"},
          {storage:"155GB"},
         { directx:"12"},
          {graphics:"AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)"}
      ]
        
      },
      privacyStatement:"Internet connection, EA Account, Epic Games Account, acceptance of the EA User Agreement (terms.ea.com), and installation of the EA app (ea.com/ea-app) are required to play. EA’s Privacy and Cookie Policy (privacy.ea.com) applies to your use of EA’s Services. You consent to any personal data collected through your use of EA's services being transferred to the United States, as further explained in the Privacy & Cookie Policy. EA online activation is required. You must link your EA Account to your Epic Games account to play. EA will share your Account ID and individual game and play records with Epic Games to validate your purchases and/or refund requests. Access to software content is limited to one EA & one Epic Games Account & is non-transferable after purchase. You may need to be 13+ or 16+ to register for an EA Account and to access online features (age may vary, see o.ea.com/ea/child-access for details). Some content may require gameplay to unlock. Mandatory content updates may be downloaded automatically, require additional storage, and incur bandwidth usage fees. EA may provide certain free incremental content &/or updates. Software incorporates 3rd party Digital Rights Management (DRM). EA User Agreement: terms.ea.com/de for German residents and terms.ea.com for all other residents EA Privacy & Cookie Policy: privacy.ea.com/de for German residents and privacy.ea.com for all other residents Lucasfilm, the Lucasfilm logo, STAR WARS and related properties are trademarks and/or copyrights, in the United States and other countries, of Lucasfilm Ltd. and/or its affiliates. © & TM 2023 Lucasfilm Ltd. All rights reserved."
  },
  {
    _id: "x185",
    title: "The Last of Us™ Part I",
    developer: "Naughty Dog LLC",
    publisher:"PlayStation PC LLC",
    price: 3999,
    releaseDate:"03-28-23",
    categoryName: ["Action","Adventure"],
    rating:5,
    thumbnail:"https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-04-1920x1080-b5b88ed3fd6a.jpg","https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-05-1920x1080-e06882d7ee46.jpg","https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-06-1920x1080-47ad5f8b9d1c.jpg","https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-07-1920x1080-74c593e91b18.jpg"],

    description:"Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.",
      longDesc:"The Last of Us Part I PC release brings with it plenty of PC features to bring Joel and Ellie’s tense and unforgettable journey to life. This version of The Last of Us Part I is optimized for PC with PC-centric quality-of-life enhancements. Part I will feature AMD FSR 2.2 support*, Nvidia DLSS Super Resolution support*, VSync and frame rate cap options, and a host of features designed specifically for PC, including adjustable Texture Quality, Shadows, Reflections, Ambient Occlusion, and more.",
      specifications:{
        minimum:[{os:"Windows 10 64-bit (Version 1909 or Newer)"},
          {processor:"AMD Ryzen 5 1500X, Intel Core i7-4770K"},
          {memory:"16GB"},
          {storage:"100GB"},
          {directx:"12"},
          {graphics:"AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)"}
      ],
        recommended:[
         { os:"Windows 10 64-bit (Version 1909 or Newer)"},
         { processor:"AMD Ryzen 5 3600X, Intel Core i7-8700"},
          {memory:"16"},
          {storage:"100GB"},
         { directx:"12"},
          {graphics:"AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)"}
      ]
        
      },
      privacyStatement:"©2022 Sony Interactive Entertainment LLC. Created and developed by Naughty Dog LLC. The Last of Us is a registered trademark of Sony Interactive Entertainment LLC and related companies in the U.S. and other countries."
  },
  {
    _id: "x186",
    title: "Wreckfest",
    developer: "Bugbear",
    publisher:"THQ Nordic",
    releaseDate:"01-15-14",
    price: 455,
    categoryName: ["Action","Racing"],
    rating:4.7,
    thumbnail:"https://cdn1.epicgames.com/offer/8a574ca3cbfc46c69ea8d3491932e973/EGS_Wreckfest_Bugbear_S2_1200x1600-9ff32ee440228e6523a26cfb1a746987?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-00-1920x1080-512353335.jpg","https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-01-1920x1080-512353273.jpg","https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-02-1920x1080-512353252.jpg","https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-03-1920x1080-512353255.jpg"],
    description:"Wreckfest is a demolition derby themed racing game with soft-body damage modeling, sophisticated driving dynamics and in-depth vehicle upgrading, featuring both demolition derbies and more traditional track races.",
      longDesc:"Wreckfest is jam-packed with upgrade and customization options. Whether you are preparing for your next demolition derby with reinforced bumpers, roll cages, side protectors and much more, or setting your car up for a banger race with engine performance parts like air filters, camshafts, fuel systems, etc., Wreckfest is shaping up to be the best combative motorsport game out there.",
      specifications:{
        minimum:[{os:"Windows Vista"},
          {processor:"Intel® Core™2 Duo 2.7 GHz or AMD equivalent"},
          {memory:"4GB"},
          {storage:"15GB"},
          {directx:"12"},
          {graphics:"NVIDIA Geforce® GTX™ 460 or AMD Radeon™ HD 6850"}
      ],
        recommended:[
         { os:"Windows 7 (32 or 64bit), Windows 8, Windows 10"},
         { processor:"Intel® Core™ i5 3.0 GHz or AMD equivalent"},
          {memory:"8GB"},
          {storage:"12GB"},
         { directx:"12"},
          {graphics:"NVIDIA GeForce® GTX™ 970 or AMD Radeon™ R9 380X"}
      ]
        
      },
      privacyStatement:"© 2014-2018 Bugbear Entertainment Ltd. Published & Distributed by THQ Nordic GmbH, Austria. All rights reserved. All other brands, product names and logos are trademarks or registered trademarks of their respective owners. All rights reserved"
  },
  {
    _id: "x187",
    title: "SEASON®: A letter to the future",
    developer: "Scavengers Studio",
    publisher:"Scavengers Studio",
    releaseDate:"01-31-23",
    price: 359,
    categoryName: ["Adventure","Exploration"],
    rating:5,
    thumbnail:"https://cdn1.epicgames.com/offer/3428aac705b44d88beb8334780fa33bd/EGS_SEASONAlettertothefuture_ScavengersStudio_S2_1200x1600-fd02caab75848d7b7ab3633bc0503ec7?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-03-1920x1080-56ce54b092f1.jpg","https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-04-1920x1080-ca3963a0b48b.jpg","https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-05-1920x1080-98ef69c692be.jpg","https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-10-1920x1080-9a6029de20ab.jpg"],

    description:"Leave home for the first time to collect memories before a mysterious cataclysm washes everything away. Immerse yourself in the world of Season, a third-person atmospheric adventure bicycle road trip game.",
      longDesc:"Leave home for the first time to collect memories before a mysterious cataclysm washes everything away. Immerse yourself in the world of Season, a third-person atmospheric adventure bicycle road trip game.The gameplay focuses on exploring, recording, meeting people, and unravelling the strange world around you. Each recording tool captures a different layer; sounds and music, art and architecture, the stories of characters living through pivotal moments. Your tools peel back these layers until you grasp the culture, history, and ecology underneath everything.",
      specifications:{
        minimum:[{os:"Windows 10"},
          {processor:"AMD Ryzen 5 3500X"},
          {memory:"6GB"},
          {storage:"15GB"},
          {directx:"12"},
          {graphics:"NVIDIA GeForce GTX 950"}
      ],
        recommended:[
         { os:"Windows 10"},
         { processor:"Intel Core i5-8400"},
          {memory:"8GB"},
          {storage:"12GB"},
         { directx:"12"},
          {graphics:"NVIDIA GeForce RTX 1660"}
      ]
        
      },
      privacyStatement:"© 2022 SCAVENGERS STUDIO. ALL RIGHTS RESERVED.© 2022 SCAVENGERS STUDIO. ALL RIGHTS RESERVED."

  },
  {
    _id: "x188",
    title: "AWAY: The Survival Series",
    developer: "Breaking Walls",
    publisher:"Breaking Walls",
    releaseDate:"01-12-22",
    price: 359,
    rating:4,
    categoryName: ["Adventure","Exploration"],
    productDetailsImages:["https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-01-1920x1080-be8f0b1b415d.jpg","https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-02-1920x1080-cc5fc529f900.jpg","https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-03-1920x1080-ae26f414611a.jpg","https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-05-1920x1080-a3bbdfdeaa93.jpg"],
    thumbnail:"https://cdn1.epicgames.com/offer/f072e6427226424f8e1e4b7e3b727653/EGS_AWAYTheSurvivalSeries_BreakingWalls_S2_1200x1600-a20bcc2be469a141fd5b7cd5d416b4da?h=480&quality=medium&resize=1&w=360",
    description:"In this story-based adventure, play as a tiny sugar glider in your very own nature documentary. Glide among the trees, fight dangerous predators, and explore beautiful environments as you embark on a high-flying journey to save your family.",
      longDesc:"Follow the story of a young sugar glider on a journey to save his family. Your adventures will take you across vast environments as you discover a vibrant world brimming with life. But beware of the dangers that lie ahead...",
      specifications:{
        minimum:[{os:"Windows 10"},
          {processor:"Intel® Core™ i5-2500K / AMD FX-6300"},
          {memory:"6GB"},
          {storage:"15GB"},
          {directx:"12"},
          {graphics:"Nvidia GeForce GTX 960 2GB / AMD Radeon R9 380 2GB"}
      ],
        recommended:[
         { os:"Windows 10"},
         { processor:"Intel i5-2400/AMD FX-8320"},
          {memory:"8GB"},
          {storage:"12GB"},
         { directx:"12"},
          {graphics:"Nvidia Geforce GTX 2060 6GB / AMD Radeon R5600XT 4GB"}
      ]
        
      },
      privacyStatement:"© 2021 BREAKING WALLS. Developed by Breaking Walls. The BREAKING WALLS logo is a registered trademark."
   
  },
  
  {
    _id: "x189",
    title: "The Elder Scrolls V: Skyrim Special Edition",
    developer: "Bethesda Game Studios",
    publisher:"Bethesda Game Studios",
    releaseDate:"10-06-22",
    price: 449,
    rating:4.9,
    categoryName: ["Adventure","Fantasy","Open World"],
    productDetailsImages:["https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-02-1920x1080-a84ab17bc016.jpg","https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-03-1920x1080-84a9dcf1c856.jpg","https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-05-1920x1080-ed99d30bdeeb.jpg","https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-07-1920x1080-1cef06afd3be.jpg"],
    thumbnail:"https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c?h=480&quality=medium&resize=1&w=360",
    description:"Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition includes the full base game and all its add-on expansions, plus modern enhancements like remastered art and visual effects, volumetric god rays and more.",
      longDesc:"Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of PC mods to consoles.  New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience.",
      specifications:{
        minimum:[{os:"Windows 7/8.1/10 (64-bit Version)"},
          {processor:"Intel i5-750/AMD Phenom II X4-945"},
          {memory:"8GB"},
          {storage:"12GB"},
          {directx:"12"},
          {graphics:"NVIDIA GTX 470 1GB /AMD HD 7870 2GB"}
      ],
        recommended:[
         { os:"Windows 7/8.1/10 (64-bit Version)"},
         { processor:"Intel i5-2400/AMD FX-8320"},
          {memory:"8GB"},
          {storage:"12GB"},
         { directx:"12"},
          {graphics:"NVIDIA GTX 780 3GB /AMD R9 290 4GB"}
      ]
        
      },
      privacyStatement:"© 2022 Bethesda Softworks LLC, a ZeniMax Media company. The Elder Scrolls, Skyrim, Bethesda, ZeniMax and related logos are registered trademarks or trademarks of ZeniMax Media Inc. in the U.S. and/or other countries. All other trademarks or trade names are the property of their respective owners. All Rights Reserved."
  },
  
    {
      _id: "x190",
      title: "Dead Island 2",
      developer: "Deep Silver Dambuster Studios",
      publisher:"Deep Silver",
      releaseDate:"04-21-2023",
      price: 3299,
      totalPrice:0,
      priceAfterDiscount:0,
      count:1,
      categoryName: ["Action","Horror"],
      
      rating:4.5,
      socialLinks:[
       { twitter:"https://twitter.com/deadislandgame"},
       { website:"https://deadisland.com/"},
        {instagram:"https://www.instagram.com/deadislandgame/"},
        {youtube:"https://www.youtube.com/user/deadislandgame"},
        {reddit:"https://www.reddit.com/r/deadisland/"}


      ],
      thumbnail:"https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b?h=480&quality=medium&resize=1&w=360",
      productDetailsImages:["https://cdn2.unrealengine.com/egs-deadisland2-deepsilverdambusterstudios-g1a-00-1920x1080-957ca6fac0ba.jpg","https://cdn2.unrealengine.com/egs-deadisland2-deepsilverdambusterstudios-g1a-01-1920x1080-c99de7f0e62a.jpg","https://cdn2.unrealengine.com/egs-deadisland2-deepsilverdambusterstudios-g1a-04-1920x1080-3bd55876a639.jpg","https://cdn2.unrealengine.com/egs-deadisland2-deepsilverdambusterstudios-g1a-03-1920x1080-2ffa36ebc853.jpg"],
      description:"A deadly virus is spreading across Los Angeles, turning inhabitants into zombies. Bitten, infected, but more than just immune, uncover the truth behind the outbreak and discover who -or what- you are.",
      longDesc:"Dead Island 2 is stylish, vibrant and flooded with zombie infection. Explore iconic, gore-drenched Los Angeles. Meet larger-than-life characters. Slay countless foes in exquisitely bloody detail. And evolve to become the ultimate Zombie Slayer!",
      features:"Co-op,Controller Support,Multiplayer,Single Player.",
      specifications:{
        minimum:[{os:"Windows 10"},
          {processor:"AMD FX-9590 / Intel Core i7-7700HQ"},
          {memory:"10GB"},
          {storage:"70GB"},
          {directx:"12"},
          {graphics:"Radeon R9 390X (8192 VRAM) / GeForce GTX 1060 (6144 VRAM)"}
      ],
        recommended:[
         { os:"Windows 10"},
         { processor:"Ryzen 5 5600X / Intel Core i9-9900k"},
          {memory:"10GB"},
          {storage:"70GB"},
         { directx:"12"},
          {graphics:"Radeon RX 6800 XT (16384 VRAM) / GeForce RTX 2070 Super (8192 MB)"}
      ]
        
      },
      privacyStatement:"©2022 and published by Plaion GmbH. Deep Silver is a division of Plaion. Deep Silver, Dead Island 2™ and their respective logos are trademarks of Plaion GmbH. Developed by Deep Silver Dambuster and additional development by Deep Silver Fishlabs. Dambuster and Fishlabs are registered trademarks of Plaion GmbH. All rights reserved."
    },
  
  {
    _id: "x191",
    title: "The Witcher 3: Wild Hunt – Complete Edition",
    developer: "CD PROJEKT RED",
    publisher:"CD PROJEKT RED",
    releaseDate:"05-14-20",
    price: 423,
    categoryName: ["Adventure","Fantasy","Open World"],
    rating:4.5,
    socialLinks:[
     { twitter:"https://redirect.epicgames.com/?redirectTo=https%3A%2F%2Ftwitter.com%2Fwitchergame"},
     { website:"https://redirect.epicgames.com/?redirectTo=https%3A%2F%2Fmixer.com%2Fcdprojektred"},
      {instagram:"https://redirect.epicgames.com/?redirectTo=https%3A%2F%2Fwww.instagram.com%2Fcdpred"},
      {youtube:"https://redirect.epicgames.com/?redirectTo=https%3A%2F%2Fwww.youtube.com%2Fthewitcher%2F"},
      


    ],
    thumbnail:"https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f?h=480&quality=medium&resize=1&w=360",

    productDetailsImages:["https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-01-1920x1080-8869fa6cdc96.jpg","https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-02-1920x1080-1295749a2ef4.jpg","https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-03-1920x1080-24c8f2997f41.jpg","https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-05-1920x1080-ac4ebacf1833.jpg"],
    description:"The most awarded game of a generation, now enhanced for the next! Experience The Witcher 3: Wild Hunt and its expansions in this definitive collection, boasting improved visuals and performance, new additional content, Photo Mode, and more!",
    longDesc:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world adventure, as well as both of its massive story expansions: Hearts of Stone & Blood and Wine worth an extra 50 hours of gameplay!",

    features:"Single Player",
    specifications:{
      minimum:[{os:"64-bit Windows 7, 64-bit Windows 8 (8.1)"},
        {processor:"Intel CPU Core i5-2500K 3.3GHz / AMD A10-5800K APU (3.8GHz)"},
        {memory:"6GB"},
        {storage:"50GB"},
        {directx:"11"},
        {graphics:"Radeon R9 390X (8192 VRAM) / GeForce GTX 1060 (6144 VRAM)"}
    ],
      recommended:[
       { os:"64-bit Windows 10/11"},
       { processor:"Intel CPU Core i5 7400 / Ryzen 5 1600"},
        {memory:"8 GB"},
        {storage:"50 GB"},
       { directx:"12"},
        {graphics:"Nvidia GeForce GTX 1070 / Radeon RX 480"}
    ]
      
    },
    privacyStatement:"The Witcher® is a trademark of CD Projekt S. A. The Witcher game © CD Projekt S. A. All rights reserved. The Witcher game is based on a novel by Andrzej Sapkowski. All other copyrights and trademarks are the property of their respective owners."
  },
  
  {
    _id: "x192",
    title: "Sifu",
    developer: "Sloclap",
    publisher:"Sloclap",
    releaseDate:"11-15-22",
    price: 999,
    categoryName: ["Fighting"],
    rating:4.1,
    thumbnail:"https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=480&quality=medium&resize=1&w=360",

    socialLinks:[
      { twitter:"https://twitter.com/SifuGame"},
      { website:"https://www.sifugame.com/"},
       {instagram:"https://www.instagram.com/sifugame/?hl=en"},
       {youtube:"https://www.youtube.com/c/sloclaphttps://redirect.epicgames.com/?redirectTo=https%3A%2F%2Fwww.youtube.com%2Fthewitcher%2F"},
       
 
 
     ],
     productDetailsImages:["https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-04-1920x1080-5c11d656e91c.jpg","https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-06-1920x1080-1d250b8b371c.jpg","https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-07-1920x1080-ab508e36a6ca.jpg","https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-08-1920x1080-c0e39a7553b0.jpg"],

     description:"Sifu is a realistic third-person brawler with tight Kung Fu combat mechanics and cinematic martial arts action embarking you on a path for revenge.",
    longDesc:"Itching for some more good ol' Kung Fu action? The Arenas free expansion adds an entirely new game mode, featuring 9 dynamic locations and 45 challenges that will put your Kung Fu to the test! Gear up for spectacular combats, brutal opponents, and endless opportunities to refine your moves.",
    
    specifications:{
      minimum:[{os:"64-bit Windows 7, 64-bit Windows 8 (8.1)"},
        {processor:"AMD FX-4350 or Intel Core i5-3470 or equivalent"},
        {memory:"8GB"},
        {storage:"22GB"},
        {directx:"12"},
        {graphics:"Radeon R7 250 or GeForce GT 640 or equivalent"}
    ],
      recommended:[
       { os:"64-bit Windows 10/11"},
       { processor:"AMD FX-9590 or Intel Core i7-6700K or equivalent"},
        {memory:"10 GB"},
        {storage:"22 GB"},
       { directx:"12"},
        {graphics:"GeForce GTX 970 or Radeon R9 390X or equivalent"}
    ]
      
    },
    privacyStatement:"Sifu ©2022 Sloclap SAS. 'Sifu', 'Sloclap' and the Sloclap logo are all trademarks of Sloclap SAS. Developed and published by Sloclap SAS, a member of the Kepler Interactive group. All rights reserved."
  },
  
  
  {
    _id: "x193",
    title: "The Outlast Trials",
    developer: "Red Barrels",
    publisher:"Red Barrels",
    releaseDate:"05-18-23",
    price: 1249,
    rating:4.7,
    categoryName: ["Horror"],
    thumbnail:"https://cdn1.epicgames.com/6504cc61472e498796e0b4963a201438/offer/EGS_TheOutlastTrials_RedBarrels_S2-1200x1600-c70676de7925195513fa7bc4bc2f1d9b.jpg?h=480&quality=medium&resize=1&w=360",
    socialLinks:[
      { twitter:"https://twitter.com/TheRedBarrels"},
      { website:"https://redbarrelsgames.com/"},
       {instagram:"https://www.instagram.com/the.redbarrels/"},
       
 
 
     ],

     productDetailsImages:["https://cdn2.unrealengine.com/egs-theoutlasttrials-redbarrels-g1a-02-1920x1080-90506740355d.jpg","https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-06-1920x1080-1d250b8b371c.jpg","https://cdn2.unrealengine.com/egs-theoutlasttrials-redbarrels-g1a-04-1920x1080-7b2504aa4add.jpg"],

     description:"Red Barrels invites you to experience mind-numbing terror, this time with friends. Whether you go through the trials alone or in teams, if you survive long enough and complete the therapy, Murkoff will happily let you leave… but will you be the same?",
     longDesc:"Red Barrels invites you to experience mind-numbing terror, this time with friends. Whether you go through the trials alone or in teams, if you survive long enough and complete the therapy, Murkoff will happily let you leave… but will you be the same?Set in the era of the Cold War, human guinea pigs are involuntarily recruited by the good folks at the Murkoff Corporation to test advanced methods of brainwashing and mind control. In a world of distrust, fear, and violence, your morals will be challenged, your endurance tested, and your sanity crushed.",

     specifications:{
      minimum:[{os:"Windows 10"},
        {processor:"Intel Core i7-3770 or AMD Ryzen 5 1400"},
        {memory:"8GB"},
        {storage:"40GB"},
        {directx:"12"},
        {graphics:"NVIDIA GeForce GTX 650 Ti, 2 GB or Radeon R7 360, 2 GB"}
    ],
      recommended:[
       { os:"64-bit Windows 10/11"},
       { processor:"Intel Core i7-6700K or AMD Ryzen 5 2600X"},
        {memory:"16 GB"},
        {storage:"40 GB"},
       { directx:"12"},
        {graphics:"NVIDIA GeForce GTX 1660, 6 GB or AMD Radeon RX Vega 56, 8 GB"}
    ]
      
    },

    privacyStatement:"This game contains intense violence, gore, graphic sexual content, and strong language. It may not be appropriate for viewing at work. © 2020 Red Barrels Inc. Published by Red Barrels Inc. Outlast and the Outlast logo are trademarks of Red Barrels Inc. All Rights Reserved. All trademarks are the property of their respective owners."


  },
  {
    _id: "x194",
    title: "FIFA 23",
    developer: "EA Canada",
    publisher:"EA Canada",
    releaseDate:"09-30-22",
    price: 3499,
    categoryName: ["Sports","Simulation"],
    rating:4.1,
    thumbnail:"https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-c806355d9cc8b35ebe392f2a7db03075?h=480&quality=medium&resize=1&w=360",
    socialLinks:[
      { website:"https://www.ea.com/games/fifa"},
       
     ],

     productDetailsImages:["https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-01-1920x1080-d332a2aa3416.jpg","https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-02-1920x1080-7c0a1ea98d96.jpg","https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-04-1920x1080-65c487093baf.jpg","https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-05-1920x1080-7de2acdb5abf.jpg"],
     description:"FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, men’s and women’s FIFA World Cup™ coming during the season, women’s club teams, cross-play features*, and more.",
     longDesc:"FIFA 23 brings HyperMotion to PC for the very first time, twice as much real-world motion capture making gameplay feel even more real. HyperMotion2 unlocks new features and takes FIFA 23 to over 6,000 true-to-life animations taken from millions of frames of Advanced 11v11 Match Capture. The result brings FIFA 23 even closer to both men's and women's football, making players move naturally all over the pitch.",

     specifications:{
      minimum:[{os:"Windows 10 64-bit"},
        {processor:"Ryzen 5 1600, Core i5 6600k"},
        {memory:"8GB"},
        {storage:"100GB"},
        {directx:"12"},
        {graphics:"Radeon RX 570, GeForce GTX 1050 Ti"}
    ],
      recommended:[
       { os:"64-bit Windows 10/11"},
       { processor:"Ryzen 7 2700X, Core i7 6700"},
        {memory:"12 GB"},
        {storage:"100 GB"},
       { directx:"12"},
        {graphics:"Radeon RX 5600 XT, GeForce GTX 1660"}
    ]
      
    },

    privacyStatement:"Conditions and restrictions apply. See https://www.ea.com/games/fifa/fifa-23/game-offer-and-disclaimers for details. *Requires internet connection to download. **Available starting Nov 11th. ©2022 Electronic Arts Inc. EA, EA SPORTS, and the EA SPORTS logo are trademarks of Electronic Arts Inc. Official FIFA licensed product. © FIFA and FIFA's Official Licensed Product Logo are copyrights and/or trademarks of FIFA. All rights reserved. Manufactured under license by Electronic Arts Inc."

  },
  {
    _id: "x195",
    title: "Horizon Chase Turbo",
    developer: "AQUIRIS",
    publisher:"AQUIRIS",
    releaseDate:"06-24-21",
    price: 589,
    categoryName: ["Racing"],
    rating:4,
    thumbnail:"https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HorizonChaseTurbo_AQUIRIS_S2_1200x1600-7b51e6b8f8cf6ebd50f5fb77be96ad9d?h=480&quality=medium&resize=1&w=360",
    
     productDetailsImages:["https://cdn2.unrealengine.com/egs-horizonchaseturbo-aquiris-g1a-04-1920x1080-4dfa6cc2fb11.jpg","https://cdn2.unrealengine.com/egs-horizonchaseturbo-aquiris-g1a-05-1920x1080-1eba7e94bff3.jpg","https://cdn2.unrealengine.com/egs-horizonchaseturbo-aquiris-g1a-06-1920x1080-0e34536da38e.jpg"],
     description:"Horizon Chase Turbo is a racing game inspired by the great hits of the 80's and 90's. It recreates the classic arcade gameplay with unbound speed limits of fun. Full throttle on and enjoy!",
     longDesc:"orizon Chase Turbo is a racing game inspired by the great hits of the 80's and 90's: Out Run, Top Gear (SNES), Rush, among others. It recreates classic arcade gameplay and offers you unbound speed limits of fun.Horizon Chase Turbo offers a Multiplayer Split Screen mode that rescues the nostalgia of playing with your best friends sitting on a couch all night long.",

     specifications:{
      minimum:[{os:"Windows 10 64-bit"},
        {processor:"Intel Core 2 Duo 2.0 GHz or better"},
        {memory:"2GB"},
        {storage:"500MB"},
        {directx:"12"},
        {graphics:"Intel HD Graphics 4000 or better"}
    ],
      recommended:[
       { os:"64-bit Windows 10/11"},
       { processor:"Intel Core i5 2.5 GHz or better"},
        {memory:"4GB"},
        {storage:"500MB"},
       { directx:"12"},
        {graphics:"GeForce 8000 Series or better"}
    ]
      
    },

    privacyStatement:"Conditions and restrictions apply. See https://www.ea.com/games/fifa/fifa-23/game-offer-and-disclaimers for details. *Requires internet connection to download. **Available starting Nov 11th. ©2022 Electronic Arts Inc. EA, EA SPORTS, and the EA SPORTS logo are trademarks of Electronic Arts Inc. Official FIFA licensed product. © FIFA and FIFA's Official Licensed Product Logo are copyrights and/or trademarks of FIFA. All rights reserved. Manufactured under license by Electronic Arts Inc."

  },
  {
    _id: "x196",
    title: "iRacing",
    developer: "iRacing",
    publisher:"iRacing",
    releaseDate:"06-24-21",
    price: 399,
    categoryName: ["Racing","Simulation"],
    rating:4.6,
    thumbnail:"https://cdn1.epicgames.com/offer/1d3e38b5e921433caffbbef89e265517/EGS_iRacing3monthnewmembership_iRacing_S2_1200x1600-21799332008e2134440205da0c787ce3?h=480&quality=medium&resize=1&w=360",
    
     productDetailsImages:["https://cdn2.unrealengine.com/egs-iracing-iracing-g1a-00-1920x1080-38dd57724d03.jpg","https://cdn2.unrealengine.com/egs-iracing-iracing-g1a-01-1920x1080-8f071b4d5f65.jpg","https://cdn2.unrealengine.com/egs-iracing-iracing-g1a-02-1920x1080-b14e5d9b8b50.jpg"],
     description:"The world’s premier racing simulation/game. Membership provides access to the iRacing community and unlimited racing. NASCAR, open-wheel, sportscars, dirt, rallycross & more. Purchase a 3-month iRacing membership today!",
     longDesc:"Only new iRacing accounts can be purchased through EGS. Once an iRacing account is created through EGS, subsequent renewals are done directly through the iRacing site and are at regular iRacing prices. Special, introductory pricing on EGS is only for new accounts and pricing is subject to change. A valid Credit Card or Paypal account is required for account creation. With all accounts created there is a temporary charge of $1 placed on your Credit Card or Paypal account. This is used for account verification only and is refunded once confirmed.",

     specifications:{
      minimum:[{os:"Windows 10 64-bit"},
        {processor:"4 core or better"},
        {memory:"16 GB RAM"},
        {storage:"25 GB"},
        {directx:"12"},
        {graphics:"2 GB Dedicated memory"}
    ],
      recommended:[
       { os:"Windows 11"},
       { processor:"8 core or better"},
        {memory:"32 GB RAM"},
        {storage:"50 GB"},
       { directx:"12"},
        {graphics:"8 GB dedicated memory"}
    ]
      
    },

    privacyStatement:"Copyright © 2020 iRacing.com Motorsport Simulations, LLC. All Rights Reserved."

  },

];
