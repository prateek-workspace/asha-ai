// Translation Dictionary
export type Language = 'en' | 'hi' | 'bh';

export const translations = {
  en: {
    // Navigation
    home: "Home",
    track: "Track Cycle",
    diet: "Nutrition Plan",
    learn: "Health Library",
    profile: "My Profile",
    consult: "Symptom Checker",
    
    // Landing - Hero
    heroTitle: "Bridging the Last Mile in Rural Healthcare",
    heroSubtitle: "We are building the world's first voice-AI companion designed to empower 300 million rural Indian women and supercharge the ASHA workforce.",
    speakToAsha: "Experience the AI",
    workerPortal: "Worker Dashboard",
    partnerWithUs: "Partner With Us",
    
    // Landing - The Story (NGO Pitch)
    storyTitle: "The Silent Struggle",
    storySubtitle: "In the heart of rural India, healthcare isn't just about medicine—it's about access, literacy, and dignity.",
    radhaStory: "Meet Radha. She lives in a village in Bihar. She is 19, pregnant, and anemic.",
    painPoint1: "Literacy Barrier",
    painPoint1Desc: "Radha cannot read complex medical pamphlets or text-based health apps.",
    painPoint2: "Social Stigma",
    painPoint2Desc: "She is too shy to discuss reproductive health with family or male doctors.",
    painPoint3: "Overburdened System",
    painPoint3Desc: "Her local ASHA worker visits only once a month and manages 1,000+ other villagers.",
    
    // Landing - The Solution
    solutionTitle: "Enter ASHA AI",
    solutionSubtitle: "We don't just digitize healthcare; we humanize technology.",
    voiceFirst: "Voice-First Technology",
    voiceFirstDesc: "If Radha can speak, she can use ASHA AI. No typing, no reading—just conversation in her local dialect.",
    privacyCore: "Privacy at the Core",
    privacyCoreDesc: "With 'Whisper Mode', Radha can ask sensitive questions without fear, knowing her data stays on her device.",
    ashaEmpowerment: "Supercharging ASHA Workers",
    ashaEmpowermentDesc: "We don't replace ASHA workers; we give them a digital assistant to prioritize high-risk patients like Radha.",

    // Landing - Why Invest
    investTitle: "Why Partner With Us?",
    investSubtitle: "A scalable intervention ready for impact.",
    scaleTitle: "Built for Scale",
    scaleDesc: "Lightweight architecture designed to run on low-end Android devices with intermittent internet.",
    dataTitle: "Real-time Analytics",
    dataDesc: "NGOs get village-level heatmaps of disease outbreaks, anemia trends, and maternal health status.",
    costTitle: "Cost Efficient",
    costDesc: "Reducing the cost of preventive care by 60% through early AI-driven triage and education.",

    // Features
    features: "Key Features",
    impact: "Our Impact",
    howItWorks: "How It Works",
    testimonials: "Voices from the Field",
    faq: "FAQ",
    
    // How it Works
    step1Title: "Radha Speaks",
    step1Desc: "She presses a button and asks about her symptoms in Bhojpuri.",
    step2Title: "AI Triage",
    step2Desc: "Our LLM analyzes the query against medical protocols.",
    step3Title: "Actionable Care",
    step3Desc: "She gets instant advice, and her ASHA worker gets a 'High Risk' alert.",

    // Testimonials
    story1: "ASHA told me my dizziness was due to Anemia. I started eating spinach and jaggery as suggested.",
    story1Name: "Sunita Devi",
    story1Loc: "Bihar",
    story2: "I was scared about my pregnancy dates. ASHA helped me track everything without a calendar.",
    story2Name: "Priya Singh",
    story2Loc: "Uttar Pradesh",

    // FAQ
    faq1Q: "How do you handle different dialects?",
    faq1A: "Our model is fine-tuned on diverse datasets including Bhojpuri, Maithili, and Awadhi to understand context, not just words.",
    faq2Q: "Is this replacing doctors?",
    faq2A: "No. ASHA AI is a triage and education tool. It directs users to doctors when red-flag symptoms are detected.",
    faq3Q: "What is the funding used for?",
    faq3A: "Funding goes towards expanding our dialect database, field testing in 50 new villages, and server costs.",

    // User Home
    welcome: "Namaste",
    healthSummary: "Here is your health summary for today.",
    feelingQuestion: "How are you feeling?",
    feelingPrompt: "Tell ASHA about any symptoms or doubts you have today.",
    cycleTracking: "Cycle Tracking",
    nextPeriodIn: "Next period in",
    days: "days",
    ironIntake: "Iron Intake",
    anemiaPrev: "Anemia Prevention",
    dailyTip: "Daily Health Tip",
    listenNow: "Listen Now",
    ifaReminder: "IFA Tablet Reminder",
    takePill: "Don't forget to take your Iron Folic Acid tablet today.",
    markTaken: "Mark as Taken",
    
    // Profile
    settings: "Settings",
    privacyMode: "Whisper Privacy",
    privacyDesc: "Auto-delete voice notes",
    language: "Language",
    darkMode: "Dark Mode",
    appearance: "Appearance",
    logout: "Log Out",
    
    // Tracker
    periodStarted: "Period Started?",
    logSymptoms: "Log Symptoms",
    heavyFlow: "Heavy Flow",
    cramps: "Cramps",
    mood: "Mood",
    fertileWindow: "Fertile Window",
    safeDays: "Safe Days",
    voiceLog: "Voice Log",
    tapToSpeak: "Tap to Speak",
    
    // Common
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
  },
  hi: {
    // Navigation
    home: "मुख्य पृष्ठ",
    track: "मासिक धर्म",
    diet: "पोषण योजना",
    learn: "स्वास्थ्य ज्ञान",
    profile: "मेरी प्रोफाइल",
    consult: "लक्षण जांचें",
    
    // Landing
    heroTitle: "ग्रामीण स्वास्थ्य सेवा में नई क्रांति",
    heroSubtitle: "हम 30 करोड़ ग्रामीण महिलाओं को सशक्त बनाने और आशा कार्यकर्ताओं की मदद करने के लिए दुनिया का पहला वॉयस-एआई साथी बना रहे हैं।",
    speakToAsha: "एआई का अनुभव करें",
    workerPortal: "कार्यकर्ता डैशबोर्ड",
    partnerWithUs: "हमारे साथ जुड़ें",

    // Story
    storyTitle: "एक अनकही कहानी",
    storySubtitle: "ग्रामीण भारत में स्वास्थ्य सेवा केवल दवा के बारे में नहीं है - यह पहुंच, साक्षरता और सम्मान के बारे में है।",
    radhaStory: "राधा से मिलिए। वह बिहार के एक गाँव में रहती है। वह 19 साल की है, गर्भवती है और उसे खून की कमी है।",
    painPoint1: "साक्षरता की बाधा",
    painPoint1Desc: "राधा जटिल चिकित्सा पर्चे या टेक्स्ट वाले ऐप नहीं पढ़ सकती।",
    painPoint2: "सामाजिक झिझक",
    painPoint2Desc: "वह परिवार या पुरुष डॉक्टरों के साथ स्वास्थ्य पर चर्चा करने में बहुत शर्म महसूस करती है।",
    painPoint3: "अत्यधिक बोझ",
    painPoint3Desc: "उसकी स्थानीय आशा दीदी महीने में केवल एक बार आती हैं और उन पर 1,000 अन्य ग्रामीणों की जिम्मेदारी है।",

    // Solution
    solutionTitle: "आशा एआई की शुरुआत",
    solutionSubtitle: "हम केवल तकनीक नहीं ला रहे, हम उसे मानवीय बना रहे हैं।",
    voiceFirst: "वॉयस-फर्स्ट तकनीक",
    voiceFirstDesc: "अगर राधा बोल सकती है, तो वह आशा एआई का उपयोग कर सकती है। न टाइपिंग, न पढ़ना - बस अपनी बोली में बातचीत।",
    privacyCore: "गोपनीयता सबसे पहले",
    privacyCoreDesc: "'व्हिस्पर मोड' के साथ, राधा बिना किसी डर के संवेदनशील सवाल पूछ सकती है।",
    ashaEmpowerment: "आशा दीदी की शक्ति",
    ashaEmpowermentDesc: "हम आशा कार्यकर्ताओं की जगह नहीं लेते; हम उन्हें राधा जैसे उच्च जोखिम वाले मरीजों को प्राथमिकता देने के लिए एक डिजिटल सहायक देते हैं।",

    // Invest
    investTitle: "हमारे साथ क्यों जुड़ें?",
    investSubtitle: "प्रभाव के लिए तैयार एक स्केलेबल समाधान।",
    scaleTitle: "स्केल के लिए निर्मित",
    scaleDesc: "हल्का आर्किटेक्चर जो कम इंटरनेट वाले सस्ते एंड्रॉइड फोन पर भी चलता है।",
    dataTitle: "रियल-टाइम डेटा",
    dataDesc: "एनजीओ को बीमारी के प्रकोप और मातृ स्वास्थ्य की स्थिति का गाँव-स्तर का डेटा मिलता है।",
    costTitle: "लागत प्रभावी",
    costDesc: "शुरुआती एआई-आधारित जांच और शिक्षा के माध्यम से निवारक देखभाल की लागत को 60% तक कम करना।",

    features: "विशेषताएं",
    impact: "हमारा प्रभाव",
    howItWorks: "यह कैसे काम करता है",
    testimonials: "बदलाव की कहानियां",
    faq: "सामान्य सवाल",

    // How it Works
    step1Title: "राधा बोलती है",
    step1Desc: "वह एक बटन दबाती है और भोजपुरी में अपने लक्षणों के बारे में पूछती है।",
    step2Title: "एआई जांच",
    step2Desc: "हमारा एआई मेडिकल प्रोटोकॉल के आधार पर सवाल का विश्लेषण करता है।",
    step3Title: "सही सलाह",
    step3Desc: "उसे तुरंत सलाह मिलती है, और उसकी आशा दीदी को 'हाई रिस्क' अलर्ट मिलता है।",

    // Testimonials
    story1: "आशा ने बताया कि मेरा चक्कर आना एनीमिया के कारण था। मैंने सलाह अनुसार पालक और गुड़ खाना शुरू किया।",
    story1Name: "सुनीता देवी",
    story1Loc: "बिहार",
    story2: "मैं अपनी गर्भावस्था की तारीखों को लेकर डरी हुई थी। आशा ने बिना कैलेंडर के सब कुछ ट्रैक करने में मदद की।",
    story2Name: "प्रिया सिंह",
    story2Loc: "उत्तर प्रदेश",

    // FAQ
    faq1Q: "आप विभिन्न बोलियों को कैसे संभालते हैं?",
    faq1A: "हमारा मॉडल भोजपुरी, मैथिली और अवधी सहित विविध डेटासेट पर प्रशिक्षित है।",
    faq2Q: "क्या यह डॉक्टरों की जगह ले रहा है?",
    faq2A: "नहीं। आशा एआई एक ट्राइएज और शिक्षा उपकरण है। यह गंभीर लक्षणों का पता चलने पर उपयोगकर्ताओं को डॉक्टरों के पास भेजता है।",
    faq3Q: "फंडिंग का उपयोग किस लिए किया जाता है?",
    faq3A: "फंडिंग का उपयोग हमारे डेटाबेस को बढ़ाने और 50 नए गांवों में परीक्षण के लिए किया जाएगा।",
    
    // User Home
    welcome: "नमस्ते",
    healthSummary: "आज का आपका स्वास्थ्य सारांश यहाँ है।",
    feelingQuestion: "आप कैसा महसूस कर रही हैं?",
    feelingPrompt: "आज आपको जो भी लक्षण या संदेह हैं, आशा को बताएं।",
    cycleTracking: "चक्र ट्रैकिंग",
    nextPeriodIn: "अगला मासिक धर्म",
    days: "दिनों में",
    ironIntake: "आयरन सेवन",
    anemiaPrev: "एनीमिया रोकथाम",
    dailyTip: "दैनिक स्वास्थ्य सुझाव",
    listenNow: "अभी सुनें",
    ifaReminder: "आयरन गोली की याद",
    takePill: "आज अपनी आयरन फोलिक एसिड की गोली लेना न भूलें।",
    markTaken: "लिया हुआ चिह्नित करें",
    
    // Profile
    settings: "सेटिंग्स",
    privacyMode: "व्हिस्पर गोपनीयता",
    privacyDesc: "वॉयस नोट्स स्वतः हटाएं",
    language: "भाषा",
    darkMode: "डार्क मोड",
    appearance: "दिखावट",
    logout: "लॉग आउट",
    
    // Tracker
    periodStarted: "मासिक धर्म शुरू?",
    logSymptoms: "लक्षण दर्ज करें",
    heavyFlow: "भारी बहाव",
    cramps: "पेट दर्द",
    mood: "मनोदशा",
    fertileWindow: "उपजाऊ दिन",
    safeDays: "सुरक्षित दिन",
    voiceLog: "वॉयस लॉग",
    tapToSpeak: "बोलने के लिए टैप करें",
    
    // Common
    loading: "लोड हो रहा है...",
    save: "सहेजें",
    cancel: "रद्द करें",
  },
  bh: {
    // Navigation
    home: "घर",
    track: "महीना ट्रैक",
    diet: "खाना-पान",
    learn: "जानकारी",
    profile: "हमर प्रोफाइल",
    consult: "बीमारी बताईं",
    
    // Landing
    heroTitle: "गाँव के इलाज में नया सवेरा",
    heroSubtitle: "हम 30 करोड़ गाँव के औरतन खातिर आ आशा दीदी लोगन के मदद खातिर दुनिया के पहिला वॉयस-एआई साथी बनावत बानी जा।",
    speakToAsha: "एआई के देखीं",
    workerPortal: "वर्कर पोर्टल",
    partnerWithUs: "हमनी साथे जुड़ीं",

    // Story
    storyTitle: "एगो अनकही कहानी",
    storySubtitle: "गाँव में इलाज खाली दवाई ना, इज्जत आ जानकारी के बात ह।",
    radhaStory: "राधा से मिलीं। उ बिहार के एगो गाँव में रहेली। 19 साल के बाड़ी, पेट से बाड़ी आ खून के कमी बा।",
    painPoint1: "पढ़ाई के कमी",
    painPoint1Desc: "राधा अंग्रेजी दवाई के कागज या मोबाइल ऐप ना पढ़ पावेली।",
    painPoint2: "लाज-शरम",
    painPoint2Desc: "उ घर के मरद लोग या डॉक्टर से अपना बीमारी बारे में बतियावे में लजाली।",
    painPoint3: "भीड़-भाड़",
    painPoint3Desc: "उनकर आशा दीदी महीना में एक बेर आवेली, काहे कि उनकरा ऊपर पूरा गाँव के जिम्मा बा।",

    // Solution
    solutionTitle: "आशा एआई के कमाल",
    solutionSubtitle: "हमनी खाली मोबाइल ना, भरोसा देवे वाला साथी ले ले बानी।",
    voiceFirst: "बोल के काम चली",
    voiceFirstDesc: "अगर राधा बोल सकेली, त उ आशा एआई चला सकेली। लिखे-पढ़े के झंझट नईखे - बस अपना बोली में बतियाईं।",
    privacyCore: "बात गुप्त रही",
    privacyCoreDesc: "'व्हिस्पर मोड' के साथ, राधा बिना डर के कवनो सवाल पूछ सकेली।",
    ashaEmpowerment: "आशा दीदी के ताकत",
    ashaEmpowermentDesc: "हमनी आशा दीदी के हटावत नईखी जा, हमनी उनका के एगो डिजिटल साथी दे तानी जा जेसे उ राधा जइसन मरीज पर ध्यान दे सकें।",

    // Invest
    investTitle: "हमनी साथे काहें जुड़ीं?",
    investSubtitle: "असरदार आ सस्ता उपाय।",
    scaleTitle: "सबके खातिर",
    scaleDesc: "सस्ता फोन पर भी चलेला, जहाँ नेट कम आवेला।",
    dataTitle: "तुरंत जानकारी",
    dataDesc: "एनजीओ के पता चल जाई कि कहाँ कौन बीमारी फइलल बा।",
    costTitle: "कम खर्चा",
    costDesc: "बीमारी के पहिले ही रोक के इलाज के खर्चा कम हो जाई।",

    features: "खासियत",
    impact: "असर",
    howItWorks: "ई कईसे काम करेला",
    testimonials: "बदलाव के कहानी",
    faq: "सवाल-जवाब",

    // How it Works
    step1Title: "राधा बोलेली",
    step1Desc: "उ बटन दबावेली आ भोजपुरी में अपना बीमारी बतावेली।",
    step2Title: "एआई समझेला",
    step2Desc: "हमनी के एआई डॉक्टर के नियम के हिसाब से बात समझेला।",
    step3Title: "सही सलाह",
    step3Desc: "उनका तुरंत सलाह मिलेला, आ आशा दीदी के मोबाइल पर 'खतरा' के घंटी बाजेला।",

    // Testimonials
    story1: "आशा बतवली कि हमरा चक्कर खून के कमी से आवत रहे। हम ओकरा कहला पर पालक आ गुड़ खाए लगनी।",
    story1Name: "सुनीता देवी",
    story1Loc: "बिहार",
    story2: "हमरा पेट में बच्चा के दिन गिने में डर लागत रहे। आशा बिना कैलेंडर के सब बता दिहली।",
    story2Name: "प्रिया सिंह",
    story2Loc: "उत्तर प्रदेश",

    // FAQ
    faq1Q: "का ई फ्री बा?",
    faq1A: "जी, आशा एआई गाँव के सब औरतन खातिर एकदम फ्री बा।",
    faq2Q: "का हमर आवाज रिकॉर्ड होला?",
    faq2A: "रउरा बात एकदम गुप्त रही। काम होखे के बाद मिटा दिहल जाई।",
    faq3Q: "का इंटरनेट चाहीं?",
    faq3A: "थोड़ा बहुत इंटरनेट चाहीं, बाकी काम बिना नेट के भी हो जाई।",
    
    // User Home
    welcome: "प्रणाम",
    healthSummary: "आज के राउर स्वास्थ्य हाल।",
    feelingQuestion: "का हाल बा?",
    feelingPrompt: "कवनो दिक्कत बा त आशा के बताईं।",
    cycleTracking: "महीना के हिसाब",
    nextPeriodIn: "अगिला महीना",
    days: "दिन में",
    ironIntake: "आयरन खुराक",
    anemiaPrev: "खून के कमी रोकीं",
    dailyTip: "आज के सलाह",
    listenNow: "सुनीं",
    ifaReminder: "आयरन गोली याद राखीं",
    takePill: "आज अपन आयरन के गोली खाए के ना भुलाईं।",
    markTaken: "खा लेनी",
    
    // Profile
    settings: "सेटिंग",
    privacyMode: "गुप्त बात",
    privacyDesc: "रिकॉर्डिंग अपने आप मिटा दीं",
    language: "भाषा",
    darkMode: "डार्क मोड",
    appearance: "रंग-रूप",
    logout: "बाहर निकलीं",
    
    // Tracker
    periodStarted: "महीना शुरू भइल?",
    logSymptoms: "लक्षण लिखीं",
    heavyFlow: "ज्यादा खून",
    cramps: "पेट पीरा",
    mood: "मिजाज",
    fertileWindow: "बच्चा रुके के दिन",
    safeDays: "सुरक्षित दिन",
    voiceLog: "बोल के लिखीं",
    tapToSpeak: "बोले खातिर दबाईं",
    
    // Common
    loading: "रुक जाईं...",
    save: "सेव करीं",
    cancel: "हटा दीं",
  }
};
