// Google Apps Script for Visitor Analytics Webhook
// This script receives visitor data and emails it to you

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Format the visitor data for email
    const emailBody = `
New Website Visitor

Page Visited: ${data.url}
Referrer: ${data.referrer || 'Direct visit'}
User Agent: ${data.userAgent}
Language: ${data.language}
Timezone: ${data.timezone}
Screen Resolution: ${data.screen.w}x${data.screen.h}
Device Pixel Ratio: ${data.screen.dpr}
IP Address: ${data.ip || 'Not available'}
Visit Time: ${data.ts}

Browser Languages: ${data.languages ? data.languages.join(', ') : 'Not available'}
    `.trim();
    
    // Send email
    GmailApp.sendEmail(
      'techunder5mins@gmail.com', // Your email
      'New Website Visitor - TechUnder5',
      emailBody
    );
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Visitor Analytics Webhook is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
