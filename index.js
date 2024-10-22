const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = process.env.PORT || 3000;

// Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API key
const configuration = new Configuration({
  apiKey: 'YOUR_GEMINI_API_KEY',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  const question = req.body.question;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // You can experiment with different models
      prompt: question,
      max_tokens: 1024,
      n: 1,
      stop: null,
      temperature: 0.5, // Adjust the temperature as needed
    });

    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
