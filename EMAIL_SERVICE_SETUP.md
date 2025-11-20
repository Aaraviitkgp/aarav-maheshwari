# Email Service Integration Guide

## Overview

The contact form on this portfolio website is integrated with a secure Node.js email API service. This document explains the setup, configuration, and troubleshooting.

## 🔧 Configuration Steps

### Step 1: Get Your API Key

Contact your email service administrator to obtain:
- `VITE_API_KEY` - Your unique API authentication key
- `VITE_API_URL` - The deployed email service URL (e.g., https://theemailservice.vercel.app)

### Step 2: Update Environment Variables

1. Open the `.env` file in the root directory
2. Replace the placeholder values:

```env
# Replace this with your actual API key from the service administrator
VITE_API_KEY=your_actual_api_key_goes_here

# Email API URL (already configured)
VITE_API_URL=https://theemailservice.vercel.app

# Your email where messages will be sent
VITE_EMAIL=maheshwariaarav12@gmail.com

# Subject line for notifications
VITE_SUBJECT=New Contact Form Submission - Aarav Maheshwari Portfolio
```

### Step 3: Test the Configuration

```bash
# Start the development server
npm run dev

# Visit http://localhost:5173/contact
# Fill out the contact form and test sending a message
```

## 🔒 Security Features

### 1. API Key Authentication
- All requests require a valid API key in the `X-API-Key` header
- The key is securely stored in environment variables
- Never commit your actual API key to version control

### 2. Rate Limiting
- Maximum 5 emails per 15 minutes per IP address
- Prevents spam and abuse
- Users will see a "Too many requests" error if exceeded

### 3. Input Validation
- Email format validation
- Required field checking
- Content sanitization to prevent XSS

## 📧 How It Works

### Client-Side Flow

1. **User submits form** → Form data is collected
2. **Validation** → Client validates required fields and email format
3. **API Request** → Sends POST request to `/api/send-email` endpoint
4. **Response** → Displays success/error message to user

### Server-Side Flow (Email API)

1. **Authentication** → Validates API key
2. **Rate Limit Check** → Ensures IP hasn't exceeded limit
3. **Email Processing** → Generates HTML email from template
4. **SMTP Send** → Sends email via Gmail SMTP
5. **Response** → Returns success/failure status

### Email Template

The service automatically generates a beautifully formatted HTML email with:
- Professional gradient header
- Clean field layout with labels
- Formatted message content
- Reply-to functionality
- Timestamp and source tracking

## 🐛 Troubleshooting

### "Email service not configured"

**Problem:** API key not set or still using placeholder value

**Solution:**
```bash
# Check your .env file
cat .env | grep VITE_API_KEY

# Should NOT be "your_super_secret_api_key_here"
# Contact service administrator for the real key
```

### "Failed to send message"

**Problem:** API endpoint unreachable or authentication failed

**Solutions:**
1. Check your internet connection
2. Verify API_URL is correct: `https://theemailservice.vercel.app`
3. Confirm API key is valid (contact administrator)
4. Check browser console for detailed error messages

### "Too many requests"

**Problem:** Rate limit exceeded (5 emails per 15 minutes)

**Solution:**
- Wait 15 minutes before trying again
- This is a security feature to prevent spam

### Messages not arriving

**Problem:** Emails sent successfully but not received

**Solutions:**
1. Check your spam/junk folder
2. Verify `VITE_EMAIL` in `.env` is correct
3. Contact email service administrator to check server logs

## 🧪 Testing Checklist

- [ ] API key configured in `.env`
- [ ] All environment variables set correctly
- [ ] Form submits without errors
- [ ] Success message appears after submission
- [ ] Email arrives in inbox (check spam folder)
- [ ] Reply-to address is correct (sender's email)
- [ ] Rate limiting works (try 6 submissions quickly)

## 📊 API Endpoint Details

### Endpoint Used
```
POST https://theemailservice.vercel.app/api/send-email
```

### Request Headers
```javascript
{
  'Content-Type': 'application/json',
  'X-API-Key': 'your_api_key_here'
}
```

### Request Body
```javascript
{
  to: "maheshwariaarav12@gmail.com",
  subject: "Subject - From John Doe",
  content: "<html>...</html>",  // HTML email template
  replyTo: "sender@example.com",
  fromName: "John Doe",
  isHtml: true
}
```

### Success Response
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "<unique-message-id>",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error description"
}
```

## 🚀 Deployment Notes

### Environment Variables for Production

When deploying to Vercel/Netlify/etc., add these environment variables:

```
VITE_API_KEY=your_actual_api_key
VITE_API_URL=https://theemailservice.vercel.app
VITE_EMAIL=maheshwariaarav12@gmail.com
VITE_SUBJECT=New Contact Form Submission - Aarav Maheshwari Portfolio
```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🔐 Security Best Practices

### DO ✅
- Keep API key in `.env` file
- Add `.env` to `.gitignore`
- Use environment variables in CI/CD
- Monitor for unusual activity
- Rotate API keys periodically

### DON'T ❌
- Commit `.env` to git
- Share API keys publicly
- Hardcode credentials in code
- Disable CORS in production
- Ignore rate limit warnings

## 📞 Support & Contacts

### For API Key Issues
Contact the email service administrator with:
- Your domain/site URL
- Expected email recipient address
- Any error messages from browser console

### For Integration Issues
1. Check browser DevTools console for errors
2. Verify network tab shows API request
3. Test with provided curl command
4. Review this documentation

### Testing with cURL

```bash
# Test email sending (replace YOUR_API_KEY)
curl -X POST https://theemailservice.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY" \
  -d '{
    "to": "maheshwariaarav12@gmail.com",
    "subject": "Test Email",
    "content": "<h1>Test</h1><p>This is a test email</p>",
    "isHtml": true
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "..."
}
```

## 📝 Change Log

### Version 1.0.0 (Current)
- Initial integration with generic send-email endpoint
- Beautiful HTML email templates
- Comprehensive error handling
- Rate limiting support
- Reply-to functionality
- Custom subject lines with sender name

---

**Last Updated:** November 2025  
**Contact:** maheshwariaarav12@gmail.com
