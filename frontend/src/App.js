import React, { useRef } from 'react'; 

import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import VrArchiving from './components/VrArchiving';
import VideoBoard from './components/VideoBoard';
import ScrollToTop from './components/ScrollToTop';
/*
import Footer from './components/Footer';
푸터 넣으면 화면 비율 이상해서 app에도 뻄
*/
function App() {
    const vrArchivingRef = useRef(null); // vrArchiving 컴포넌트를 위한 ref 생성
    const videoBoardRef = useRef(null); // vrArchiving 컴포넌트를 위한 ref 생성


    return (
        <div className="App">
            <Header vrArchivingRef={vrArchivingRef} videoBoardRef={videoBoardRef} />
            <Banner />
            <div ref={vrArchivingRef}><VrArchiving /></div> 
            <div ref={videoBoardRef}><VideoBoard /></div>           
            <div>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>
            	테스트<br/>           	        	
            </div>            
            <ScrollToTop/>              
        </div>
    );
}

export default App;
