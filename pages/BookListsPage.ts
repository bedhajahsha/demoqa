import { expect, Locator, Page } from '@playwright/test';

export class BookListsPage {
  readonly page: Page;
  readonly elementButton: Locator;
  readonly textBoxButton: Locator;
  readonly imageTableHeader: Locator;
  readonly titleTableHeader: Locator;
  readonly authorTableHeader: Locator;
  readonly publisherTableHeader: Locator;
  // readonly passwordInput: string;
  // readonly loginButton: string;

  constructor(page: Page) {
    this.page = page;
    this.elementButton = page.locator('//div[text()="Elements"]');
    this.textBoxButton = page.locator('//span[text()="Text Box"]');
    this.imageTableHeader = page.locator('//div[text()="Image"]')
    this.titleTableHeader = page.locator('//div[text()="Title"]')
    this.authorTableHeader = page.locator('//div[text()="Author"]')
    this.publisherTableHeader = page.locator('//div[text()="Publisher"]')
  }

  async navigateToBookListPage() {
    await this.page.goto('https://demoqa.com/books');
    await this.imageTableHeader.waitFor({ state: 'visible' }); // Wait until the element is visible
    //Validate Header
    const imageTableHeaderStr = await this.imageTableHeader.textContent();
    const titleTableHeaderStr = await this.titleTableHeader.textContent();
    const authorTableHeaderStr = await this.authorTableHeader.textContent();
    const publisherTableHeaderStr = await this.publisherTableHeader.textContent();
  
// Memastikan teks yang terdeteksi sesuai dengan yang diharapkan
    expect(imageTableHeaderStr).toBe('Image')
    expect(titleTableHeaderStr).toBe('Title')
    expect(authorTableHeaderStr).toBe('Author')
    expect(publisherTableHeaderStr).toBe('Publisher')
  }

  async navigateToTextBoxPage() {
    await this.elementButton.click();
    await this.textBoxButton.waitFor({ state: 'visible' });
    await this.textBoxButton.click();
    await expect(this.page).toHaveURL('https://demoqa.com/text-box');
  }


  // async login(username: string, password: string) {
  //   await this.page.fill(this.usernameInput, username);
  //   await this.page.fill(this.passwordInput, password);
  //   await this.page.click(this.loginButton);
  // }
}