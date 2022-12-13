"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3560],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},29357:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],s={id:"EMGmusic",title:"EMG-controlled Music"},l=void 0,p={unversionedId:"Examples/EMGProjects/EMGmusic",id:"Examples/EMGProjects/EMGmusic",title:"EMG-controlled Music",description:"In this tutorial, we will show you how to pause and unpause your music without pressing any keys on your laptop keyboard. To do that, we will read the peaks in EMG signals your arm muscles produce when you flex them and use them as a trigger for pausing the music played via Youtube through your computer. Feel free to connect your laptop to a Bluetooth speaker to make the music louder!",source:"@site/docs/Examples/EMGProjects/02-EMG_Controlled_Music.md",sourceDirName:"Examples/EMGProjects",slug:"/Examples/EMGProjects/EMGmusic",permalink:"/Examples/EMGProjects/EMGmusic",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/EMGProjects/02-EMG_Controlled_Music.md",tags:[],version:"current",lastUpdatedAt:1658939464,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:2,frontMatter:{id:"EMGmusic",title:"EMG-controlled Music"},sidebar:"docs",previous:{title:"EMG Scrolling",permalink:"/Examples/EMGProjects/EMGscrolling"},next:{title:"EMG-controlled Slideshow",permalink:"/Examples/EMGProjects/EMGslideshow"}},u=[{value:"Materials Required",id:"materials-required",children:[],level:2},{value:"Step 1: Hardware Assembly.",id:"step-1-hardware-assembly",children:[],level:2},{value:"Step 2: Software Setup.",id:"step-2-software-setup",children:[],level:2},{value:"Step 3: Stream data using the OpenBCI GUI.",id:"step-3-stream-data-using-the-openbci-gui",children:[],level:2},{value:"Step 4: Using a Python Script to Read the Data and Execute EMG Command",id:"step-4-using-a-python-script-to-read-the-data-and-execute-emg-command",children:[],level:2}],c={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we will show you how to pause and unpause your music without pressing any keys on your laptop keyboard. To do that, we will read the peaks in EMG signals your arm muscles produce when you flex them and use them as a trigger for pausing the music played via Youtube through your computer. Feel free to connect your laptop to a Bluetooth speaker to make the music louder!"),(0,r.kt)("p",null,"Check out an example video of this tutorial being put into action!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/RfdkPj7SjWbURyFlXC/giphy.gif",alt:"EMGmusicgif"})),(0,r.kt)("p",null,"The following instructions have been written for use with Windows 10."),(0,r.kt)("h2",{id:"materials-required"},"Materials Required"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"OpenBCI ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395"},"Skintact sticky electrodes")," or ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit"},"IDUN Dryode")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958"},"EMG/ECG Snap Electrode Cables")),(0,r.kt)("li",{parentName:"ol"},"Computer with downloaded OpenBCI ",(0,r.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"GUI"))),(0,r.kt)("h2",{id:"step-1-hardware-assembly"},"Step 1: Hardware Assembly."),(0,r.kt)("p",null,"Follow the EMG Getting Started ",(0,r.kt)("a",{parentName:"p",href:"/GettingStarted/Biosensing-Setups/EMGSetup"},"Tutorial")," to connect the electrodes to your body and the Cyton board, and read data from it using the OpenBCI GUI."),(0,r.kt)("h2",{id:"step-2-software-setup"},"Step 2: Software Setup."),(0,r.kt)("p",null,"Download and install ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," (either version 2 or 3). Python might already be installed on your computer. Type python --version to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pylsl"),": use ",(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install pylsl")," from the Python folder in the command line to install it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pyautogui")," : use ",(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install pyautogui")," to install.")),(0,r.kt)("h2",{id:"step-3-stream-data-using-the-openbci-gui"},"Step 3: Stream data using the OpenBCI GUI."),(0,r.kt)("p",null,"Follow the networking ",(0,r.kt)("a",{parentName:"p",href:"/Software/OpenBCISoftware/GUIWidgets#networking"},"tutorial")," on this link to learn how to stream data using LSL from the GUI. For this project, you will need to stream the EMG data from Channel 1 using the Networking Widget. Your Networking settings should look as follows:"),(0,r.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/website/docs/assets/TutorialImages/EMG_Music_GUI.png?raw=true",width:"100%"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Important"),": Make sure your EMG widget is open before you start streaming."))),(0,r.kt)("h2",{id:"step-4-using-a-python-script-to-read-the-data-and-execute-emg-command"},"Step 4: Using a Python Script to Read the Data and Execute EMG Command"),(0,r.kt)("p",null,"The Python script will search for an EMG data stream. Once it finds the stream it will read it and detect any spikes that correspond to muscle flexing. If a flex is detected and 2 seconds have passed since the last one, it will press the space bar, which will make the music stop. The threshold for the time between flexes can be modified as needed to avoid debouncing."),(0,r.kt)("p",null,"Get the Python script from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/EMG_Controlled_Music"},"here")," by clicking on \u2018Raw\u2019 and copying it to a .py file in your Python folder. Once you\u2019re streaming data from the GUI, go to the folder that you stored the script in from your command line, and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"python.exe <script_name>.py"),"."),(0,r.kt)("p",null,"Open Youtube and play some music. Every time you flex your arm as shown in the example video, the music will pause or start playing if paused already. By modifying the time_thres and flex_thres parameters in the code you can adjust the time to wait between flexes and the flex strength to your needs."),(0,r.kt)("p",null,"Try it out and send us a video of your final prototype!"))}d.isMDXComponent=!0}}]);