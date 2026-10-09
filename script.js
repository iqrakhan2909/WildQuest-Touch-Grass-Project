```javascript
// WildQuest - Touch Grass Challenge
// Open-weight AI using Transformers.js

const form = document.getElementById("quest-form");
const generateBtn = document.getElementById("generate-btn");

const resultSection = document.getElementById("result");
const questTitle = document.getElementById("quest-title");
const questIntro = document.getElementById("quest-intro");
const questMission = document.getElementById("quest-mission");
const questSteps = document.getElementById("quest-steps");
const questTime = document.getElementById("quest-time");
const aiStatus = document.getElementById("ai-status");

let aiModel = null;

const fallbackQuests = [
    {
        title: "The Five-Sense Safari",
        intro: "Take a break and reconnect with nature.",
        mission:
            "Explore your surroundings using your senses. " +
            "Notice things you usually miss when looking at a screen.",
        steps: [
            "Walk slowly and listen to three different sounds.",
            "Find an interesting colour, texture and moving object.",
            "Take five deep breaths and remember your favourite discovery."
        ]
    },
    {
        title: "Tiny Wildlife Detective",
        intro: "Become a detective of the natural world.",
        mission:
            "Look for signs of wildlife around you. " +
            "Observe animals from a safe distance without disturbing them.",
        steps: [
            "Stand quietly and observe your surroundings.",
            "Look for birds, insects, webs or interesting leaves.",
            "Choose one thing you would like to learn about later."
        ]
    },
    {
        title: "The Curious Explorer",
        intro: "Turn an ordinary walk into a little adventure.",
        mission:
            "Explore a familiar, safe outdoor area and discover three " +
            "things you usually overlook.",
        steps: [
            "Put your phone away and begin your walk.",
            "Notice three interesting things around you.",
            "Remember your favourite discovery when you return."
        ]
    }
];

// Read the choices selected by the user.
function getUserChoices() {
    return {
        place: document.getElementById("place").value,
        duration: document.getElementById("duration").value,
        mood: document.getElementById("mood").value,
        interest: document.getElementById("interest").value
    };
}

// Prepare instructions for the AI model.
function createPrompt(data) {
    return (
        "Create a safe outdoor activity for " + data.place +
        ". Available time: " + data.duration +
        ". Mood: " + data.mood +
        ". Interest: " + data.interest +
        ". Give a short title, a friendly introduction, " +
        "one mission and three numbered steps. " +
        "Keep the activity simple and suitable for beginners. " +
        "Do not suggest dangerous activities, eating unknown plants, " +
        "or disturbing wildlife. Keep the answer under 100 words."
    );
}

// Load the open-weight AI model in the browser.
async function loadAI() {
    if (aiModel) {
        return aiModel;
    }

    if (
        !window.transformers ||
        typeof window.transformers.pipeline !== "function"
    ) {
        throw new Error(
            "Transformers.js is unavailable. Check your internet connection."
        );
    }

    aiStatus.textContent =
        "Loading the open-weight AI model. Please wait...";

    aiModel = await window.transformers.pipeline(
        "text2text-generation",
        "Xenova/flan-t5-small",
        {
            quantized: true
        }
    );

    return aiModel;
}

// Choose a ready-made quest if AI is unavailable.
function getFallbackQuest(data) {
    const randomIndex = Math.floor(
        Math.random() * fallbackQuests.length
    );

    const quest = fallbackQuests[randomIndex];

    return {
        title: quest.title,
        intro: quest.intro + " Designed for " + data.duration + ".",
        mission: quest.mission,
        steps: quest.steps
    };
}

// Display the quest on the webpage.
function displayQuest(quest, data, usedAI) {
    questTitle.textContent = quest.title;
    questIntro.textContent = quest.intro;
    questMission.textContent = quest.mission;
    questTime.textContent = data.duration.toUpperCase();

    questSteps.innerHTML = "";

    quest.steps.forEach(function (step) {
        const listItem = document.createElement("li");
        listItem.textContent = step;
        questSteps.appendChild(listItem);
    });

    if (usedAI) {
        aiStatus.textContent =
            "Quest generated using open-weight AI in your browser.";
    } else {
        aiStatus.textContent =
            "Showing a ready-made quest because AI was unavailable.";
    }

    document.getElementById("goodbye").hidden = true;
    resultSection.hidden = false;

    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Generate a new outdoor quest when the form is submitted.
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = getUserChoices();

    generateBtn.disabled = true;
    generateBtn.textContent = "Creating your quest...";

    try {
        const generator = await loadAI();

        const response = await generator(
            createPrompt(data),
            {
                max_new_tokens: 120
            }
        );

        const generatedText = response[0].generated_text.trim();

        if (!generatedText) {
            throw new Error("The AI returned an empty response.");
        }

        const quest = {
            title: "Your Outdoor Adventure",
            intro: "Your personalised quest is ready. Time to explore!",
            mission: generatedText,
            steps: [
                "Head to your chosen outdoor location safely.",
                "Follow the activity and notice your surroundings.",
                "Put your phone away and enjoy the experience."
            ]
        };

        displayQuest(quest, data, true);

    } catch (error) {
        console.error("AI generation error:", error);

        const quest = getFallbackQuest(data);
        displayQuest(quest, data, false);

    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = "Generate My Outdoor Quest ↗";
    }
});

// Show a message when the user is ready to go outside.
document.getElementById("done-btn").addEventListener(
    "click",
    function () {
        document.getElementById("goodbye").hidden = false;
    }
);
```
