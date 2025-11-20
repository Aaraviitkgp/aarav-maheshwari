// Reusable mail templates for Aarav Maheshwari
// Each function returns an object with `subject` and `body`.

export function applicationTemplate({
  role,
  company,
  contactName,
  resumeLink,
  senderName = "Aarav Maheshwari",
}: {
  role: string;
  company: string;
  contactName?: string;
  resumeLink?: string;
  senderName?: string;
}) {
  const subject = `Application for ${role} at ${company} — ${senderName}`;
  const body = `Dear ${contactName ?? "Hiring Team"},

I hope you're doing well. I am ${senderName}, an undergraduate student in Geology & Geophysics at IIT Kharagpur (Roll: 24GG10004). I am writing to express my interest in the ${role} role at ${company}.

My background includes applied geoscience, geospatial analysis, and practical experience building data-driven tools (SeismoNet, TerrainVision). I am proficient in Python, JavaScript/TypeScript, and geospatial tools such as QGIS, and I enjoy applying machine learning to Earth-science problems.

I have attached my CV for your review${resumeLink ? ` (also available here: ${resumeLink})` : "."}

I would appreciate the opportunity to discuss how my skills and interests align with your team's needs. Thank you for considering my application.

Best regards,
${senderName}
Email: maheshwariaarav12@gmail.com
Phone: +91 6377386854
`;

  return { subject, body };
}

export function followUpTemplate({
  role,
  company,
  contactName,
  senderName = "Aarav Maheshwari",
  reference,
}: {
  role: string;
  company: string;
  contactName?: string;
  senderName?: string;
  reference?: string;
}) {
  const subject = `Follow-up: ${role} application — ${senderName}`;
  const body = `Hello ${contactName ?? "Hiring Team"},

I wanted to follow up on my application for the ${role} position at ${company}${reference ? ` (ref: ${reference})` : ""}. I remain very interested in the opportunity and would welcome any update you can share about the hiring timeline.

Please let me know if you need any additional information or clarification from my side.

Thank you for your time.

Sincerely,
${senderName}
Email: maheshwariaarav12@gmail.com
Phone: +91 6377386854
`;

  return { subject, body };
}

export function networkingTemplate({
  contactName,
  intro,
  senderName = "Aarav Maheshwari",
  callToAction = "Would you be open to a short 20-minute call to learn about your experience and advice?",
}: {
  contactName?: string;
  intro?: string;
  senderName?: string;
  callToAction?: string;
}) {
  const subject = `Quick question from ${senderName}`;
  const body = `Hi ${contactName ?? "there"},

I hope you're well. ${intro ?? "My name is Aarav Maheshwari and I'm an undergraduate student at IIT Kharagpur studying Geology & Geophysics."}

I'm reaching out because I admire your work and would value any brief guidance you could share about career paths in geoscience and data-driven research. ${callToAction}

Thanks for considering — I appreciate your time.

Best,
${senderName}
Email: maheshwariaarav12@gmail.com
`;

  return { subject, body };
}

export default { applicationTemplate, followUpTemplate, networkingTemplate };
