/************************ 
 * Badanie_Builder *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// store info about the experiment session:
let expName = 'Badanie Bechawioralne';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};


// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code

const abstract_path = "/stimuli/Abstract";
const concrete_path = "/stimuli/VerbalPNG";
const mrt_0_path = "/stimuli/MRT_0";
const mrt_150_path = "/stimuli/MRT_150";


const gray = "/stimuli/gray.png";
const gray_list = [gray, gray, gray, gray, gray, gray, gray, gray, gray];
const empty_text = ["", "", "", "", "", "", "", "", "", ""];

const abstract_images_names = ["10.jpeg", "100.jpeg", "101.jpeg", "103.jpeg", "104.jpeg", "105.jpeg", "108.jpeg", "109.jpeg", "110.jpeg", "111.jpeg", "112.jpeg", "115.jpeg", "116.jpeg", "117.jpeg", "118.jpeg", "119.jpeg", "120.jpeg", "121.jpeg", "122.jpeg", "124.jpeg", "126.jpeg", "127.jpeg", "128.jpeg", "129.jpeg", "13.jpeg", "130.jpeg", "132.jpeg", "133.jpeg", "134.jpeg", "136.jpeg", "139.jpeg", "14.jpeg", "140.jpeg", "142.jpeg", "145.jpeg", "147.jpeg", "148.jpeg", "149.jpeg", "15.jpeg", "150.jpeg", "151.jpeg", "154.jpeg", "155.jpeg", "156.jpeg", "158.jpeg", "159.jpeg", "161.jpeg", "162.jpeg", "163.jpeg", "167.jpeg", "169.jpeg", "17.jpeg", "170.jpeg", "171.jpeg", "172.jpeg", "174.jpeg", "175.jpeg", "176.jpeg", "179.jpeg", "18.jpeg", "180.jpeg", "181.jpeg", "183.jpeg", "184.jpeg", "185.jpeg", "186.jpeg", "187.jpeg", "188.jpeg", "189.jpeg", "19.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "30.jpeg", "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "39.jpeg", "4.jpeg", "40.jpeg", "41.jpeg", "43.jpeg", "44.jpeg", "45.jpeg", "49.jpeg", "5.jpeg", "50.jpeg", "52.jpeg", "53.jpeg", "55.jpeg", "56.jpeg", "57.jpeg", "6.jpeg", "60.jpeg", "61.jpeg", "62.jpeg", "63.jpeg", "65.jpeg", "66.jpeg", "67.jpeg", "69.jpeg", "71.jpeg", "73.jpeg", "76.jpeg", "78.jpeg", "79.jpeg", "80.jpeg", "82.jpeg", "83.jpeg", "84.jpeg", "85.jpeg", "87.jpeg", "89.jpeg", "92.jpeg", "93.jpeg", "96.jpeg", "98.jpeg", "99.jpeg"];
const concrete_images_names = ["airplane.jpeg", "apple.jpeg", "ball.jpeg", "baloon.jpeg", "bamboo.jpeg", "baseball_cap.jpeg", "beachball.jpeg", "bed.jpeg", "bicicle.jpeg", "bin.jpeg", "bird.jpeg", "bird_house.jpeg", "blanket.jpeg", "bone.jpeg", "boulder.jpeg", "bowl_of_cereal.jpeg", "boxing_gloves.jpeg", "bread.jpeg", "broccoli.jpeg", "broom.jpeg", "brush.jpeg", "bucket.jpeg", "bucket_of_flowers.jpeg", "butterfly.jpeg", "cabbage.jpeg", "cactus.jpeg", "cake.jpeg", "candle.jpeg", "car.jpeg", "cardboard_box.jpeg", "carrot.jpeg", "cat.jpeg", "chair.jpeg", "cheese.jpeg", "chefs_hat.jpeg", "chess_piece.jpeg", "chocolate.jpeg", "cloud_with_rain.jpeg", "coat_hanger.jpeg", "coffe.jpeg", "coffe_bean.jpeg", "coin.jpeg", "computer.jpeg", "comp_mouse.jpeg", "cookie.jpeg", "cow.jpeg", "croissant.jpeg", "crown.jpeg", "cupcake.jpeg", "dog.jpeg", "dog_collar.jpeg", "drill.jpeg", "droplet.jpeg", "drum.jpeg", "envelope.jpeg", "fan.jpeg", "fence.jpeg", "fether.jpeg", "fireplace.jpeg", "firetruck.jpeg", "fish.jpeg", "flag.jpeg", "flamingo.jpeg", "flashlight.jpeg", "football.jpeg", "fridge.jpeg", "fries.jpeg", "frog.jpeg", "gas_can.jpeg", "gift.jpeg", "glasses.jpeg", "glass_bottle.jpeg", "glass_of_water.jpeg", "grapes.jpeg", "guitar.jpeg", "hair_dryer.jpeg", "hammer.jpeg", "hat.jpeg", "headphones.jpeg", "heart.jpeg", "helmet.jpeg", "honey_bee.jpeg", "hot_air_baloon.jpeg", "house.jpeg", "ice-cream.jpeg", "jigsaw_puzzle_piece.jpeg", "kettle.jpeg", "key.jpeg", "lamp.jpeg", "laptop.jpeg", "leaf.jpeg", "lemon.jpeg", "lightbulb.jpeg", "lighter.jpeg", "lighthouse.jpeg", "lipstick.jpeg", "log.jpeg", "lollipop.jpeg", "magnifying_glass.jpeg", "mailbox.jpeg", "map.jpeg", "mask_snorkel.jpeg", "match.jpeg", "medal.jpeg", "mountain.jpeg", "mushroom.jpeg", "nest.jpeg", "notebook.jpeg", "octopus.jpeg", "padlock.jpeg", "paint_bucket.jpeg", "pan_with_egg.jpeg", "paperclip.jpeg", "paper_airplane.jpeg", "pear.jpeg", "pen.jpeg", "pickaxe.jpeg", "pickup.jpeg", "piece_of_candy.jpeg", "piggy_bank.jpeg", "pillow.jpeg", "pilots_hat.jpeg", "pineapple.jpeg", "planet.jpeg", "potato.jpeg", "rainbow.jpeg", "razor.jpeg", "red_spool.jpeg", "ring.jpeg", "rope.jpeg", "rose.jpeg", "rowboat.jpeg", "rubber_duck.jpeg", "sail_boat.jpeg", "scale.jpeg", "scissors.jpeg", "seashell.jpeg", "security_camera.jpeg", "sewing_machine.jpeg", "sharpener.jpeg", "shoes.jpeg", "shrimp.jpeg", "slice_of_pizza.jpeg", "smartphone.jpeg", "snail.jpeg", "snowflake.jpeg", "soap.jpeg", "spoon.jpeg", "stack_of_books.jpeg", "stamp.jpeg", "star.jpeg", "starfish.jpeg", "stethoscope.jpeg", "stormy_cloud.jpeg", "strawberries.jpeg", "suitcase.jpeg", "sunflower.jpeg", "sunglasses.jpeg", "swing.jpeg", "t-shirt.jpeg", "table.jpeg", "teddybear.jpeg", "tennis_racket.jpeg", "thermal cup.jpeg", "tire.jpeg", "tissue_box.jpeg", "tooth.jpeg", "toothbrush.jpeg", "traffic_lights.jpeg", "train.jpeg", "tree.jpeg", "trophy.jpeg", "trumpet.jpeg", "tv_remote.jpeg", "umbrella.jpeg", "vacoom.jpeg", "violin.jpeg", "washing_machine.jpeg", "watch.jpeg", "watering_can.jpeg", "watermelon.jpeg", "wave.jpeg", "wheel_barrow.jpeg", "wine_glass.jpeg", "wooden_spatula.jpeg", "wrench.jpeg"];
const mrt_0_names = ["10_0.jpg", "10_0_R.jpg", "11_0.jpg", "11_0_R.jpg", "12_0.jpg", "12_0_R.jpg", "13_0.jpg", "13_0_R.jpg", "14_0.jpg", "14_0_R.jpg", "15_0.jpg", "15_0_R.jpg", "16_0.jpg", "16_0_R.jpg", "17_0.jpg", "17_0_R.jpg", "18_0.jpg", "18_0_R.jpg", "19_0.jpg", "19_0_R.jpg", "1_0.jpg", "1_0_R.jpg", "20_0.jpg", "20_0_R.jpg", "21_0.jpg", "21_0_R.jpg", "22_0.jpg", "22_0_R.jpg", "23_0.jpg", "23_0_R.jpg", "24_0.jpg", "24_0_R.jpg", "25_0.jpg", "25_0_R.jpg", "26_0.jpg", "26_0_R.jpg", "27_0.jpg", "27_0_R.jpg", "28_0.jpg", "28_0_R.jpg", "29_0.jpg", "29_0_R.jpg", "2_0.jpg", "2_0_R.jpg", "30_0.jpg", "30_0_R.jpg", "31_0.jpg", "31_0_R.jpg", "32_0.jpg", "32_0_R.jpg", "33_0.jpg", "33_0_R.jpg", "34_0.jpg", "34_0_R.jpg", "35_0.jpg", "35_0_R.jpg", "36_0.jpg", "36_0_R.jpg", "37_0.jpg", "37_0_R.jpg", "38_0.jpg", "38_0_R.jpg", "39_0.jpg", "39_0_R.jpg", "3_0.jpg", "3_0_R.jpg", "40_0.jpg", "40_0_R.jpg", "41_0.jpg", "41_0_R.jpg", "42_0.jpg", "42_0_R.jpg", "43_0.jpg", "43_0_R.jpg", "44_0.jpg", "44_0_R.jpg", "45_0.jpg", "45_0_R.jpg", "46_0.jpg", "46_0_R.jpg", "47_0.jpg", "47_0_R.jpg", "48_0.jpg", "48_0_R.jpg", "4_0.jpg", "4_0_R.jpg", "5_0.jpg", "5_0_R.jpg", "6_0.jpg", "6_0_R.jpg", "7_0.jpg", "7_0_R.jpg", "8_0.jpg", "8_0_R.jpg", "9_0.jpg", "9_0_R.jpg"];
const mrt_150_names = ["10_150.jpg", "10_150_R.jpg", "11_150.jpg", "11_150_R.jpg", "12_150.jpg", "12_150_R.jpg", "13_150.jpg", "13_150_R.jpg", "14_150.jpg", "14_150_R.jpg", "15_150.jpg", "15_150_R.jpg", "16_150.jpg", "16_150_R.jpg", "17_150.jpg", "17_150_R.jpg", "18_150.jpg", "18_150_R.jpg", "19_150.jpg", "19_150_R.jpg", "1_150.jpg", "1_150_R.jpg", "20_150.jpg", "20_150_R.jpg", "21_150.jpg", "21_150_R.jpg", "22_150.jpg", "22_150_R.jpg", "23_150.jpg", "23_150_R.jpg", "24_150.jpg", "24_150_R.jpg", "25_150.jpg", "25_150_R.jpg", "26_150.jpg", "26_150_R.jpg", "27_150.jpg", "27_150_R.jpg", "28_150.jpg", "28_150_R.jpg", "29_150.jpg", "29_150_R.jpg", "2_150.jpg", "2_150_R.jpg", "30_150.jpg", "30_150_R.jpg", "31_150.jpg", "31_150_R.jpg", "32_150.jpg", "32_150_R.jpg", "33_150.jpg", "33_150_R.jpg", "34_150.jpg", "34_150_R.jpg", "35_150.jpg", "35_150_R.jpg", "36_150.jpg", "36_150_R.jpg", "37_150.jpg", "37_150_R.jpg", "38_150.jpg", "38_150_R.jpg", "39_150.jpg", "39_150_R.jpg", "3_150.jpg", "3_150_R.jpg", "40_150.jpg", "40_150_R.jpg", "41_150.jpg", "41_150_R.jpg", "42_150.jpg", "42_150_R.jpg", "43_150.jpg", "43_150_R.jpg", "44_150.jpg", "44_150_R.jpg", "45_150.jpg", "45_150_R.jpg", "46_150.jpg", "46_150_R.jpg", "47_150.jpg", "47_150_R.jpg", "48_150.jpg", "48_150_R.jpg", "4_150.jpg", "4_150_R.jpg", "5_150.jpg", "5_150_R.jpg", "6_150.jpg", "6_150_R.jpg", "7_150.jpg", "7_150_R.jpg", "8_150.jpg", "8_150_R.jpg", "9_150.jpg", "9_150_R.jpg"];

var out;
function join_path_and_name(path, names) {
    var out;
    out = [];
    for (var name, _pj_c = 0, _pj_a = names, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        name = _pj_a[_pj_c];
        out.push(`${path}/${name}`);
    }
    return out;
}
let abstract_images = join_path_and_name(abstract_path, abstract_images_names);
let concrete_images = join_path_and_name(concrete_path, concrete_images_names);
let mrt_0 = join_path_and_name(mrt_0_path, mrt_0_names);
let mrt_150 = join_path_and_name(mrt_150_path, mrt_150_names);

const hard_words = ["error", "north", "action", "lack", "foreign", "joy", "movement", "command", "memory", "attack", "force", "all", "wind", "question", "relationship", "agreement", "light", "chapter", "content", "sentence", "country", "source", "consciousness", "bottom", "truth", "friend", "whole", "possibility", "reality", "thing", "data", "system", "peace", "accident", "sight", "effect", "guilt", "crack", "breath", "anger", "point", "order", "taste", "expression", "silence", "way", "situation", "week", "mind", "victory", "nation", "walk", "middle", "volume", "boss", "influence", "time", "sleep", "left", "pity", "work", "rest", "sound", "duty", "happiness", "smell", "topic", "name", "honor", "bottom", "love", "section", "example", "damage", "center", "trial", "despair", "meeting", "law", "fragment", "year", "space", "heat", "intention", "fate", "message", "shame", "order", "person", "piece", "south", "idea", "side", "place", "sound", "curiosity", "matter", "word", "fact", "noise", "hunger", "quantity", "cold", "moment", "resistance", "end", "evil", "journey", "need", "attention", "miracle", "future", "gift", "death", "cry", "family", "time", "conversation", "advice", "fear", "view", "general", "day", "darkness", "shape", "pain", "presence", "ego", "friendship", "game", "voice", "companion", "moment", "plan", "air", "echo", "noise", "love", "problem", "help", "interest", "course", "hello", "story", "state", "sentence", "goal", "feeling", "power", "character", "participation", "tone", "group", "miss", "difference", "material", "life", "part", "whatever", "colonel"];
const easy_words = ["face", "east", "weather", "wagon", "gold", "meat", "fire", "wine", "river", "crowd", "horn", "eye", "smoke", "nose", "text", "lady", "mage", "bird", "explosion", "sand", "key", "moon", "trace", "pants", "sea", "court", "hair", "machine", "mouth", "cannon", "boy", "priest", "church", "dragon", "earth", "step", "gun", "circle", "apartment", "snow", "tree", "eyes", "cat", "bullet", "tongue", "stairs", "heart", "flash", "half", "sky", "armchair", "corridor", "film", "belly", "outfit", "ghost", "head", "bow", "computer", "forest", "dog", "hand", "laboratory", "table", "train", "water", "tail", "breast", "soldier", "roof", "field", "man", "door", "lake", "inscription", "sack", "ear", "stream", "captain", "forehead", "clothes", "army", "child", "devil", "king", "shore", "city", "body", "brain", "evening", "war", "finger", "screen", "book", "shine", "telephone", "policeman", "wound", "property", "summit", "wolf", "west", "wheel", "cross", "building", "paper", "wall", "engine", "clock", "bed", "throat", "village", "coat", "square", "fog", "weapon", "room", "night", "plane", "ship", "house", "ceiling", "sword", "hat", "knife", "skin", "man", "glasses", "sun", "car", "smile", "garden", "hand", "castle", "boy", "picture", "bridge", "doctor", "glass", "rain", "knight", "blood", "shadow", "professor", "camp", "girl", "sign", "photo", "beer", "eyebrows", "storm", "boat", "corpse", "window", "bread", "chair", "stone", "blade", "back", "number"];


// Fisher-Yates shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Shuffle all your arrays

shuffleArray(abstract_images);
shuffleArray(concrete_images);
shuffleArray(mrt_0);
shuffleArray(mrt_150);
shuffleArray(easy_words);
shuffleArray(hard_words);






function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function get_trial_cords(position, trial_i_loop, stymuli_type) {
    if (((stymuli_type === "text") && (trial_i_loop < (trial.length / 2)))) {
        return [[2, 2], [2, 2], [2, 2]];
    }
    if (((stymuli_type === "image") && (trial_i_loop >= (trial.length / 2)))) {
        return [[2, 2], [2, 2], [2, 2]];
    } else {
        if ((position === "horizontal")) {
            return [[(- 0.5), 0], [0, 0], [0.5, 0]];
        }
        if ((position === "vertical")) {
            return [[0, 0.5], [0, 0], [0, -0.5]];
        }
    }
}


// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

psychoJS.getEnvironment = function () {
    return 'SERVER'; // Always return 'SERVER'
};

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'norm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:

psychoJS.schedule(psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: "Please wait while resources are loaded",
}));



const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function () { return (psychoJS.gui.dialogComponent.button === 'OK'); document.getElementById('show-instructions-button').style.display = 'none'; }, flowScheduler, dialogCancelScheduler);

// Funkcja do sprawdzenia wartości parametru w URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


// Sprawdź wartość parametru 'a'
const aValue = getParameterByName('a');;

// Sprawdź wartość parametru 'a'
const qualtricsID = getParameterByName('qualtrics');;


// flowScheduler gets run if the participants presses OK

//setu
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(() => {
    console.log("updateInfo done");
    return Scheduler.Event.NEXT;
});
flowScheduler.add(experimentInit);
flowScheduler.add(() => {
    console.log("experimentInit done");
    return Scheduler.Event.NEXT;
});


//wstęp
flowScheduler.add(WstępRoutineBegin());
flowScheduler.add(() => {
    setTimeout(() => {
        const button = document.getElementById('show-instructions-button');
        if (button) {
            console.log("Ukrywam przycisk...");
            button.style.display = 'none';
        } else {
            console.log("Przycisk nie istnieje w DOM.");
        }
    }, 100); // Dodajemy opóźnienie 100 ms, aby upewnić się, że element został wygenerowany
    return Scheduler.Event.NEXT;
});
flowScheduler.add(WstępRoutineEachFrame());
flowScheduler.add(WstępRoutineEnd());
flowScheduler.add(() => {
    console.log("WstępRoutine done");
    return Scheduler.Event.NEXT;
});
//użądzenie
flowScheduler.add(device_typeRoutineBegin());
flowScheduler.add(device_typeRoutineEachFrame());
flowScheduler.add(device_typeRoutineEnd());
flowScheduler.add(() => {
    console.log("DeviceType done");
    return Scheduler.Event.NEXT;
});

//próbne
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(() => {
    console.log("Trials done");
    return Scheduler.Event.NEXT;
});


flowScheduler.add(() => {
    setTimeout(() => {
        const button = document.getElementById('show-instructions-button');
        if (button) {
            console.log("Ukrywam przycisk...");
            button.style.display = 'block';
        } else {
            console.log("Przycisk nie istnieje w DOM.");
        }
    }, 100); // Dodajemy opóźnienie 100 ms, aby upewnić się, że element został wygenerowany
    return Scheduler.Event.NEXT;
});

//info przed głównym
flowScheduler.add(main_startRoutineBegin());
flowScheduler.add(main_startRoutineEachFrame());
flowScheduler.add(main_startRoutineEnd());
flowScheduler.add(() => {
    console.log("main_start done");
    return Scheduler.Event.NEXT;
});

flowScheduler.add(() => {
    setTimeout(() => {
        const button = document.getElementById('show-instructions-button');
        if (button) {
            console.log("Ukrywam przycisk...");
            button.style.display = 'none';
        } else {
            console.log("Przycisk nie istnieje w DOM.");
        }
    }, 100); // Dodajemy opóźnienie 100 ms, aby upewnić się, że element został wygenerowany
    return Scheduler.Event.NEXT;
});

//główny
const mainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoopBegin(mainLoopScheduler));
flowScheduler.add(mainLoopScheduler);
flowScheduler.add(mainLoopEnd);
flowScheduler.add(mainLoopEnd);
flowScheduler.add(() => {
    console.log("mainLoop done");
    return Scheduler.Event.NEXT;
});

if (Number(aValue) > 31 && Number(aValue) <= 48) {
    // Dodaj sekwencję rutyn email tylko, jeśli a=1
    flowScheduler.add(emailRoutineBegin());
    flowScheduler.add(emailRoutineEachFrame());
    flowScheduler.add(emailRoutineEnd());
    flowScheduler.add(() => {
        console.log("Email done");
        return Scheduler.Event.NEXT;
    });
}


flowScheduler.add(ending_qRoutineBegin());
flowScheduler.add(ending_qRoutineEachFrame());
flowScheduler.add(ending_qRoutineEnd());
flowScheduler.add(ending_rzetelnieRoutineBegin());
flowScheduler.add(ending_rzetelnieRoutineEachFrame());
flowScheduler.add(ending_rzetelnieRoutineEnd());


flowScheduler.add(async function () {
    let csvData = psychoJS.experiment.getResultAsCsv(); // Pobierz dane jako CSV
    let filename = `${expInfo["participant"]}_${expName}_${expInfo["date"]}.csv`;
    await saveDataToServer(csvData, filename); // Wyślij dane na serwer
    return Scheduler.Event.NEXT;
});


flowScheduler.add(quitPsychoJS, 'Thank you for participating in the survey!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for participating in the survey!', false);



psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
      { 'name': 'default.png', 'path': '/stimuli/gray.png' },
      { 'name': '/stimuli/gray.png', 'path': '/stimuli/gray.png' },
      { 'name': 'gray.png', 'path': '/stimuli/gray.png' },
      ...abstract_images.map(path => ({ name: `${path}`, path: `${path}` })),
      ...concrete_images.map(path => ({ name: `${path}`, path: `${path}` })),
      ...mrt_150.map(path => ({ name: `${path}`, path: `${path}` })),
      ...mrt_0.map(path => ({ name: `${path}`, path: `${path}` })),
  ]
}).then(() => {
    // Ensure experiment object exists
    if (psychoJS.experiment) {
        // Override the _save method
        psychoJS.experiment._save = function () {
            console.log("_save called: Preventing local saving.");
        };

        // Override the _downloadData method
        psychoJS.experiment._downloadData = function () {
            console.log("_downloadData called: Preventing download.");
            return null;
        };
    } else {
        console.error("psychoJS.experiment is undefined. Cannot override methods.");
    }

    console.log("Custom save and download methods applied.");
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  
  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


// Function to save data to the server
async function saveDataToServer(data, filename) {
    try {
        const response = await fetch("save_data.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `data=${encodeURIComponent(data)}&filename=${encodeURIComponent(filename)}`
        });

        const result = await response.text();
        console.log("Server response:", result);
    } catch (error) {
        console.error("Error saving data to server:", error);
    }
}
var WstępClock;
var i_loop;
var trial_i_loop;
var m;
var text_height;
var aspect_ratio;
var image_size;
var mrt_image_size;
var cross_size;
var choice_button_size;
var response_button_size;
var position;
var font_height;
var text;
var Dalej;
var key_resp;
var device_typeClock;
var text_2;
var komputer_laptop;
var smartfon;
var tablet;
var trial_stimuliClock;
var polygon_1;
var trial;
var trial_output;
var trial_output_stimuli;
var z;
var trial_image1;
var trial_image2;
var trial_image3;
var trial_text1;
var tral_text2;
var trial_text3;
var mrtClock;
var schemat_mrt;
var polygon_2;
var mrt_image_front;
var same;
var different;
var key_same;
var key_different;
var feedbackClock;
var mrt_res_text;
var stimuli_resClock;
var polygon;
var image_res;
var text_res;
var byl;
var nie_byl;
var key_byl;
var key_nie_byl;
var main_startClock;
var Dalej_2;
var text_4;
var trial_count;
var trial_type;
var key_resp_2;
var stimuliClock;
var _pj;
var schemat;
var repetitions;
var schemat_list;
var schemat_dict;
var keys;
var outcomes;
var main_stimuli;
var outcomes_stimuli;
var x;
var polygon_3;
var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;
var globalClock;
var routineTimer
var random_index;
var category;
let valid_items = [];
var emailClock;
var textbox;
var Dalej_3;
var text_email;
var ending_qClock;
var text_czy_git;
var tak;
var nie;
var ending_rzetelnieClock;
var czy_rzet;
var tak_2;
var nie_2;

async function experimentInit() {
  // Initialize components for Routine "Wstęp"
  WstępClock = new util.Clock();
    // Run 'Begin Experiment' code from code
    const categories = [concrete_images, abstract_images, easy_words, hard_words];
    i_loop = 404;
    trial_i_loop = 0;
    m = 0;
    let _winSize = psychoJS.window.size;
    text_height = 0.1;
    image_size = [0.45, 0.45];
    mrt_image_size = [1, 0.53375];
    cross_size = [0.2, 0.2];
    choice_button_size = [0.5, 0.5];
    response_button_size = [0.6, 0.6];
    position = "horizontal";
    font_height = 0.06;
    if ((_winSize[0] > _winSize[1])) {
        aspect_ratio = (_winSize[0] / _winSize[1]);
        image_size = [0.45, (0.45 * aspect_ratio)];
        mrt_image_size = [1, (0.53375 * aspect_ratio)];
        cross_size = [0.2, (0.2 * aspect_ratio)];
        choice_button_size = [0.5, (0.5 * aspect_ratio)];
        response_button_size = [0.6, (0.6 * aspect_ratio)];
        position = "horizontal";
    } else {
        if ((_winSize[0] < _winSize[1])) {
            aspect_ratio = (_winSize[1] / _winSize[0]);
            image_size = [(0.45 * aspect_ratio), 0.45];
            mrt_image_size = [(1 * aspect_ratio), 0.53375];
            cross_size = [(0.2 * aspect_ratio), 0.2];
            choice_button_size = [(0.5 * aspect_ratio), 0.5];
            response_button_size = [0.6, 0.6];
            position = "vertical";
        } else {
            aspect_ratio = 1;
            image_size = [0.45, 0.45];
            mrt_image_size = [1, 0.53375];
            cross_size = [0.2, 0.2];
            choice_button_size = [0.5, 0.3];
            response_button_size = [0.6, 0.6];
            position = "horizontal";
        }
    }
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Now there will be two attempts with information about the correctness of the task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: font_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
    Dalej = new visual.ButtonStim({
        win: psychoJS.window,
        name: 'Dalej',
        text: 'Next (Space)',
        fillColor: 'darkgrey',
        borderColor: [-1, -1, -1],
        color: 'white',
        colorSpace: 'rgb',
        pos: [0, (- 0.5)],
        letterHeight: font_height,
        units: 'norm',
        size: choice_button_size,
        ori: 0.0,
        depth: 0.0
    });
  Dalej._size = [0.5,0.5];
  Dalej.clock = new util.Clock();

  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "device_type"
  device_typeClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'What device are you using to complete the survey?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: font_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  komputer_laptop = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'komputer',
    text: 'Computer',
    fillColor: 'darkgrey',
    borderColor: [-1,-1,-1],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.25)],
    letterHeight: font_height,
    size: choice_button_size,
    ori: 0.0,
    autoDraw: true,
    padding: 0.05,
    depth: -2
  });
  komputer_laptop.clock = new util.Clock();
  
  smartfon = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'smartfon',
    text: 'Smartphone',
    fillColor: 'darkgrey',
      borderColor: [-1, -1, -1],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.5)],
    letterHeight: font_height,
    size: choice_button_size,
    ori: 0.0,
    padding: 0.05,
    depth: -2
  });
  smartfon.clock = new util.Clock();
  
  tablet = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'tablet',
    text: 'Tablet',
    fillColor: 'darkgrey',
      borderColor: [-1, -1, -1],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.75)],
    letterHeight: font_height,
    size: choice_button_size,
    ori: 0.0,
    padding: 0.05,
    depth: -3
  });
  tablet.clock = new util.Clock();
  
  // Initialize components for Routine "trial_stimuli"
  trial_stimuliClock = new util.Clock();
  polygon_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_1', 
    vertices: 'cross', size:cross_size,
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 0.01, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Run 'Begin Experiment' code from code_2
    trial = [[], []];
    trial_output = [0, 1];
    trial_output_stimuli = [[], []];
    z = 0;
    let reversed_items;

    if (typeof trial === "undefined") {
        console.log("myArray is undefined");
    } else {
        console.log("myArray length:", trial.length);
    }

    for (var x, _pj_c = 0, _pj_a = util.range(2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        x = _pj_a[_pj_c];
        reversed_items = [];
        for (var i, _pj_f = 0, _pj_d = util.range(1, 4), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            i = _pj_d[_pj_f];
            reversed_items.push(categories[z].slice(-i)[0]);
        }
        trial[x] = trial[x].concat(reversed_items); // Corrected: explicitly update trial[x]
        z += 2;
    }

    for (var i, _pj_c = 0, _pj_a = util.range(trial.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if (trial_output[i] === 1) {
            random_index = randint(0, 2);
            trial_output_stimuli[i] = trial[i][random_index];
        } else {
            trial_output_stimuli[i] = categories[i].slice(-4)[0];
        }
    }

    console.log("Trial Data:", trial);
    console.log("Trial Output Stimuli:", trial_output_stimuli);
  console.log('Current Image:', 'gray.png');
  trial_image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial_image1', units : undefined, 
    image: 'gray.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  trial_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial_image2', units : undefined, 
    image: 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  trial_image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial_image3', units : undefined, 
      image: 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  trial_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  tral_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tral_text2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  trial_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "mrt"
  mrtClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  schemat_mrt = function () {
      var _pj_a = [], _pj_b = util.range(20);
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var _ = _pj_b[_pj_c];
          // Tworzymy listę [0, 0, 1, 1] i losujemy jej kolejność
          var sublist = [0, 0, 1, 1];
          shuffleArray(sublist); // funkcja mieszająca kolejność elementów
          _pj_a.push(sublist);
      }
      return _pj_a;
  }
      .call(this);

  
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', 
    vertices: 'cross', size:cross_size,
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 0.01, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mrt_image_front = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mrt_image_front', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : mrt_image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  same = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'same',
    text: 'Same',
    fillColor: 'darkgrey',
    borderColor: [-1, -1, -1],
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.6), (- 0.7)],
    letterHeight: font_height,
    size: response_button_size,
    ori: 0.0,
    depth: -3
  });
  same.clock = new util.Clock();
  
  different = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'different',
    text: 'different',
    fillColor: 'darkgrey',
    borderColor: [-1, -1, -1],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.6, (- 0.7)],
    letterHeight: font_height,
    size: response_button_size,
    ori: 0.0
    ,
    depth: -4
  });
  different.clock = new util.Clock();
  
  key_same = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_different = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  mrt_res_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'mrt_res_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "stimuli_res"
  stimuli_resClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:cross_size,
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 0.01, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Run 'Begin Experiment' code from code_6
  
  
  image_res = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_res', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_res = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_res',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  byl = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'byl',
    text: 'old',
    fillColor: 'darkgrey',
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.6), (- 0.6)],
    letterHeight: font_height,
    size: response_button_size,
    ori: 0.0,
    depth: -3
  });
  byl.clock = new util.Clock();

  byl.setPos([(- 0.6), (- 0.7)]);

  nie_byl = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nie_byl',
    text: 'new',
    fillColor: 'darkgrey',
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.6, (- 0.6)],
    letterHeight: font_height,
    size: response_button_size,
    ori: 0.0,
    depth: -3
  });
  nie_byl.clock = new util.Clock();

  nie_byl.setPos([0.6, (- 0.7)]);

  key_byl = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_nie_byl = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_start"
  main_startClock = new util.Clock();
  Dalej_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Dalej_2',
    text: 'Next (Space)',
    fillColor: 'darkgrey',
    borderColor: [-1, -1, -1],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.7)],
    letterHeight: font_height,
    size: choice_button_size,
    ori: 0.0
    ,
    depth: 0
  });
  Dalej_2.clock = new util.Clock();
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Now the main part of the study will begin, where there will be no feedback on the correctness of the task completion.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.03*aspect_ratio,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });


    // Initialize components for Routine "email"
    emailClock = new util.Clock();
    textbox = new visual.TextBox({
        win: psychoJS.window,
        name: 'textbox',
        text: '',
        placeholder: 'Tu wpisz email...',
        font: 'Arial',
        pos: [0, (- 0.3)],
        draggable: false,
        letterHeight: 0.05,
        lineSpacing: 1.0,
        size: [1, 0.1], units: undefined,
        ori: 0.0,
        color: 'white', colorSpace: 'rgb',
        fillColor: undefined, borderColor: 'black',
        languageStyle: 'LTR',
        bold: false, italic: false,
        opacity: undefined,
        padding: 0.0,
        alignment: 'center',
        overflow: 'visible',
        editable: true,
        multiline: true,
        anchor: 'center',
        depth: 0.0
    });

    Dalej_3 = new visual.ButtonStim({
        win: psychoJS.window,
        name: 'Dalej_3',
        text: 'Next (Space)',
        fillColor: 'darkgrey',
        borderColor: [(- 1.0), (- 1.0), (- 1.0)],
        color: 'white',
        colorSpace: 'rgb',
        pos: [0, (- 0.7)],
        letterHeight: 0.05,
        size: [0.5, 0.3],
        ori: 0.0
        ,
        depth: -1
    });
    Dalej_3.clock = new util.Clock();

    text_email = new visual.TextStim({
        win: psychoJS.window,
        name: 'text_email',
        text: 'You are someone who scored low on the visual imagery questionnaire in the first part of the study. This indicates that you may have aphantasia. Aphantasia is very rare, less than 3% of the population has it, so it is difficult to find such people for research. We would appreciate it if you could provide your email address below so that we can contact you for future research purposes.',
        font: 'Arial',
        units: undefined,
        pos: [0, 0.4], draggable: false, height: 0.06, wrapWidth: 1.5, ori: 0.0,
        languageStyle: 'LTR',
        color: new util.Color('white'), opacity: undefined,
        depth: -2.0
    });


  // Run 'Begin Experiment' code from code_8
  trial_count = 0;
  trial_type = 0;
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stimuli"
  stimuliClock = new util.Clock();
  // Run 'Begin Experiment' code from code_7
  var _pj;
  function _pj_snippets(container) {
      function in_es6(left, right) {
          if (((right instanceof Array) || ((typeof right) === "string"))) {
              return (right.indexOf(left) > (- 1));
          } else {
              if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                  return right.has(left);
              } else {
                  return (left in right);
              }
          }
      }
      container["in_es6"] = in_es6;
      return container;
  }
  _pj = {};
  _pj_snippets(_pj);
  function create_schemat_ranges(schemat_var, repetitions) {
      var end, segment, segments, start;
      segments = [];
      for (var i, _pj_c = 0, _pj_a = util.range(schemat_var.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          start = schemat_var[i][0];
          end = schemat_var[i][1];
          segment = [];
          for (var value, _pj_f = 0, _pj_d = util.range(start, (end + 1)), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
              value = _pj_d[_pj_f];
              for (var _, _pj_i = 0, _pj_g = util.range(repetitions), _pj_h = _pj_g.length; (_pj_i < _pj_h); _pj_i += 1) {
                  _ = _pj_g[_pj_i];
                  segment.push(value);
              }
          }
          for (var j, _pj_f = 0, _pj_d = util.range(Math.min(segment.length, (repetitions * 4))), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
              j = _pj_d[_pj_f];
              segments.push(segment[j]);
          }
      }
      return segments;
  }
  schemat = [[4, 7], [4, 7], [5, 8], [5, 8]];
  repetitions = 4;
  schemat_list = create_schemat_ranges(schemat, repetitions);
  schemat_dict = {};
  keys = util.range(schemat_list.length);
  for (var key, _pj_c = 0, _pj_a = keys, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      key = _pj_a[_pj_c];
      schemat_dict[key] = schemat_list[key];
  }
  outcomes = function () {
    var _pj_a = []; // Tworzymy pustą listę
    var _pj_b = util.range(16); // Tworzymy zakres od 0 do 19

    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var _ = _pj_b[_pj_c];
        // Tworzymy listę [0, 0, 1, 1] i losujemy jej kolejność
        var sublist = [0, 0, 1, 1];
        shuffleArray(sublist); // Funkcja mieszająca kolejność elementów
        _pj_a = _pj_a.concat(sublist); // Dodajemy elementy sublisty do głównej listy
    }

    return _pj_a; // Zwracamy spłaszczoną listę
  }
  .call(this);
  main_stimuli = function () {
      var _pj_a = [], _pj_b = util.range((repetitions * 16));
      for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
          var _ = _pj_b[_pj_c];
          _pj_a.push([]);
      }
      return _pj_a;
  }
  .call(this);
  outcomes_stimuli = [...outcomes];
  x = 0;
  for (var i, _pj_c = 0, _pj_a = util.range(schemat_list.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      if ((i === Number.parseInt((schemat_list.length * 0.25)))) {
          x = 0;
      } else {
          if ((i === Number.parseInt((schemat_list.length * 0.5)))) {
              x = 0;
          } else {
              if ((i === Number.parseInt((schemat_list.length * 0.75)))) {
                  x = 0;
              }
          }
      }
      if ((i < (schemat_list.length * 0.25))) {
          category = categories[0];
      } else {
          if ((i < (schemat_list.length * 0.5))) {
              category = categories[1];
          } else {
              if ((i < (schemat_list.length * 0.75))) {
                  category = categories[2];
              } else {
                  category = categories[3];
              }
          }
      }
      let end_index = Math.min((x + schemat_dict[i]), category.length);
      main_stimuli[i] = category.slice(x, end_index);
      x += schemat_dict[i];
      x = Math.min(x, category.length);
  }
  function filter_valid_items(category, main_stimuli) {
      var is_valid;
      valid_items = [];
      for (var item, _pj_c = 0, _pj_a = category, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          item = _pj_a[_pj_c];
          is_valid = true;
          for (var sublist, _pj_f = 0, _pj_d = main_stimuli, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
              sublist = _pj_d[_pj_f];
              if (_pj.in_es6(item, sublist)) {
                  is_valid = false;
                  break;
              }
          }
          if (is_valid) {
              valid_items.push(item);
          }
      }
      return valid_items;
  }
  x = 0;
  for (var i, _pj_c = 0, _pj_a = util.range(outcomes.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      if ((i === Number.parseInt((schemat_list.length * 0.25)))) {
          x = 0;
      } else {
          if ((i === Number.parseInt((schemat_list.length * 0.5)))) {
              x = 0;
          } else {
              if ((i === Number.parseInt((schemat_list.length * 0.75)))) {
                  x = 0;
              }
          }
      }
      if ((i < (outcomes.length * 0.25))) {
          category = categories[0];
      } else {
          if ((i < (outcomes.length * 0.5))) {
              category = categories[1];
          } else {
              if ((i < (outcomes.length * 0.75))) {
                  category = categories[2];
              } else {
                  category = categories[3];
              }
          }
      }
      valid_items = filter_valid_items(category, main_stimuli);
      if ((outcomes[i] === 0)) {
          if ((x < valid_items.length)) {
              outcomes_stimuli[i] = valid_items[x];
          }
      } else {
          random_index = randint(0, (main_stimuli[i].length - 1));
          outcomes_stimuli[i] = main_stimuli[i][random_index];
      }
      x += 1;
  }
 
  
  polygon_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_3', 
    vertices: 'cross', size:cross_size,
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 0.01, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  image7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  image8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : image_size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  text5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  text6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -15.0 
  });
  
  text7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
  });
  
  text8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_height,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });




    // Initialize components for Routine "ending_q"
    ending_qClock = new util.Clock();
    text_czy_git = new visual.TextStim({
        win: psychoJS.window,
        name: 'text_czy_git',
        text: 'Did you see all the stimuli well and clearly?',
        font: 'Arial',
        units: undefined,
        pos: [0, 0.4], draggable: false, height: 0.06, wrapWidth: 1.5, ori: 0.0,
        languageStyle: 'LTR',
        color: new util.Color('white'), opacity: undefined,
        depth: 0.0
    });

    tak = new visual.ButtonStim({
        win: psychoJS.window,
        name: 'tak',
        text: 'Yes',
        fillColor: 'darkgrey',
        borderColor: [(- 1.0), (- 1.0), (- 1.0)],
        color: 'white',
        colorSpace: 'rgb',
        pos: [0, (- 0.3)],
        letterHeight: 0.05,
        size: [0.5, 0.3],
        ori: 0.0
        ,
        depth: -1
    });
    tak.clock = new util.Clock();

    nie = new visual.ButtonStim({
        win: psychoJS.window,
        name: 'nie',
        text: 'No',
        fillColor: 'darkgrey',
        borderColor: [(- 1.0), (- 1.0), (- 1.0)],
        color: 'white',
        colorSpace: 'rgb',
        pos: [0, (- 0.6)],
        letterHeight: 0.05,
        size: [0.5, 0.3],
        ori: 0.0
        ,
        depth: -2
    });
    nie.clock = new util.Clock();

    // Initialize components for Routine "ending_rzetelnie"
    ending_rzetelnieClock = new util.Clock();
    czy_rzet = new visual.TextStim({
        win: psychoJS.window,
        name: 'czy_rzet',
        text: 'Did you perform the test reliably? Selecting "No" will not result in any consequences, but will help with the analysis.',
        font: 'Arial',
        units: undefined,
        pos: [0, 0.4], draggable: false, height: 0.06, wrapWidth: 1.5, ori: 0.0,
        languageStyle: 'LTR',
        color: new util.Color('white'), opacity: undefined,
        depth: 0.0
    });

    tak_2 = new visual.ButtonStim({
        win: psychoJS.window,
        name: 'tak_2',
        text: 'Yes',
        fillColor: 'darkgrey',
        borderColor: [(- 1.0), (- 1.0), (- 1.0)],
        color: 'white',
        colorSpace: 'rgb',
        pos: [0, (- 0.3)],
        letterHeight: 0.05,
        size: [0.5, 0.3],
        ori: 0.0
        ,
        depth: -1
    });
    tak_2.clock = new util.Clock();

    nie_2 = new visual.ButtonStim({
        win: psychoJS.window,
        name: 'nie_2',
        text: 'No',
        fillColor: 'darkgrey',
        borderColor: [(- 1.0), (- 1.0), (- 1.0)],
        color: 'white',
        colorSpace: 'rgb',
        pos: [0, (- 0.6)],
        letterHeight: 0.05,
        size: [0.5, 0.3],
        ori: 0.0
        ,
        depth: -2
    });
    nie_2.clock = new util.Clock();





  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var WstępMaxDurationReached;
var _key_resp_allKeys;
var WstępMaxDuration;
var WstępComponents;
function WstępRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Wstęp' ---
    t = 0;
    WstępClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    WstępMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    psychoJS.window.mouseVisible = true;
    
    // reset Dalej to account for continued clicks & clear times on/off
    Dalej.reset()
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Wstęp.started', globalClock.getTime());
    WstępMaxDuration = null
    // keep track of which components have finished
    WstępComponents = [];
    WstępComponents.push(text);
    WstępComponents.push(Dalej);
    WstępComponents.push(key_resp);
    
    for (const thisComponent of WstępComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WstępRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Wstęp' ---
    // get current time
    t = WstępClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *Dalej* updates
    if (t >= 0 && Dalej.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dalej.tStart = t;  // (not accounting for frame time here)
      Dalej.frameNStart = frameN;  // exact frame index
      
      Dalej.setAutoDraw(true);
    }
    
    if (Dalej.status === PsychoJS.Status.STARTED) {
      // check whether Dalej has been pressed
      if (Dalej.isClicked) {
        if (!Dalej.wasClicked) {
          // store time of first click
          Dalej.timesOn.push(Dalej.clock.getTime());
          // store time clicked until
          Dalej.timesOff.push(Dalej.clock.getTime());
        } else {
          // update time clicked until;
          Dalej.timesOff[Dalej.timesOff.length - 1] = Dalej.clock.getTime();
        }
        if (!Dalej.wasClicked) {
          // end routine when Dalej is clicked
          continueRoutine = false;
          
        }
        // if Dalej is still clicked next frame, it is not a new click
        Dalej.wasClicked = true;
      } else {
        // if Dalej is clicked next frame, it is a new click
        Dalej.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Dalej hasn't started / has finished
      Dalej.clock.reset();
      // if Dalej is clicked next frame, it is a new click
      Dalej.wasClicked = false;
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WstępComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WstępRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Wstęp' ---
    for (const thisComponent of WstępComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Wstęp.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Dalej.numClicks', Dalej.numClicks);
    psychoJS.experiment.addData('Dalej.timesOn', Dalej.timesOn);
    psychoJS.experiment.addData('Dalej.timesOff', Dalej.timesOff);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Wstęp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var device_typeMaxDurationReached;
var device_typeMaxDuration;
var device_typeComponents;
function device_typeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'device_type' ---
    t = 0;
    device_typeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    device_typeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset komputer_laptop to account for continued clicks & clear times on/off
    komputer_laptop.reset()
    // reset smartfon to account for continued clicks & clear times on/off
    smartfon.reset()
    // reset tablet to account for continued clicks & clear times on/off
    tablet.reset()
    psychoJS.experiment.addData('device_type.started', globalClock.getTime());
    device_typeMaxDuration = null
    // keep track of which components have finished
    device_typeComponents = [];
    device_typeComponents.push(text_2);
    device_typeComponents.push(komputer_laptop);
    device_typeComponents.push(smartfon);
    device_typeComponents.push(tablet);
    
    for (const thisComponent of device_typeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function device_typeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'device_type' ---
    // get current time
    t = device_typeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *komputer_laptop* updates
    if (t >= 0 && komputer_laptop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      komputer_laptop.tStart = t;  // (not accounting for frame time here)
      komputer_laptop.frameNStart = frameN;  // exact frame index
      
      komputer_laptop.setAutoDraw(true);
    }
    
    if (komputer_laptop.status === PsychoJS.Status.STARTED) {
      // check whether komputer_laptop has been pressed
      if (komputer_laptop.isClicked) {
        if (!komputer_laptop.wasClicked) {
          // store time of first click
          komputer_laptop.timesOn.push(komputer_laptop.clock.getTime());
          // store time clicked until
          komputer_laptop.timesOff.push(komputer_laptop.clock.getTime());
        } else {
          // update time clicked until;
          komputer_laptop.timesOff[komputer_laptop.timesOff.length - 1] = komputer_laptop.clock.getTime();
        }
        if (!komputer_laptop.wasClicked) {
          // end routine when komputer_laptop is clicked
          continueRoutine = false;
          
        }
        // if komputer_laptop is still clicked next frame, it is not a new click
        komputer_laptop.wasClicked = true;
      } else {
        // if komputer_laptop is clicked next frame, it is a new click
        komputer_laptop.wasClicked = false;
      }
    } else {
      // keep clock at 0 if komputer_laptop hasn't started / has finished
      komputer_laptop.clock.reset();
      // if komputer_laptop is clicked next frame, it is a new click
      komputer_laptop.wasClicked = false;
    }
    
    // *smartfon* updates
    if (t >= 0 && smartfon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      smartfon.tStart = t;  // (not accounting for frame time here)
      smartfon.frameNStart = frameN;  // exact frame index
      
      smartfon.setAutoDraw(true);
    }
    
    if (smartfon.status === PsychoJS.Status.STARTED) {
      // check whether smartfon has been pressed
      if (smartfon.isClicked) {
        if (!smartfon.wasClicked) {
          // store time of first click
          smartfon.timesOn.push(smartfon.clock.getTime());
          // store time clicked until
          smartfon.timesOff.push(smartfon.clock.getTime());
        } else {
          // update time clicked until;
          smartfon.timesOff[smartfon.timesOff.length - 1] = smartfon.clock.getTime();
        }
        if (!smartfon.wasClicked) {
          // end routine when smartfon is clicked
          continueRoutine = false;
          
        }
        // if smartfon is still clicked next frame, it is not a new click
        smartfon.wasClicked = true;
      } else {
        // if smartfon is clicked next frame, it is a new click
        smartfon.wasClicked = false;
      }
    } else {
      // keep clock at 0 if smartfon hasn't started / has finished
      smartfon.clock.reset();
      // if smartfon is clicked next frame, it is a new click
      smartfon.wasClicked = false;
    }
    
    // *tablet* updates
    if (t >= 0 && tablet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tablet.tStart = t;  // (not accounting for frame time here)
      tablet.frameNStart = frameN;  // exact frame index
      
      tablet.setAutoDraw(true);
    }
    
    if (tablet.status === PsychoJS.Status.STARTED) {
      // check whether tablet has been pressed
      if (tablet.isClicked) {
        if (!tablet.wasClicked) {
          // store time of first click
          tablet.timesOn.push(tablet.clock.getTime());
          // store time clicked until
          tablet.timesOff.push(tablet.clock.getTime());
        } else {
          // update time clicked until;
          tablet.timesOff[tablet.timesOff.length - 1] = tablet.clock.getTime();
        }
        if (!tablet.wasClicked) {
          // end routine when tablet is clicked
          continueRoutine = false;
          
        }
        // if tablet is still clicked next frame, it is not a new click
        tablet.wasClicked = true;
      } else {
        // if tablet is clicked next frame, it is a new click
        tablet.wasClicked = false;
      }
    } else {
      // keep clock at 0 if tablet hasn't started / has finished
      tablet.clock.reset();
      // if tablet is clicked next frame, it is a new click
      tablet.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of device_typeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var device;
var buttons;
function device_typeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'device_type' ---
    for (const thisComponent of device_typeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('device_type.stopped', globalClock.getTime());
    psychoJS.experiment.addData('komputer_laptop.numClicks', komputer_laptop.numClicks);
    psychoJS.experiment.addData('komputer_laptop.timesOn', komputer_laptop.timesOn);
    psychoJS.experiment.addData('komputer_laptop.timesOff', komputer_laptop.timesOff);
    psychoJS.experiment.addData('smartfon.numClicks', smartfon.numClicks);
    psychoJS.experiment.addData('smartfon.timesOn', smartfon.timesOn);
    psychoJS.experiment.addData('smartfon.timesOff', smartfon.timesOff);
    psychoJS.experiment.addData('tablet.numClicks', tablet.numClicks);
    psychoJS.experiment.addData('tablet.timesOn', tablet.timesOn);
    psychoJS.experiment.addData('tablet.timesOff', tablet.timesOff);
    // Run 'End Routine' code from code_4
    if ((komputer_laptop.numClicks === 1)) {
        device = "Komputer/Laptop";
        buttons = 0;
        psychoJS.window.mouseVisible = false;
    }
    if ((smartfon.numClicks === 1)) {
        device = "Smartfon";
        buttons = 1;
    }
    if ((tablet.numClicks === 1)) {
        device = "Tablet";
        buttons = 1;
    }
    psychoJS.experiment.addData("device_type", device);
    
    // the Routine "device_type" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_stimuliRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_stimuliRoutineEachFrame());
      trialsLoopScheduler.add(trial_stimuliRoutineEnd(snapshot));
      trialsLoopScheduler.add(mrtRoutineBegin(snapshot));
      trialsLoopScheduler.add(mrtRoutineEachFrame());
      trialsLoopScheduler.add(mrtRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(stimuli_resRoutineBegin(snapshot));
      trialsLoopScheduler.add(stimuli_resRoutineEachFrame());
      trialsLoopScheduler.add(stimuli_resRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var main;
function mainLoopBegin(mainLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main = new TrialHandler({
      psychoJS: psychoJS,
      nReps: main_stimuli.length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'main'
    });
    psychoJS.experiment.addLoop(main); // add the loop to the experiment
    currentLoop = main;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMain of main) {
      snapshot = main.getSnapshot();
      mainLoopScheduler.add(importConditions(snapshot));
      mainLoopScheduler.add(stimuliRoutineBegin(snapshot));
      mainLoopScheduler.add(stimuliRoutineEachFrame());
      mainLoopScheduler.add(stimuliRoutineEnd(snapshot));
      mainLoopScheduler.add(mrtRoutineBegin(snapshot));
      mainLoopScheduler.add(mrtRoutineEachFrame());
      mainLoopScheduler.add(mrtRoutineEnd(snapshot));
      mainLoopScheduler.add(stimuli_resRoutineBegin(snapshot));
      mainLoopScheduler.add(stimuli_resRoutineEachFrame());
      mainLoopScheduler.add(stimuli_resRoutineEnd(snapshot));
      mainLoopScheduler.add(mainLoopEndIteration(mainLoopScheduler, snapshot));
        mainLoopScheduler.add(async function () {
            let csvData = psychoJS.experiment.getResultAsCsv(); // Pobierz dane jako CSV
            let filename = `${expInfo["participant"]}_${expName}_${expInfo["date"]}.csv`;
            await saveDataToServer(csvData, filename); // Wyślij dane na serwer
            return Scheduler.Event.NEXT;
        });
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mainLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mainLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_stimuliMaxDurationReached;
var cross_time;
var trial_image_cords;
var trial_text_cords;
var current_image_stimuli;
var current_text_stimuli;
var trial_stimuliMaxDuration;
var trial_stimuliComponents;
function trial_stimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_stimuli' ---
    t = 0;
    trial_stimuliClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_stimuliMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    cross_time = ((randint(4, 5) / 10) + (randint(1, 8) / 100));
    trial_image_cords = get_trial_cords(position, trial_i_loop, "image");
    trial_text_cords = get_trial_cords(position, trial_i_loop, "text");
      console.log('trial:', trial)
      if (trial_i_loop >= (trial.length / 2)) {
          console.log('Using Gray List for Images.');
          if (Array.isArray(gray_list) && gray_list.length >= 1) {
              current_image_stimuli = gray_list;
          } else {
              console.error('Gray List is not valid:', gray_list);
              current_image_stimuli = ['default.png', 'default.png', 'default.png'];
          }
          current_text_stimuli = trial[trial_i_loop] || empty_text;
      } else {
          console.log('Using Trial Data for Images.');
          if (Array.isArray(trial[trial_i_loop]) && trial[trial_i_loop].length >= 1) {
              current_image_stimuli = trial[trial_i_loop];
          } else {
              console.error('Trial Data is not valid at index', trial_i_loop, trial[trial_i_loop]);
              current_image_stimuli = ['default.png', 'default.png', 'default.png'];
          }
          current_text_stimuli = empty_text;
      }

      console.log('Current Images:', current_image_stimuli);
      console.log('Current Text:', current_text_stimuli);

    trial_image1.setPos(trial_image_cords[0]);
    trial_image1.setImage(current_image_stimuli[0]);
    trial_image2.setPos(trial_image_cords[1]);
    trial_image2.setImage(current_image_stimuli[1]);
    trial_image3.setPos(trial_image_cords[2]);
    trial_image3.setImage(current_image_stimuli[2]);
    trial_text1.setPos(trial_text_cords[0]);
    trial_text1.setText(current_text_stimuli[0]);
    tral_text2.setPos(trial_text_cords[1]);
    tral_text2.setText(current_text_stimuli[1]);
    trial_text3.setPos(trial_text_cords[2]);
    trial_text3.setText(current_text_stimuli[2]);
    psychoJS.experiment.addData('trial_stimuli.started', globalClock.getTime());
    trial_stimuliMaxDuration = null
    // keep track of which components have finished
    trial_stimuliComponents = [];
    trial_stimuliComponents.push(polygon_1);
    trial_stimuliComponents.push(trial_image1);
    trial_stimuliComponents.push(trial_image2);
    trial_stimuliComponents.push(trial_image3);
    trial_stimuliComponents.push(trial_text1);
    trial_stimuliComponents.push(tral_text2);
    trial_stimuliComponents.push(trial_text3);
    
    for (const thisComponent of trial_stimuliComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_stimuliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_stimuli' ---
    // get current time
    t = trial_stimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_1* updates
    if (t >= 0.0 && polygon_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1.tStart = t;  // (not accounting for frame time here)
      polygon_1.frameNStart = frameN;  // exact frame index
      
      polygon_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cross_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_1.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys({"keyList": ["o"]});
    if (_pj.in_es6("o", keys)) {
        continueRoutine = false;
    }
    
    
    // *trial_image1* updates
    if (t >= cross_time && trial_image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_image1.tStart = t;  // (not accounting for frame time here)
      trial_image1.frameNStart = frameN;  // exact frame index
      
      trial_image1.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_image1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_image1.setAutoDraw(false);
    }
    
    
    // *trial_image2* updates
    if (t >= cross_time && trial_image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_image2.tStart = t;  // (not accounting for frame time here)
      trial_image2.frameNStart = frameN;  // exact frame index
      
      trial_image2.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_image2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_image2.setAutoDraw(false);
    }
    
    
    // *trial_image3* updates
    if (t >= cross_time && trial_image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_image3.tStart = t;  // (not accounting for frame time here)
      trial_image3.frameNStart = frameN;  // exact frame index
      
      trial_image3.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_image3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_image3.setAutoDraw(false);
    }
    
    
    // *trial_text1* updates
    if (t >= cross_time && trial_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text1.tStart = t;  // (not accounting for frame time here)
      trial_text1.frameNStart = frameN;  // exact frame index
      
      trial_text1.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_text1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_text1.setAutoDraw(false);
    }
    
    
    // *tral_text2* updates
    if (t >= cross_time && tral_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tral_text2.tStart = t;  // (not accounting for frame time here)
      tral_text2.frameNStart = frameN;  // exact frame index
      
      tral_text2.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (tral_text2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tral_text2.setAutoDraw(false);
    }
    
    
    // *trial_text3* updates
    if (t >= cross_time && trial_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text3.tStart = t;  // (not accounting for frame time here)
      trial_text3.frameNStart = frameN;  // exact frame index
      
      trial_text3.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_text3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_text3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_stimuliComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_stimuliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_stimuli' ---
    for (const thisComponent of trial_stimuliComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_stimuli.stopped', globalClock.getTime());
    // the Routine "trial_stimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var mrtMaxDurationReached;
var mrt_image;
var _key_same_allKeys;
var _key_different_allKeys;
var mrtMaxDuration;
var mrtComponents;
function mrtRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mrt' ---
    t = 0;
    mrtClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    mrtMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    cross_time = ((randint(4, 5) / 10) + (randint(1, 8) / 100));
    if ((m === 0)) {
        mrt_image = mrt_0[0];
    } else {
        if ((m === 1)) {
            mrt_image = mrt_150[0];
        } else {
            if ((schemat_mrt[trial_count][trial_type] === 0)) {
                mrt_image = mrt_0[m];
            } else {
                mrt_image = mrt_150[m];
            }
        }
    }
    
    mrt_image_front.setImage(mrt_image);
    // reset same to account for continued clicks & clear times on/off
    same.reset()
    // reset different to account for continued clicks & clear times on/off
    different.reset()
    key_same.keys = undefined;
    key_same.rt = undefined;
    _key_same_allKeys = [];
    key_different.keys = undefined;
    key_different.rt = undefined;
    _key_different_allKeys = [];
    psychoJS.experiment.addData('mrt.started', globalClock.getTime());
    mrtMaxDuration = null
    // keep track of which components have finished
    mrtComponents = [];
    mrtComponents.push(polygon_2);
    mrtComponents.push(mrt_image_front);
    mrtComponents.push(same);
    mrtComponents.push(different);
    mrtComponents.push(key_same);
    mrtComponents.push(key_different);
    
    for (const thisComponent of mrtComponents)
        if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;

    console.log('R?: ', mrt_image.slice((- 5))[0]);
    return Scheduler.Event.NEXT;
  }
}


function mrtRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mrt' ---
    // get current time
    t = mrtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys({"keyList": ["o"]});
    if (_pj.in_es6("o", keys)) {
        continueRoutine = false;
    }
    
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cross_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    
    
    // *mrt_image_front* updates
    if (t >= cross_time && mrt_image_front.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mrt_image_front.tStart = t;  // (not accounting for frame time here)
      mrt_image_front.frameNStart = frameN;  // exact frame index
      
      mrt_image_front.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mrt_image_front.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mrt_image_front.setAutoDraw(false);
    }
    
    
    // *same* updates
    if (t >= cross_time && same.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      same.tStart = t;  // (not accounting for frame time here)
      same.frameNStart = frameN;  // exact frame index
      
      same.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (same.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      same.setAutoDraw(false);
    }
    
    if (same.status === PsychoJS.Status.STARTED) {
      // check whether same has been pressed
      if (same.isClicked) {
        if (!same.wasClicked) {
          // store time of first click
          same.timesOn.push(same.clock.getTime());
          // store time clicked until
          same.timesOff.push(same.clock.getTime());
        } else {
          // update time clicked until;
          same.timesOff[same.timesOff.length - 1] = same.clock.getTime();
        }
        if (!same.wasClicked) {
          // end routine when same is clicked
          continueRoutine = false;
          
        }
        // if same is still clicked next frame, it is not a new click
        same.wasClicked = true;
      } else {
        // if same is clicked next frame, it is a new click
        same.wasClicked = false;
      }
    } else {
      // keep clock at 0 if same hasn't started / has finished
      same.clock.reset();
      // if same is clicked next frame, it is a new click
      same.wasClicked = false;
    }
    
    // *different* updates
    if (t >= cross_time && different.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      different.tStart = t;  // (not accounting for frame time here)
      different.frameNStart = frameN;  // exact frame index
      
      different.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (different.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      different.setAutoDraw(false);
    }
    
    if (different.status === PsychoJS.Status.STARTED) {
      // check whether different has been pressed
      if (different.isClicked) {
        if (!different.wasClicked) {
          // store time of first click
          different.timesOn.push(different.clock.getTime());
          // store time clicked until
          different.timesOff.push(different.clock.getTime());
        } else {
          // update time clicked until;
          different.timesOff[different.timesOff.length - 1] = different.clock.getTime();
        }
        if (!different.wasClicked) {
          // end routine when different is clicked
          continueRoutine = false;
          
        }
        // if different is still clicked next frame, it is not a new click
        different.wasClicked = true;
      } else {
        // if different is clicked next frame, it is a new click
        different.wasClicked = false;
      }
    } else {
      // keep clock at 0 if different hasn't started / has finished
      different.clock.reset();
      // if different is clicked next frame, it is a new click
      different.wasClicked = false;
    }
    
    // *key_same* updates
    if (t >= cross_time && key_same.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_same.tStart = t;  // (not accounting for frame time here)
      key_same.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_same.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_same.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_same.clearEvents(); });
    }
    
    frameRemains = cross_time + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_same.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_same.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_same.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_same.getKeys({keyList: ['c'], waitRelease: false});
      _key_same_allKeys = _key_same_allKeys.concat(theseKeys);
      if (_key_same_allKeys.length > 0) {
        key_same.keys = _key_same_allKeys[_key_same_allKeys.length - 1].name;  // just the last key pressed
        key_same.rt = _key_same_allKeys[_key_same_allKeys.length - 1].rt;
        key_same.duration = _key_same_allKeys[_key_same_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_different* updates
    if (t >= cross_time && key_different.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_different.tStart = t;  // (not accounting for frame time here)
      key_different.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_different.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_different.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_different.clearEvents(); });
    }
    
    frameRemains = cross_time + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_different.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_different.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_different.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_different.getKeys({keyList: ['n'], waitRelease: false});
      _key_different_allKeys = _key_different_allKeys.concat(theseKeys);
      if (_key_different_allKeys.length > 0) {
        key_different.keys = _key_different_allKeys[_key_different_allKeys.length - 1].name;  // just the last key pressed
        key_different.rt = _key_different_allKeys[_key_different_allKeys.length - 1].rt;
        key_different.duration = _key_different_allKeys[_key_different_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mrtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var mrt_res;
var my_feedback;
function mrtRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mrt' ---
    for (const thisComponent of mrtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mrt.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    if (((((same.numClicks === 0) && (different.numClicks === 0)) && (key_same.keys === undefined)) && (key_different.keys === undefined))) {
        mrt_res = 0;
    } else {
        if ((mrt_image.slice((- 5))[0] !== "R")) {
            if (((same.numClicks === 1) || (key_same.keys === "c"))) {
                mrt_res = 1;
            } else {
                mrt_res = 0;
            }
        } else {
            if (((different.numClicks === 1) || (key_different.keys === "n"))) {
                mrt_res = 1;
            } else {
                mrt_res = 0;
            }
        }
    }
    psychoJS.experiment.addData("mrt_result", mrt_res);    
    psychoJS.experiment.addData("mrt_image_shown", mrt_image);
    console.log("Mrt Image saved: ")
    
      // Determine feedback
      if ((mrt_res === 1)) {
          my_feedback = "Correct!";
      } else {
          my_feedback = "Wrong!";
      }
    m += 1;
    console.log('MRT_RES: ', mrt_res);
    psychoJS.experiment.addData('same.numClicks', same.numClicks);
    psychoJS.experiment.addData('same.timesOn', same.timesOn);
    psychoJS.experiment.addData('same.timesOff', same.timesOff);
    psychoJS.experiment.addData('different.numClicks', different.numClicks);
    psychoJS.experiment.addData('different.timesOn', different.timesOn);
    psychoJS.experiment.addData('different.timesOff', different.timesOff);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_same.corr, level);
    }
    psychoJS.experiment.addData('key_same.keys', key_same.keys);
    if (typeof key_same.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_same.rt', key_same.rt);
        psychoJS.experiment.addData('key_same.duration', key_same.duration);
        routineTimer.reset();
        }
    
    key_same.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_different.corr, level);
    }
    psychoJS.experiment.addData('key_different.keys', key_different.keys);
    if (typeof key_different.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_different.rt', key_different.rt);
        psychoJS.experiment.addData('key_different.duration', key_different.duration);
        routineTimer.reset();
        }
    
    key_different.stop();
    // the Routine "mrt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    mrt_res_text.setText(my_feedback);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(mrt_res_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mrt_res_text* updates
    if (t >= 0 && mrt_res_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mrt_res_text.tStart = t;  // (not accounting for frame time here)
      mrt_res_text.frameNStart = frameN;  // exact frame index
      
      mrt_res_text.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mrt_res_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mrt_res_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        routineTimer.add(feedbackMaxDuration);
    } else {
        routineTimer.add(-1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimuli_resMaxDurationReached;
var res_image_cords;
var res_text_cords;
var current_image_res;
var current_text_res;
var _key_byl_allKeys;
var _key_nie_byl_allKeys;
var stimuli_resMaxDuration;
var stimuli_resComponents;
var out;
function stimuli_resRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimuli_res' ---
    t = 0;
    stimuli_resClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stimuli_resMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    cross_time = ((randint(4, 5) / 10) + (randint(1, 8) / 100));
    if ((i_loop === 404)) {
        if ((trial_i_loop >= (trial.length / 2))) {
            res_image_cords = [2, 2];
            res_text_cords = [0, 0];
            current_image_res = gray;
            current_text_res = trial_output_stimuli[trial_i_loop];
        } else {
            res_image_cords = [0, 0];
            res_text_cords = [2, 2];
            current_image_res = trial_output_stimuli[trial_i_loop];
            current_text_res = "";
        }
    } else {
        if ((i_loop >= (main_stimuli.length / 2))) {
            res_image_cords = [2, 2];
            res_text_cords = [0, 0];
            current_image_res = gray;
            current_text_res = outcomes_stimuli[i_loop];
            out = outcomes[i_loop];
        } else {
            res_image_cords = [0, 0];
            res_text_cords = [2, 2];
            current_image_res = outcomes_stimuli[i_loop];
            current_text_res = "";
            out = outcomes[i_loop];
        }
    }
    console.log("Out:", out)
    image_res.setPos(res_image_cords);
    image_res.setImage(current_image_res);
    text_res.setPos(res_text_cords);
    text_res.setText(current_text_res);
    // reset byl to account for continued clicks & clear times on/off
    byl.reset()
    // reset nie_byl to account for continued clicks & clear times on/off
    nie_byl.reset()
    key_byl.keys = undefined;
    key_byl.rt = undefined;
    _key_byl_allKeys = [];
    key_nie_byl.keys = undefined;
    key_nie_byl.rt = undefined;
    _key_nie_byl_allKeys = [];
    psychoJS.experiment.addData('stimuli_res.started', globalClock.getTime());
    stimuli_resMaxDuration = null
    // keep track of which components have finished
    stimuli_resComponents = [];
    stimuli_resComponents.push(polygon);
    stimuli_resComponents.push(image_res);
    stimuli_resComponents.push(text_res);
    stimuli_resComponents.push(byl);
    stimuli_resComponents.push(nie_byl);
    stimuli_resComponents.push(key_byl);
    stimuli_resComponents.push(key_nie_byl);
    
    for (const thisComponent of stimuli_resComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;

    console.log("Był: ", byl.numClicks, 'Nie Był: ', nie_byl.numClicks, 'Key_Był: ', key_byl.keys, 'Key_Nie_Byl', key_nie_byl.keys)
    return Scheduler.Event.NEXT;
  }
}


function stimuli_resRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimuli_res' ---
    // get current time
    t = stimuli_resClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cross_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_6
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys({"keyList": ["o"]});
    if (_pj.in_es6("o", keys)) {
        continueRoutine = false;
    }
    
    
    // *image_res* updates
    if (t >= cross_time && image_res.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_res.tStart = t;  // (not accounting for frame time here)
      image_res.frameNStart = frameN;  // exact frame index
      
      image_res.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_res.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_res.setAutoDraw(false);
    }
    
    
    // *text_res* updates
    if (t >= cross_time && text_res.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_res.tStart = t;  // (not accounting for frame time here)
      text_res.frameNStart = frameN;  // exact frame index
      
      text_res.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_res.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_res.setAutoDraw(false);
    }
    
    
    // *byl* updates
    if (t >= cross_time && byl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      byl.tStart = t;  // (not accounting for frame time here)
      byl.frameNStart = frameN;  // exact frame index
      
      byl.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (byl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      byl.setAutoDraw(false);
    }
    
    if (byl.status === PsychoJS.Status.STARTED) {
      // check whether byl has been pressed
      if (byl.isClicked) {
        if (!byl.wasClicked) {
          // store time of first click
          byl.timesOn.push(byl.clock.getTime());
          // store time clicked until
          byl.timesOff.push(byl.clock.getTime());
        } else {
          // update time clicked until;
          byl.timesOff[byl.timesOff.length - 1] = byl.clock.getTime();
        }
        if (!byl.wasClicked) {
          // end routine when byl is clicked
          continueRoutine = false;
          
        }
        // if byl is still clicked next frame, it is not a new click
        byl.wasClicked = true;
      } else {
        // if byl is clicked next frame, it is a new click
        byl.wasClicked = false;
      }
    } else {
      // keep clock at 0 if byl hasn't started / has finished
      byl.clock.reset();
      // if byl is clicked next frame, it is a new click
      byl.wasClicked = false;
    }
    
    // *nie_byl* updates
    if (t >= cross_time && nie_byl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nie_byl.tStart = t;  // (not accounting for frame time here)
      nie_byl.frameNStart = frameN;  // exact frame index
      
      nie_byl.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nie_byl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nie_byl.setAutoDraw(false);
    }
    
    if (nie_byl.status === PsychoJS.Status.STARTED) {
      // check whether nie_byl has been pressed
      if (nie_byl.isClicked) {
        if (!nie_byl.wasClicked) {
          // store time of first click
          nie_byl.timesOn.push(nie_byl.clock.getTime());
          // store time clicked until
          nie_byl.timesOff.push(nie_byl.clock.getTime());
        } else {
          // update time clicked until;
          nie_byl.timesOff[nie_byl.timesOff.length - 1] = nie_byl.clock.getTime();
        }
        if (!nie_byl.wasClicked) {
          // end routine when nie_byl is clicked
          continueRoutine = false;
          
        }
        // if nie_byl is still clicked next frame, it is not a new click
        nie_byl.wasClicked = true;
      } else {
        // if nie_byl is clicked next frame, it is a new click
        nie_byl.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nie_byl hasn't started / has finished
      nie_byl.clock.reset();
      // if nie_byl is clicked next frame, it is a new click
      nie_byl.wasClicked = false;
    }
    
    // *key_byl* updates
    if (t >= cross_time && key_byl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_byl.tStart = t;  // (not accounting for frame time here)
      key_byl.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_byl.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_byl.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_byl.clearEvents(); });
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_byl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_byl.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_byl.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_byl.getKeys({keyList: ['c'], waitRelease: false});
      _key_byl_allKeys = _key_byl_allKeys.concat(theseKeys);
      if (_key_byl_allKeys.length > 0) {
        key_byl.keys = _key_byl_allKeys[_key_byl_allKeys.length - 1].name;  // just the last key pressed
        key_byl.rt = _key_byl_allKeys[_key_byl_allKeys.length - 1].rt;
        key_byl.duration = _key_byl_allKeys[_key_byl_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_nie_byl* updates
    if (t >= cross_time && key_nie_byl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_nie_byl.tStart = t;  // (not accounting for frame time here)
      key_nie_byl.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_nie_byl.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_nie_byl.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_nie_byl.clearEvents(); });
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_nie_byl.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_nie_byl.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_nie_byl.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_nie_byl.getKeys({keyList: ['n'], waitRelease: false});
      _key_nie_byl_allKeys = _key_nie_byl_allKeys.concat(theseKeys);
      if (_key_nie_byl_allKeys.length > 0) {
        key_nie_byl.keys = _key_nie_byl_allKeys[_key_nie_byl_allKeys.length - 1].name;  // just the last key pressed
        key_nie_byl.rt = _key_nie_byl_allKeys[_key_nie_byl_allKeys.length - 1].rt;
        key_nie_byl.duration = _key_nie_byl_allKeys[_key_nie_byl_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimuli_resComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var res;
function stimuli_resRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimuli_res' ---
    for (const thisComponent of stimuli_resComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimuli_res.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_6
      function correct_ans(loop, outcome) {
      var res;
       if (((((byl.numClicks === 0) && (nie_byl.numClicks === 0)) && (key_byl.keys === undefined)) && (key_nie_byl.keys === undefined))) {
          res = 0;
      } else {
          if ((outcome[loop] === 1)) {
              if (((byl.numClicks === 1) || (key_byl.keys === "c"))) {
                  res = 1;
              } else {
                  res = 0;
              }
          } else {
              if (((nie_byl.numClicks === 1) || (key_nie_byl.keys === "n"))) {
                  res = 1;
              } else {
                  res = 0;
              }
          }
      }
      return res;
  }
      console.log("Był: ", byl.numClicks, 'Nie Był: ', nie_byl.numClicks, 'Key_Był: ', key_byl.keys, 'Key_Nie_Byl', key_nie_byl.keys)
    console.log('trial_i_loop: ', trial_i_loop, 'i_loop: ', i_loop)
    if ((i_loop === 404)) {
        res = correct_ans(trial_i_loop, trial_output);
    } else {
        res = correct_ans(i_loop, outcomes);
    }
    psychoJS.experiment.addData("STM_response", res);
    if ((res === 1)) {
        my_feedback = "Correct!";
    } else {
        my_feedback = "Wrong!";
    }
    trial_i_loop += 1;
    if ((i_loop !== 404)) {
        i_loop += 1;
    }
    if ((trial_type === 3)) {
        trial_type = 0;
        trial_count += 1;
    } else {
        trial_type += 1;
    }

    console.log("Res:", res, my_feedback);
   
    psychoJS.experiment.addData('byl.numClicks', byl.numClicks);
    psychoJS.experiment.addData('byl.timesOn', byl.timesOn);
    psychoJS.experiment.addData('byl.timesOff', byl.timesOff);
    psychoJS.experiment.addData('nie_byl.numClicks', nie_byl.numClicks);
    psychoJS.experiment.addData('nie_byl.timesOn', nie_byl.timesOn);
    psychoJS.experiment.addData('nie_byl.timesOff', nie_byl.timesOff);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_byl.corr, level);
    }
    psychoJS.experiment.addData('key_byl.keys', key_byl.keys);
    if (typeof key_byl.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_byl.rt', key_byl.rt);
        psychoJS.experiment.addData('key_byl.duration', key_byl.duration);
        routineTimer.reset();
        }
    
    key_byl.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_nie_byl.corr, level);
    }
    psychoJS.experiment.addData('key_nie_byl.keys', key_nie_byl.keys);
    if (typeof key_nie_byl.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_nie_byl.rt', key_nie_byl.rt);
        psychoJS.experiment.addData('key_nie_byl.duration', key_nie_byl.duration);
        routineTimer.reset();
        }
    
    key_nie_byl.stop();
    // the Routine "stimuli_res" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();


    if ((i_loop === 404)) {
    } else {
        if ((i_loop <= (outcomes.length * 0.25))) {
            psychoJS.experiment.addData('Stimuli_Type', "Concrete");
            psychoJS.experiment.addData("STM_concrete", res);
        } else {
            if ((i_loop <= (outcomes.length * 0.5))) {
                psychoJS.experiment.addData('Stimuli_Type', "Abstract");
                psychoJS.experiment.addData("STM_abstract", res);
            } else {
                if ((i_loop <= (outcomes.length * 0.75))) {
                    psychoJS.experiment.addData('Stimuli_Type', "Easy");
                    psychoJS.experiment.addData("STM_easy", res);
                } else {
                    psychoJS.experiment.addData('Stimuli_Type', "Hard");
                    psychoJS.experiment.addData("STM_hard", res);
                }
            }
        }
    }


    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
  }
}


var main_startMaxDurationReached;
var _key_resp_2_allKeys;
var main_startMaxDuration;
var main_startComponents;
function main_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_start' ---
    t = 0;
    main_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    main_startMaxDurationReached = false;
    // update component parameters for each repeat
    // reset Dalej_2 to account for continued clicks & clear times on/off
    Dalej_2.reset()
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('main_start.started', globalClock.getTime());
    main_startMaxDuration = null
    // keep track of which components have finished
    main_startComponents = [];
    main_startComponents.push(Dalej_2);
    main_startComponents.push(text_4);
    main_startComponents.push(key_resp_2);
    
    for (const thisComponent of main_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_start' ---
    // get current time
    t = main_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Dalej_2* updates
    if (t >= 0 && Dalej_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dalej_2.tStart = t;  // (not accounting for frame time here)
      Dalej_2.frameNStart = frameN;  // exact frame index
      
      Dalej_2.setAutoDraw(true);
    }
    
    if (Dalej_2.status === PsychoJS.Status.STARTED) {
      // check whether Dalej_2 has been pressed
      if (Dalej_2.isClicked) {
        if (!Dalej_2.wasClicked) {
          // store time of first click
          Dalej_2.timesOn.push(Dalej_2.clock.getTime());
          // store time clicked until
          Dalej_2.timesOff.push(Dalej_2.clock.getTime());
        } else {
          // update time clicked until;
          Dalej_2.timesOff[Dalej_2.timesOff.length - 1] = Dalej_2.clock.getTime();
        }
        if (!Dalej_2.wasClicked) {
          // end routine when Dalej_2 is clicked
          continueRoutine = false;
          
        }
        // if Dalej_2 is still clicked next frame, it is not a new click
        Dalej_2.wasClicked = true;
      } else {
        // if Dalej_2 is clicked next frame, it is a new click
        Dalej_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Dalej_2 hasn't started / has finished
      Dalej_2.clock.reset();
      // if Dalej_2 is clicked next frame, it is a new click
      Dalej_2.wasClicked = false;
    }
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_start' ---
    for (const thisComponent of main_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_start.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_8
    i_loop = 0;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "main_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimuliMaxDurationReached;
var image_cords;
var text_cords;
var stimuliMaxDuration;
var stimuliComponents;
function stimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimuli' ---
    t = 0;
    stimuliClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stimuliMaxDurationReached = false;
    // update component parameters for each repeat
      // Run 'Begin Routine' code from code_7
      cross_time = ((randint(4, 5) / 10) + (randint(1, 8) / 100));

      function get_cords(amount, position, i_loop, stimuli_type) {
          if (((stimuli_type === "text") && (i_loop < (main_stimuli.length / 2)))) {
              return [[2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
          } else {
              if (((stimuli_type === "image") && (i_loop >= (main_stimuli.length / 2)))) {
                  return [[2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
              } else {
                  if ((position === "horizontal")) {
                      if ((amount === 3)) {
                          return [[(- 0.5), 0], [0, 0], [0.5, 0], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
                      } else {
                          if ((amount === 4)) {
                              return [[(- 0.25), 0.5], [0.25, 0.5], [(- 0.25), (- 0.5)], [0.25, (- 0.5)], [2, 2], [2, 2], [2, 2], [2, 2]];
                          } else {
                              if ((amount === 5)) {
                                  return [[(- 0.5), 0.5], [0, 0.5], [0.5, 0.5], [(- 0.25), (- 0.5)], [0.25, (- 0.5)], [2, 2], [2, 2], [2, 2]];
                              } else {
                                  if ((amount === 6)) {
                                      return [[(- 0.5), 0.5], [0, 0.5], [0.5, 0.5], [(- 0.5), (- 0.5)], [0, (- 0.5)], [0.5, (- 0.5)], [2, 2], [2, 2]];
                                  } else {
                                      if ((amount === 7)) {
                                          return [[(- 0.75), 0.5], [(- 0.25), 0.5], [0.25, 0.5], [0.75, 0.5], [(- 0.5), (- 0.5)], [0, (- 0.5)], [0.5, (- 0.5)], [2, 2]];
                                      } else {
                                          if ((amount === 8)) {
                                              return [[(- 0.75), 0.5], [(- 0.25), 0.5], [0.25, 0.5], [0.75, 0.5], [(- 0.75), (- 0.5)], [(- 0.25), (- 0.5)], [0.25, (- 0.5)], [0.75, (- 0.5)]];
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
                  if ((position === "vertical")) {
                      if ((i_loop < 32)) {
                          if ((amount === 3)) {
                              return [[0, 0.5], [0, 0], [0, (- 0.5)], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
                          }
                          if ((amount === 4)) {
                              return [[(- 0.5), 0.25], [0.5, 0.25], [(- 0.5), (- 0.25)], [0.5, (- 0.25)], [2, 2], [2, 2], [2, 2], [2, 2]];
                          }
                          if ((amount === 5)) {
                              return [[(- 0.5), 0.5], [0.5, 0.5], [(- 0.5), 0], [0.5, 0], [0, (- 0.5)], [2, 2], [2, 2], [2, 2]];
                          }
                          if ((amount === 6)) {
                              return [[(- 0.5), 0.5], [0.5, 0.5], [(- 0.5), 0], [0.5, 0], [(- 0.5), (- 0.5)], [0.5, (- 0.5)], [2, 2], [2, 2]];
                          }
                          if ((amount === 7)) {
                              return [[(- 0.5), 0.75], [0.5, 0.75], [(- 0.5), 0.25], [0.5, 0.25], [(- 0.5), (- 0.25)], [0.5, (- 0.25)], [0, (- 0.75)], [2, 2]];
                          }
                          if ((amount === 8)) {
                              return [[(- 0.5), 0.75], [0.5, 0.75], [(- 0.5), 0.25], [0.5, 0.25], [(- 0.5), (- 0.25)], [0.5, (- 0.25)], [(- 0.5), (- 0.75)], [0.5, (- 0.75)]];
                          }
                      } else {
                          if ((amount === 4)) {
                              return [[0, 0.75], [0, 0.25], [0, (- 0.25)], [0, (- 0.75)], [2, 2], [2, 2], [2, 2], [2, 2]];
                          }
                          if ((amount === 5)) {
                              return [[0, 0.66], [0, 0.33], [0, 0], [0, (- 0.33)], [0, (- 0.66)], [2, 2], [2, 2], [2, 2]];
                          }
                          if ((amount === 6)) {
                              return [[0, 0.82], [0, 0.49], [0, 0.16], [0, (- 0.16)], [0, (- 0.49)], [0, (- 0.82)], [2, 2], [2, 2]];
                          }
                          if ((amount === 7)) {
                              return [[0, 0.75], [0, 0.50], [0, 0.25], [0, 0], [0, (- 0.25)], [0, (- 0.5)], [0, (- 0.75)], [2, 2]];
                          }
                          if ((amount === 8)) {
                              return [[0, 0.875], [0, 0.625], [0, 0.375], [0, 0.125], [0, (- 0.125)], [0, (- 0.375)], [0, (- 0.625)], [0, (- 0.875)]];
                          }
                      }
                  }
              }
          }
      }



    
    image_cords = get_cords(schemat_dict[i_loop], position, i_loop, "image");
    console.log("Current image cords: ", image_cords)
    text_cords = get_cords(schemat_dict[i_loop], position, i_loop, "text");
    console.log("Current text cords: ", text_cords)
    console.log("Current loop: ", i_loop)
    current_image_stimuli = [...gray_list];
    current_text_stimuli = [...empty_text];
    if ((i_loop >= (main_stimuli.length / 2))) {
        current_image_stimuli = [...gray_list];
        for (var i, _pj_c = 0, _pj_a = util.range(main_stimuli[i_loop].length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            current_text_stimuli[i] = main_stimuli[i_loop][i];
        }
    } else {
        for (var i, _pj_c = 0, _pj_a = util.range(main_stimuli[i_loop].length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            current_image_stimuli[i] = main_stimuli[i_loop][i];
        }
        current_text_stimuli = [...empty_text];
    }
    
    image1.setPos(image_cords[0]);
    image1.setImage(current_image_stimuli[0]);
    image2.setPos(image_cords[1]);
    image2.setImage(current_image_stimuli[1]);
    image3.setPos(image_cords[2]);
    image3.setImage(current_image_stimuli[2]);
    image4.setPos(image_cords[3]);
    image4.setImage(current_image_stimuli[3]);
    image5.setPos(image_cords[4]);
    image5.setImage(current_image_stimuli[4]);
    image6.setPos(image_cords[5]);
    image6.setImage(current_image_stimuli[5]);
    image7.setPos(image_cords[6]);
    image7.setImage(current_image_stimuli[6]);
    image8.setPos(image_cords[7]);
    image8.setImage(current_image_stimuli[7]);
    text1.setPos(text_cords[0]);
    text1.setText(current_text_stimuli[0]);
    text2.setPos(text_cords[1]);
    text2.setText(current_text_stimuli[1]);
    text3.setPos(text_cords[2]);
    text3.setText(current_text_stimuli[2]);
    text4.setPos(text_cords[3]);
    text4.setText(current_text_stimuli[3]);
    text5.setPos(text_cords[4]);
    text5.setText(current_text_stimuli[4]);
    text6.setPos(text_cords[5]);
    text6.setText(current_text_stimuli[5]);
    text7.setPos(text_cords[6]);
    text7.setText(current_text_stimuli[6]);
    text8.setPos(text_cords[7]);
    text8.setText(current_text_stimuli[7]);
    psychoJS.experiment.addData('stimuli.started', globalClock.getTime());
    stimuliMaxDuration = null
    // keep track of which components have finished
    stimuliComponents = [];
    stimuliComponents.push(polygon_3);
    stimuliComponents.push(image1);
    stimuliComponents.push(image2);
    stimuliComponents.push(image3);
    stimuliComponents.push(image4);
    stimuliComponents.push(image5);
    stimuliComponents.push(image6);
    stimuliComponents.push(image7);
    stimuliComponents.push(image8);
    stimuliComponents.push(text1);
    stimuliComponents.push(text2);
    stimuliComponents.push(text3);
    stimuliComponents.push(text4);
    stimuliComponents.push(text5);
    stimuliComponents.push(text6);
    stimuliComponents.push(text7);
    stimuliComponents.push(text8);
    
    for (const thisComponent of stimuliComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimuliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimuli' ---
    // get current time
    t = stimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_7
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys({"keyList": ["o"]});
    if (_pj.in_es6("o", keys)) {
        continueRoutine = false;
    }
    
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cross_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_3.setAutoDraw(false);
    }
    
    
    // *image1* updates
    if (t >= cross_time && image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1.tStart = t;  // (not accounting for frame time here)
      image1.frameNStart = frameN;  // exact frame index
      
      image1.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image1.setAutoDraw(false);
    }
    
    
    // *image2* updates
    if (t >= cross_time && image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2.tStart = t;  // (not accounting for frame time here)
      image2.frameNStart = frameN;  // exact frame index
      
      image2.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image2.setAutoDraw(false);
    }
    
    
    // *image3* updates
    if (t >= cross_time && image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image3.tStart = t;  // (not accounting for frame time here)
      image3.frameNStart = frameN;  // exact frame index
      
      image3.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image3.setAutoDraw(false);
    }
    
    
    // *image4* updates
    if (t >= cross_time && image4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image4.tStart = t;  // (not accounting for frame time here)
      image4.frameNStart = frameN;  // exact frame index
      
      image4.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image4.setAutoDraw(false);
    }
    
    
    // *image5* updates
    if (t >= cross_time && image5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image5.tStart = t;  // (not accounting for frame time here)
      image5.frameNStart = frameN;  // exact frame index
      
      image5.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image5.setAutoDraw(false);
    }
    
    
    // *image6* updates
    if (t >= cross_time && image6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image6.tStart = t;  // (not accounting for frame time here)
      image6.frameNStart = frameN;  // exact frame index
      
      image6.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image6.setAutoDraw(false);
    }
    
    
    // *image7* updates
    if (t >= cross_time && image7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image7.tStart = t;  // (not accounting for frame time here)
      image7.frameNStart = frameN;  // exact frame index
      
      image7.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image7.setAutoDraw(false);
    }
    
    
    // *image8* updates
    if (t >= cross_time && image8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image8.tStart = t;  // (not accounting for frame time here)
      image8.frameNStart = frameN;  // exact frame index
      
      image8.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image8.setAutoDraw(false);
    }
    
    
    // *text1* updates
    if (t >= cross_time && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text1.setAutoDraw(false);
    }
    
    
    // *text2* updates
    if (t >= cross_time && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text2.setAutoDraw(false);
    }
    
    
    // *text3* updates
    if (t >= cross_time && text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text3.tStart = t;  // (not accounting for frame time here)
      text3.frameNStart = frameN;  // exact frame index
      
      text3.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text3.setAutoDraw(false);
    }
    
    
    // *text4* updates
    if (t >= cross_time && text4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text4.tStart = t;  // (not accounting for frame time here)
      text4.frameNStart = frameN;  // exact frame index
      
      text4.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text4.setAutoDraw(false);
    }
    
    
    // *text5* updates
    if (t >= cross_time && text5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text5.tStart = t;  // (not accounting for frame time here)
      text5.frameNStart = frameN;  // exact frame index
      
      text5.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text5.setAutoDraw(false);
    }
    
    
    // *text6* updates
    if (t >= cross_time && text6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text6.tStart = t;  // (not accounting for frame time here)
      text6.frameNStart = frameN;  // exact frame index
      
      text6.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text6.setAutoDraw(false);
    }
    
    
    // *text7* updates
    if (t >= cross_time && text7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text7.tStart = t;  // (not accounting for frame time here)
      text7.frameNStart = frameN;  // exact frame index
      
      text7.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text7.setAutoDraw(false);
    }
    
    
    // *text8* updates
    if (t >= cross_time && text8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text8.tStart = t;  // (not accounting for frame time here)
      text8.frameNStart = frameN;  // exact frame index
      
      text8.setAutoDraw(true);
    }
    
    frameRemains = cross_time + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text8.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', true);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimuliComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimuliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimuli' ---
    for (const thisComponent of stimuliComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimuli.stopped', globalClock.getTime());
    // the Routine "stimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}



var emailMaxDurationReached;
var emailMaxDuration;
var emailComponents;
function emailRoutineBegin(snapshot) {
    return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

        //--- Prepare to start Routine 'email' ---
        t = 0;
        emailClock.reset(); // clock
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        emailMaxDurationReached = false;
        // update component parameters for each repeat
        textbox.setText('');
        textbox.refresh();
        // reset Dalej_3 to account for continued clicks & clear times on/off
        Dalej_3.reset()
        psychoJS.experiment.addData('email.started', globalClock.getTime());
        emailMaxDuration = null
        // keep track of which components have finished
        emailComponents = [];
        emailComponents.push(textbox);
        emailComponents.push(Dalej_3);
        emailComponents.push(text_email);

        for (const thisComponent of emailComponents)
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
    }
}


function emailRoutineEachFrame() {
    return async function () {
        //--- Loop for each frame of Routine 'email' ---
        // get current time
        t = emailClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame

        // *textbox* updates
        if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            textbox.tStart = t;  // (not accounting for frame time here)
            textbox.frameNStart = frameN;  // exact frame index

            textbox.setAutoDraw(true);
        }


        // *Dalej_3* updates
        if (t >= 0 && Dalej_3.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            Dalej_3.tStart = t;  // (not accounting for frame time here)
            Dalej_3.frameNStart = frameN;  // exact frame index

            Dalej_3.setAutoDraw(true);
        }

        if (Dalej_3.status === PsychoJS.Status.STARTED) {
            // check whether Dalej_3 has been pressed
            if (Dalej_3.isClicked) {
                if (!Dalej_3.wasClicked) {
                    // store time of first click
                    Dalej_3.timesOn.push(Dalej_3.clock.getTime());
                    // store time clicked until
                    Dalej_3.timesOff.push(Dalej_3.clock.getTime());
                } else {
                    // update time clicked until;
                    Dalej_3.timesOff[Dalej_3.timesOff.length - 1] = Dalej_3.clock.getTime();
                }
                if (!Dalej_3.wasClicked) {
                    // end routine when Dalej_3 is clicked
                    continueRoutine = false;

                }
                // if Dalej_3 is still clicked next frame, it is not a new click
                Dalej_3.wasClicked = true;
            } else {
                // if Dalej_3 is clicked next frame, it is a new click
                Dalej_3.wasClicked = false;
            }
        } else {
            // keep clock at 0 if Dalej_3 hasn't started / has finished
            Dalej_3.clock.reset();
            // if Dalej_3 is clicked next frame, it is a new click
            Dalej_3.wasClicked = false;
        }

        // *text_email* updates
        if (t >= 0.0 && text_email.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_email.tStart = t;  // (not accounting for frame time here)
            text_email.frameNStart = frameN;  // exact frame index

            text_email.setAutoDraw(true);
        }

        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }

        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
            return Scheduler.Event.NEXT;
        }

        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of emailComponents)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
            }

        // refresh the screen if continuing
        if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
        } else {
            return Scheduler.Event.NEXT;
        }
    };
}


function emailRoutineEnd(snapshot) {
    return async function () {
        //--- Ending Routine 'email' ---
        for (const thisComponent of emailComponents) {
            if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
            }
        }
        psychoJS.experiment.addData('email.stopped', globalClock.getTime());
        psychoJS.experiment.addData('textbox.text', textbox.text)
        psychoJS.experiment.addData('Dalej_3.numClicks', Dalej_3.numClicks);
        psychoJS.experiment.addData('Dalej_3.timesOn', Dalej_3.timesOn);
        psychoJS.experiment.addData('Dalej_3.timesOff', Dalej_3.timesOff);
        // the Routine "email" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();

        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
    }
}


var ending_qMaxDurationReached;
var ending_qMaxDuration;
var ending_qComponents;
function ending_qRoutineBegin(snapshot) {
    return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

        //--- Prepare to start Routine 'ending_q' ---
        t = 0;
        ending_qClock.reset(); // clock
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        ending_qMaxDurationReached = false;
        // update component parameters for each repeat
        // reset tak to account for continued clicks & clear times on/off
        tak.reset()
        // reset nie to account for continued clicks & clear times on/off
        nie.reset()
        psychoJS.experiment.addData('ending_q.started', globalClock.getTime());
        ending_qMaxDuration = null
        // keep track of which components have finished
        ending_qComponents = [];
        ending_qComponents.push(text_czy_git);
        ending_qComponents.push(tak);
        ending_qComponents.push(nie);

        for (const thisComponent of ending_qComponents)
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
    }
}


function ending_qRoutineEachFrame() {
    return async function () {
        //--- Loop for each frame of Routine 'ending_q' ---
        // get current time
        t = ending_qClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame

        // *text_czy_git* updates
        if (t >= 0.0 && text_czy_git.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_czy_git.tStart = t;  // (not accounting for frame time here)
            text_czy_git.frameNStart = frameN;  // exact frame index

            text_czy_git.setAutoDraw(true);
        }


        // *tak* updates
        if (t >= 0 && tak.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            tak.tStart = t;  // (not accounting for frame time here)
            tak.frameNStart = frameN;  // exact frame index

            tak.setAutoDraw(true);
        }

        if (tak.status === PsychoJS.Status.STARTED) {
            // check whether tak has been pressed
            if (tak.isClicked) {
                if (!tak.wasClicked) {
                    // store time of first click
                    tak.timesOn.push(tak.clock.getTime());
                    // store time clicked until
                    tak.timesOff.push(tak.clock.getTime());
                } else {
                    // update time clicked until;
                    tak.timesOff[tak.timesOff.length - 1] = tak.clock.getTime();
                }
                if (!tak.wasClicked) {
                    // end routine when tak is clicked
                    continueRoutine = false;

                }
                // if tak is still clicked next frame, it is not a new click
                tak.wasClicked = true;
            } else {
                // if tak is clicked next frame, it is a new click
                tak.wasClicked = false;
            }
        } else {
            // keep clock at 0 if tak hasn't started / has finished
            tak.clock.reset();
            // if tak is clicked next frame, it is a new click
            tak.wasClicked = false;
        }

        // *nie* updates
        if (t >= 0 && nie.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            nie.tStart = t;  // (not accounting for frame time here)
            nie.frameNStart = frameN;  // exact frame index

            nie.setAutoDraw(true);
        }

        if (nie.status === PsychoJS.Status.STARTED) {
            // check whether nie has been pressed
            if (nie.isClicked) {
                if (!nie.wasClicked) {
                    // store time of first click
                    nie.timesOn.push(nie.clock.getTime());
                    // store time clicked until
                    nie.timesOff.push(nie.clock.getTime());
                } else {
                    // update time clicked until;
                    nie.timesOff[nie.timesOff.length - 1] = nie.clock.getTime();
                }
                if (!nie.wasClicked) {
                    // end routine when nie is clicked
                    continueRoutine = false;

                }
                // if nie is still clicked next frame, it is not a new click
                nie.wasClicked = true;
            } else {
                // if nie is clicked next frame, it is a new click
                nie.wasClicked = false;
            }
        } else {
            // keep clock at 0 if nie hasn't started / has finished
            nie.clock.reset();
            // if nie is clicked next frame, it is a new click
            nie.wasClicked = false;
        }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }

        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
            return Scheduler.Event.NEXT;
        }

        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of ending_qComponents)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
            }

        // refresh the screen if continuing
        if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
        } else {
            return Scheduler.Event.NEXT;
        }
    };
}


function ending_qRoutineEnd(snapshot) {
    return async function () {
        //--- Ending Routine 'ending_q' ---
        for (const thisComponent of ending_qComponents) {
            if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
            }
        }
        psychoJS.experiment.addData('ending_q.stopped', globalClock.getTime());
        psychoJS.experiment.addData('tak.numClicks', tak.numClicks);
        psychoJS.experiment.addData('tak.timesOn', tak.timesOn);
        psychoJS.experiment.addData('tak.timesOff', tak.timesOff);
        psychoJS.experiment.addData('nie.numClicks', nie.numClicks);
        psychoJS.experiment.addData('nie.timesOn', nie.timesOn);
        psychoJS.experiment.addData('nie.timesOff', nie.timesOff);
        // the Routine "ending_q" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();

        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
    }
}


var ending_rzetelnieMaxDurationReached;
var ending_rzetelnieMaxDuration;
var ending_rzetelnieComponents;
function ending_rzetelnieRoutineBegin(snapshot) {
    return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

        //--- Prepare to start Routine 'ending_rzetelnie' ---
        t = 0;
        ending_rzetelnieClock.reset(); // clock
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        ending_rzetelnieMaxDurationReached = false;
        // update component parameters for each repeat
        // reset tak_2 to account for continued clicks & clear times on/off
        tak_2.reset()
        // reset nie_2 to account for continued clicks & clear times on/off
        nie_2.reset()
        psychoJS.experiment.addData('ending_rzetelnie.started', globalClock.getTime());
        ending_rzetelnieMaxDuration = null
        // keep track of which components have finished
        ending_rzetelnieComponents = [];
        ending_rzetelnieComponents.push(czy_rzet);
        ending_rzetelnieComponents.push(tak_2);
        ending_rzetelnieComponents.push(nie_2);

        for (const thisComponent of ending_rzetelnieComponents)
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
    }
}


function ending_rzetelnieRoutineEachFrame() {
    return async function () {
        //--- Loop for each frame of Routine 'ending_rzetelnie' ---
        // get current time
        t = ending_rzetelnieClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame

        // *czy_rzet* updates
        if (t >= 0.0 && czy_rzet.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            czy_rzet.tStart = t;  // (not accounting for frame time here)
            czy_rzet.frameNStart = frameN;  // exact frame index

            czy_rzet.setAutoDraw(true);
        }


        // *tak_2* updates
        if (t >= 0 && tak_2.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            tak_2.tStart = t;  // (not accounting for frame time here)
            tak_2.frameNStart = frameN;  // exact frame index

            tak_2.setAutoDraw(true);
        }

        if (tak_2.status === PsychoJS.Status.STARTED) {
            // check whether tak_2 has been pressed
            if (tak_2.isClicked) {
                if (!tak_2.wasClicked) {
                    // store time of first click
                    tak_2.timesOn.push(tak_2.clock.getTime());
                    // store time clicked until
                    tak_2.timesOff.push(tak_2.clock.getTime());
                } else {
                    // update time clicked until;
                    tak_2.timesOff[tak_2.timesOff.length - 1] = tak_2.clock.getTime();
                }
                if (!tak_2.wasClicked) {
                    // end routine when tak_2 is clicked
                    continueRoutine = false;

                }
                // if tak_2 is still clicked next frame, it is not a new click
                tak_2.wasClicked = true;
            } else {
                // if tak_2 is clicked next frame, it is a new click
                tak_2.wasClicked = false;
            }
        } else {
            // keep clock at 0 if tak_2 hasn't started / has finished
            tak_2.clock.reset();
            // if tak_2 is clicked next frame, it is a new click
            tak_2.wasClicked = false;
        }

        // *nie_2* updates
        if (t >= 0 && nie_2.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            nie_2.tStart = t;  // (not accounting for frame time here)
            nie_2.frameNStart = frameN;  // exact frame index

            nie_2.setAutoDraw(true);
        }

        if (nie_2.status === PsychoJS.Status.STARTED) {
            // check whether nie_2 has been pressed
            if (nie_2.isClicked) {
                if (!nie_2.wasClicked) {
                    // store time of first click
                    nie_2.timesOn.push(nie_2.clock.getTime());
                    // store time clicked until
                    nie_2.timesOff.push(nie_2.clock.getTime());
                } else {
                    // update time clicked until;
                    nie_2.timesOff[nie_2.timesOff.length - 1] = nie_2.clock.getTime();
                }
                if (!nie_2.wasClicked) {
                    // end routine when nie_2 is clicked
                    continueRoutine = false;

                }
                // if nie_2 is still clicked next frame, it is not a new click
                nie_2.wasClicked = true;
            } else {
                // if nie_2 is clicked next frame, it is a new click
                nie_2.wasClicked = false;
            }
        } else {
            // keep clock at 0 if nie_2 hasn't started / has finished
            nie_2.clock.reset();
            // if nie_2 is clicked next frame, it is a new click
            nie_2.wasClicked = false;
        }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({ keyList: ['escape'] }).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }

        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
            return Scheduler.Event.NEXT;
        }

        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of ending_rzetelnieComponents)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
            }

        // refresh the screen if continuing
        if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
        } else {
            return Scheduler.Event.NEXT;
        }
    };
}


function ending_rzetelnieRoutineEnd(snapshot) {
    return async function () {
        //--- Ending Routine 'ending_rzetelnie' ---
        for (const thisComponent of ending_rzetelnieComponents) {
            if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
            }
        }
        psychoJS.experiment.addData('ending_rzetelnie.stopped', globalClock.getTime());
        psychoJS.experiment.addData('tak_2.numClicks', tak_2.numClicks);
        psychoJS.experiment.addData('tak_2.timesOn', tak_2.timesOn);
        psychoJS.experiment.addData('tak_2.timesOff', tak_2.timesOff);
        psychoJS.experiment.addData('nie_2.numClicks', nie_2.numClicks);
        psychoJS.experiment.addData('nie_2.timesOn', nie_2.timesOn);
        psychoJS.experiment.addData('nie_2.timesOff', nie_2.timesOff);
        // the Routine "ending_rzetelnie" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();

        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
    }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

psychoJS.quit = async function ({ message, isCompleted = false } = {}) {
    this.logger.info("[PsychoJS] Quit.");
    this._experiment.experimentEnded = true;
    this._status = PsychoJS.Status.FINISHED;
    const isServerEnv = true;

    try {
        // Stop the main scheduler:
        this._scheduler.stop();

        // Remove the beforeunload listener:
        if (isServerEnv) {
            window.removeEventListener("beforeunload", this.beforeunloadCallback);
        }

        // Save the results and logs of the experiment:
        this.gui.finishDialog({
            text: "Terminating the experiment. Please wait a few moments...",
            nbSteps: 2 + (isServerEnv ? 1 : 0)
        });

        if (isCompleted || this._config.experiment.saveIncompleteResults) {
            if (!this._serverMsg.has("__noOutput")) {
                this.gui.finishDialogNextStep("saving results");

                // Gather data
               
                let csvData = psychoJS.experiment.getResultAsCsv(); // Pobierz dane jako CSV
                let filename = `${expInfo["participant"]}_${expName}_${expInfo["date"]}.csv`;
                await saveDataToServer(csvData, filename); // Wyślij dane na serwer
                 


                this.gui.finishDialogNextStep("saving logs");
                await this._logger.flush();
            }
        }

      
        // Thank participant for waiting and either quit or redirect:
        let text = "<br/><br/>";
        text += typeof message !== "undefined" ? message : "Goodbye!";
        const self = this;

        this._gui.dialog({
            message: text,
            onOK: () => {
                // Close the window:
                self._window.close();

                // Remove everything from the browser window:
                while (document.body.hasChildNodes()) {
                    document.body.removeChild(document.body.lastChild);
                }

                // Return from fullscreen if we were there:
                this._window.closeFullScreen();


                // Redirect if redirection URLs have been provided:
                if (isCompleted && typeof self._completionUrl !== "undefined") {
                    window.location = self._completionUrl;
                } else if (!isCompleted && typeof self._cancellationUrl !== "undefined") {
                    window.location = self._cancellationUrl;
                }
            },
        });
    } catch (error) {
        console.error(error);
        this._gui.dialog({ error });
    }
}

psychoJS._serverManager.closeSession = async function (isCompleted = false, sync = false) {
    const response = {
        origin: "ServerManager.closeSession",
        context: "when closing the session for experiment: " + this._psychoJS.config.experiment.fullpath,
    };
    this._psychoJS.logger.debug("closing the session for experiment: " + this._psychoJS.config.experiment.name);
    this.setStatus(ServerManager.Status.BUSY);

    try {
        // Skip Pavlovia API calls and handle the session closure locally
        this._psychoJS.logger.debug("Skipping Pavlovia API calls for session closure.");
        this._psychoJS.config.session.status = "CLOSED";
        this.setStatus(ServerManager.Status.READY);


    } catch (error) {
        console.error(error);
        this.setStatus(ServerManager.Status.ERROR);
        return { ...response, error };
    }
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

