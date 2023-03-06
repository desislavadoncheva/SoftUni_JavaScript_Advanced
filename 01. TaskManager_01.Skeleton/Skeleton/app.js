function solve() {
    let taskInput=document.querySelector('input[type=text]');
    let descriptionInput=document.querySelector("#description");
    let dateInput=document.querySelector("#date");
    let addBtn=document.querySelector("#add");
    addBtn.addEventListener('click',addTask);

   /*  if (taskInput.value.length ==0 && descriptionInput.value.length!==0 && dateInput.value.length!==0){
        addBtn.addEventListener('click',addTask);        
    } */
    
    let openSectionRef=document.querySelector(".orange").parentNode.parentNode;
    let openSection=openSectionRef.querySelectorAll('div')[1];

    let progressSectionRef=document.querySelector(".yellow").parentNode.parentNode;
    let progressSection=progressSectionRef.querySelectorAll('div')[1];

    let completeSectionRef=document.querySelector(".green").parentNode.parentNode;
    let completeSection=completeSectionRef.querySelectorAll('div')[1];

    function addTask(e){
        e.preventDefault();
        let newTaskLine=document.createElement('article');        
        openSection.appendChild(newTaskLine);
        
        let taskTitle=document.createElement('h3');
        taskTitle.innerText=taskInput.value;
        newTaskLine.appendChild(taskTitle);

        let taskDescription=document.createElement('p');
        taskDescription.innerText=`Description: ${descriptionInput.value}`;
        newTaskLine.appendChild(taskDescription);

        let taskDate=document.createElement('p');
        taskDate.innerText=`Due Date: ${dateInput.value}`;
        newTaskLine.appendChild(taskDate);

        let buttonsRef=document.createElement('div');
        buttonsRef.classList.add("flex");
        newTaskLine.appendChild(buttonsRef);

        let greenBtn=document.createElement('button');
        greenBtn.innerText="Start";
        buttonsRef.appendChild(greenBtn);
        greenBtn.addEventListener('click',startTask);

        let redBtn=document.createElement('button');
        redBtn.innerText="Delete";
        buttonsRef.appendChild(redBtn);
        redBtn.addEventListener('click',deleteTask);
    }

    function startTask(e){
        e.preventDefault();
        let taskRef=e.target.parentNode.parentNode;

        let newProgressLine=document.createElement('article');        
        progressSection.appendChild(newProgressLine);
        
        let taskName=taskRef.querySelector('h3');
        let taskTitle=document.createElement('h3');
        taskTitle.innerText=taskName.innerText;
        newProgressLine.appendChild(taskTitle);
        
        let taskDescription=document.createElement('p');
        taskDescription.innerText=taskRef.querySelectorAll('p')[0].innerText;
        newProgressLine.appendChild(taskDescription);

        let taskDate=document.createElement('p');
        taskDate.innerText=taskRef.querySelectorAll('p')[1].innerText;
        newProgressLine.appendChild(taskDate);

        let buttonsRef=document.createElement('div');
        buttonsRef.classList.add("flex");
        newProgressLine.appendChild(buttonsRef);

        let redProgressBtn=document.createElement('button');
        redProgressBtn.innerText="Delete";
        buttonsRef.appendChild(redProgressBtn);
        redProgressBtn.addEventListener('click',deleteProgress);

        let orangeBtn=document.createElement('button');
        orangeBtn.innerText="Finish";
        buttonsRef.appendChild(orangeBtn);
        orangeBtn.addEventListener('click',finishProgress);

        e.target.parentNode.parentNode.remove();
    }

    function finishProgress(e){
        e.preventDefault();
        let progressRef=e.target.parentNode.parentNode;        

        let newCompleteLine=document.createElement('article');        
        completeSection.appendChild(newCompleteLine);
        
        let taskName=progressRef.querySelector('h3');
        let taskTitle=document.createElement('h3');
        taskTitle.innerText=taskName.innerText;
        newCompleteLine.appendChild(taskTitle);
        
        let taskDescription=document.createElement('p');
        taskDescription.innerText=progressRef.querySelectorAll('p')[0].innerText;
        newCompleteLine.appendChild(taskDescription);

        let taskDate=document.createElement('p');
        taskDate.innerText=progressRef.querySelectorAll('p')[1].innerText;
        newCompleteLine.appendChild(taskDate);

        e.target.parentNode.parentNode.remove();
    }

    function deleteTask(e){
        e.preventDefault();
        let taskRef=e.target.parentNode.parentNode.remove();
    }

    function deleteProgress(e){
        e.preventDefault();
        let taskRef=e.target.parentNode.parentNode.remove();
    }
}