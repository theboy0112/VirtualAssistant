// High quality Base64-encoded SVG covers for Services and Portfolio Work Samples

const encodeSvg = (svgString) => {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
};

const createSvgCover = (title, subtitle, bg1, bg2, iconPath) => {
  const safeId = title.replace(/[^a-zA-Z0-9]/g, '');
  const safeTitle = title.replace(/&/g, '&amp;');
  const safeSubtitle = subtitle.replace(/&/g, '&amp;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="400" height="240">
    <defs>
      <linearGradient id="grad_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}" />
        <stop offset="100%" stop-color="${bg2}" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" rx="16" fill="url(#grad_${safeId})"/>
    <circle cx="340" cy="50" r="80" fill="#ffffff" fill-opacity="0.08"/>
    <circle cx="60" cy="190" r="100" fill="#ffffff" fill-opacity="0.08"/>
    <g transform="translate(175, 45) scale(1.2)" fill="#ffffff">
      ${iconPath}
    </g>
    <text x="200" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">${safeTitle}</text>
    <text x="200" y="185" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="400" fill="#ffffff" fill-opacity="0.85" text-anchor="middle">${safeSubtitle}</text>
  </svg>`;

  return encodeSvg(svg);
};

export const serviceImages = {
  execAssistance: createSvgCover(
    "Executive Assistance",
    "Calendar & Priority Operations",
    "#1e3a8a", "#3b82f6",
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>'
  ),
  adminSupport: createSvgCover(
    "Administrative Support",
    "Office Workflows & Task Tracking",
    "#0f766e", "#14b8a6",
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>'
  ),
  emailMgmt: createSvgCover(
    "Email Management",
    "Inbox Zero & Professional Triage",
    "#b91c1c", "#ef4444",
    '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'
  ),
  calendarMgmt: createSvgCover(
    "Calendar Management",
    "Time Blocking & Scheduling",
    "#1d4ed8", "#60a5fa",
    '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>'
  ),
  appointmentSched: createSvgCover(
    "Appointment Scheduling",
    "Client Booking & Reminders",
    "#6d28d9", "#8b5cf6",
    '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>'
  ),
  dataEntry: createSvgCover(
    "Data Entry & Cleaning",
    "Accurate Record Keeping",
    "#047857", "#10b981",
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>'
  ),
  internetResearch: createSvgCover(
    "Internet Research",
    "Market Analysis & Synthesis",
    "#c2410c", "#f97316",
    '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>'
  ),
  fileOrg: createSvgCover(
    "File Organization",
    "Cloud Architecture & Taxonomy",
    "#a16207", "#eab308",
    '<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>'
  ),
  travelCoord: createSvgCover(
    "Travel Coordination",
    "Flight & Hotel Bookings",
    "#4338ca", "#6366f1",
    '<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 20v-6.5l8 2.5z"/>'
  ),
  customerSupport: createSvgCover(
    "Customer Support",
    "Client Communication & Helpdesk",
    "#be185d", "#ec4899",
    '<path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>'
  ),
  crmMgmt: createSvgCover(
    "CRM Management",
    "Lead Tracking & Pipelines",
    "#0284c7", "#38bdf8",
    '<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>'
  ),
  googleWorkspace: createSvgCover(
    "Google Workspace",
    "Docs, Sheets, Drive & Gmail",
    "#15803d", "#22c55e",
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>'
  ),
  msOffice: createSvgCover(
    "Microsoft Office",
    "Word, Excel, PowerPoint",
    "#1e40af", "#3b82f6",
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>'
  ),
  docPrep: createSvgCover(
    "Document Preparation",
    "Formatting & SOP Design",
    "#854d0e", "#ca8a04",
    '<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>'
  )
};

export const portfolioImages = {
  emailWorkflow: createSvgCover(
    "Email Management Workflow",
    "Inbox Triage & Response Templates",
    "#991b1b", "#dc2626",
    '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'
  ),
  calendarMgmtSample: createSvgCover(
    "Executive Calendar",
    "Color-Coded Time Blocking",
    "#1e40af", "#2563eb",
    '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>'
  ),
  adminDashboard: createSvgCover(
    "Administrative Dashboard",
    "Expense & Task Tracker",
    "#065f46", "#059669",
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>'
  ),
  meetingNotes: createSvgCover(
    "Meeting Notes Template",
    "Agenda & Action Items Log",
    "#3730a3", "#4f46e5",
    '<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>'
  ),
  travelPlanning: createSvgCover(
    "Travel Itinerary Packet",
    "Flight & Hotel Booking Log",
    "#312e81", "#4338ca",
    '<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 20v-6.5l8 2.5z"/>'
  ),
  fileOrgSample: createSvgCover(
    "Cloud File Architecture",
    "Standard Naming Conventions",
    "#854d0e", "#d97706",
    '<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>'
  ),
  productivityWorkspace: createSvgCover(
    "Notion Productivity Hub",
    "Executive Central Command",
    "#111827", "#374151",
    '<path d="M4 4v16h16V4H4zm14 14H6V6h12v12zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>'
  )
};
