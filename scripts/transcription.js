let recognition,
  transcriptionResult,
  isRecognizing = false;

chrome.runtime.onMessage.addListener(
  ({ type, message }, sender, sendResponse) => {
    switch (type) {
      case "toggle-transcription":
        if (isRecognizing) {
          onStopTranscription();
        } else {
          onStartTranscription();
        }

        isRecognizing = !isRecognizing;
        break;
      case "change-language":
        onChangeLanguage(message);
        break;
    }
  }
);
