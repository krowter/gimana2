let recognition;

const handleChangeLanguage = val => {
  console.log(val);
};

chrome.runtime.onMessage.addListener(({ type, message }) => {
  switch (type) {
    case "toggle-transcription":
      onStartTranscription();
      break;
  }
});
