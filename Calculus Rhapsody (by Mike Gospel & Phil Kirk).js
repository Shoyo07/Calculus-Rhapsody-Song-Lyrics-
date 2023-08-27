 const audio = document.getElementById('audio-player');
 const subtitlesList = document.getElementById('subtitles-list');
 const linksContainer = document.getElementById('links-container');
 const headContainer = document.getElementById('head-container')

 const subtitles = [
 {time: 0, text: 'Is this "x" defined?',color: "Red"},
 {time: 4, text: 'Is "f" continuous?',color: "Red"},
 {time: 7, text: 'How do you find out?',color: "Red"},
 {time: 10, text: 'You can use the limit process.' ,color: "Red"},
 {time: 14, text: 'Approach from both sides,' ,color: "Red"},
 {time: 17, text: 'The left and the right and meet.' ,color: "Red"},
 {time: 25, text: "I'm just a limit (limit)" ,color: "Red"},
 {time: 28, text: 'defined analytically' ,color: "Red"},
 {time: 30, text: "Function's continuous," ,color: "Red"},
 {time: 33, text: "There's no holes," ,color: "Red"},
 {time: 35, text: 'No sharp points,' ,color: "Red"},
 {time: 37, text: 'Or asymptotes.' ,color: "Red"},
 {time: 39, text: '📊Any way this graph goes.📊' ,color: "Red"},
 {time: 42, text: 'It is differentiable for me ...' ,color: "Red"},
 {time: 48, text: 'for me.\n\n' ,color: "Red"},

 {time: 51, text: '(♪ 🎹Pianic Music Playing🎹 ♪)\n\n' ,color: "Azure"},

 {time: 56, text: '📅All year📅, ∫ in Calculus ∫' ,color: "Aqua"},
 {time: 62, text: "📚We've learned so many things📚" ,color: "Aqua"},
 {time: 65, text: "🎤About which we are gonna sing.🎤" ,color: "Aqua"},
 {time: 69, text: "We can find derivatives" ,color: "Aqua"},
 {time: 72, text: '∫ And Integrals ∫' ,color: "Aqua"},
 {time: 76, text: 'And the area enclosed between two curves.' ,color: "Aqua"},
 {time: 80, text: '(♪ 🥁Drum Music Building Up🥁 ♪)' ,color: "Azure"},
 {time: 83, text: "Welcome...oooh" ,color: "Aqua"},
 {time: 89, text: 'Is the derivative of y' ,color: "Aqua"},
 {time: 92, text: 'Y equals x to the n,' ,color: "Aqua"},
 {time: 95, text: 'dy/dx equals n times x to the n-1?\n\n' ,color: "Aqua"},

 {time: 104, text: '(♪ 🎹Pianic Music Playing🎹 ♪)\n\n' ,color: "Azure"},

 {time: 115, text: 'Other applications' ,color: "Silver"},
 {time: 121, text: 'Of derivatives apply' ,color: "Silver"},
 {time: 124, text: 'If y is divided or multiplied' ,color: "Silver"},
 {time: 128, text: 'You use the quotient' ,color: "Silver"},
 {time: 131, text: 'And product rules' ,color: "Silver"},
 {time: 135, text: "🕺And don't you forget to do the dance🕺 ..." ,color: "Silver"},
 {time: 142, text: 'Also ... oooh' ,color: "Silver"},
 {time: 146, text: "(don't forget the ⛓️chain⛓️ rule...)" ,color: "Silver"},
 {time: 149, text: 'Before you are done,' ,color: "Silver"},
 {time: 152, text: 'You gotta remember' ,color: "Silver"},
 {time: 153, text: 'to multiply by the ⛓️chain⛓️.\n\n' ,color: "Silver"},

 {time: 157, text: '(♪ 🎸Guitar Solo🎸 ♪)',color: "Azure"},
 {time: 183, text: '(♪ 🎹Single Piano note Playing🎹 ♪)\n\n' ,color: "Azure"},

 {time: 186, text: 'I need to find the area under a curve',color: "Khaki"},
 {time: 189, text: '∫ Integrate! ∫  ∫ Integrate! ∫' ,color: "Khaki"},
 {time: 190, text: '∫ You can use the integration. ∫' ,color: "Khaki"},
 {time: 192, text: 'Raise the exponent by one' ,color: "Khaki"},
 {time: 194, text: 'Multiply the reciprocal.' ,color: "Khaki"},
 {time: 196, text: 'Add a constant. Add a constant.' ,color: "Khaki"},
 {time: 197, text: 'Add a constant. Add a constant.' ,color: "Khaki"},
 {time: 199, text: 'Add a constant labeled "C".' ,color: "Khaki"},
 {time: 201, text: 'Labeled "C" (C...C...C...).\n\n' ,color: "Khaki"},

 {time: 203, text: "I'm just a constant, nobody loves me." ,color: "Violet"},
 {time: 206, text: "He's just a constant" ,color: "Violet"},
 {time: 207, text: "might as well just call it 'C'." ,color: "Violet"},
 {time: 210, text: 'Never forget to add the constant "C".' ,color: "Violet"},
 {time: 212, text: '(♪ 🎹Piano note Playing🎹 ♪)' ,color: "Azure"},
 {time: 214, text: 'Can you find the area between "f" and "g"?' ,color: "Violet"},
 {time: 217, text: '∫ Integrate "f" and then integrate "g". ∫',color: "Violet"},
 {time: 220, text: '-Then subtract-.\n\n' ,color: "Violet"},

 {time: 221, text: 'To revolve around the y-axis' ,color: "DarkSalmon"},
 {time: 223, text: '∫ Integrate ∫ outer radius squared' ,color: "DarkSalmon"},
 {time: 225, text: '-minus- inner radius squared.' ,color: "DarkSalmon"},
 {time: 226, text: '(multplied) multiplied by π (multiply).' ,color: "DarkSalmon"},
 {time: 228, text: 'Multiply the integral by π!' ,color: "DarkSalmon"},
 {time: 232, text: 'pie🥧 (π) tastes real good with whipped cream🥛!' ,color: "DarkSalmon"},
 {time: 234, text: 'Oh, Mama mia, mama mia!' ,color: "DarkSalmon"},
 {time: 236, text: 'Mama mia, let me go !' ,color: "DarkSalmon"},
 {time: 238, text: 'Pre - calculus did not help me prepare for' ,color: "DarkSalmon"},
 {time: 241, text: 'Calculus, for Calculus, help me!\n\n' ,color: "DarkSalmon"},

 {time: 249, text: '(♪ 🎸Guitar Solo🎸 ♪)\n\n' ,color: "Azure"},

 {time: 256, text: 'So you think you can find out the limit of "y"!?' ,color: "RoyalBlue"},
 {time: 259, text: '(♪ 🥁Drum Music🥁 ♪)' ,color: "Azure"},
 {time: 262, text: "So you think you'll find '0' and have it defined!?" ,color: "RoyalBlue"},
 {time: 267, text: "Oh baby ... can't define that point baby." ,color: "RoyalBlue"},
 {time: 273, text: "It's undefined ..." ,color: "RoyalBlue"},
 {time: 275, text: 'Goes to positive and negative "∞".\n\n' ,color: "RoyalBlue"},

 {time: 279, text: '(♪ 🎸Guitar Solo🎸 ♪)' ,color: "Azure" ,color: "Azure"},
 {time: 292, text: '(♪ 🎹Piano Music Playing🎹 ♪)\n\n' ,color: "Azure"},

 {time: 296, text: '(Oooh) (Oooh) (Oooh)' ,color: "Springgreen"},
 {time: 300, text: '(Oooh) yeah, (Oooh) yeah' ,color: "Springgreen"},
 {time: 305, text: '[♪  :-( Melancholic Music Playing  :-(  ♪]' ,color: "Azure"},
 {time: 312, text: 'Differentiation, anyone can see' ,color: "Springgreen"},
 {time: 319, text: 'Any mere equation' ,color: "Springgreen"},
 {time: 323, text: 'It is differentiable for me' ,color: "Springgreen"},
 {time: 329, text: '(♪ 🎹Pianic Music Playing🎹 ♪)' ,color: "Azure"},
 {time: 344, text: '📊Any way this graph goes.📊 \n\n' ,color: "Springgreen"},

 {time: 349, text: '(♪ 🔔Gong🔔 ♪)',color: "Gold"}]

 let currentSubtitleIndex = 0;  
 let currentSubtitleItem = null;  
 let currentCharacterIndex = 0; 

 function displaySubtitle(time) { 
 const subtitle = subtitles[currentSubtitleIndex]; 
 if (subtitle && time >= subtitle.time && currentSubtitleItem !== subtitle) { 
 currentSubtitleItem = subtitle; 
 const musicSymbol = "\u266B";
 const pi = '\u03C0';
 console.log(pi)


 const subtitleItem = document.createElement('li'); 
 subtitleItem.style.color = subtitle.color; 


 const fontFamilies = ['Lucida Handwriting', "Comic Sans MS", 'Magneto']; 
 const fontFamilyIndex = currentSubtitleIndex % fontFamilies.length; 
 subtitleItem.style.fontFamily = fontFamilies[fontFamilyIndex]; 


 const typingDelay = 50; 
 const subtitleText = subtitle.text; 
 currentCharacterIndex = 0; 
 subtitleItem.innerHTML = ''; 
 const typingInterval = setInterval(() => { 

 if 
 (currentCharacterIndex < subtitleText.length) { 
 subtitleItem.innerHTML += subtitleText.charAt(currentCharacterIndex); 
 currentCharacterIndex++;} 

 else
 {clearInterval(typingInterval); 
  
 if (subtitles[currentSubtitleIndex + 1] && subtitle.text.endsWith('\n')) {  
 subtitleItem.innerHTML += '<br><br>';} 
 currentSubtitleIndex++;}},typingDelay); 
 subtitlesList.appendChild(subtitleItem);}} 

 audio.addEventListener('timeupdate', () => {
 const currentTime = audio.currentTime;
 displaySubtitle(currentTime);});

 audio.addEventListener('timeupdate', () => {
 const currentTime = audio.currentTime;
 displaySubtitle(currentTime);
  
  if (currentTime > 0 && headContainer.style.display !== 'block') {
 headContainer.style.display = 'block';}});
  
 audio.addEventListener('ended', () => { 
 linksContainer.style.display = 'block';});
     
 audio.addEventListener('timeupdate', () => {
 const currentTime = audio.currentTime;
 displaySubtitle(currentTime);}) 