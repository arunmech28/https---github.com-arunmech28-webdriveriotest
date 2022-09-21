// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';

import { loginPage, securePage } from "../pageinstance"

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


