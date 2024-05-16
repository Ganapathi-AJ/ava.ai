const axios = require('axios');
const fs = require('fs').promises;

const getSpeech = async (text: string) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/audio/speech',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        model: 'tts-1',
        input: text,
        voice: 'alloy'
      },
      responseType: 'arraybuffer'
    });

    await fs.writeFile('speech.mp3', response.data);
  } catch (error) {
    console.error(error);
  }
};

// Usage
// getSpeech("The quick brown fox jumped over the lazy dog.");