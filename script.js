const btnCalculate = document.querySelector('.btn-outline-primary')
const btnAdd = document.querySelector('.btn-outline-danger')
const budgetValue = document.querySelector('#enteredBudget')
const expense = document.querySelector('#entered-Expense')
const expenseAmount = document.querySelector('#entered-ExpenseAmount')
const moneyAmount = document.querySelector('.money-amount')
const expenseList = document.querySelector('.expenseList')
const expenseValueList = document.querySelector('.valueList')
const moneyLeft = document.querySelector('.money-left')
const moneySpent = document.querySelector('.money-spent')


let totalBudget=0
let totalMoneySpent=0
let arr=[]
btnCalculate.addEventListener('click',()=>{
    totalBudget=budgetValue.value;
    totalbalance()
    budgetValue.value=''
})


btnAdd.addEventListener('click',()=>{
    if(expense.value.trim()==='' || expenseAmount.value.trim()===''){
        alert('please enter value')
        return
    }

    let obj={}
    obj.title=expense.value
    obj.spent = expenseAmount.value
    arr.push(obj)
    console.log(arr)
   
    balanceLeft()
    displayList()
    expense.value=''
    expenseAmount.value=''

    

})

const displayList=()=>{
    let totalList=''
   let eachList=''
   
    arr.forEach((item,index)=>{  
        eachList=`<div class="list-row">
        <p>- <span>${item.title}</span></p>
        <p>${item.spent}</p>
        <div>
            <button class="btn btn-primary" onclick=editTask(${index})>
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
           <button class="btn btn-danger" onclick=deleteTask(${index})>
           <i class="fa-solid fa-trash-can"></i>
           </button>
        </div></div>
        
        `
        totalList=totalList+ "<br>" +eachList
        
    })
    const list = document.querySelector('.a')
    
    
    list.innerHTML=totalList
      
}

const deleteTask=(index)=>{
    arr =arr.filter((task, i)=>i !==index)
    

    balanceLeft()
    console.log(arr)
    displayList()
  

}
const  balanceLeft=()=>{
    totalMoneySpent=0

    arr.forEach((item)=>{
        totalMoneySpent+=Number(item.spent)
        console.log(item.spent)

    })
    moneyAmount.innerHTML=totalBudget
    moneyLeft.innerHTML=totalBudget-totalMoneySpent
    moneySpent.innerHTML=totalMoneySpent
}
const totalbalance=()=>{
   
    moneyAmount.innerHTML=totalBudget
    moneyLeft.innerHTML=totalBudget-moneySpent.innerHTML
}
const editTask=(index)=>{
    expense.value=arr[index].title
    expenseAmount.value=arr[index].spent
    arr.splice(index,1)
    displayList()
    balanceLeft()

    btnAdd.addEventListener('click',()=>{
        
        displayList()
        balanceLeft()

    })

}





