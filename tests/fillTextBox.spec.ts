import { test, expect } from '@playwright/test';
import { BookListsPage } from '../pages/BookListsPage';
import { TextBoxPage } from '../pages/TextBoxPage';

test('Fill Text Box', async ({ page, browser }) => {
  const bookListPage = new BookListsPage(page);
  const textBoxPage = new TextBoxPage(page);

  // Tentukan direktori tempat video akan disimpan
  const videoDir = './videos';
  
  // Buat context baru dengan opsi video
  const context = await browser.newContext({
    recordVideo: {
      dir: videoDir, // Direktori untuk menyimpan video
      size: { width: 1280, height: 720 }, // Ukuran video
    },
  });

  // Go To Book List Page 
  await bookListPage.navigateToBookListPage();

  await bookListPage.navigateToTextBoxPage();

  await textBoxPage.inputFullNameField("Bedha Jahsha Nuratama");

  await textBoxPage.inputEmailField("bedhajs@gmail.com");

  await textBoxPage.inputCurrentAddressField("Jl Oryza 3 no 22");

  await textBoxPage.inputPermanentAddressField("JL Saturnus selatan");

  await textBoxPage.clickButtonSubmit();

});
