document.addEventListener("DOMContentLoaded", function () {
  const transcribeButton = document.getElementById("start-transcription");

  transcribeButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { data: "start" }, () => {});
    });
  });
});
