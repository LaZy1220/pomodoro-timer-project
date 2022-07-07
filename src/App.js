import { useState } from "react";
import { Settings } from "./components/Settings/Settings";
import { SettingsContext } from "./components/SettingsContext/SettingsContext";
import { Timer } from "./components/Timer/Timer";

function App() {
  const [isShow,setIsShow]=useState(false)
  const [workMinutes,setWorkMinutes]=useState(65)
  const [breakMinutes,setBreakMinutes]=useState(35)
  return (
    <div className="App">
      <main>
        <SettingsContext.Provider value={{
          isShow,
          setIsShow,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes
        }}>
          {isShow?<Settings/>:<Timer/>}
        </SettingsContext.Provider>
      </main>
    </div>
  );
}

export default App;
