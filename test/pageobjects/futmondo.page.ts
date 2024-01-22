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
    return $('//android.widget.Button[@content-desc="Cerrar"]');
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
    for (let i = 0; i < amount; i++) {
      console.log("Has añadido " + 25 * i + " mondos a tu saldo");
      await this.seeAdButton.click();
      await this.confirmSeeAdButton.click();
      await this.rewardObtainedButton.waitForDisplayed({ timeout: 60000 });
      await this.navigateBack();
      await this.closeAfterAdButton.waitForDisplayed({ timeout: 60000 });
      await this.closeAfterAdButton.click();
    }
  }
}

export default new Futmondo();
