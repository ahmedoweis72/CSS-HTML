var hangmanWords = [
    "abandon", "ability", "absence", "academy", "account", "accuracy", "achieve", "acoustic", "activity", "actually",
    "addition", "adjust", "adventure", "advice", "affection", "airplane", "airport", "amazing", "ancient", "animal",
    "announce", "another", "answer", "apology", "apparent", "appeal", "appoint", "approach", "approve", "aquarium",
    "archive", "arrange", "arrival", "artistic", "ashamed", "aspect", "assemble", "assorted", "athletic", "attempt",
    "attract", "auction", "average", "awesome", "balance", "balloon", "bargain", "barrier", "battery", "beautiful",
    "bedroom", "benefit", "between", "billion", "biology", "birthday", "blanket", "blessing", "boredom", "borrow",
    "breathe", "brother", "builder", "cabinet", "campaign", "capital", "capture", "careful", "carrier", "caution",
    "ceiling", "celebrate", "certain", "chamber", "charming", "chicken", "circuit", "citizen", "clarify", "climate",
    "clothes", "combine", "comfort", "command", "company", "compare", "compete", "complain", "complex", "concert",
    "conduct", "connect", "contain", "contest", "control", "convert", "courage", "crystal", "cultural", "current",
    "curtain", "cutting", "decade", "declare", "defense", "deliver", "density", "deserve", "dessert", "develop",
    "diamond", "digital", "disaster", "disease", "display", "disturb", "diverse", "dolphin", "dynamic", "eagerly",
    "earlier", "economy", "educate", "election", "elegant", "element", "embrace", "emotion", "emphasis", "empower",
    "enforce", "enhance", "enlighten", "enormous", "enrich", "enthusiast", "envelope", "equation", "equipment", "escape",
    "essence", "eternal", "ethical", "evening", "evidence", "example", "excited", "exercise", "exhibit", "explore",
    "express", "factory", "failure", "fantasy", "fashion", "feature", "festival", "finance", "fitness", "flowers",
    "freedom", "gallery", "garbage", "general", "genetic", "gesture", "gigantic", "glacier", "glimpse", "goodbye",
    "governor", "graphic", "greatest", "guardian", "habitat", "happiness", "hardware", "harmony", "harvest", "heading",
    "healthy", "hearing", "heavenly", "heritage", "horizon", "hostage", "humidity", "husband", "iceberg", "identity",
    "illness", "imagine", "impress", "improve", "include", "indicate", "infinity", "informed", "inherent", "inquiry",
    "inspire", "install", "intense", "intimate", "invasion", "invitation", "invisible", "isolate", "jacket", "journey",
    "justice", "kingdom", "kitchen", "knowing", "landing", "landlord", "language", "laughter", "lecture", "leisure",
    "liberty", "library", "lifeline", "lifestyle", "lighten", "lifetime", "lightning", "likewise", "linguistic", "loyalty",
    "machine", "madness", "magical", "magnetic", "maintain", "majority", "mankind", "mansion", "marathon", "marriage",
    "massive", "material", "maximum", "meaning", "measure", "medicine", "mention", "message", "metallic", "metaphor",
    "midnight", "mineral", "miracle", "mission", "mixture", "mobility", "monarch", "monitor", "monster", "morning",
    "mystery", "natural", "navigate", "necklace", "neither", "network", "neutral", "nominee", "nothing", "nowhere",
    "nurture", "observe", "obstacle", "offense", "officer", "official", "operate", "opinion", "opposite", "optical",
    "optimal", "organic", "origami", "outcome", "outdoor", "outlook", "outside", "overall", "overcome", "overlap",
    "package", "painting", "palace", "paradox", "parking", "passion", "patience", "pattern", "payment", "penalty",
    "perfect", "perform", "perplex", "personal", "petroleum", "pharmacy", "physical", "picture", "pioneer", "plastic",
    "pleasure", "pocket", "popular", "portion", "posture", "precise", "predict", "premiere", "prepare", "present",
    "prevent", "primary", "princess", "priority", "problem", "proceed", "process", "produce", "program", "progress",
    "project", "promise", "prosper", "protest", "provide", "pyramid", "quality", "quantum", "quarter", "quickly",
    "radical", "railway", "rainbow", "random", "rapidly", "reality", "realize", "rebuild", "recharge", "recover",
    "referee", "reflect", "refugee", "regulate", "reliable", "removal", "renewal", "replace", "request", "research",
    "respect", "respond", "reunion", "reverse", "revenue", "rhythmic", "romance", "routine", "sacred", "satisfy",
    "scenery", "science", "scratch", "shelter", "shortly", "sibling", "silence", "sincere", "singular", "sketch",
    "smooth", "society", "soften", "soldier", "solution", "somehow", "sophist", "special", "spectrum", "stadium",
    "stamina", "station", "stellar", "stimuli", "storage", "strategic", "struggle", "subject", "subtle", "success",
    "suggest", "sunlight", "survival", "sympathy", "tactical", "talented", "tangible", "taxation", "teacher", "temple",
    "texture", "theater", "therapy", "thunder", "together", "tomorrow", "tourism", "tradition", "tragedy", "triumph",
    "tropical", "turmoil", "universe", "unusual", "upgrade", "upstairs", "utility", "vacancy", "vaccine", "valuable",
    "variable", "venture", "vibrant", "victory", "village", "violent", "virtual", "visible", "visitor", "vocalist",
    "voltage", "volume", "voyager", "warrior", "wealthy", "weather", "welfare", "western", "whisper", "willing",
    "witness", "woodland", "workshop", "worship", "worthwhile", "yawning", "yearning", "yesterday", "youthful",
    "zealous", "zoology"
  ];
  var wordContent=document.getElementById('guessedWord');
  function choseWord() {
      var word=hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
      wordContent.textContent="-".repeat(word.length);
    return word;

  }

  var guessedWord=choseWord();
  var checkGuess=document.getElementById('inputId');
  var checkGuessValue;
  document.getElementById("btnId").addEventListener('click',function () {
    checkGuessValue=checkGuess.value;
    console.log(checkGuess.value);
    if (guessedWord.includes(checkGuessValue)) {
        for (let i = 0; i < guessedWord.length; i++) {
            if (guessedWord.charAt(i)==checkGuess) {
                console.log(wordContent );
                 
            }
            
        }
        
        
      }else{
        console.log('no');
        
      }
  })
 
  console.log(guessedWord);
  

  
  const canvas = document.getElementById('hangmanCanvas');
  const ctx = canvas.getContext('2d');
  
  function drawHangman(stage) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
  
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#444';
      ctx.beginPath();
      ctx.moveTo(100, 450); 
      ctx.lineTo(400, 450);
      ctx.moveTo(150, 450); 
      ctx.lineTo(150, 50);
      ctx.lineTo(300, 50); 
      ctx.lineTo(300, 100); 
      ctx.stroke();
  
      if (stage > 0) {
  
          const headGradient = ctx.createRadialGradient(300, 140, 10, 300, 140, 30);
          headGradient.addColorStop(0, '#FFDDC1');
          headGradient.addColorStop(1, '#D9A687');
          ctx.fillStyle = headGradient;
          ctx.beginPath();
          ctx.arc(300, 140, 30, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
      }
      if (stage > 1) {
  
          ctx.strokeStyle = '#444';
          ctx.beginPath();
          ctx.moveTo(300, 170);
          ctx.lineTo(300, 280);
          ctx.stroke();
      }
      if (stage > 2) {
  
          ctx.beginPath();
          ctx.moveTo(300, 200);
          ctx.lineTo(250, 240);
          ctx.stroke();
      }
      if (stage > 3) {
  
          ctx.beginPath();
          ctx.moveTo(300, 200);
          ctx.lineTo(350, 240);
          ctx.stroke();
      }
      if (stage > 4) {
  
          ctx.beginPath();
          ctx.moveTo(300, 280);
          ctx.lineTo(260, 350);
          ctx.stroke();
      }
      if (stage > 5) {
  
          ctx.beginPath();
          ctx.moveTo(300, 280);
          ctx.lineTo(340, 350);
          ctx.stroke();
      }
      if (stage > 6) {
  
          ctx.fillStyle = '#000';
          ctx.beginPath();
          ctx.arc(290, 130, 3, 0, Math.PI * 2); 
          ctx.arc(310, 130, 3, 0, Math.PI * 2); 
          ctx.fill();
  
          ctx.beginPath();
          ctx.arc(300, 150, 10, 0, Math.PI, false); 
          ctx.strokeStyle = '#FF0000';
          ctx.stroke();
  
          setTimeout(() => {
              ctx.fillStyle = '#FFDDC1'; 
              ctx.beginPath();
              ctx.arc(290, 130, 3, 0, Math.PI * 2);
              ctx.arc(310, 130, 3, 0, Math.PI * 2);
              ctx.fill();
          }, 500); 
      }
  }
  
  let stage = 0;
  const maxStages = 7;
  
  const interval = setInterval(() => { 
      if (stage <= maxStages) {
          drawHangman(stage);
          stage++;
      } else {
          clearInterval(interval);
      }
  }, 1000);
