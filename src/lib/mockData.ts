// Mock Data for ASHA AI - Enhanced for Rural Context

export const USERS = {
  beneficiary: {
    id: 'u1',
    name: 'Radha Devi',
    age: 24,
    location: 'Madhubani, Bihar',
    language: 'hi', // hi, bh (Bhojpuri), en
    lastPeriod: '2023-10-15',
    avgCycle: 28,
    isPregnant: false,
    anemiaStatus: 'Mild', // Normal, Mild, Moderate, Severe
    healthTags: ['Anemia Risk', 'Post-partum'],
  },
  ashaWorker: {
    id: 'w1',
    name: 'Sunita Didi',
    role: 'ASHA Worker',
    assignedVillage: 'Rampur',
    patientsCount: 45,
  }
};

export const SYMPTOM_SCENARIOS = [
  {
    trigger: 'stomach_pain',
    userAudioText: "Pet mein bahut tez dard ho raha hai subah se. (Severe stomach pain since morning)",
    aiResponse: {
      en: "I understand. Is the pain in the lower abdomen? If you also have fever or vomiting, please visit the health center immediately.",
      hi: "Main samajh sakti hoon. Kya yeh dard pet ke nichle hisse mein hai? Agar bukhar ya ulti bhi hai, toh turant swasthya kendra jayein.",
      bh: "Hum samajh rahal bani. Pet ke niche dard ba ka? Agar bukhar aa ulti bhi howe, ta turant aspataal jaayi.",
    },
    riskLevel: 'medium',
    action: 'Check for appendicitis or menstrual cramps.'
  },
  {
    trigger: 'white_discharge',
    userAudioText: "Safed paani aa raha hai, aur khujli bhi hai. (White discharge and itching)",
    aiResponse: {
      en: "White discharge with itching can be an infection. Wash with clean water and avoid soap inside. If it smells bad, see a doctor.",
      hi: "Safed paani aur khujli infection ho sakta hai. Saaf paani se dhoye, sabun na lagayein. Agar badboo aaye toh doctor ko dikhayein.",
      bh: "Safed paani aa khujli infection ho sake la. Saaf paani se dhoyi. Agar mahak aawata, ta doctor ke dikhayi.",
    },
    riskLevel: 'low',
    action: 'Hygiene advice + Clinic referral.'
  },
  {
    trigger: 'missed_period',
    userAudioText: "Mera mahina nahi aaya, 10 din upar ho gaye. (Period missed by 10 days)",
    aiResponse: {
      en: "If your period is late by 10 days, there is a chance of pregnancy. Have you taken a test? I can guide you.",
      hi: "Agar mahina 10 din upar hai, toh garbh hone ki sambhavna hai. Kya aapne jaanch ki hai? Main madad kar sakti hoon.",
      bh: "Agar mahina 10 din se upar ba, ta bachha ruke ke sambhavna ba. Ka rauva jaanch kaini ha?",
    },
    riskLevel: 'high',
    action: 'Pregnancy Test Advice'
  },
  {
    trigger: 'dizziness',
    userAudioText: "Bahut kamzori lag rahi hai, chakkar aa raha hai. (Feeling very weak and dizzy)",
    aiResponse: {
      en: "Dizziness and weakness can be due to lack of blood (Anemia). Are you taking your Iron tablets? Eat more spinach and jaggery.",
      hi: "Kamzori aur chakkar khoon ki kami (Anemia) se ho sakta hai. Kya aap Iron ki goli le rahi hain? Palak aur gud khayein.",
      bh: "Kamzori aa chakkar khoon ke kami se ho sake la. Iron ke goli khataani? Palak aa gud khayi.",
    },
    riskLevel: 'medium',
    action: 'Nutrition Advice (Anemia)'
  }
];

export const VILLAGE_STATS = [
  { name: 'Pregnant', value: 12, fill: '#ec4899' }, // Pink
  { name: 'Lactating', value: 18, fill: '#8b5cf6' }, // Purple
  { name: 'Adolescent', value: 45, fill: '#10b981' }, // Green
  { name: 'Anemic', value: 22, fill: '#ef4444' }, // Red
];

export const PATIENTS_LIST = [
  { id: 1, name: "Kavita Kumari", age: 19, status: "Pregnant (7mo)", risk: "High (Anemia)", lastVisit: "2 days ago", village: "Rampur East" },
  { id: 2, name: "Meena Devi", age: 28, status: "Lactating", risk: "Normal", lastVisit: "1 week ago", village: "Rampur West" },
  { id: 3, name: "Priya Singh", age: 15, status: "Adolescent", risk: "Irregular Periods", lastVisit: "3 weeks ago", village: "Rampur East" },
  { id: 4, name: "Rani", age: 22, status: "Pregnant (3mo)", risk: "Normal", lastVisit: "Yesterday", village: "Lohiya Tola" },
  { id: 5, name: "Suman", age: 17, status: "Adolescent", risk: "Severe Anemia", lastVisit: "5 days ago", village: "Rampur West" },
  { id: 6, name: "Geeta Devi", age: 35, status: "Other", risk: "PCOS Symptoms", lastVisit: "1 month ago", village: "Lohiya Tola" },
];

export const NUTRITION_PLAN = [
  { 
    day: 'Monday', 
    localName: 'Somvaar',
    meals: [
      { type: 'Breakfast', item: 'Chana (Sprouted Gram) + Gud (Jaggery)', benefit: 'High Iron & Energy' },
      { type: 'Lunch', item: 'Roti + Palak Dal (Spinach Lentil)', benefit: 'Iron + Protein' }
    ],
    ifaTablet: true 
  },
  { 
    day: 'Tuesday', 
    localName: 'Mangalvaar',
    meals: [
      { type: 'Breakfast', item: 'Daliya (Porridge) with Milk', benefit: 'Calcium' },
      { type: 'Lunch', item: 'Rice + Soyabean Sabzi', benefit: 'Protein for muscle' }
    ],
    ifaTablet: false 
  },
  { 
    day: 'Wednesday', 
    localName: 'Budhvaar',
    meals: [
      { type: 'Breakfast', item: 'Poha with Peanuts & Lemon', benefit: 'Vitamin C helps Iron absorption' },
      { type: 'Lunch', item: 'Roti + Sahjan (Drumstick) Leaves', benefit: 'Superfood for Iron' }
    ],
    ifaTablet: true 
  },
  { 
    day: 'Thursday', 
    localName: 'Guruvaar',
    meals: [
      { type: 'Breakfast', item: 'Sattu Drink (Roasted Gram Flour)', benefit: 'Cooling & Protein rich' },
      { type: 'Lunch', item: 'Khichdi with Vegetables', benefit: 'Easy digestion' }
    ],
    ifaTablet: false 
  },
  { 
    day: 'Friday', 
    localName: 'Shukravaar',
    meals: [
      { type: 'Breakfast', item: 'Egg or Banana', benefit: 'Energy boost' },
      { type: 'Lunch', item: 'Roti + Methi (Fenugreek) Sabzi', benefit: 'Iron rich' }
    ],
    ifaTablet: true 
  },
  { 
    day: 'Saturday', 
    localName: 'Shanivaar',
    meals: [
      { type: 'Breakfast', item: 'Chana Chaat with Tomato', benefit: 'Tasty & Healthy' },
      { type: 'Lunch', item: 'Rice + Rajma (Kidney Beans)', benefit: 'Protein' }
    ],
    ifaTablet: false 
  },
  { 
    day: 'Sunday', 
    localName: 'Ravivaar',
    meals: [
      { type: 'Breakfast', item: 'Halwa (Wheat flour + Jaggery)', benefit: 'Iron comfort food' },
      { type: 'Lunch', item: 'Special Meal (Chicken/Paneer)', benefit: 'Complete nutrition' }
    ],
    ifaTablet: false 
  },
];

export const AUDIO_LESSONS = [
  { id: 1, title: "Periods kya hote hain?", duration: "1:30", category: "Menstrual Health", lang: "Hindi" },
  { id: 2, title: "Garbhavastha mein khatre ke nishaan", duration: "2:15", category: "Maternal Health", lang: "Bhojpuri" },
  { id: 3, title: "Iron ki goli kyu zaroori hai?", duration: "0:55", category: "Nutrition", lang: "Hindi" },
  { id: 4, title: "Safed paani ka ilaj", duration: "1:45", category: "Hygiene", lang: "Hindi" },
  { id: 5, title: "Kishoriawastha ki dekhbhaal", duration: "3:00", category: "Adolescent", lang: "Awadhi" },
];
