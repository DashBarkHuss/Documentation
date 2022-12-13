"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||n;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81818:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],p={id:"VideoExperiment",title:"Puppies and Kittens Experiment"},s="OpenBCI Experiment",l={unversionedId:"Examples/VideoExperiment",id:"Examples/VideoExperiment",title:"Puppies and Kittens Experiment",description:"Welcome to the OpenBCI Puppies and Kittens Experiment designed by Fan Li.",source:"@site/docs/Examples/Video_Experiment.md",sourceDirName:"Examples",slug:"/Examples/VideoExperiment",permalink:"/Examples/VideoExperiment",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/Video_Experiment.md",tags:[],version:"current",lastUpdatedAt:1645564380,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"VideoExperiment",title:"Puppies and Kittens Experiment"},sidebar:"docs",previous:{title:"Example Projects",permalink:"/Examples/ExamplesLanding"},next:{title:"Community Page Projects",permalink:"/Examples/CommunityPageProjects"}},d=[{value:"Equipment Required",id:"equipment-required",children:[],level:2},{value:"Step 1: Headwear, Board and Software Setup",id:"step-1-headwear-board-and-software-setup",children:[],level:2},{value:"Step 2: Breadboard Setup",id:"step-2-breadboard-setup",children:[],level:2},{value:"Step 4: Run Experiment",id:"step-4-run-experiment",children:[],level:2},{value:"Step 5: Retrieve Data",id:"step-5-retrieve-data",children:[],level:2},{value:"Step 6: Process Data",id:"step-6-process-data",children:[],level:2},{value:"Step 7: Create your Own Experiment",id:"step-7-create-your-own-experiment",children:[],level:2}],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"openbci-experiment"},"OpenBCI Experiment"),(0,n.kt)("p",null,"Welcome to the OpenBCI Puppies and Kittens Experiment designed by Fan Li."),(0,n.kt)("p",null,"During this experiment, you will watch a video containing images of puppies and kittens, and press a button every time you see a puppy in the image."),(0,n.kt)("p",null,"Below are the instructions on how to do it. The full information on this experiment can be found on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Experiment"},"the OpenBCI Repository"),". Once you're comfortable with how the experiment works, you can modify the script to create your own experiments."),(0,n.kt)("h2",{id:"equipment-required"},"Equipment Required"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Headwear"),", which can be:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shop.openbci.com/products/ultracortex-mark-iv"},"Ultracortex Mark IV Headset")," with ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/StrivedayTM-Flexible-Electric-electronic-electrics/dp/B01LH1FYHO/ref=sr_1_3?crid=2ANLHLBH5WL2Q&dchild=1&keywords=flexible+wire+22+gauge&qid=1598387126&s=hi&sprefix=flexible+wire+22+g%2Ctools%2C179&sr=1-3"},"Copper Wires"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163"},"Gold Cup Electrodes")," with ",(0,n.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/ten20-conductive-paste-2oz-jars?variant=31373533198"},"Ten20 Paste"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AddOns/Headwear/ElectrodeCap"},"EEG Electrode Cap Kit")," with ",(0,n.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/electrodegel?variant=28056992776264"},"Electrode Cap Gel")," and ",(0,n.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter?variant=31007211715"},"Touch Proof Adapter"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v5.0.0"},"OpenBCI GUI"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Breadboard"),". The breadboard includes a photocell circuit for the trigger and a button circuit for user feedback. The components needed for both are:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/DEYUE-breadboard-Set-Prototype-Board/dp/B07LFD4LT6/ref=sr_1_5?dchild=1&keywords=breadboard&qid=1591125068&sr=8-5"},"1x Breadboard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/gp/product/B01N7V536K/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc="},"1x Photoresistor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/EDGELEC-Resistor-Tolerance-Multiple-Resistance/dp/B07QK9ZBVZ/ref=sr_1_1_sspa?crid=S5FLXTR7YG6L&dchild=1&keywords=resistor+220+ohm&qid=1591125607&s=industrial&sprefix=resistor+220+%2Cindustrial%2C146&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWlRVVTM3QzRBWEE4JmVuY3J5cHRlZElkPUEwOTMyNDM3Q1JIM0gwUlc5UzJYJmVuY3J5cHRlZEFkSWQ9QTAwNzUwODkxSDRDS0ZQVTlJWVpKJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="},"1x 220 Ohm resistor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/EDGELEC-Resistor-Tolerance-Multiple-Resistance/dp/B07QG1V4YL/ref=sr_1_1_sspa?dchild=1&keywords=resistor+1k+ohm&qid=1598631730&s=industrial&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFNWEM0VURBS0lSS0EmZW5jcnlwdGVkSWQ9QTA5NTk4MzkyNk5QWldHMVY4U0hKJmVuY3J5cHRlZEFkSWQ9QTAwOTU5MDVGODBTMU85ODM0QUkmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"},"1x 1KOhm resistor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/GenBasic-Solderless-Dupont-Compatible-Breadboard-Prototyping/dp/B077N9X7Y3/ref=sr_1_2?dchild=1&keywords=Male%2Bto%2Bmale%2BJumpers&qid=1591126744&sr=8-2&th=1"},"5x Jumper cables male to male (8 inch)")),(0,n.kt)("li",{parentName:"ul"},"Either ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/GenBasic-Solderless-Dupont-Compatible-Breadboard-Prototyping/dp/B077N5RLHN/ref=sr_1_1_sspa?dchild=1&keywords=Male%2Bto%2BFemale%2BJumpers&qid=1591126392&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTEtKREtGMTZSNTA0JmVuY3J5cHRlZElkPUEwMjExMDE0Q0dYOEZCUFlKRFZMJmVuY3J5cHRlZEFkSWQ9QTA0NDYyMjMyMTk5WlhCMEg0MzFRJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"},"2x Jumper cables female to male (8 inch)")," for the photoresistor connection or ",(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/GenBasic-Solderless-Dupont-Compatible-Breadboard-Prototyping/dp/B077N9X7Y3/ref=sr_1_2?dchild=1&keywords=Male%2Bto%2Bmale%2BJumpers&qid=1591126744&sr=8-2&th=1"},"2x Jumper cables male to male (8 inch)")," if you can solder the cable with the photoresistor.")))),(0,n.kt)("h2",{id:"step-1-headwear-board-and-software-setup"},"Step 1: Headwear, Board and Software Setup"),(0,n.kt)("p",null,"First, connect the headwear to yourself and the Cyton board, and read from it using the GUI. If you are using the Ultracortex, follow ",(0,n.kt)("a",{parentName:"p",href:"/AddOns/Headwear/MarkIV"},"this tutorial"),". If you're using the gold cup electrodes, follow ",(0,n.kt)("a",{parentName:"p",href:"/GettingStarted/Biosensing-Setups/EEGSetup"},"this guide")," to learn how to connect each electrode, and connect them in the positions you would like to measure EEG from. A good guide to the 8 positions commonly used can be found in the Ultracortex tutorial. If you're using an electrode cap, follow ",(0,n.kt)("a",{parentName:"p",href:"/AddOns/Headwear/ElectrodeCap"},"this tutorial")," to connect it."),(0,n.kt)("h2",{id:"step-2-breadboard-setup"},"Step 2: Breadboard Setup"),(0,n.kt)("p",null,"The diagram for the circuit with the photocell and the button can be found below. "),(0,n.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/ExamplesImages/Circuit_Diagram.png?raw=true",width:"70%"}),(0,n.kt)("p",null,"Using the components listed above, assemble the breadboard. You can find an example of how to assemble a button circuit using Arduino ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/tutorial/button"},"here")," and an example of how to assemble a photocell circuit ",(0,n.kt)("a",{parentName:"p",href:"https://openbci.com/community/measuring-stimulus-timing-with-a-photoresistor/"},"here"),". The final breadboard should look similar to the pictures."),(0,n.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/ExamplesImages/Full_Breadboard_Setup.jpeg?raw=true",width:"70%"}),(0,n.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/ExamplesImages/Breadboard_Setup.jpeg?raw=true",width:"70%"}),(0,n.kt)("p",null,"Next, connect the breadboard to the Cyton board as shown below. Place the breadboard beside your computer such that the photocell points to the lower-left corner of your screen, which is where the video trigger will be located."),(0,n.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/ExamplesImages/connect.jpeg?raw=true",width:"70%"}),(0,n.kt)("h2",{id:"step-4-run-experiment"},"Step 4: Run Experiment"),(0,n.kt)("p",null,"Download ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/evaesteban/OpenBCI_Experiment/blob/master/video.mp4"},"this video"),". Once you're ready to start, press ",(0,n.kt)("inlineCode",{parentName:"p"},"Start Data Stream")," in the GUI. Then, open the video and make it Full-Screen. Every time a puppy appears in the video, press the button. The video is around 3 minutes long. You're now ready to press play!"),(0,n.kt)("h2",{id:"step-5-retrieve-data"},"Step 5: Retrieve Data"),(0,n.kt)("p",null,"Once you've finished watching the video, press ",(0,n.kt)("inlineCode",{parentName:"p"},"Stop Data Stream"),". In your /Documents/OpenBCI_GUI/Recordings folder you should find the recorded data for that session. "),(0,n.kt)("h2",{id:"step-6-process-data"},"Step 6: Process Data"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/evaesteban/OpenBCI_Experiment/blob/master/OpenBCI_Experiment_Toolkits.ipynb"},"this Python notebook"),", you'll find sample code to read, plot, and analyze the recorded data. "),(0,n.kt)("h2",{id:"step-7-create-your-own-experiment"},"Step 7: Create your Own Experiment"),(0,n.kt)("p",null,"Once you understand how to conduct an experiment, you can modify ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Experiment/blob/master/ExternalTriggerCreator_quick.py"},"this Python script")," to make your own video. The current code reads the images stored in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Images")," folder, shuffles them, and creates a video with 4 different sessions. Each session displays the images at a different rate. Each image has an embedded trigger and is separated from the others by a fixation cross."),(0,n.kt)("p",null,"The video pattern was created in accordance to the diagram below obtained from the research paper ",(0,n.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/5415563"},"Toward Emotion Aware Computing: An Integrated Approach Using Multichannel Neurophysiological Recordings and Affective Visual Stimuli")," by C. A. Frantzidis, C. Bratsas, C. L. Papadelis, E. Konstantinidis, C. Pappas and P. D. Bamidis, published in IEEE Transactions on Information Technology in Biomedicine, vol. 14, no. 3, pp. 589-597, May 2010."))}m.isMDXComponent=!0}}]);