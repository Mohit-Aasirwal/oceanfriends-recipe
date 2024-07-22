// import React, { useState, useEffect } from "react";
// import { useSpeechRecognition } from "react-speech-recognition";

// function VoiceSearch() {
//   const [transcript, setTranscript] = useState("");
//   const {
//     listening,
//     transcript: recognizedTranscript,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//     startListening,
//     stopListening,
//   } = useSpeechRecognition();

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       console.error("Browser does not support speech recognition.");
//     }
//   }, [browserSupportsSpeechRecognition]);

//   useEffect(() => {
//     setTranscript(recognizedTranscript);
//   }, [recognizedTranscript]);

//   const handleSearch = () => {
//     // Perform search logic using the transcript as the search query
//     console.log("Search:", transcript); // Replace with your actual search implementation
//   };

//   return (
//     <div>
//       <button
//         onClick={() => {
//           resetTranscript();
//           listening ? stopListening() : startListening({ continuous: true });
//         }}
//       >
//         {listening ? "Stop Listening" : "Start Voice Search"}
//       </button>
//       <input type="text" value={transcript} readOnly />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default VoiceSearch;
