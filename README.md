# 🌿 WildQuest — Touch Grass, For Real

> **Less scrolling. More living.**  
> WildQuest turns a few simple preferences into a tiny outdoor adventure, helping people spend less time on screens and more time exploring the world around them.

WildQuest was built for the **“Touch Grass”** challenge: create something powered by open-source AI that gets people outdoors. Pick a setting, choose how much time you have, select your energy and interests, and generate a practical outdoor quest.

## ✨ Features

- **Personalized outdoor quests** based on setting, time, energy, and interests.
- **Open-weight AI** using `Xenova/flan-t5-small` with Transformers.js.
- **Browser-based inference** — the prompt and preferences are processed locally in the browser, not sent to a private AI inference API.
- **No paid API key or backend server** required.
- **Fallback quests** are available if the AI library or model cannot be loaded.
- **Responsive design** for desktop and mobile screens.
- **Simple, nature-inspired interface** designed to make the screen part of the experience brief.

## 🧠 How the AI works

WildQuest uses [Transformers.js](https://huggingface.co/docs/transformers.js) to run an open-weight text-generation model in the browser:

- **Model:** [`Xenova/flan-t5-small`](https://huggingface.co/Xenova/flan-t5-small)
- **Task:** Text-to-text generation
- **Runtime:** Transformers.js
- **Inference:** In the user's browser

The app creates a prompt from the selected options and asks the model for a short title, introduction, mission, and three practical steps.

**Privacy note:** User-selected preferences are processed in the browser and are not sent to a private AI inference API. The initial page, library, and model download require an internet connection. Offline reuse depends on browser caching and availability; fully offline first launch is not guaranteed.

## 🛠️ Built with

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Transformers.js](https://github.com/huggingface/transformers.js)
- [FLAN-T5 Small](https://huggingface.co/Xenova/flan-t5-small)

## 📁 Project structure

```text
WildQuest/
├── index.html    # Page structure and quest interface
├── style.css     # Styling, responsive layout, and animations
├── script.js     # Form logic, local AI generation, and fallbacks
└── README.md     # Project documentation
```

## 🚀 Run locally

### Option 1: VS Code + Live Server

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if needed.
4. Right-click `index.html` and select **Open with Live Server**.
5. Choose your outdoor setting, available time, energy level, and interests.
6. Click **Generate my outdoor quest**.

### Option 2: Run a local HTTP server

If Python is installed, open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

> **First run:** An internet connection is needed to load Transformers.js and download the model. The first model load can take a while, depending on your connection and device. If local AI generation fails, WildQuest displays a ready-made quest instead.

## 🌳 How to use WildQuest

1. **Pick a setting:** park, garden or balcony, neighbourhood walk, or nature trail.
2. **Choose your time:** 5, 15, 30, or 60 minutes.
3. **Choose your energy:** gentle, curious, or active.
4. **Select interests:** birds and wildlife, plants and tiny details, movement, mindfulness, or a friend.
5. **Generate your quest** and follow its steps outdoors.
6. **Put your phone away** and enjoy the moment.

## 💚 Why open innovation matters

WildQuest is intentionally built around an open-weight model rather than a closed, paid AI API.

- **More control:** developers can inspect the model setup, edit the prompt, and experiment with compatible models.
- **Privacy-conscious design:** preferences can be processed locally instead of being sent to a hosted AI inference provider.
- **Lower service costs:** there is no paid inference API key or dedicated backend required for the demo.
- **Room to experiment:** the model and activity rules can be adapted for different communities, environments, and outdoor interests.

Open models do not automatically guarantee complete offline functionality or perfect output quality. WildQuest still needs a first-time download, and generated quests should be reviewed for clarity and safety.

## 🧭 Safety first

- Choose a public, familiar, and safe location.
- Follow local rules and respect private property.
- Observe wildlife from a distance; do not feed, touch, or disturb animals.
- Do not eat unknown plants or mushrooms.
- Stay aware of traffic, weather, and your surroundings.
- Treat AI-generated activities as suggestions and use your judgment.

## 🗺️ Roadmap

- [ ] Add local weather-aware quest suggestions.
- [ ] Add a nature journal so users can record discoveries after returning.
- [ ] Add a bird and plant observation mode.
- [ ] Improve model-loading progress and error messages.
- [ ] Evaluate smaller models and improve quest output consistency.
- [ ] Add optional installable PWA support and test reliable offline behavior.

## 🤝 Contributing

Contributions and ideas are welcome!

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`
3. Make your changes and test them in a browser.
4. Commit: `git commit -m "Add your feature"`
5. Push your branch and open a Pull Request.

## 📜 License

No license has been specified yet. Add a `LICENSE` file before presenting this project as open source or accepting reuse contributions. For a simple permissive option, review the [MIT License](https://choosealicense.com/licenses/mit/).

---

**Built for the Touch Grass challenge.** 🌱  
*The best part of the adventure happens after you close the tab.*
