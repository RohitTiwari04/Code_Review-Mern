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

⚙️ How It Works

User submits source code from the React frontend

Code is sent to the Node.js + Express backend

Backend forwards the code to the Google Gemini API

Gemini analyzes the code and returns:

Errors

Optimization suggestions

Relevant corrections

The feedback is displayed to the user in the UI

🔑 Environment Variables

Create a .env file inside the backend directory:

PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key

▶️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/code-review-mern.git
cd code-review-mern

2️⃣ Backend Setup
cd backend
npm install
npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🎯 Future Enhancements

Support for multiple programming languages

User authentication and review history

Syntax highlighting for code editor

Downloadable review reports

Cloud deployment

🤝 Contributing

Contributions are welcome!
Fork the repository and submit a pull request.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Rohit Tiwari
Full Stack Developer | MERN | AI Enthusiast


---


