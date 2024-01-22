// import LoginPage from "../pageobjects/login.page";

it("Get Mondos", async function () {
  // await LoginPage.login('', '');
  await getMondos(40);
});

async function getMondos(amount) {
  for (let i = 0; i < amount; i++) {
    await $("//android.widget.ImageView").click();
    await $('//android.widget.Button[@content-desc="Si"]').click();

    await $(
      '//android.widget.TextView[@text="Reward granted"]'
    ).waitForDisplayed({ timeout: 60000 });
    await driver.pressKeyCode(4);
    await $('//android.widget.Button[@content-desc="Cerrar"]').waitForDisplayed(
      {
        timeout: 60000,
      }
    );
    await $('//android.widget.Button[@content-desc="Cerrar"]').click();
  }
}
