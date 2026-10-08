const { test, expect } = require('@playwright/test');
const FoodPage = require('./pages/FoodPage');

test.describe('Food Ordering Core Workflow', () => {
    test('FO-001: Should successfully order food and show CONFIRMED status', async ({ page }) => {
        const foodPage = new FoodPage(page);
        
        await foodPage.navigate();
        await foodPage.clickOrderFood();
        
        // ตรวจสอบว่าระบบแสดงข้อความ CONFIRMED ภายในเวลาที่กำหนด
        await expect(foodPage.statusText).toHaveText('CONFIRMED', { timeout: 2000 });
    });
});

