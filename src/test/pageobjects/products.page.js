

import { sort } from '../instances/components';
import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class ProductsPage extends Page {

    get productTitle() {
        return $('.title')
    }

    get activeSortOption() {
        return $('.active_option');
    }

    get productNamesList() {
        return $$('.inventory_item_name')
    }

    async getPageTitle() {
        return await this.productTitle.getText();
    }

    async sortProducts(sortOption) {
        await sort.sortByValue(sortOption);
    }

    async getActiveSortOption() {
        return await this.activeSortOption.getText();
    }

    async getCssColorCodeListForProductNames() {
        const list = await this.productNamesList;
        return list.map(async (node) => {
            return await node.getCSSProperty("color");
        });
    }
}

