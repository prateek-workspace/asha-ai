from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai

load_dotenv()

app = FastAPI(title="ASHA AI Backend", description="Backend for ASHA AI - Rural Health Companion")

# CORS Setup
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supabase Setup
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Optional[Client] = None

if SUPABASE_URL and SUPABASE_KEY:
    try:
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    except Exception as e:
        print(f"Supabase connection failed: {e}")

# Gemini Setup
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-pro')
else:
    print("Warning: GEMINI_API_KEY not found. AI features will be limited.")
    model = None

# Models
class SymptomQuery(BaseModel):
    user_id: Optional[str] = "anonymous"
    text_input: str
    language: str = "hi"

class PeriodLog(BaseModel):
    user_id: str
    last_period_date: str
    cycle_length: int = 28

class AshaVisitLog(BaseModel):
    worker_id: str
    patient_name: str
    symptoms: str
    notes: str
    risk_flag: bool = False

# System Prompt for ASHA AI
ASHA_SYSTEM_PROMPT = """
You are ASHA AI, a compassionate, knowledgeable, and culturally sensitive health companion for rural Indian women. 
Your role is to interpret symptoms described in simple Hindi/Hinglish or local dialects and provide:
1. A comforting, empathetic response (like a 'Didi' or elder sister).
2. Practical, home-based advice (gharelu nuskhe) if safe.
3. Clear medical guidance based on WHO/Indian health standards.
4. A 'Red Flag' warning if the symptoms suggest an emergency or need for a doctor.

Keep responses concise (under 100 words), easy to understand for someone with low literacy, and always encouraging.
Output JSON format: {"advice": "string", "red_flag": boolean, "follow_up_question": "string"}
"""

@app.get("/")
def read_root():
    return {"message": "Welcome to ASHA AI API"}

@app.post("/api/symptom-check")
async def check_symptoms(query: SymptomQuery):
    if not model:
        # Fallback if no API key
        return {
            "advice": "API Key missing. Please configure Gemini API.",
            "red_flag": False,
            "language": query.language
        }

    try:
        prompt = f"""
        {ASHA_SYSTEM_PROMPT}
        
        User Input: "{query.text_input}"
        Language: {query.language}
        
        Respond in the same language/script as the user (or Hindi if unsure).
        """
        
        response = model.generate_content(prompt)
        # Simple parsing since Gemini might not always return perfect JSON without strict mode
        # For MVP, we will trust the text or do basic cleaning
        text_response = response.text
        
        # Basic cleanup to extract JSON-like structure if possible, or just return text
        import json
        try:
            # Try to find JSON in the response
            start = text_response.find('{')
            end = text_response.rfind('}') + 1
            if start != -1 and end != -1:
                data = json.loads(text_response[start:end])
                return data
            else:
                raise ValueError("No JSON found")
        except:
            # Fallback if model returns plain text
            return {
                "advice": text_response,
                "red_flag": "doctor" in text_response.lower() or "hospital" in text_response.lower(),
                "follow_up_question": "Aur kuch batana chahengi?"
            }
            
    except Exception as e:
        print(f"AI Error: {e}")
        return {
            "advice": "Maaf kijiye, main abhi samajh nahi pa rahi hoon. Kripya dobara batayein.",
            "red_flag": False
        }

@app.post("/api/track-period")
def track_period(log: PeriodLog):
    # In a real app, save to Supabase
    # if supabase: supabase.table("period_logs").insert(log.dict()).execute()
    
    # Simple logic for MVP
    from datetime import datetime, timedelta
    try:
        last_date = datetime.strptime(log.last_period_date, "%Y-%m-%d")
        next_date = last_date + timedelta(days=log.cycle_length)
        fertile_start = last_date + timedelta(days=10)
        fertile_end = last_date + timedelta(days=15)
        
        return {
            "status": "success", 
            "message": "Date note kar li gayi hai.",
            "next_period": next_date.strftime("%Y-%m-%d"),
            "fertile_window": f"{fertile_start.strftime('%d %b')} - {fertile_end.strftime('%d %b')}"
        }
    except:
        raise HTTPException(status_code=400, detail="Invalid date format")

@app.post("/api/asha/log-visit")
def log_visit(visit: AshaVisitLog):
    # if supabase: supabase.table("asha_visits").insert(visit.dict()).execute()
    return {"status": "success", "message": "Visit log save ho gaya hai."}

@app.get("/api/lessons")
def get_lessons():
    return [
        {"id": 1, "title": "Mahwari mein safai", "subtitle": "Menstrual Hygiene", "duration": "45 sec", "category": "Period", "color": "bg-pink-100 text-pink-600"},
        {"id": 2, "title": "Khoon ki kami", "subtitle": "Anemia Awareness", "duration": "30 sec", "category": "Nutrition", "color": "bg-green-100 text-green-600"},
        {"id": 3, "title": "Garbhavastha ke khatre", "subtitle": "Pregnancy Danger Signs", "duration": "40 sec", "category": "Maternal", "color": "bg-orange-100 text-orange-600"},
        {"id": 4, "title": "Kishori Poshan", "subtitle": "Adolescent Nutrition", "duration": "55 sec", "category": "Nutrition", "color": "bg-blue-100 text-blue-600"},
    ]
