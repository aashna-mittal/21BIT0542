
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = 'john_doe_17091999'; // Replace with dynamic logic if needed
    const email = 'john@xyz.com';
    const roll_number = 'ABCD123';

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const lowerCaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highest_lowercase_alphabet = lowerCaseAlphabets.length > 0 ? [lowerCaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
