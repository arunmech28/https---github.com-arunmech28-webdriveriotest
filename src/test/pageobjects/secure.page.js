

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
 export default class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

