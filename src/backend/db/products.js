import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Hogwarts Legacy",
    developer: "Avalanche Software.",
    publisher:"Warner Bros. Games",
    releaseDate:"02-10-23",
    price: 2999,
    thumbnail:"https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360",
    categoryName: ["Action","Advanture"],
    rating:4.3,
    productDetailsImages:["https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-00-1920x1080-6ae741e030bb.jpg?h=270&quality=medium&resize=1&w=480","https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-01-1920x1080-abc96a86b4f0.jpg?h=270&quality=medium&resize=1&w=480","https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-02-1920x1080-bfdc2c908ac6.jpg?h=270&quality=medium&resize=1&w=480","https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-04-1920x1080-52b6c523cebc.jpg?h=270&quality=medium&resize=1&w=480"]
  },
  {
    _id: uuid(),
    title: "Saints Row",
    developer: "Deep Silver Volition",
    publisher:"Deep Silver",
    releaseDate:"08-23-22",
    price: 836,
    categoryName: ["Action"],
    rating:3,
    productDetailsImages:["https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-00-1920x1080-75eedb4b77d7.jpg","https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-01-1920x1080-4d66e9941e02.jpg","https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-02-1920x1080-4636b4228a4c.jpg","https://cdn2.unrealengine.com/egs-saintsrow-deepsilvervolition-g1a-03-1920x1080-4efee536bd50.jpg"]
  },
  
  {
    _id: uuid(),
    title: "STAR WARS Jedi: Survivor™",
    developer: "Respawn Entertainment",
    publisher:"PlayStation PC LLC",
    releaseDate:"04-28-23",
    price: 3499,
    rating:4.5,
    categoryName: ["Action"],
    thumbnail:"https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S2_1200x1600-fd090aecb23a065b29ea101939798edd?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-03-1920x1080-3198394f10eb.jpg","https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-04-1920x1080-541c462eff64.jpg","https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-05-1920x1080-077601862943.jpg","https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-g1a-06-1920x1080-644551f70f21.jpg"]
  },
  {
    _id: uuid(),
    title: "The Last of Us™ Part I",
    developer: "Naughty Dog LLC",
    publisher:"PlayStation PC LLC",
    price: 3999,
    releaseDate:"03-28-23",
    categoryName: ["Action","Adventure"],
    rating:5,
    thumbnail:"https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-04-1920x1080-b5b88ed3fd6a.jpg","https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-05-1920x1080-e06882d7ee46.jpg","https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-06-1920x1080-47ad5f8b9d1c.jpg","https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-07-1920x1080-74c593e91b18.jpg"]
  },
  {
    _id: uuid(),
    title: "Wreckfest",
    developer: "Bugbear",
    publisher:"THQ Nordic",
    releaseDate:"01-15-14",
    price: 455,
    categoryName: ["Action","Racing"],
    rating:4.7,
    thumbnail:"https://cdn1.epicgames.com/offer/8a574ca3cbfc46c69ea8d3491932e973/EGS_Wreckfest_Bugbear_S2_1200x1600-9ff32ee440228e6523a26cfb1a746987?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-00-1920x1080-512353335.jpg","https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-01-1920x1080-512353273.jpg","https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-02-1920x1080-512353252.jpg","https://cdn2.unrealengine.com/egs-wreckfest-bugbear-g1a-03-1920x1080-512353255.jpg"]
  },
  {
    _id: uuid(),
    title: "SEASON®: A letter to the future",
    developer: "Scavengers Studio",
    publisher:"Scavengers Studio",
    releaseDate:"01-31-23",
    price: 359,
    categoryName: ["Adventure","Exploration"],
    rating:5,
    thumbnail:"https://cdn1.epicgames.com/offer/3428aac705b44d88beb8334780fa33bd/EGS_SEASONAlettertothefuture_ScavengersStudio_S2_1200x1600-fd02caab75848d7b7ab3633bc0503ec7?h=480&quality=medium&resize=1&w=360",
    productDetailsImages:["https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-03-1920x1080-56ce54b092f1.jpg","https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-04-1920x1080-ca3963a0b48b.jpg","https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-05-1920x1080-98ef69c692be.jpg","https://cdn2.unrealengine.com/egs-seasonalettertothefuture-scavengersstudio-g1a-10-1920x1080-9a6029de20ab.jpg"]
  },
  {
    _id: uuid(),
    title: "AWAY: The Survival Series",
    developer: "Breaking Walls",
    publisher:"Breaking Walls",
    releaseDate:"01-12-22",
    price: 359,
    rating:4,
    categoryName: ["Adventure","Exploration"],
    productDetailsImages:["https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-01-1920x1080-be8f0b1b415d.jpg","https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-02-1920x1080-cc5fc529f900.jpg","https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-03-1920x1080-ae26f414611a.jpg","https://cdn2.unrealengine.com/egs-awaythesurvivalseries-breakingwalls-g1a-05-1920x1080-a3bbdfdeaa93.jpg"]
  },
  // {
  //   _id: uuid(),
  //   title: "No Man's Sky",
  //   developer: "Hello Games",
  //   publisher:"Hello Games",
  //   releaseDate:"08-09-16",
  //   price: "2699",
  //   categoryName: ["Adventure","Exploration"],
  // },
  {
    _id: uuid(),
    title: "The Elder Scrolls V: Skyrim Special Edition",
    developer: "Bethesda Game Studios",
    publisher:"Bethesda Game Studios",
    releaseDate:"10-06-22",
    price: 449,
    rating:3.9,
    categoryName: ["Adventure","Fantasy","Open World"],
    productDetailsImages:["https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-02-1920x1080-a84ab17bc016.jpg","https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-03-1920x1080-84a9dcf1c856.jpg","https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-05-1920x1080-ed99d30bdeeb.jpg","https://cdn2.unrealengine.com/egs-skyrimspecialedition-bethesdagamestudios-g1a-07-1920x1080-1cef06afd3be.jpg"]
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
    _id: uuid(),
    title: "The Witcher 3: Wild Hunt – Complete Edition",
    developer: "CD PROJEKT RED",
    publisher:"CD PROJEKT RED",
    releaseDate:"05-14-20",
    price: 423,
    categoryName: ["Adventure","Fantasy","Open World"],
    rating:4.0,
  },
  {
    _id: uuid(),
    title: "Brawlhalla",
    developer: "Blue Mammoth Games",
    publisher:"Ubisoft",
    releaseDate:"11-15-22",
    price: 0,
    categoryName: ["Fighting"],
    rating:3.5,
    thumbnail:"https://cdn2.unrealengine.com/atla-productart-1200x1600-1200x1600-59caced19b71.jpg?h=480&quality=medium&resize=1&w=360"
  },
  {
    _id: uuid(),
    title: "Sifu",
    developer: "Sloclap",
    publisher:"Sloclap",
    releaseDate:"11-15-22",
    price: 999,
    categoryName: ["Fighting"],
    rating:4.1,
    thumbnail:"https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=480&quality=medium&resize=1&w=360"
  },
  {
    _id: uuid(),
    title: "Cobra Kai",
    developer: "Flux Games",
    publisher:"GameMill Entertainment",
    releaseDate:"01-10-22",
    price: 117,
    categoryName: ["Fighting"],
    rating:2,
  },
  {
    _id: uuid(),
    title: "Batman™: Arkham Asylum",
    developer: "Rocksteady Studios",
    publisher:"Warner Bros.",
    releaseDate:"03-26-10",
    price: 130,
    categoryName: ["Action","Fighting"],
    rating:4.6,
    thumbnail:"https://cdn1.epicgames.com/offer/5f7c811695f14b8fa3a8e1ea35713d23/CodeRedemption_ArkhamAsylum-335x440-58065661db02a2f429d50867e130925e1_1200x1600-5dc57284959156b5eece14a18242073d?h=480&quality=medium&resize=1&w=360",
  },
  {
    _id: uuid(),
    title: "The Outlast Trials",
    developer: "Red Barrels",
    publisher:"Red Barrels",
    releaseDate:"05-18-23",
    price: 1249,
    categoryName: ["Horror"],
    thumbnail:"https://cdn1.epicgames.com/6504cc61472e498796e0b4963a201438/offer/EGS_TheOutlastTrials_RedBarrels_S2-1200x1600-c70676de7925195513fa7bc4bc2f1d9b.jpg?h=480&quality=medium&resize=1&w=360"
  },
  {
    _id: uuid(),
    title: "Rocket League",
    developer: "Psyonix LLC",
    publisher:"Psyonix LLC",
    releaseDate:"09-23-20",
    price: 0,
    categoryName: ["Racing"],
    thumbnail:"https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-689a36ce5c8643ff37c1483d68be7d6e?h=480&quality=medium&resize=1&w=360"
  },
  {
    _id: uuid(),
    title: "Valorant",
    developer: "Riot Games",
    publisher:"Riot Games",
    releaseDate:"11-04-21",
    price: 0,
    categoryName: ["Racing"],
    rating:4.3,
    thumbnail:"https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/valtall_1200x1600-300d8e4cb9bee9dbb1166b574b3bdc93?h=480&quality=medium&resize=1&w=360"
  },
  {
    _id: uuid(),
    title: "Fortnite",
    developer: "Epic Games",
    publisher:"Epic Games",
    releaseDate:"07-21-17",
    price: 0,
    categoryName: ["Action","Shooter"],
    rating:4.0,
    thumbnail:"https://cdn1.epicgames.com/offer/fn/24BR_S24_EGS_Launcher_Blade_1200x1600_1200x1600-0f74a2c818a2b043fa684875eca49784?h=480&quality=medium&resize=1&w=360"
  },
  {
    _id: uuid(),
    title: "Destiny 2",
    developer: "Bungie",
    publisher:"Bungie",
    releaseDate:"08-23-22",
    price: 0,
    categoryName: ["Action","Shooter","Adventure"],
    rating:4.1,
    thumbnail:"https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/FR_Bungie_Destiny2_S2_1200x1600_1200x1600-c04030c570b63cdced320be0f88a9f89?h=480&quality=medium&resize=1&w=360"
  }
  



];
