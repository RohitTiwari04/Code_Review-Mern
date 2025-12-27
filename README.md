# 🧠 AI-Powered Code Review Platform (MERN Stack)

An AI-driven **Code Review Web Application** built using the **MERN stack**, where developers can submit code and receive intelligent feedback on errors, optimization suggestions, and relevant improvements.

The backend integrates the **Google Gemini API** to analyze code and generate meaningful reviews.

---

## 🚀 Features

- 🔍 Automated code analysis for errors and issues  
- ⚡ Optimization suggestions for better performance and readability  
- ✨ AI-powered feedback using Google Gemini  
- 🖥️ Clean and responsive React UI  
- 🌐 RESTful backend API  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- HTML5, CSS3, JavaScript  
- Axios  

### Backend
- Node.js  
- Express.js  
- Google Gemini API  

### Tools
- Git & GitHub  
- Postman  

---

## 📂 Project Structure

```text
code-review-project/
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── app.js
│   └── server.js
│
└── README.md

## ⚙️ How It Works

1. The user submits source code from the **React frontend**  
2. The code is sent to the **Node.js + Express backend**  
3. The backend forwards the code to the **Google Gemini API**  
4. Gemini analyzes the code and returns:
   - Errors  
   - Optimization suggestions  
   - Relevant corrections  
5. The analyzed feedback is displayed to the user in the UI  

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key


