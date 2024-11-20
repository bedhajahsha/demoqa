import { expect, Locator, Page } from '@playwright/test';
import exp from 'constants';

export class TextBoxPage {
  readonly page: Page;
  readonly textBoxHeader: Locator;
  readonly fullNameLabel: Locator;
  readonly emailLabel: Locator;
  readonly currentAddressLabel: Locator;
  readonly permanentAddressLabel: Locator;
  readonly submitButton: Locator;
  readonly fullNameField: Locator;
  readonly emailField: Locator;
  readonly currentAddressField: Locator;
  readonly permanentAddressField: Locator;
  readonly fullNameOutput: Locator;
  readonly emailOutput: Locator;
  readonly currentAddressOutput: Locator;
  readonly permanentAddressOutput: Locator;
  // readonly passwordInput: string;
  // readonly loginButton: string;

  constructor(page: Page) {
    this.page = page;
    this.textBoxHeader = page.locator('//h1[text()="Text Box"]');
    this.fullNameLabel = page.locator('//label[text()="Full Name"]');
    this.emailLabel = page.locator('//label[text()="Email"]')
    this.currentAddressLabel = page.locator('//label[text()="Current Address"]')
    this.permanentAddressLabel = page.locator('//label[text()="Permanent Address"]')
    this.submitButton = page.locator('//button[text()="Submit"]')
    this.fullNameField = page.locator('//input[@id="userName"]')
    this.emailField = page.locator('//input[@id="userEmail"]')
    this.currentAddressField = page.locator('//textarea[@id="currentAddress"]')
    this.permanentAddressField = page.locator('//textarea[@id="permanentAddress"]')
    this.fullNameOutput = page.locator('//p[@id="name"]')
    this.emailOutput = page.locator('//p[@id="email"]')
    this.currentAddressOutput = page.locator('//p[@id="currentAddress"]')
    this.permanentAddressOutput = page.locator('//p[@id="permanentAddress"]')
  }

  async inputFullNameField(fullName: string) {
    await this.page.waitForTimeout(3000);
    await this.fullNameField.fill(fullName)
  }

  async inputEmailField(email: string) {
    await this.page.waitForTimeout(3000);
    await this.emailField.fill(email)
  }

  async inputCurrentAddressField(currentAddress: string) {
    await this.page.waitForTimeout(3000);
    await this.currentAddressField.fill(currentAddress)
  }

  async inputPermanentAddressField(permanentAddress: string) {
    await this.page.waitForTimeout(3000);
    await this.permanentAddressField.fill(permanentAddress)
  }

  async clickButtonSubmit() {
    await this.page.waitForTimeout(5000);
    await this.submitButton.click();
    await expect(this.fullNameOutput).toBeVisible;
    await expect(this.emailOutput).toBeVisible;
    await expect(this.currentAddressOutput).toBeVisible;
    await expect(this.permanentAddressOutput).toBeVisible;
  }
}