async function run(value) {
    console.log(value);
    await time_cost_run();

}

async function time_cost_run() {
    return new Promise((r) => {
        setTimeout(r, 1000);
    })
}


run("async function run").then(task_is_done)

function task_is_done() {
    console.log("done with wait >>>");
}

console.log("done whit not wait >>>");