import { menu, sortlist, menulist } from "../instances/components";
import { loginPage, productsPage } from "../instances/pages"

describe('Sauce Demo Test', () => {
    it('Login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login('standard_user', 'secret_sauce');
        expect((await productsPage.getPageTitle()).toUpperCase()).toEqual("Products".toUpperCase());
    });


    it('Sort Products by Price from high to low', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await productsPage.sortProducts(sortlist.PRICE_HIGH_TO_LOW);
        expect((await productsPage.getActiveSortOption()).toUpperCase()).toEqual(sortlist.PRICE_HIGH_TO_LOW.toUpperCase());
    });

    it('Sort Products by Name Z to A', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await productsPage.sortProducts(sortlist.NAME_Z_TO_A);
        expect((await productsPage.getActiveSortOption()).toUpperCase()).toEqual(sortlist.NAME_Z_TO_A.toUpperCase());
    });

    it('Validate all the product names are having same color code', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        const colorList = await productsPage.getCssColorCodeListForProductNames();
        expect(colorList.every(async (node) => (await node) == "#e2231a")).toBeTruthy();
    });


    it('Login with valid credentials and logout from menu', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await menu.clickOnMenu(menulist.LOG_OUT);
    });

});


