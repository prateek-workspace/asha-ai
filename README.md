<div align="center">

# 🩺 ASHA AI

### *Bridging the Last Mile in Rural Healthcare*

**A voice-first AI health companion empowering 300 million rural Indian women**

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://asha-ai.netlify.app)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Technical Architecture](#-technical-architecture)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Roadmap](#-roadmap)
- [Impact](#-impact)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🌟 Overview

**ASHA AI** is a revolutionary voice-first healthcare platform designed to democratize healthcare access for rural Indian women. Built to work on low-end devices with intermittent connectivity, ASHA AI empowers women who face literacy barriers, social stigma, and limited access to healthcare professionals.

### 🎯 Mission

To provide dignified, private, and accessible healthcare guidance to underserved rural communities while supercharging the existing ASHA (Accredited Social Health Activist) workforce with intelligent digital tools.

---

## 🚨 The Problem

### **Meet Radha**
Radha is 19 years old, pregnant, and anemic. She lives in a village in Bihar where:

- ❌ **Literacy Barrier**: Cannot read medical pamphlets or text-based health apps
- ❌ **Social Stigma**: Too shy to discuss reproductive health with family or male doctors
- ❌ **Overburdened System**: Her ASHA worker visits once a month and manages 1,000+ villagers

> *"I have questions, but I don't know who to ask..."* - Radha, 19

### The Statistics
- 📊 **300 million** rural women lack accessible healthcare guidance
- 🏥 **1 ASHA worker** per 1,000 population
- 📱 **95%** of users cannot download mobile apps due to constraints
- 🔴 **High maternal mortality** due to delayed interventions

---

## 💡 Our Solution

### **ASHA AI solves this through:**

#### 🎤 **Voice-First Technology**
- No typing, no reading—just conversation in local dialects (Hindi, Bhojpuri, English)
- If you can speak, you can use ASHA AI

#### 🔒 **Whisper Privacy Mode**
- Anonymous usage
- Auto-delete for shared phones
- Local storage for sensitive queries
- No judgment, complete privacy

#### 👩‍⚕️ **ASHA Worker Empowerment**
- Digital assistant for health workers
- Real-time high-risk alerts
- Auto-digitized visit records
- Village-level health analytics

---

## ✨ Key Features

### **For Rural Women**

#### 🩺 **Symptom Checker**
- Voice-based symptom reporting in local dialects
- AI-powered triage using WHO medical protocols
- Instant advice with doctor-verified responses
- Audio playback for responses

#### 📅 **Voice Period Tracker**
- No calendar needed—just speak: *"Meri date aaj aayi hai"*
- Tracks cycles, predicts fertile windows
- Identifies irregularities and health risks
- Visual calendar with voice logging

#### 🥗 **Nutrition Planner**
- Iron-rich meal planning using low-cost local foods (jaggery, greens)
- Anemia prevention guidance
- IFA tablet reminders
- Audio micro-lessons (30-45 seconds)

#### 🎓 **Audio Micro-Lessons**
- Bite-sized health education
- Topics: Hygiene, puberty, pregnancy danger signs
- Accessible without reading

#### 👤 **Privacy-First Profile**
- Multi-language support
- Dark mode
- Whisper mode toggle
- Local data storage

### **For ASHA Workers**

#### 📊 **Dashboard Analytics**
- Total patients overview
- High-risk alerts
- Village health statistics
- Disease outbreak heatmaps

#### 📋 **Patient Management**
- Auto-digitized "Speak to Log" visit records
- Pregnancy risk identification
- Anemia trend tracking
- Reduced paperwork by 60%

#### 📈 **Reports & Insights**
- Village-level health metrics
- Maternal health status
- Real-time analytics for NGOs

---

## 🏗️ Technical Architecture

### **Technical Approach**

Designed for **low literacy**, **low bandwidth**, **shared phones**, and **intermittent networks** ensuring real usability in rural India.

```
┌─────────────────────────────────────────────────────────────┐
│                      User Interface                         │
│  WhatsApp Bot (95%) + Lite App (25MB) + Offline-First      │
│              Low-friction entry points                       │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                    Whisper AI                               │
│   • Whisper STT (Bhojpuri/Hindi audio → text)              │
│   • Fine-Tuned LLM (LangChain)                             │
│   • Converts queries → medical knowledge                    │
│   • Generates voice response                                │
└─────────────────┬───────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────┐
│                 Knowledge Base                              │
│   • Vector DB (FastAPI)                                     │
│   • WHO Guidelines & Medical Protocols                      │
│   • RAG retrieval for verified data                         │
└─────────────────────────────────────────────────────────────┘
```

### **System Components**

- **Frontend**: React + TypeScript + Tailwind CSS
- **Voice Processing**: Whisper STT + Fine-tuned LLM
- **Storage**: Vector Database for medical protocols
- **Deployment**: Lightweight (25MB) offline-capable app
- **Primary Channel**: WhatsApp Bot (no app download needed)

---

## 📸 Screenshots

### Landing Page
<div align="center">
  <img src="public/indian gurls image.png" alt="ASHA AI Hero" width="600"/>
</div>

### User Features
- **Symptom Checker**: AI-powered voice-based health consultation
- **Period Tracker**: Voice logging with visual calendar
- **Nutrition Planner**: Local food-based anemia prevention
- **Audio Lessons**: Micro-education in local languages

### ASHA Worker Portal
- **Dashboard**: Real-time village health analytics
- **Patient List**: High-risk alerts and visit tracking
- **Reports**: Data-driven insights for NGOs

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/asha-ai.git
   cd asha-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

### Deploy

The project is configured for Netlify deployment via `netlify.toml`.

---

## 📁 Project Structure

```
asha-ai/
├── public/                      # Static assets
│   ├── favicon-32x32.png
│   ├── indian gurls image.png
│   └── new pink logo.png
├── src/
│   ├── components/
│   │   ├── asha/               # ASHA worker components
│   │   │   ├── AddPatientModal.tsx
│   │   │   └── LogVisitModal.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── AshaLayout.tsx
│   │   │   ├── MobileLayout.tsx
│   │   │   └── UserLayout.tsx
│   │   └── ui/                 # UI components
│   │       ├── AudioPlayer.tsx
│   │       └── VoiceVisualizer.tsx
│   ├── context/
│   │   └── SettingsContext.tsx # Theme, language, settings
│   ├── lib/
│   │   ├── mockData.ts         # Mock data for demo
│   │   ├── translations.ts     # Multi-language support
│   │   └── utils.ts            # Utility functions
│   ├── pages/
│   │   ├── Landing.tsx         # Landing/pitch page
│   │   ├── asha/               # ASHA worker pages
│   │   │   ├── AshaDashboard.tsx
│   │   │   ├── PatientList.tsx
│   │   │   └── Reports.tsx
│   │   └── user/               # User pages
│   │       ├── Education.tsx
│   │       ├── NutritionPlanner.tsx
│   │       ├── PeriodTracker.tsx
│   │       ├── Profile.tsx
│   │       ├── SymptomChecker.tsx
│   │       └── UserHome.tsx
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 6.3.5** - Build tool
- **React Router 7.9.6** - Navigation
- **Tailwind CSS 3.4.1** - Styling
- **Framer Motion 12.23.24** - Animations

### **UI Components**
- **Lucide React** - Icons
- **Recharts** - Data visualization
- **Clsx** - Conditional classes

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🗺️ Roadmap

### **Phase 1: Pilot Launch** ✅ *Current Status*
- Deploying in **50 villages** in Bhojpuri & Awadhi dialects
- Focus on Bihar & UP
- Collecting initial data

### **Phase 2: State Integration** 🔄 *Next 6 Months*
- API integration with National Health Mission (NHM)
- Expanding to Bihar & Madhya Pradesh
- Comprehensive data pipeline

### **Phase 3: Pan-India** 🎯 *Long-term Vision*
- Language-agnostic architecture
- Support for Tamil, Telugu, Bengali
- National-scale deployment

---

## 🎯 Impact

### **Expected Outcomes**

#### For Women
- ⏰ **Early reporting** of menstrual & reproductive issues
- 📱 **Better period tracking** & health-seeking behavior
- 💊 **Higher adherence** to IFA tablets
- 🏥 **Reduced fear** of clinical consultations

#### For ASHA Workers
- 📉 **Reduced paperwork** by 60%
- 🚨 **Real-time high-risk alerts**
- 📊 **Data-driven patient prioritization**
- 🎓 **Enhanced efficiency** with digital tools

#### Social Impact
- 📉 Reduced maternal mortality
- 💬 Destigmatized health conversations
- 📈 Increased health literacy
- 🌍 Scalable model for developing nations

---

## 👥 Contributors

This project was built with ❤️ by:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/prakharsingh">
        <img src="https://github.com/prakharsingh.png" width="100px;" alt="Prakhar Singh"/><br />
        <sub><b>Prakhar Singh</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/prateeksrivastava">
        <img src="https://github.com/prateeksrivastava.png" width="100px;" alt="Prateek Srivastava"/><br />
        <sub><b>Prateek Srivastava</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lakshyabarnwal">
        <img src="https://github.com/lakshyabarnwal.png" width="100px;" alt="Lakshya Barnwal"/><br />
        <sub><b>Lakshya Barnwal</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pushkarsingh">
        <img src="https://github.com/pushkarsingh.png" width="100px;" alt="Pushkar Singh"/><br />
        <sub><b>Pushkar Singh</b></sub>
      </a>
    </td>
  </tr>
</table>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ASHA Workers** across India for their tireless dedication
- **Rural women** who inspired this solution
- **WHO** for medical protocol guidelines
- **National Health Mission** for partnership support
- Open-source community for amazing tools

---

## 📞 Contact & Support

### Get Involved
- 🌐 **Website**: [asha-ai.netlify.app](https://asha-ai.netlify.app)
- 📧 **Email**: contact@asha-ai.org
- 💼 **Partnership Inquiries**: partners@asha-ai.org

### For NGOs & Investors
Download our full pitch deck to learn more about:
- Detailed impact metrics
- Financial projections
- Scaling strategy
- Partnership opportunities

---

<div align="center">

### 🌟 Star this repo if you believe in accessible healthcare for all!

**Built for Social Good** 🩺 | **Powered by AI** 🤖 | **Designed for Impact** 💪

</div>