import { chromium } from 'playwright';
import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

dotenv.config();

// Get the Slack app's access token and channel ID from the environment variables
const slackToken = process.env.SLACK_API_TOKEN!;
const channelId = process.env.SLACK_CHANNEL_ID!;

// Create a new instance of the Slack Web API client
const web = new WebClient(slackToken);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to Google's home page
    await page.goto('https://www.google.com');

    // Check if the Google logo is visible on the page
    const googleLogo = await page.$('img[alt="Google"]');
    if (!googleLogo) {
      console.error('Google is down!');
      // Send a message to the Slack channel
      await web.chat.postMessage({
        channel : channelId,
        text: 'Uh oh, something went wrong! Google is down!',
      });
    } else {
      console.log('Google is up and running!');
    }
  } catch (error) {
    console.error('Error checking Google status:', error);
    // Send a message to the Slack channel
    await web.chat.postMessage({
      channel: channelId,
      text: 'Uh oh, something went wrong! There was an error checking Google status!',
    });
  } finally {
    // Close the browser
    await browser.close();
  }
})();
