/* YOUR GALLERY: edit this file to change the "Selected work" section.
   1. Put your PNG files in the images/ folder.
   2. Add or change an entry below. "category" must be one of CATEGORIES.
   3. fit: 'cover' fills the tile (crops the edges); 'contain' shows the whole image,
      which suits renders with a transparent background. Leave it out for 'cover'. */
var CATEGORIES = ['Mobs', 'Props', 'Items', 'UI'];

var WORKS = [
  { title: 'Marina',   category: ['Mobs', 'UI'],  image: 'images/marina/marina.png', big: true, video: 'https://www.youtube.com/watch?v=8WvkvIAvF48',  tools: 'Blockbench, Aseprite', description: 'An NPC and its dialogue menu from a project.' },
  { title: 'Marina\'s shop',   category: ['Mobs', 'UI'],  image: 'images/marina/shop.png',  video: 'https://www.youtube.com/watch?v=z-4qDgGNIeE',  tools: 'Blockbench, Aseprite', description: 'An NPC and its dialogue menu from a project. Only using <em>Minecraft</em>\'s vanilla NPC dialogue boxes.' },
  { title: 'Ghost Pirate',   category: ['Mobs', 'UI'],  image: 'images/marina/pirate.png',   tools: 'Blockbench, Aseprite', description: 'An NPC and its dialogue menu from a project.' },
  { title: 'Flowers',   category: 'Props',  image: 'images/marina/flowers.png',   tools: 'Aseprite', description: 'Some flowers from a project.' },
  { title: 'Desserts',   category: 'Props',  image: 'images/marina/dessert.png',   tools: 'Aseprite', description: 'Some dessert items from a project.' },
  { title: 'Nitro',   category: 'Mobs',  image: 'images/nitro.gif', big: true,  tools: 'Blockbench, Aseprite', description: 'Recreation of the character Nitro from the game <em>FragPunk</em>.' },
  { title: 'Chunky fish',   category: 'Mobs',  image: 'images/chunky.png',   tools: 'Blockbench, Aseprite', description: 'A big fish for sure.' },
  
  { title: 'Avocaboo',   category: 'Mobs',  image: 'images/bangboos/avocaboo.gif',   tools: 'Blockbench, Aseprite', description: 'Part of the recreation of Bangboos from the game <em>Zenless Zone Zero</em>. Including models, textures, animations.' },
  { title: 'Bagboo',   category: 'Mobs',  image: 'images/bangboos/bagboo.gif',   tools: 'Blockbench, Aseprite', description: 'Part of the recreation of Bangboos from the game <em>Zenless Zone Zero</em>. Including models, textures, animations.' },
  { title: 'Dumb Eous',   category: 'Mobs',  image: 'images/bangboos/dumb.gif',   tools: 'Blockbench, Aseprite', description: 'Part of the recreation of Bangboos from the game <em>Zenless Zone Zero</em>. Including models, textures, animations.' },
  
  { title: 'Voxelization',   category: ['Items', 'Props'],  big: true, image: 'images/voxel/voxelization.png', video: 'https://www.youtube.com/watch?v=1p3-XhIfWqY',  tools: 'Blockbench, Aseprite', description: 'A resource pack that adds new looks to 115 different items in <em>CraftersMC\'s SkyBlock</em> with 3D models and animations. Watch the showcase video below.' },
  { title: 'Accessories',   category: ['Items', 'Props'],  image: 'images/voxel/accessories.png',   tools: 'Blockbench, Aseprite', description: 'Some items from <em>Voxelization</em>.' },
  { title: 'Bamboo Blowpipe',   category: ['Items', 'Props'],  image: 'images/voxel/bamboo_blowpipe.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Blood God Crest',   category: ['Items', 'Props'],  image: 'images/voxel/blood_god_crest.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Creative Mind',   category: ['Items', 'Props'],  image: 'images/voxel/creative_mind.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Dolores\' Bouquet',   category: ['Items', 'Props'],  image: 'images/voxel/dolores_bouquet.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'End Stone Geode',   category: ['Items', 'Props'],  image: 'images/voxel/end_stone_geode.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Game Breaker',   category: ['Items', 'Props'],  image: 'images/voxel/game_breaker.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Golden Feather Boots',   category: ['Items', 'Props'],  image: 'images/voxel/golden_feather_boots.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Maddox\' Batphone',   category: ['Items', 'Props'],  image: 'images/voxel/maddox_batphone.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'New Year\'s Cake',   category: ['Items', 'Props'],  image: 'images/voxel/new_year_cake.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Permafrost Core',   category: ['Items', 'Props'],  image: 'images/voxel/permafrost_core.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Seal of the Oceans',   category: ['Items', 'Props'],  image: 'images/voxel/seal_of_the_oceans.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Sky Badge',   category: ['Items', 'Props'],  image: 'images/voxel/sky_badge.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Titanic Experience Bottle',   category: ['Items', 'Props'],  image: 'images/voxel/titanic_experience_bottle.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },
  { title: 'Trick-or-Treat Bag',   category: ['Items', 'Props'],  image: 'images/voxel/trick_or_treat_bag.png',   tools: 'Blockbench, Aseprite', description: 'An item from <em>Voxelization</em>.' },

  { title: 'Maya',   category: 'Mobs',  image: 'images/spirits/fish1.png',   tools: 'Blockbench, Aseprite', description: 'A fish model for one of the projects of <em>Letcraft Educación</em>.' },
  { title: 'Niza',   category: 'Mobs',  image: 'images/spirits/fish2.png',   tools: 'Blockbench, Aseprite', description: 'A fish model for one of the projects of <em>Letcraft Educación</em>.' },
  { title: 'Spirit',   category: 'Mobs',  image: 'images/spirits/spirit.gif',   tools: 'Blockbench, Aseprite', description: 'A "water spirit" NPC model, with <em>curious</em> animation, for one of the projects of <em>Letcraft Educación</em>.' },
  { title: 'Spirit',   category: 'Mobs',  image: 'images/spirits/spiritfem.gif',   tools: 'Blockbench, Aseprite', description: 'A "water spirit" NPC model, with <em>surprised</em> animation, for one of the projects of <em>Letcraft Educación</em>.' },
   
  { title: 'Teddy Bear',   category: ['Props'],  image: 'images/valentine/teddy.png',   tools: 'Blockbench, Aseprite', description: 'Teddy bear furnitures for <em>CraftersMC</em>\'s Valentine\'s Day Bundle.' },
  { title: 'Heart Balloon',   category: ['Props'],  image: 'images/valentine/heart.png',   tools: 'Blockbench, Aseprite', description: 'Heart balloon furnitures for <em>CraftersMC</em>\'s Valentine\'s Day Bundle.' },
  { title: 'Cherry Blossom Panda',   category: ['Mobs'],  image: 'images/valentine/panda.gif',   tools: 'Blockbench, Aseprite', description: 'Cherry Blossom Panda Pet Skin for <em>CraftersMC</em>\'s Valentine\'s Day Bundle, including animations.' },
  { title: 'Easter Egg Nest',   category: ['Props'],  image: 'images/easter/nest.png',   tools: 'Blockbench, Aseprite', description: 'Easter egg nest furniture for <em>CraftersMC</em>\'s Easter Bundle.' },
  { title: 'Easter Egg',   category: ['Props'],  image: 'images/easter/egg.gif',   tools: 'Blockbench, Aseprite', description: 'Easter egg furnitures for <em>CraftersMC</em>\'s Easter Bundle.' },
  
  { title: 'Old Dragon',   category: ['Mobs'],  image: 'images/end/old.png',   tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Protector Dragon',   category: ['Mobs'],  image: 'images/end/protector.png',   tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Strong Dragon',   category: ['Mobs'],  image: 'images/end/strong.png', big: true,  tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Superior Dragon',   category: ['Mobs'],  image: 'images/end/superior.png', big: true,  tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Unstable Dragon',   category: ['Mobs'],  image: 'images/end/unstable.png',   tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Wise Dragon',   category: ['Mobs'],  image: 'images/end/wise.png',   tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Young Dragon',   category: ['Mobs'],  image: 'images/end/young.png', big: true,  tools: 'Blockbench, Aseprite', description: 'A variant of the dragon bosses for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Items',   category: ['Items'],  image: 'images/end/items.png', big: true, tools: 'Blockbench, Aseprite', description: 'Bunch of items for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Nest Endermite',   category: ['Mobs'],  image: 'images/end/endermite.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Golem',   category: ['Mobs'],  image: 'images/end/golem.png',   tools: 'Blockbench, Aseprite', description: 'Golem Pet (based on a boss named End Stone Protector) for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Obsidian Defender',   category: ['Mobs'],  image: 'images/end/obsidian.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Seer',   category: ['Mobs'],  image: 'images/end/seer.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },
  { title: 'Zealot',   category: ['Mobs'],  image: 'images/end/zealot.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s <em>SkyBlock: End & Beyond</em> update.' },

  { title: 'Items',   category: ['Items'],  image: 'images/halloween/items.png', big: true,  tools: 'Blockbench, Aseprite', description: 'Bunch of items for <em>CraftersMC</em>\'s v0.5.1 update.' },
  { title: 'Wither Gourd',   category: ['Mobs'],  image: 'images/halloween/gourd.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s v0.5.1 update.' },
  { title: 'Mega Bat',   category: ['Mobs'],  image: 'images/halloween/mega.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s v0.5.1 update.' },
  { title: 'Bat Piñata',   category: ['Mobs'],  image: 'images/halloween/pinata.png',   tools: 'Blockbench, Aseprite', description: 'A mob for <em>CraftersMC</em>\'s v0.5.1 update.' },
  { title: 'Trick-or-Treater',   category: ['Mobs'],  image: 'images/halloween/trick.png',   tools: 'Blockbench, Aseprite', description: 'Variants of a mob for <em>CraftersMC</em>\'s v0.5.1 update.' }
];
