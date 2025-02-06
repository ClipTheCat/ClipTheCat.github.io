const pages = [
    "hey, you may be wondering what this is (i did just send you a strange looking website after all).<br>i can’t tell you outright yet. but you know it’s from me (lin.)<br>so, let’s play a game.<br>there are 3 poems here. each one is written for you, about you. i’ve been working on them for a few weeks now, and i want you to follow these instructions.<br><br>1. when you’re playing this game, do <b>not</b> analyze these poems! i know that’s what you do with poetry, i know you love to do it. but i want you to focus on the writing from a solely reading-just-to-read viewpoint. for now, at least. when the game is done, go crazy. but there’s a reason i’m saying this. <br><br>2. each of these poems has part of a message i’ve encrypted. i’ve put detailed instructions on how to decode the message at the end of the poem, so you can read them, go back to the poem, and decode it. <br><br>3. decoding these messages will be extremely easy. expect that. there’s a reason i’ve made them easy.  <br><br>4. when you’re done reading the poem, type the words you decoded into the <b>indicated text section.</b> no punctuation, only spaces. don’t worry about capitalization- it isn’t case sensitive. <br><br>5. i hope you like this! <3<br><br><br>okay, that’s all from me. can’t wait to see what you think.<br><br><br>                     <b>- lin</b><br><br><br>the answer to each of the following questions gives you a <b>number</b>. for example, if the question is <b>“how many letters are in the word “four”</b>, the answer would be: <b>4.</b> in the end, you’ll get <b>5 numbers.</b> they should be in <b>ascending order.</b> for example, (3, 12, 31, 43, 52). each of these numbers <b>corresponds to a word in the poem.</b> for example, if the text says, <b>“i watch the trees sway”</b>, and the number given was <b>“4”</b>, it would <b>correspond to the word “trees”</b>. find the words in the <b>same order as the numbers are given</b>- and enter them into the text box below, <b>spaced with only 1 space between them, with no punctuation.</b> the input is not case sensitive. good luck!<br><b>questions.</b><br><br><b>1.the second number of the fibonacci sequence</b> <br> <br><br><b>2. atomic number of element samarium.</b> <br> <br><br><b>3. number of minutes in an hour and fifteen minutes.</b> <br> <br><br><b>4. number of keys on a standard piano.</b> <br> <br><br><b>5.number of bones in the human body minus the atomic number of californium. </b><br><br><br><b>scintillation</b><br><br><br>i wanted to be born a star<br>but i could only be your stovelight.<br>dying too soon, flickering too early, i buzz throughout the night, noise permeating like EM fields into the empty living room.<br>burning, slowly, fizzing like a firework, burning like all good things do.<br>burning as i watch you flaring away too.<br>silent conflagration that you are. i think of how many alexandrias it would take to match your eyes, and i know that if i was a star and you were one too like in some past life, binary and forever trapped in orbit when i blinked my eyes- ever so slowly at you,<br>open and shut singing<br>.. / .-.. --- ...- . / -.-- --- ..-<br>the earthlings would look up with their telescopes, with words like \"cepheid variable\" and \"scintillation\"<br>to justify why i softened my gaze.<br>but here, but now, we are feeble and weak<br>and yet you still sit by me and linger<br>and your eyes wander to the clock at 11:11 and i get to see them shut for just a moment.<br>and i get to see you hold your breath, like you're watching something fleeting and above the clouds.<br>and i know stars don't get this luxury.", 
    "<b>leucanthemum</b><br><br><br>there's a kind of flower,<br>the oxeye daisy, that<br>crops up on every patch of canadian grass in the may june juncture.<br>wedged between layers of thick toronto concrete, conscientious roots lodged in every gap like fingers<br>pressed into collarbones, tangled with dimes and<br>cigarette butts.<br>leucanthemum, sudden dawn of thought.<br>if you notice anything, it only leads you to notice more.<br>i've been taking pages from your book lately, learning to crease the corners of your mind.<br>descry is what's learnt behind fallen lips.<br>and a moving pen and mine has not been lulled since<br>the moment we spoke.<br>i map out the undergrowth with you,<br>jet-black curls tangled in your leaves, hoping we find<br>more than mere consonance hidden in the topsoil.<br>marguerite, in the wind.<br>the clock keeps me away,<br>but once you and i make it till tommorow,<br>we will buy a slice of the world.<br>we will eat it whole, using our forks just enough to seem civilized.<br>and as we lay against the earth and it carries us to friendlier fires,<br>promise me<br>you'll leave the lines etched into the pavement.",
    "<b>nhớ (negative twenty degrees)</b><br><br><br>in vietnamese, the word for missing someone <br>and remembering them is the same (nhớ).  <br>today, i saw the geese flying south for winter. <br>v-shaped. i wondered how the clouds felt<br>seeing the crease of your eyes against the pale grey-blue actinoform <br>morning, northwest, -20° and counting. <br> <br>i tell myself, it cannot be your fault <br>that you say hello and in my mind, each time <br>you dip a finger in a lake of my heart <br>the ripples go on and on and on and on and <br>remember how i tried to explain diffraction and interference <br>do you think it works with people? <br>you speak and the wavelength shifts <br>do you feel the convergence? <br>you just said “goodmorning”.<br>i misheard it as “i love you.” <br> <br>if the earth suddenly stopped spinning- <br>(this is not a poet’s line, i’m telling you about orbital velocity) <br>the moon would start to move towards it <br>and it would eventually cause earth to start rotating again, at the same rate <br>tidal locked, gravity tugs interstellar bodies to hold each other like we entwine fingers. <br>see that line? like the prime meridian on your palms <br> it says we are going to be together <br>for the longest of times. <br>i made that up. i just wanted to hold your hand. <br> <br>i forgot how to write poems. i try to work, but <br>i look at you and all my textbooks read the same 3 words<br>if to miss means to remember, you’ve been absent from me since the moment we met."
]

const answers = [
    "i think i like you",
    "b",
    "c"
]

var currentPage = 0;

var flashTime = 800;

var buttonAllowed = true;

var inputElement = document.getElementById("input-field");
var inputButton = document.getElementById("input-button");

document.getElementById("poem").innerHTML = pages[currentPage];

function nextPage() {
    currentPage++;
    inputElement.value = "";
    document.getElementById("poem").innerHTML = pages[currentPage];
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function buttonClicked() {
    if (!buttonAllowed) {
        return;
    }
    buttonAllowed = false;

    var inputText = inputElement.value.toLowerCase();
    
    var isCorrect;

    setTimeout(() => {
        buttonAllowed = true;
    }, flashTime);

    if (inputText == answers[currentPage]) {
        setTimeout(nextPage, flashTime)
        isCorrect = true;
    } else {
        isCorrect = false;
    }

    flashInput(isCorrect);
}

function flashInput(isCorrect) {
    var styleClassName;
    if (isCorrect) {
        styleClassName = "flash-green";
    } else {
        styleClassName = "flash-red";
    }

    inputButton.classList.add(styleClassName);
    setTimeout(() => {
        inputButton.classList.remove(styleClassName);
    }, flashTime / 2)
}