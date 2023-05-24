let currentword = '';
let lettersGuessed = '';
let badguess = 0;
let playingGame = false;
let wordBank = [];

const words = ['able', 'about', 'account', 'acid', 'across', 'act', 'addition', 'advertisement',
                'advertisement', 'after', 'again', 'against', 'agreement', 'air', 'all', 'almost', 
                'among', 'amount', 'amusement', 'and', 'angle', 'angry', 'animal', 'answer', 'ant', 
                'any', 'apparatus', 'apple', 'approval', 'arch', 'argument', 'arm', 'army', 'adjustment', 
                'attack', 'attempt', 'attention', 'attraction', 'authority', 'automatic',  'art', 
                'awake', 'baby', 'back', 'bad', 'bag', 'balance', 'ball', 'band', 'base', 'basin', 
                'basket', 'bath', 'beautiful', 'because', 'bed', 'bee', 'before', 'behaviour',
                'belief', 'bell', 'bent', 'berry', 'between', 'bird', 'birth', 'bit', 'bite', 'bitter',
                'black', 'blade', 'blood', 'blow', 'blue', 'board', 'boat', 'body', 'boiling', 'bone', 
                'book', 'boot', 'bottle', 'box', 'boy', 'brain', 'brake', 'branch', 'brass', 'bread', 
                'breath', 'brick', 'bridge', 'bright', 'broken', 'brother', 'brown', 'brush', 'bucket', 
                'building', 'bulb', 'burn', 'burst', 'business', 'butter', 'button', 'cake',
                'camera', 'canvas', 'card', 'care', 'carriage', 'cart', 'cat', 'certain', 'chain', 
                'chalk', 'chance', 'change', 'cheap', 'cheese', 'chemical', 'chin', 'church', 'circle', 
                'clean', 'clear', 'clock', 'cloth', 'cloud', 'coal', 'coat', 'cold', 'collar', 'colour', 
                'comb', 'come', 'comfort', 'committee', 'common', 'company', 'comparison', 'competition', 
                'complete', 'complex', 'condition', 'connection', 'conscious', 'control', 'cook', 'copper', 
                'copy', 'cord', 'cork', 'cotton', 'cough', 'country', 'cover', 'cow', 'crack', 'credit', 
                'crime', 'cruel', 'crush', 'cry', 'cup', 'current', 'curtain', 'curve', 'cushion', 
                'damage', 'danger', 'dark', 'daughter', 'day', 'dead', 'dear', 'death', 'debt', 'decision', 
                'deep', 'degree', 'delicate', 'dependent', 'design', 'desire', 'destruction', 'detail', 
                'development', 'different', 'digestion', 'direction', 'dirty', 'discovery', 'discussion', 
                'disease', 'disgust', 'distance', 'distribution', 'division', 'dog', 'door', 'doubt',
                'down','drain', 'drawer', 'dress', 'drink', 'driving', 'drop', 'dry', 'dust', 'ear', 'early', 
                'earth', 'east', 'edge', 'education', 'effect', 'egg', 'elastic', 'electric', 'end', 'engine', 
                'enough', 'equal', 'error', 'even', 'event', 'ever', 'every', 'example', 'exchange', 'existence', 
                'expansion', 'experience', 'expert', 'eye', 'face', 'fact', 'fall', 'family', 'far', 'farm', 
                'fat', 'father', 'fear', 'feather', 'feeble', 'feeling', 'female', 'fertile', 'fiction',
                'field', 'fight', 'finger', 'fire', 'first', 'fish', 'fixed', 'flag', 'flame', 'flat', 
                'flight', 'floor', 'flower', 'fly', 'fold', 'food', 'foolish', 'foot', 'for', 'force', 
                'fork', 'form', 'forward', 'fowl', 'frame', 'free', 'frequent', 'friend', 'from', 'fron', 
                'fruit', 'full', 'future', 'garden', 'general', 'get', 'girl', 'give', 'glass', 'glove', 
                'go', 'goat', 'gold', 'good', 'government', 'grain', 'grass', 'great', 'green', 'grey',
                'grip', 'group', 'growth', 'guide', 'gun', 'hair', 'hammer', 'hand','hanging', 'happy', 
                'harbour', 'hard', 'harmony', 'hat', 'hate', 'have', 'head', 'healthy', 'hear',
                'hearing', 'heart', 'heat', 'help', 'high', 'history', 'hole', 'hollow', 'hook', 'hope', 
                'horn', 'horse', 'hospital', 'hour', 'house', 'how', 'humour', 'ice', 'idea', 'ill', 
                'important', 'impulse', 'increase', 'industry', 'ink', 'insect', 'instrument', 'insurance', 
                'interest', 'invention', 'iron', 'island', 'jelly', 'jewel', 'join', 'journey', 'judge', 
                'jump', 'keep', 'kettle', 'key', 'kick', 'kind', 'kiss', 'knee', 'knife', 'kno', 'knowledge', 
                'land', 'language', 'last', 'late', 'laugh', 'law', 'lead', 'leaf', 'learning', 'leather', 
                'left', 'leg', 'let', 'letter', 'level', 'library', 'lift', 'light', 'like', 'limit', 'line', 
                'linen', 'lip', 'liquid', 'list', 'little', 'living', 'lock', 'long', 'look', 'loose', 'loss', 
                'loud', 'love', 'low', 'machine', 'make', 'male', 'man', 'manager', 'map', 'mark', 'market', 
                'married', 'mass', 'match', 'material', 'may', 'meal', 'measure', 'meat', 'medical', 'meeting', 
                'memory', 'metal', 'middle', 'military', 'milk', 'mind', 'mine', 'minute', 'mist', 'mixed', 
                'money', 'monkey', 'month', 'moon', 'morning', 'mother', 'motion', 'mountain', 'mouth', 
                'move', 'much', 'muscle', 'music', 'nail', 'name', 'narrow', 'nation', 'natural', 'near', 
                'necessary', 'neck', 'need', 'needle', 'nerve', 'net', 'new', 'news', 'night', 'noise', 
                'normal', 'north', 'nose', 'not', 'note', 'now', 'number', 'nut', 'observation', 'off', 
                'offer', 'office', 'oil', 'old', 'only', 'open', 'operation', 'opinion', 'opposite', 
                'orange', 'order', 'organization', 'ornament', 'other', 'out', 'oven', 'over', 'owner', 
                'page', 'pain', 'paint', 'paper', 'parallel', 'parcel', 'part', 'past', 'paste', 'payment', 
                'peace', 'pen', 'pencil', 'person', 'physical', 'picture', 'pig', 'pin', 'pipe', 'place', 
                'plane', 'plant', 'plate', 'play', 'please', 'pleasure', 'plough', 'pocket', 'point', 'poison', 
                'polish', 'political', 'poor', 'porter', 'position', 'possible', 'pot', 'potato', 'powder', 
                'power', 'present', 'price', 'print', 'prison', 'private', 'probable', 'process', 'produce', 
                'profit', 'property', 'prose', 'protest', 'public', 'pull', 'pump', 'punishment', 'purpose', 
                'push', 'put', 'quality', 'question', 'quick', 'quiet', 'quite', 'rail', 'rain', 'range', 
                'rat', 'rate', 'ray', 'reaction', 'reading', 'ready', 'reason', 'receipt', 'record', 'red',
                'regret', 'regular', 'relation', 'religion', 'representative', 'request', 'respect', 'responsible', 
                'rest', 'reward', 'rhythm', 'rice', 'right', 'ring', 'river', 'road', 'rod', 'roll', 'roof', 
                'room', 'root', 'rough', 'round', 'rub', 'rule', 'run', 'sad', 'safe', 'sail', 'salt', 'same', 
                'sand', 'say', 'scale', 'school', 'science', 'scissors', 'screw', 'sea', 'seat', 'second', 
                'secret', 'secretary', 'see', 'seed', 'seem', 'selection', 'self', 'send', 'sense', 'separate', 
                'serious', 'servant', 'shade', 'shake', 'shame', 'sharp', 'sheep', 'shelf', 'ship', 
                'shirt', 'shock', 'shoe', 'short', 'shut', 'side', 'sign', 'silk', 'silver', 'simple', 
                'sister', 'size', 'skin', 'skirt', 'sky', 'sleep', 'slip', 'slope', 'slow', 'small', 'smash', 
                'smell', 'smile', 'smoke', 'smooth', 'snake', 'sneeze', 'snow', 'soap', 'society', 
                'sock', 'soft', 'solid', 'some', 'son', 'song', 'sort', 'sound', 'soup', 'south', 'space', 
                'spade', 'special', 'sponge', 'spoon', 'spring', 'square', 'stage', 'stamp', 'star', 'start', 
                'statement', 'station', 'steam', 'steel', 'stem', 'step', 'stick', 'sticky', 'stiff', 
                'still', 'stitch', 'stocking', 'stomach', 'stone', 'stop', 'store', 'story', 'straight', 
                'strange', 'street', 'stretch', 'strong', 'structure', 'substance', 'such', 'sudden', 
                'sugar', 'suggestion', 'summer', 'sun', 'support', 'surprise', 'sweet', 'swim', 'system', 
                'table', 'tail', 'take', 'talk', 'tall', 'taste', 'tax', 'teaching', 'tendency', 'test', 
                'theory', 'there', 'thick', 'thin', 'thing', 'this', 'thought', 'thread', 'throat', 'through',
                'thumb', 'thunder', 'ticket', 'tight', 'till', 'time', 'tin', 'tired', 'toe', 'together', 
                'tomorrow', 'tongue', 'tooth', 'top', 'touch', 'town', 'trade', 'train', 'transport', 'tray',
                'tree', 'trick', 'trouble', 'trousers', 'turn', 'twist', 'umbrella', 'under', 'unit', 'use', 
                'value', 'verse', 'very', 'vessel', 'view', 'violent', 'voice', 'waiting', 'walk', 'wall', 
                'war', 'warm', 'wash', 'waste', 'watch', 'water', 'wave', 'wax', 'way', 'weather', 'week',
                'weight', 'well', 'west', 'wet', 'wheel', 'when', 'where', 'while', 'whip', 'whistle', 'white', 
                'who', 'why', 'wide', 'will', 'wind', 'window', 'wine', 'wing', 'winter', 'wire', 'wise', 'with', 
                'woman', 'wood', 'wool', 'word', 'work', 'worm', 'wound', 'writing', 'wrong', 'year', 
                'yellow', 'yes', 'yesterday', 'young', 'android'];

document.addEventListener('DOMContentLoaded', e => {
    drawGallow();
})

const clearGallow = () => {
    const canvas = document.getElementById('player-gallow');
    if (canvas.getContext('2d')) {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
};

const drawHead = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 3;
        context.arc(200, 50, 30, 0, Math.PI * 2, true);
        context.stroke();
    };

const drawBody = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(200, 80);
    context.lineTo(200, 200);
    context.strokeStyle = 'black';
    context.stroke();   
};

const drawLeftArm = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d')
        context.beginPath();
        context.strokeStyle = 'black';
        context.linewidth = 3;
        context.moveTo(200, 90);
        context.lineTo(150, 130);
        context.stroke();
    };

const drawRightArm = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = 'black';
        context.linewidth = 3;
        context.moveTo(200, 90);
        context.lineTo(250, 130);
        context.stroke();
};

const drawLeftLeg = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = 'black';
        context.linewidth = 3;
        context.moveTo(200, 200);
        context.lineTo(150, 280);
        context.stroke();
};

const drawRightLeg = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = 'black';
        context.linewidth = 3;
        context.moveTo(200, 200);
        context.lineTo(250, 280);
        context.stroke();
}
const drawHappyFace = () => {
     const canvas = document.getElementById('player-gallow');
     const context = canvas.getContext('2d');
   //semicircle for smile
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(200, 50, 20, 0, Math.PI, false);
    context.stroke();
    //draw eyes 
    context.beginPath();
    context.fillStyle = "green"; // color
    context.arc(190, 45, 3, 0, Math.PI * 2, true); // left eye
    context.fill();
    context.arc(210, 45, 3, 0, Math.PI * 2, true); // right eye
    context.fill();
};
 
const drawDeadFace = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
    //semicircle for frown
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(200, 70, 10, 0, Math.PI, true);
    context.stroke();
    // eyes 
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 3;

    // left eye
    context.moveTo(195, 40);
    context.lineTo(185, 50);
    context.moveTo(185, 40);
    context.lineTo(195, 50);
    
    //right eye
    context.moveTo(215, 40);
    context.lineTo(205, 50);
    context.moveTo(205, 40);
    context.lineTo(215, 50);

    context.stroke();
}

const drawGallow = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(35, 10);
    context.lineTo(35, 300);
   
    //topline
    context.moveTo(33, 10)
    context.lineTo(200, 10)

    //bottomline
    context.moveTo(2, 299)
    context.lineTo(80, 299)
    
    //nubline
    context.moveTo(198.5, 10)
    context.lineTo(198.5, 20)

    context.stroke();
};

const clearCanvas = () => {
    const canvas = document.getElementById('player-gallow');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
};

const setLabelMsg = (msg) => {
    document.getElementById('lblGameStatus').innerText = msg.toUpperCase();
};

const drawLetters = (word) => {
    const lettersdiv = document.getElementById('word-blanks');
    lettersdiv.innerHTML = '';
    const letterscount = word.length; 
    for (let index = 0; index < letterscount; index++) {
        const inputVar = document.createElement('input')
        inputVar.readonly = true;
        inputVar.className = 'wordblankltrs';
        inputVar.id = `hm-word-blanks${index}`;
        lettersdiv.appendChild(inputVar);
    }
    
};

const btnLetterClick = (letterBeingPassedIn) => { 
    if (!playingGame) {
        return;
    }
    console.log(letterBeingPassedIn);
    let mybutton = document.getElementById(`btn${letterBeingPassedIn}`)
    mybutton.disabled = true;
    lettersGuessed += letterBeingPassedIn;
    const foundLetter = currentword.toLowerCase().includes(letterBeingPassedIn.toLowerCase());
    if (foundLetter) {
        revealLetter(letterBeingPassedIn);
    } else {
        
        badguess++;
        if (badguess == 1) {
            drawHead();
        }else if (badguess == 2) {
            drawBody();
        }else if (badguess ==3) {
            drawLeftArm();
        }else if (badguess ==4) {
            drawRightArm();
        }else if (badguess ==5) {
            drawLeftLeg();
        }else if (badguess ==6) {
            drawRightLeg();
        } else {
            drawDeadFace();
        }
    }

    if (badguess ==7) {
        document.getElementById('lblGameStatus').innerText = 'You lost! Click New Game button to play again';
        playingGame = false;
    } else if (areAllLettersGuessed()) {
       drawHead();
       drawHappyFace(); 
       playingGame = false;
       document.getElementById('lblGameStatus').innerText = 'You win! Click New Game button to play again';
    };

};

const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentword = words[randomIndex].toUpperCase();
    lettersGuessed = '';
    setLabelMsg('Click Letters to Guess the Word');
    clearCanvas();
    drawGallow();
    drawLetters(currentword);
    playingGame = true;
    badguess = 0;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let index = 0; index < alphabet.length; index++) {
        document.getElementById(`btn${alphabet[index]}`).disabled = false;   
    }
};

const areAllLettersGuessed = () => {
    for (let i = 0; i < currentword.length; i++) {
        const currentwordletter = currentword[i];
        if (!lettersGuessed.includes(currentwordletter)) {
            return false;
        }
    } 
    return true;
};

const revealLetter = (letter) => {
    for (let i = 0; i < currentword.length; i++) {
        const currentwordletter = currentword[i];
        if (letter.toLowerCase() === currentwordletter.toLowerCase()) {
            const inputvar = document.getElementById(`hm-word-blanks${i}`);
            inputvar.value = currentwordletter;
        }
    }
};