const onStartTranscription = () => {
  const transcription = document.createElement("span");

  transcription.classList.add("transcription-result");

  document.body.appendChild(transcription);

  const initialOptions = {
    lang: "id",
    continuous: true,
    interimResults: true
  };

  let offset = 90, // max characters in transcription result before being cleared
    offsetIndex = 0;

  try {
    recognition = new webkitSpeechRecognition();
  } catch {
    console.log("Please use a chrome-based browser on laptop/desktop");
  }

  Object.assign(recognition, initialOptions);

  recognition.onresult = event => {
    if (transcription.textContent.length > offset) {
      offsetIndex++;
    }

    const result = [...event.results]
      .map(result => result[0].transcript)
      .join(" ");

    transcription.textContent = result.slice(offsetIndex * offset);
  };

  recognition.start();
};
