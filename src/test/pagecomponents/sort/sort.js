export default class Sort {


    get drpSort () {
        return $('.product_sort_container');
    }


    async sortByValue(sortOption) {
       await this.drpSort.selectByVisibleText(sortOption);
    }

}