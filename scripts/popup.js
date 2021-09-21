const getActiveTab = callback => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    callback(tabs[0].id);
  });
};

const sendMessage = (tabId, data, response = () => {}) => {
  chrome.tabs.sendMessage(tabId, data, response);
};

document.addEventListener("DOMContentLoaded", function () {
  const transcribeButton = document.getElementById("start-transcription");
  const languageToggler = document.getElementById("language-toggle");

  transcribeButton.addEventListener("click", () =>
    getActiveTab(tabId => sendMessage(tabId, { type: "toggle-transcription" }))
  );

  languageToggler.addEventListener("change", event => {
    getActiveTab(tabId =>
      sendMessage(tabId, {
        type: "change-language",
        message: event.target.value
      })
    );
  });
});
