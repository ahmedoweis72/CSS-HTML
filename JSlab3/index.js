const words = [
    "python", "java", "kotlin", "javascript", "typescript", "ruby", "swift", "objective", "csharp", "golang",
    "rust", "scala", "perl", "haskell", "clojure", "elixir", "erlang", "dart", "lua", "groovy",
    "matlab", "racket", "scheme", "fsharp", "ocaml", "solidity", "vhdl", "verilog", "fortran", "cobol",
    "pascal", "ada", "assembly", "bash", "powershell", "html", "css", "sql", "json", "xml",
    "yaml", "protobuf", "markdown", "latex", "dockerfile", "makefile", "cmake", "ninja", "gradle", "maven",
    "ant", "sbt", "leiningen", "npm", "yarn", "pip", "conda", "virtualenv", "ansible", "terraform",
    "chef", "puppet", "saltstack", "kubernetes", "openshift", "mesos", "nomad", "consul", "vault", "etcd",
    "zookeeper", "hadoop", "spark", "flink", "storm", "kafka", "rabbitmq", "activemq", "zeromq", "nats",
    "redis", "memcached", "cassandra", "mongodb", "couchdb", "neo4j", "arangodb", "dynamodb", "bigtable", "hbase",
    "accumulo", "presto", "trino", "hive", "pig", "tez", "oozie", "airflow", "luigi", "nifi",
    "flume", "sqoop", "kudu", "impala", "drill", "phoenix", "ignite", "hazelcast", "geode", "gemfire"
];

let word, wordCompletion, guessed, guessedLetters, guessedWords, tries;

function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function drawHangman(tries) {
    const canvas = document.getElementById("hangmanCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Base
    if (tries < 6) {
        ctx.beginPath();
        ctx.moveTo(10, 190);
        ctx.lineTo(190, 190);
        ctx.stroke();
    }

    // Pole
    if (tries < 5) {
        ctx.beginPath();
        ctx.moveTo(50, 190);
        ctx.lineTo(50, 10);
        ctx.lineTo(150, 10);
        ctx.lineTo(150, 30);
        ctx.stroke();
    }

    // Head
    if (tries < 4) {
        ctx.beginPath();
        ctx.arc(150, 50, 20, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    // Body
    if (tries < 3) {
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.lineTo(150, 130);
        ctx.stroke();
    }

    // Arms
    if (tries < 2) {
        ctx.beginPath();
        ctx.moveTo(150, 90);
        ctx.lineTo(120, 110);
        ctx.moveTo(150, 90);
        ctx.lineTo(180, 110);
        ctx.stroke();
    }

    // Legs
    if (tries < 1) {
        ctx.beginPath();
        ctx.moveTo(150, 130);
        ctx.lineTo(120, 160);
        ctx.moveTo(150, 130);
        ctx.lineTo(180, 160);
        ctx.stroke();
    }
}

function initializeGame() {
    word = chooseWord();
    wordCompletion = "_".repeat(word.length);
    guessed = false;
    guessedLetters = [];
    guessedWords = [];
    tries = 6;

    drawHangman(tries);
    document.getElementById("word").textContent = wordCompletion;
    document.getElementById("message").textContent = "";
}

function makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.toLowerCase();
    guessInput.value = "";

    if (guess.length === 1 && /^[a-zA-Z]$/.test(guess)) {
        if (guessedLetters.includes(guess)) {
            document.getElementById("message").textContent = "You already guessed the letter " + guess;
        } else if (!word.includes(guess)) {
            document.getElementById("message").textContent = guess + " is not in the word.";
            tries--;
            guessedLetters.push(guess);
        } else {
            document.getElementById("message").textContent = "Good job, " + guess + " is in the word!";
            guessedLetters.push(guess);
            let wordAsArray = wordCompletion.split("");
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    wordAsArray[i] = guess;
                }
            }
            wordCompletion = wordAsArray.join("");
            if (!wordCompletion.includes("_")) {
                guessed = true;
            }
        }
    } else if (guess.length === word.length && /^[a-zA-Z]+$/.test(guess)) {
        if (guessedWords.includes(guess)) {
            document.getElementById("message").textContent = "You already guessed the word " + guess;
        } else if (guess !== word) {
            document.getElementById("message").textContent = guess + " is not the word.";
            tries--;
            guessedWords.push(guess);
        } else {
            guessed = true;
            wordCompletion = word;
        }
    } else {
        document.getElementById("message").textContent = "Not a valid guess.";
    }

    drawHangman(tries);
    document.getElementById("word").textContent = wordCompletion;

    if (guessed) {
        document.getElementById("message").textContent = "Congrats, you guessed the word! You win!";
    } else if (tries === 0) {
        document.getElementById("message").textContent = "Sorry, you ran out of tries. The word was " + word + ". Maybe next time!";
    }
}

function resetGame() {
    initializeGame();
}

initializeGame();