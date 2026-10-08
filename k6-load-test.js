import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 10 }, // Ramp-up จำนวน User ไปที่ 10 คน ภายใน 10 วินาที
        { duration: '15s', target: 10 }, // คงที่ 10 Users เป็นเวลา 15 วินาที
        { duration: '5s', target: 0 },   // Ramp-down จำนวน User กลับมาที่ 0
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'], // 95% ของ Request ต้องตอบสนองเร็วกว่า 2 วินาที (P95)
        http_req_failed: ['rate<0.01'],    // Error Rate ต้องน้อยกว่า 1%
    },
};

export default function () {
    let res = http.get('http://localhost:3000');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    
    // จำลองการยิง API
    let apiRes = http.post('http://localhost:3000/api/order');
    check(apiRes, {
        'API status is 200': (r) => r.status === 200,
    });

    sleep(1);
}