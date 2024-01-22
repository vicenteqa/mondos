import { $ } from '@wdio/globals'

class LoginPage {
    public get jugarButton() {
        return $('//android.widget.Button[@content-desc="Play!"]');
    }

    public get inputUsername() {
        return $('//android.widget.EditText[1]');
    }

    public get inputPassword() {
        return $('//android.widget.EditText[2]');
    }

    public get btnSubmit() {
        return $('//android.widget.Button[@content-desc="Log in"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {
        await this.jugarButton.click();
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click()
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
