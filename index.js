const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = process.env.PORT || 3000;

// Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API key
const configuration = new Configuration({
  apiKey: 'AIzaSyAGE14FZN8de0Gdp5FX2zNgJNkQc7rq53c',
});
const openai = new OpenAIApi(configuration);

// ... rest of your code using openai for question answering

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
