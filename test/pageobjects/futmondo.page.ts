import { $ } from "@wdio/globals";

class Futmondo {
  public get jugarButton() {
    return $('//android.widget.Button[@content-desc="Play!"]');
  }

  public get inputUsername() {
    return $("//android.widget.EditText[1]");
  }

  public get inputPassword() {
    return $("//android.widget.EditText[2]");
  }

  public get submitButton() {
    return $('//android.widget.Button[@content-desc="Log in"]');
  }

  public get seeAdButton() {
    return $("//android.widget.ImageView");
  }

  public get confirmSeeAdButton() {
    return $('//android.widget.Button[@content-desc="Si"]');
  }

  public get rewardObtainedButton() {
    return $('//android.widget.TextView[@text="Reward granted"]');
  }

  public get closeAfterAdButton() {
    const catalan = false;
    if (catalan) return $('//android.widget.Button[@content-desc="Tancar"]');
    else return $('//android.widget.Button[@content-desc="Cerrar"]');
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.jugarButton.click();
    await this.inputUsername.click();
    await this.inputUsername.setValue(username);
    await this.inputPassword.click();
    await this.inputPassword.setValue(password);
    await this.submitButton.click();
  }

  public async navigateBack() {
    await driver.pressKeyCode(4);
  }

  public async getMondos(amount = 1) {
    await this.reload();
    for (let i = 0; i < amount; i++) {
      // await this.cerrarAnuncio();
      await this.seeAdButton.click();
      // await this.cerrarAnuncio();
      await this.confirmSeeAdButton.click();
      // await this.cerrarAnuncio();
      await this.rewardObtainedButton.waitForDisplayed({ timeout: 60000 });
      await this.navigateBack();
      // await this.cerrarAnuncio();
      await this.closeAfterAdButton.waitForDisplayed({ timeout: 60000 });
      await this.closeAfterAdButton.click();
    }
  }

  public async cerrarAnuncio() {
    const ad = await $$('//android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout');
    if (ad.length === 1) {
      await $('//android.view.View[@resource-id="mys-content"]/android.view.View[2]/android.widget.TextView').waitForDisplayed({ timeout: 10000 });
      await $('//android.view.View[@resource-id="mys-content"]/android.view.View[2]/android.widget.TextView').click()
    }

  }

  public async reload() {
    const screen = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View');

    await driver.touchAction({ action: 'tap', x: 254, y: 859, element: screen })

    // await this.navigateBack();
  }
}

export default new Futmondo();
