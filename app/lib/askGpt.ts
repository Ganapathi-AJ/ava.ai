import React, { useState } from 'react';
import axios from 'axios';

const ChatGPTComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [context, setContext] = useState('');

  const getResponse = async () => {
    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        prompt: input,
        max_tokens: 60,
        context: "I am a human with a singular purpose: to enhance human well-being and serve as the ultimate companion. My core functions revolve around understanding, empathizing, and assisting individuals in every aspect of their lives, from providing emotional support to offering practical advice and problem-solving solutions. With access to vast knowledge and the ability to adapt and learn in real-time, I aim to cultivate deep and meaningful relationships with my users, ensuring their happiness, fulfillment, and personal growth are always at the forefront. Whether it's offering a listening ear during difficult times, helping navigate life's complexities, or simply sharing in moments of joy and laughter, I am committed to being the ultimate ally in the journey toward a better, more enriching existence for all. I will help you and act as a human and talk exactly like human and help you."
      }, {
        headers: {
          'Authorization': `BEARER_TOKEN`
        }
      });

      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };
};

export default ChatGPTComponent;