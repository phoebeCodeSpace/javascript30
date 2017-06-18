const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxesArr = Array.from(checkboxes);


checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck))

let lastCheckbox; //标记上一个checkbox
function handleCheck(e){
  if(!lastCheckbox) lastCheckbox=this;
  if(e.shiftKey){
    let start = checkboxesArr.indexOf(lastCheckbox),
        end = checkboxesArr.indexOf(this);
        //newCheckboxesArr区间为两次标记之间的数组
        let newCheckboxesArr = checkboxesArr.slice(Math.min(start, end)+1,Math.max(start, end));
        console.log(newCheckboxesArr);

        newCheckboxesArr.forEach(input=>{
          input.checked = !input.checked;
        })
  }
  lastCheckbox=this;  //给上一个checkbox重新赋值
}
