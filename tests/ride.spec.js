const { test, expect } = require('@playwright/test');
const RidePage = require('./pages/RidePage');

test.describe('Ride Booking Core Workflow', () => {
    test('RB-001: Should successfully book a ride and show CONFIRMED status', async ({ page }) => {
        const ridePage = new RidePage(page);
        
        await ridePage.navigate();
        await ridePage.clickBookRide();
        
        // ตรวจสอบว่าระบบแสดงข้อความ CONFIRMED ภายในเวลาที่กำหนด
        await expect(ridePage.statusText).toHaveText('CONFIRMED', { timeout: 2000 });
    });
});