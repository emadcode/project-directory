const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد تقديم الملفات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// نقطة النهاية لجلب الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
