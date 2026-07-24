import type { taskList } from "../../pages/MainBoard/MainBoard";

export async function getLists(){
    const res = await fetch(`http://localhost:3000/`);
    const data: taskList[] = await res.json();

    return data;
};

export async function createList(title: string){
    const res = await fetch(`http://localhost:3000`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title
        })
    });
    const data = await res.json();

    return data;
};

export async function deleteList(listID: string){
    const res = await fetch(`http://localhost:3000/${listID}`, {
        method: "DELETE",
    });

    const data = await res.json();

    return data;
};

export async function addTask(listID: string, task: string){
    const res = await fetch(`http://localhost:3000/${listID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            task: task,
        }),
    });

    const data = res.json();

    return data;
};

export async function deleteTask(listID: string, taskID: string){
    const res = await fetch(`http://localhost:3000/${listID}/task/${taskID}`, {
        method: "DELETE",
    });

    return res.json();
};

export async function toggleComplete(listID: string, taskID: string){
    const res = await fetch(`http://localhost:3000/${listID}/task/${taskID}`, {
        method: "PATCH",
    });

    return res.json();
};

export async function updateTask(listID: string, taskID: string, updatedTask: string){
    const res = await fetch(`http://localhost:3000/${listID}/task/${taskID}/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            updatedTask: updatedTask,
        }),
    });

    return res.json();
};



