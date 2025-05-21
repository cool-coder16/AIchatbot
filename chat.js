module.exports = (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let botResponse = "I'm just a simple bot. Try asking something like 'Hello' or 'Tell me a joke'.";

  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    botResponse = "Hello! How can I assist you today?";
  } else if (userMessage.includes("your name")) {
    botResponse = "I'm a simple AI chatbot.";
  } else if (userMessage.includes("time")) {
    botResponse = "Current time is " + new Date().toLocaleTimeString();
  } else if (userMessage.includes("joke")) {
    botResponse = "Why don't robots ever get tired? Because they recharge!";
  }

  res.status(200).json({ reply: botResponse });
};
