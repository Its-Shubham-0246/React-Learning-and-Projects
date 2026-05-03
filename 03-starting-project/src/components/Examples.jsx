import { useState } from 'react'
import {EXAMPLES} from '../data.js'
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){
 const [selectedTopic,setSelectedTopic] = useState()
 function handleSelect(selectedButton){
  console.log(selectedTopic)
   setSelectedTopic(selectedButton)
 }
 let tabContent = "Please select a topic to view the example.";
 if(selectedTopic){
  tabContent = <div id = "tab-content">
   <h3>{EXAMPLES[selectedTopic].title}</h3>
   <p>{EXAMPLES[selectedTopic].description}</p>
   <pre>
    <code>
     {EXAMPLES[selectedTopic].code}
    </code>
   </pre>
  </div> 
 }
 return (
  <Section title = "Examples" id="examples">
   <Tabs buttons = {<>
    <TabButton
     isSelected = {selectedTopic === "components"} 
     onClick = {() => handleSelect("components")}
    >
     Components
    </TabButton>
    <TabButton 
     isSelected = {selectedTopic === "jsx"}
     onClick = {() => handleSelect("jsx")}
    >
     JSX
    </TabButton>
    <TabButton 
     isSelected = {selectedTopic === "props"} 
     onClick = {() => handleSelect("props")}
    >
     Props
    </TabButton>
    <TabButton 
     isSelected = {selectedTopic === "state"} 
     onClick = {() => handleSelect("state")}
    >
     State
    </TabButton>
    </>
    }
    >
    {tabContent}
    </Tabs>

    
  </Section>
 );
}