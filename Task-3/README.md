# 🔐 Task 3: Secure Coding Review

This project demonstrates a secure and insecure implementation of a login system using Node.js and Express, created as part of a secure coding review exercise.

---

## 📦 Tech Stack

- Node.js
- Express.js
- Bcrypt (for password hashing)
- Helmet (for HTTP security headers)
- Express Validator (for input validation)
- Postman / curl for testing

---

## 📁 Project Structure

```
CodeAlpha_SecureCodingReview/
├── vulnerable_code.js      # Insecure version of the login API
├── secure_code.js          # Secure version with proper validations
├── package.json            # Dependency definitions
├── package-lock.json       # Lock file
└── README.md               # You're reading it!
```

---

## ⚠️ Vulnerabilities Identified in `vulnerable_code.js`

- ❌ Passwords stored and compared as plain text.
- ❌ No input validation (prone to injection/DoS).
- ❌ No security headers.
- ❌ Lacks structured error responses.
- ❌ No rate limiting.

---

## ✅ Remediation in `secure_code.js`

- ✅ Passwords hashed using bcrypt.
- ✅ Inputs validated and sanitized using `express-validator`.
- ✅ Security headers added using Helmet.
- ✅ Proper error handling with validation feedback.
- ✅ JSON API structure ready for production integration.

---

## 🚀 How to Run the Project

### 1. Clone or download the folder

### 2. Install dependencies

```bash
npm install
```

### 3. Run the secure version

```bash
node secure_code.js
```

### 4. Test Login Route

#### ✅ Using Postman or curl:
- **Endpoint:** `POST http://localhost:3000/login`
- **Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

- **Header:**
```
Content-Type: application/json
```

#### ✅ Using curl:
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin", "password":"admin123"}'
```

---

## 🔐 Security Best Practices Followed

- Passwords hashed with bcrypt
- Input validation (injections blocked)
- Header protection with Helmet
- JSON parsing enabled securely
- Descriptive error feedback without leaking sensitive data

---

## 📚 Further Recommendations

- Use environment variables (`dotenv`) to store secrets.
- Implement JWT-based authentication for session management.
- Add rate-limiting middleware (`express-rate-limit`) to prevent brute-force attacks.
- Integrate real database (e.g., MongoDB or PostgreSQL) for storing users.
- Add logging with `winston` or `pino`.

---

## 📄 License

This project is for educational/review purposes only.
