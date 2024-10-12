document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskName = document.getElementById('taskName').value;
    console.log(`Task Name: ${taskName}`); // عرض اسم التسك في الكونسول

    if (taskName !== '') {
        const taskList = document.getElementById('tasks');
        const li = document.createElement('li');
        li.textContent = taskName;
        taskList.appendChild(li);
        
        // تنظيف الحقل
        document.getElementById('taskName').value = ''; 
    } else {
        alert('من فضلك أدخل اسم التسك');
    }
});
