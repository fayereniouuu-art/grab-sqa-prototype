const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Mock API Endpoints สำหรับจำลองการทำงาน
app.post('/api/order', (req, res) => {
    res.status(200).json({ status: 'CONFIRMED', message: 'Food order successful' });
});

app.post('/api/ride', (req, res) => {
    res.status(200).json({ status: 'CONFIRMED', message: 'Ride booked successful' });
});

app.listen(port, () => {
    console.log(`Mock App listening at http://localhost:${port}`);
});