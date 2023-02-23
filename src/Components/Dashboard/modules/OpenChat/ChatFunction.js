const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_CHAT_KEY,
});
const openai = new OpenAIApi(configuration);

export const data = async (
  e,
  selectedChat,
  temprature,
  no_of_tokens,
  selectedTemplatesList
) => {
  const resultArray = selectedTemplatesList.map((item) => {
    return `${item} : `;
  });
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You are a professional with more than 10 years experience.You will be ${selectedChat} : ${e}? The answer should be in these formats ${resultArray.join(
      ","
    )} and each format should be less than ${
      no_of_tokens / selectedTemplatesList.length
    } tokens.
    Return the answer in Object form like {"key":[value]} this. the format will be the key and don't include the entire format type like ${
      selectedTemplatesList[0]
    }  in the value.
    sample answer:
      {
      "Direct answer format": "Sunday",
      "List format": "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday", 
      "Definition format": "Seven days in a week",
      "Comparison format": "There are seven days in a week, twice as much as the weekend days",
     }
    `,
    temperature: temprature,
    max_tokens: no_of_tokens,
  });
  return response.data.choices[0]["text"].trim();
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
