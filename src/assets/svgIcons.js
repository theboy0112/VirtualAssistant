// High-quality SVG Data URIs for Virtual Assistant Skills & Tools

const makeSvgIcon = (fill, pathD) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fill}"><path d="${pathD}"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const skillIcons = {
  // Administrative Skills
  organization: makeSvgIcon("#2563eb", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"),
  communication: makeSvgIcon("#2563eb", "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"),
  timeManagement: makeSvgIcon("#2563eb", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"),
  multitasking: makeSvgIcon("#2563eb", "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm-6 0h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"),
  customerService: makeSvgIcon("#2563eb", "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"),
  attentionToDetail: makeSvgIcon("#2563eb", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"),

  // Software & Productivity Skills
  msWord: makeSvgIcon("#ffffff", "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"),
  msExcel: makeSvgIcon("#ffffff", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"),
  powerPoint: makeSvgIcon("#ffffff", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 13h-2v-4h-2v4H7V8h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zm0-4h-2v-2h2v2z"),
  googleDocs: makeSvgIcon("#ffffff", "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"),
  googleSheets: makeSvgIcon("#ffffff", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"),
  googleCalendar: makeSvgIcon("#ffffff", "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"),
  gmail: makeSvgIcon("#ffffff", "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"),
  googleDrive: makeSvgIcon("#ffffff", "M7.71 3.5L1.15 15l3.43 6 6.55-11.5L7.71 3.5zm4.86 6.5l-3.43 6h13.71l3.43-6H12.57zm.58-6.5L6.59 15h6.86l6.56-11.5H13.15z"),
  canva: makeSvgIcon("#ffffff", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.49 0-4.5-2.01-4.5-4.5S8.51 7.5 11 7.5c1.43 0 2.7.67 3.53 1.71l-1.42 1.42C12.57 10.15 11.84 9.8 11 9.8c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.84 0 1.57-.35 2.11-.83l1.42 1.42c-.83 1.04-2.1 1.71-3.53 1.71z"),
  chatgpt: makeSvgIcon("#ffffff", "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"),
  slack: makeSvgIcon("#ffffff", "M6 15a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 6 10h2.5v2.5A2.5 2.5 0 0 1 6 15zm0-7.5A2.5 2.5 0 0 1 3.5 5 2.5 2.5 0 0 1 6 2.5h2.5V5A2.5 2.5 0 0 1 6 7.5zM14 6a2.5 2.5 0 0 1 2.5-2.5A2.5 2.5 0 0 1 19 6v2.5h-2.5A2.5 2.5 0 0 1 14 6zm0 7.5a2.5 2.5 0 0 1 2.5-2.5A2.5 2.5 0 0 1 19 13.5 2.5 2.5 0 0 1 16.5 16H14v-2.5z"),
  zoom: makeSvgIcon("#ffffff", "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"),
  trello: makeSvgIcon("#ffffff", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 12H7V7h5v8zm6-4h-4V7h4v4z"),
  notion: makeSvgIcon("#ffffff", "M4 4v16h16V4H4zm14 14H6V6h12v12zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"),
  asana: makeSvgIcon("#ffffff", "M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-6 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm12 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8z")
};
