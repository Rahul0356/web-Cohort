let tasks = [
    
        {description:"Write report",completed:true,priority:2},
        {description:"Send email",completed:true,priority:3},
        {description:"Prepare presentation",commpleted:false,priority:1},

    
];

let pendingSortedTasks = tasks
.filter((task)=>!task.commpleted)
.sort((a,b)=> a.priority - b.priority)

console.log(pendingSortedTasks);