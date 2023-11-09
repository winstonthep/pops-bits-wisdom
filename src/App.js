import "./App.css";
import { OptionToggle, QuoteBox, FavoriteQuotes } from "./components";
import { createContext, useState, useEffect } from "react";
import { readJsonFile } from "./utils/helpers";

export const AppContext = createContext({
  allQuotes: [],
  selectedOption: "Quotes",
  currentQuote: {},
  setSelectedOption: () => {},
  setCurrentQuote: () => {},
});

function App() {

  const [allQuotes, setAllQuotes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Quotes");
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    const fetchData = readJsonFile();
    fetchData.then((data) => {
      setAllQuotes(data);
      // set current quote to a random quote from the data
      setCurrentQuote(data[Math.floor(Math.random() * data.length)]);

    });
  }, []);
  return (
    <AppContext.Provider value={{ allQuotes, selectedOption, setSelectedOption, currentQuote, setCurrentQuote }}>
      <div className="App w-full h-[100vh] p-6 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/it-resources/dic-website/en/design-works/details/sound-system/video-7.gif)`,
          backgroundSize: "cover",

        }}
      >
        <OptionToggle />
       {selectedOption === "Quotes" && <QuoteBox />}
       {selectedOption === "Favorites" && <FavoriteQuotes />}
      </div>
    </AppContext.Provider>
  );
}

export default App;



// export async function readJsonFile() {
//   // Define the path to the JSON file
//   const filePath = path.join(__dirname, '/data/output.json');

//   try {
//     // Read the JSON file asynchronously
//     const fileContent = await fs.readFile(filePath, 'utf8');

//     // Parse the JSON data
//     const jsonData = JSON.parse(fileContent);

//     return jsonData;
//   } catch (err) {
//     console.error('Error reading or parsing the file', err);
//   }
// }