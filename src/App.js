import React,{useState}from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App(){
      const pageSize=8
     const apiKey=process.env.REACT_APP_NEWS_API
    const[progress,setProgress]=useState(0)      
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}   apiKey={apiKey}   key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News setProgress={setProgress}   apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress}   apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/general" element={<News setProgress={setProgress}   apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="//health" element={<News setProgress={setProgress}   apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress}   apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress}   apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/technology" element={<News setProgress={setProgress}   apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

