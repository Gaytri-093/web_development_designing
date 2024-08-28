const button = document.getElementById('add');
const div = document.getElementById('task');

const countdetails = document.getElementById('count');
const allclear = document.getElementById('allclear');
let TaskCount = 0;
let selectCount=0;
let zeroC = 1;
const input = document.getElementById('input');
button.addEventListener('click',addTask);
function addTask(){
    
   if(input.value !='') {
    TaskCount++;
    taskDetails();
    clearAll();
   
    if(TaskCount){
        countdetails.style.display='block';
        allclear.style.display='block';
    
      }
      
      

    
    console.log(TaskCount);
    console.log('inside addTask');
    
    console.log(input.value);
    const p = document.createElement('p');
     const deleteBtn = document.createElement('button');
     deleteBtn.innerHTML=`Del`;
    p.innerHTML=input.value;
    p.classList.add('para');
    deleteBtn.classList.add('buttons');
    div.appendChild(p);
    div.appendChild(deleteBtn)

    p.addEventListener('click',selectOpt);
    function selectOpt(){
        p.style.backgroundColor='rgb(85, 172, 85)';
        selectCount++;
        taskDetails();
         
    }

    input.value='';
    

    
  
    
    deleteBtn.addEventListener('click',delTask);
    

    function delTask(){
        p.remove();
        deleteBtn.remove();
        TaskCount--;
        if(p.style.backgroundColor == 'rgb(85, 172, 85)'){
            selectCount--;
        }
        taskDetails();
        if(TaskCount == 0){
            countdetails.style.display='none';
            allclear.style.display='none';
        
          }
         
        
        
        
    }
 
    function taskDetails(){
        // if(TaskCount != ''){
        //     const resultpara = document.createElement('p');
        //     resultpara.textContent=`Added Task${TaskCount} & completed Tasks ${selectCount}`
        //     countdetails.appendChild(resultpara);
     
        //  }
         if(TaskCount || selectCount){
            countdetails.removeChild(countdetails.firstChild);
            const resultpara = document.createElement('p');
           
            resultpara.classList.add('resultpara');
            resultpara.textContent=`${TaskCount} Task Added  & ${selectCount} Tasks Completed `
            
            countdetails.appendChild(resultpara);
            
            
        }
       
    }
    function clearAll(){
        if(TaskCount || selectCount){
            allclear.removeChild(allclear.firstChild);

        const clrbtn = document.createElement('button');
        clrbtn.classList.add('allclrbtn');
        clrbtn.innerHTML = `All Clear`;
        allclear.appendChild(clrbtn);
        clrbtn.addEventListener('click',()=>{
            
            zeroC--;
            TaskCount=0;
            selectCount=0
            // deleteBtn.style.display='none';
            let paras = document.getElementsByTagName('p');
            
            console.log(paras);
            for(let i = 0;i< paras.length; i++){
                paras[i].style.display='none';
            }
            let allbuttons = div.getElementsByTagName('button');
            for(let i=0;i<allbuttons.length ;i++){
               allbuttons[i].style.display='none';
            }
            // let deleteButtons = document.getElementsByTagName('button');
            // console.log(deleteButtons);
            // for(let i=0;i<deleteButtons.length;i++){
            //     deleteButtons.style.display='none';
            // }
            clrbtn.style.display='none';
            if(zeroC == 0){
                countdetails.style.display='none';
                allclear.style.display='none';

            }
           
            
        });
        
        

       
        
       
       }

   }
  
   
   }

   else{
    alert('Please Enter Task');
   }

   
}




