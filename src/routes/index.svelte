<script>
    let tasks = [];
    let filter = "all";

    function addTask(task) {
        tasks = [...tasks, { id: Date.now(), text: task, completed: false }];
    }

    function toggleTask(id) {
        tasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
        );
    }

    function deleteTask(id) {
        tasks = tasks.filter((task) => task.id !== id);
    }

    function clearCompleted() {
        tasks = tasks.filter((task) => !task.completed);
    }
</script>

<div class="container mx-auto">
    <h1 class="text-2xl font-bold">Todo App</h1>
    <input type="text" placeholder="Add a new task..." />
    <button on:click={() => addTask(task)}>Add</button>

    <ul>
        {#each tasks as task}
            <li>
                <input
                    type="checkbox"
                    bind:checked={task.completed}
                    on:change={() => toggleTask(task.id)}
                />
                {task.text}
                <button on:click={() => deleteTask(task.id)}>Delete</button>
            </li>
        {/each}
    </ul>
</div>
