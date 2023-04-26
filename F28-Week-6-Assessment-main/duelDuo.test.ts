import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});
test("Add to Duo button displays the div with id = player-duo", async () => {
  const playerDuo = await driver.findElement(By.id("choices"));
  await driver.sleep(300);
  expect(playerDuo).toBe(2);

  test("Selecting a bot displays in our div", async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(300);
    await driver
      .findElement(By.xpath('(//*[text()="Add to Duo"]) [2]'))
      .click();

    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const displayed = await playerDuoDiv.isDisplayed();
    expect(displayed).toBe(true);
  });
});
