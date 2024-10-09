document.addEventListener("DOMContentLoaded", () => {
  // your code here
// MY FUNCTION NAMES AND LAYOUT MIGHT LOOK A BIT FAMILIAR BEACUSE I WAS CODING ALONG WITH "Ikes" FROM FLATION SCHOOL
// DURING HER DOM EVENTS: VIDEO [WEEK:2 DAY:10]. THEN AFTER I ADDED MY CHNAGES.
  let form = document.querySelector('#create_task_form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const priorityValue = e.target.priorityValue.value
      const tasks = e.target.new_task_description.value
      buildToDo(tasks, priorityValue)
      form.reset() 
    })
})
//A FUNCTION THAT WILL BE INVOKED WHEN MY anonymous (e) FUNCTION IS CALLED 
function buildToDo(todo, priorityValue) {
  console.log(todo)
  let p = document.createElement('p')
  p.className = 'thingsToDo'
  // CONDITIONAL STATEMENTS TO DETERMINE TEXT COLOR BASED ON PRIORITY SELECTED
  if (priorityValue === 'high') {
      p.style.color = 'red'
  } else if (priorityValue === 'medium') {
      p.style.color = 'yellow'
  } else if (priorityValue === 'low') {
      p.style.color = 'green'
  }
  // CREATED A CHECKBOX FOR USER TO MARK IF THE TASK IS COMPLETE OR NOT
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  // MOST OF THE EXAMPLES I SAW ONLINE (YOUTUBE) USED A 'ternary operator?' BUT I OPTED TO 
  // JUST USE CONDITIONAL STATEMENTS BECAUSE THEY ARE MORE DIRECT/ MAKE MORE SENSE TO ME 
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      p.style.textDecoration = 'line-through' 
  } else {
      p.style.textDecoration = 'none' 
  }
  })
  // CREATED A REMOVE / DELETE BUTTON
  let btn = document.createElement('button')
  btn.className = 'btn'
  btn.addEventListener('click', handleDelete)
  btn.textContent = '  x  '
  // APPENDED ALL MY CHANGES 
  // I DECIDED TO GROUP THEM TOGETHER BECAUSE WHEN I  APPENDED DIRECTLY AFTER MAKING / ADDING 
  // AN EVENT THE SITE WOULDN'T TAKE ANY OF MY INPUTS SO IDECIDED TO APPENED THEM TOGETHER SO ALL THE
  // CHNAGES GET SAVED AT THE SAME TIME (IT WORKED)
  p.appendChild(checkbox)
  p.appendChild(document.createTextNode(` ${todo} `)) // Adding text separately
  p.appendChild(btn)
  document.querySelector("#task_container").appendChild(p)
}
// SEPARATE FUNCTION TO REMOVE THE TASK WHEN THE DELETE BUTTON IS CLICKED
function handleDelete(e) {
    e.target.parentNode.remove() 
}
