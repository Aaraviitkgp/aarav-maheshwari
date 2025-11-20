# 🚀 Quick Setup Checklist for Email Service

## Before You Start
- [ ] You have received the API key from the email service administrator
- [ ] You have confirmed the API URL: `https://theemailservice.vercel.app`

## Setup Steps

### 1️⃣ Configure Environment Variables
- [ ] Open `.env` file in the root directory
- [ ] Replace `VITE_API_KEY=your_super_secret_api_key_here` with your actual API key
- [ ] Verify `VITE_EMAIL=maheshwariaarav12@gmail.com` is correct
- [ ] Save the file

### 2️⃣ Test Locally
```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173/contact
```

- [ ] Website loads without errors
- [ ] Navigate to Contact page
- [ ] Fill out the form with test data
- [ ] Submit the form
- [ ] See success message
- [ ] Check email inbox (and spam folder)

### 3️⃣ Verify Email Received
- [ ] Email arrived at maheshwariaarav12@gmail.com
- [ ] Email has proper formatting (HTML template)
- [ ] Reply-to address is the sender's email
- [ ] Subject line includes sender's name

### 4️⃣ Test Error Scenarios
- [ ] Submit form without API key configured → Should see "Email service not configured"
- [ ] Submit 6 forms quickly → 6th should fail with rate limit error
- [ ] Submit form with invalid email format → Should see validation error

### 5️⃣ Deploy to Production
- [ ] Add environment variables to hosting platform (Vercel/Netlify):
  - `VITE_API_KEY` = (your actual API key)
  - `VITE_API_URL` = https://theemailservice.vercel.app
  - `VITE_EMAIL` = maheshwariaarav12@gmail.com
  - `VITE_SUBJECT` = New Contact Form Submission - Aarav Maheshwari Portfolio

- [ ] Build the project: `npm run build`
- [ ] Deploy to hosting
- [ ] Test contact form on production URL

### 6️⃣ Final Production Test
- [ ] Submit test message from production site
- [ ] Verify email received
- [ ] Test from different devices/browsers
- [ ] Share contact page URL with a friend for testing

## 🔒 Security Checklist
- [ ] `.env` file is in `.gitignore`
- [ ] API key is NOT committed to git
- [ ] API key is stored securely in hosting platform
- [ ] No sensitive data in client-side code

## ⚠️ Common Issues Quick Fix

| Issue | Quick Fix |
|-------|-----------|
| "Email service not configured" | Check `.env` file, replace placeholder API key |
| "Failed to send message" | Verify API_URL and API_KEY are correct |
| "Too many requests" | Wait 15 minutes, rate limit will reset |
| Email not received | Check spam folder, verify VITE_EMAIL |
| CORS error | Contact API administrator to whitelist your domain |

## 📞 Need Help?

If stuck, check:
1. Browser console (F12) for error messages
2. Network tab to see API request/response
3. `EMAIL_SERVICE_SETUP.md` for detailed documentation
4. Contact email service administrator with error details

---

## ✅ Setup Complete!

Once all checkboxes are checked, your email service is fully integrated and working.

**Test Email Command (Terminal):**
```bash
curl -X POST https://theemailservice.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY_HERE" \
  -d '{
    "to": "maheshwariaarav12@gmail.com",
    "subject": "Test from Terminal",
    "content": "<h1>Test</h1><p>If you receive this, setup is working!</p>",
    "isHtml": true
  }'
```

**Expected Response:**
```json
{"success":true,"message":"Email sent successfully","messageId":"..."}
```
