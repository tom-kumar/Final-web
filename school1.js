function updateResults(isClassXII) {
  let percentages = document.querySelectorAll(".percentage");
  let dataFields = document.querySelectorAll(".data");

  let classXTab = document.getElementById("classX");
  let classXIITab = document.getElementById("classXII");

  if (isClassXII) {
      classXIITab.classList.add("active");
      classXTab.classList.remove("active");

      percentages.forEach((percentage, index) => {
          percentage.textContent = "100%";
          let modifiedData = [
              "Appeared: 52 | Passed: 52",
              "Appeared: 58 | Passed: 58",
              "Appeared: 53 | Passed: 53",
              "Appeared: 63 | Passed: 63"
          ];
          dataFields[index].textContent = modifiedData[index];
      });

  } else {
      classXTab.classList.add("active");
      classXIITab.classList.remove("active");

      let originalValues = ["100%", "94.59%", "92.31%", "100%"];
      let originalData = [
          "Appeared: 45 | Passed: 45",
          "Appeared: 74 | Passed: 70",
          "Appeared: 78 | Passed: 72",
          "Appeared: 77 | Passed: 77"
      ];

      percentages.forEach((percentage, index) => {
          percentage.textContent = originalValues[index];
          dataFields[index].textContent = originalData[index];
      });
  }
}


function updateTabs(tab) {

  let imgs=document.querySelectorAll('.image');
  let links=document.querySelectorAll('.link');
  let text=document.querySelectorAll('.text');
  if (tab==1){
    imgs.forEach((image) => {
      let newSrc=['../BGMI/images/miniImg1.svg','../BGMI/images/miniImg2.svg','../BGMI/images/miniImg3.svg',
        '../BGMI/images/miniImg4.svg','../BGMI/images/miniImg5.svg','../BGMI/images/miniImg6.svg',
        '../BGMI/images/miniImg7.svg','../BGMI/images/miniImg8.svg'];
       
        })
        links.forEach((link) => {
          let newLink=['Academic Planner','Academic Result','Bal Vatika','Nipun Lakshay'
            ,'Compensation of Academic Loss Programme','Study Materials','Workshops & Trainings','Student Council',
            'Know your School'
          ];
          let newText=['ACADEMIC PLANNER','Academic Result','Pre-primary education program','National Initiative for Proficiency in Reading with Understanding...',
            'Ensures continuity of studies.','Study material provided by the school','Workshops and trainings conducted','STUDENT COUNCIL',
            'All about your school'
          ];
          for(let i=0;i<9;i++){
            links[i].textContent=newLink[i];
            text[i].textContent=newText[i];
          }
        })
      //imgs[index].src=newSrc[index];
      for(let i=0;i<9;i++){
        imgs[i].src=newSrc[i];

      }
    }
  
  if (tab==2) {
    imgs.forEach((image) => {
      let newSrc=['../BGMI/images/miniImg10.svg','../BGMI/images/miniImg11.svg','../BGMI/images/miniImg12.svg',
        '../BGMI/images/miniImg13.svg','../BGMI/images/miniImg14.svg','../BGMI/images/miniImg15.svg',
        '../BGMI/images/miniImg16.svg','../BGMI/images/miniImg17.svg'];
      //imgs[index].src=newSrc[index];
      for(let i=0;i<8;i++){
        imgs[i].src=newSrc[i];
      }
    })

    links.forEach((link) => {
      let newLink=['Atal Tinkering Lab','Digital Language Lab','ICT – eClassrooms & Labs','Library'
        ,'Labs - Physics/Chemistry/Biology','Building & BaLA Initiatives','Sports Infrastructure (Play Fields)','SOP/NDMA'
      ];
      let newText=['Its where student\'\s creativity gets wings ','English Language Lab with Wordsworth Software.'
        ,'ICT infrastructure with Computer Labs and E-Classrooms','SCHOOL LIBRARY DETAILS',
        'Vidyalaya has fully equipped labs.','Bala (building as a learning aid)','Sports Infrastructure (Play Fields)',
        'Standard Operating Procedures for Responding to Disasters.'
      ]
      for(let i=0;i<8;i++){
        links[i].textContent=newLink[i];
        text[i].textContent=newText[i];
      }
    })
  
  }
 
  console.log(tab);
  if (tab==3){
    imgs.forEach((image) => {
      let newSrc=['../BGMI/images/miniImg18.svg','../BGMI/images/miniImg19.svg','../BGMI/images/miniImg20.svg',
        '../BGMI/images/miniImg21.svg','../BGMI/images/miniImg22.svg','../BGMI/images/miniImg23.svg',
        '../BGMI/images/miniImg24.svg','../BGMI/images/miniImg25.svg','../BGMI/images/miniImg26.svg'];
      //imgs[index].src=newSrc[index];
      for(let i=0;i<9;i++){
        imgs[i].src=newSrc[i];
      }
    })
  

    links.forEach((link) => {
      let newLink=['Sports','NCC/Scout & Guides','Education Excursion','Olympiads'
        ,'Exhibition – NCSC/Science/Etc','Ek Bharat Shrestha Bharat','Art & Craft','Fun Day','Youth Parliament'
      ];
      for(let i=0;i<9;i++){
        links[i].textContent=newLink[i];
      }
    })

    newText

  }
  if (tab==4){
    imgs.forEach((image) => {
      let newSrc=['../BGMI/images/miniImg27.svg','../BGMI/images/miniImg28.svg',
        '../BGMI/images/miniImg29.svg','../BGMI/images/miniImg30.svg','../BGMI/images/miniImg31.svg',
        '../BGMI/images/miniImg32.svg','../BGMI/images/miniImg33.svg','../BGMI/images/miniImg34.svg'];
      //imgs[index].src=newSrc[index];
      for(let i=0;i<8;i++){
        imgs[i].src=newSrc[i];
      }
    })
  }


}


// print ("abc" xyz ")