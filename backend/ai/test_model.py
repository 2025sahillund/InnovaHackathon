from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

models = [
    "gemini-3.5-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
]

for m in models:
    try:
        response = client.models.generate_content(
            model=m,
            contents="Say Hello",
        )
        print(f"✅ {m}")
        print(response.text)
        break
    except Exception as e:
        print(f"❌ {m}")    
        print(e)