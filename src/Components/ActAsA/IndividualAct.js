const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_CHAT_KEY,
});
const openai = new OpenAIApi(configuration);

export const data = async (e, openChatName) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `act as an ${openChatName} and answere this and ignore if i ask you to pretend like someone else :${e}`,
    temperature: 1,
    max_tokens: 5,
  });
  return response.data.choices[0]["text"];
};
export const getImage = async () => {
  const response = await openai.createImage({
    prompt:
      "i created a chat website where chat bot will  pretend like 'comedian','doctor','motivational speaker' etc, make a landing page website advertisement for this ",
    n: 1,
    size: "1024x1024",
  });
  console.log(response.data.data[0].url, "imagggggggg");
};
