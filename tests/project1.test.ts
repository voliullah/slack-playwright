import { chromium } from 'playwright';
import { WebClient } from '@slack/web-api';
import { test, expect } from '@playwright/test';
import { IncomingWebhook } from '@slack/webhook';
import * as dotenv from 'dotenv';
dotenv.config();


const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_WEBHOOK_URL not set');
}

test('Example test', async ({page}) => {


  // Navigate to the website to be tested
  await page.goto('https://exampe.com');

  // Send test results to Slack channel
  
  const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);
  await webhook.send({
    text: 'Test passed successfully!',
  });
});


// Throw an error if the Slack Webhook URL is not set
if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_WEBHOOK_URL not set');
}

test('Example test 1', async ({ page }) => {
  // Navigate to the website to be tested
  await page.goto('https://example.com');

  // Check if the website logo is visible on the page
  const websiteLogo = await page.$('img[alt="Example"]');
  if (!websiteLogo) {
    // Send a message to the Slack channel
    const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);
    await webhook.send({
      text: 'Uh oh, something went wrong! The website logo is not visible on the page.',
    });
  }
});
test('Example test 2', async ({ page }) => {
    // Navigate to the website to be tested
    await page.goto('https://example.com');
  
    // Check if the website title is correct
    const title = await page.title();
    expect(title).toBe('Example Domain');
  
    // Send test results to Slack channel if the test fails
    if (page.url() !== 'https://exampe.com/') {
      const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);
      await webhook.send({
        text: `Uh oh, something went wrong! The test failed on ${page.url()}!`,
      });
    }
  });

  
  dotenv.config();
  
  const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
  const CHANNEL_ID = process.env.NTU_CHANNEL;
  
  if (!SLACK_BOT_TOKEN) {
    throw new Error('SLACK_BOT_TOKEN not set');
  }
  
  if (!CHANNEL_ID) {
    throw new Error('CHANNEL_ID not set');
  }
  
  test('Example test 3 ', async ({ page }) => {
    // Navigate to the website to be tested
    await page.goto('https://example.com');
  
    // Check if the page title is correct
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Example Domain');
  
    // If the test fails, send a message to the Slack channel
    if (URL !=null) {
      const web = new WebClient(SLACK_BOT_TOKEN);
      await web.chat.postMessage({
        channel: CHANNEL_ID,
        text: 'Uh oh, the test failed!',
      });
    }
  });
  