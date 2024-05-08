const PasteBinPage = require("../../po/pages/pasteBin.page");
const pasteBinPage = new PasteBinPage();

describe("Test suite", () => {
  beforeEach(async () => {
    await pasteBinPage.open();
  });

  it("Greetings from webdriver", async () => {
    const pageComponent = pasteBinPage.page;

    await pageComponent.headerButton.click();
    await pageComponent.pasteTextArea.setValue(
      "console.log('Hello from WebDriver')"
    );
    await pageComponent.expirationDropdown.click();
    await $(".select2-results__options li:nth-child(3)").click();
    await pageComponent.nameInput.setValue("helloweb");
    await pageComponent.createButton.click();
  });
});
