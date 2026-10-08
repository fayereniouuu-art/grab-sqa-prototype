class FoodPage {
    constructor(page) {
        this.page = page;
        this.orderButton = page.locator('#btn-order-food');
        this.statusText = page.locator('#food-status');
    }

    async navigate() {
        await this.page.goto('http://localhost:3000');
    }

    async clickOrderFood() {
        await this.orderButton.click();
    }
}
module.exports = FoodPage;