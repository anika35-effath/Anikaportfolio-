# Effath Anika — Software & Backend Engineering Portfolio

A modern, fast, zero-dependency developer portfolio engineered specifically for **Software Engineering**, **Backend Architecture**, and **Data Analysis** roles.

Designed with an **Obsidian Dark + Soft Violet / Rose Neon Glassmorphism** aesthetic — balancing technical sophistication, developer credibility, and modern visual elegance.

---

## 🚀 Key Highlights & Features

- **Obsidian Dark & Cyber-Violet/Rose Aesthetic**: Custom dark theme featuring frosted glass cards, glowing borders, and radiant accents built specifically for CSE developers.
- **Interactive Constellation Canvas**: Ambient particle field connecting in response to mouse movement with zero CPU overhead.
- **Interactive Developer Terminal Simulator**: A functional CLI console supporting commands:
  - `help`, `whoami`, `skills`, `projects`, `battleship`, `cf`, `toph`, `data`, `edu`, `contact`, `curl api/anika`, `clear`.
- **Live Battleship Tactical Radar Simulator**: An interactive 5x5 sonar grid mini-app demonstrating OOP state machines, collision detection, and probability-based salvo attacks directly in the browser!
- **Centralized Data Configuration (`js/data.js`)**: All personal info, projects, skills, education, and links reside in a single, clean configuration file. Update content effortlessly without digging through HTML!
- **Dual Problem Solving Showcase**: Dedicated profiles for **Codeforces** (`@4caterpillar`) and **Toph** (`@effathanika`) with algorithmic topic ratings.
- **Zero Build, Pure Standards**: Runs instantly in any web browser without needing Node.js, npm, or build tools.
- **100% Mobile & Desktop Responsive**: Fluid typography, responsive grids, and accessible contrast ratios.

---

## 📂 File Architecture

```text
anika protfolio/
├── index.html            # Main semantic HTML5 markup & SEO meta tags
├── assets/
│   ├── favicon.svg       # Custom code-terminal SVG favicon
│   └── profile-avatar.svg# Custom tech avatar illustration with glowing neon ring
├── css/
│   └── style.css         # Obsidian dark theme, glassmorphism, responsive grids & animations
├── js/
│   ├── data.js           # ⚙️ YOUR CENTRAL DATA CONFIG (Edit here to change text/links!)
│   └── script.js         # Canvas engine, terminal logic, battleship simulator & DOM hydration
└── README.md             # Documentation and deployment guide
```

---

## 🛠️ How to Customize

Open **`js/data.js`** in your code editor. You can easily modify:

1. **Personal Information**:
   - `name`: Display name (`Effath Anika`)
   - `fullName`: Full legal name (`Effath Afifah Anika`)
   - `title`: Target role / specialization
   - `subtitle`: Academic status at GSTU CSE
   - `bio`: Engineering introduction

2. **Links & Profiles**:
   - `email`: `effathanika@gmail.com`
   - `github`: `https://github.com/anika35-effath`
   - `codeforces`: `https://codeforces.com/profile/4caterpillar`
   - `toph`: `https://toph.co/u/effathanika`
   - `whatsapp`: `https://wa.me/8801344885035`
   - `facebook`: `https://www.facebook.com/share/154RdWzAsgG/`

3. **Replacing the Profile Picture**:
   - To use a real photo, simply place your photo as `profile.jpg` in the `assets/` folder, and in `js/data.js` set:
     ```javascript
     avatar: "assets/profile.jpg"
     ```

4. **Projects & Skills**:
   - Add, edit, or remove project objects in the `projects` array.
   - Adjust topics in `domains` or `problemSolving.categories`.

---

## 🌐 How to Preview & Run Locally

Since this project uses pure native web standards:

1. **Direct Browser Open**:
   - Simply double click `index.html` to open it in Chrome, Edge, Brave, or Firefox.

2. **VS Code Live Server**:
   - Right-click `index.html` and select **"Open with Live Server"**.

3. **Python Local Server (Optional)**:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 🚀 How to Deploy to GitHub Pages (Free Hosting)

1. Create a new repository on your GitHub account (`anika35-effath`) named `portfolio` or `anika35-effath.github.io`.
2. Push all files in this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Effath Anika Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/anika35-effath/portfolio.git
   git push -u origin main
   ```
3. In the repository settings, go to **Settings > Pages > Source**, select branch `main` and root `/`, then click **Save**.
4. Your website will be live at `https://anika35-effath.github.io/portfolio`!

---

© 2026 Effath Afifah Anika. Crafted for excellence.
