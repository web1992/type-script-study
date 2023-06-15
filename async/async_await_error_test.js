async function run(value) {
    await Promise.reject("I am error");
}


run("async function run").then(task_suc).catch(task_error)

function task_suc(msg) {
    console.log(msg);
}

function task_error(msg) {
    console.error(msg);
}
