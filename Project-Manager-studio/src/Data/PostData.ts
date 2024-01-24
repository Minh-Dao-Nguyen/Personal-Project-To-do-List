export async function ChangeTaskStatus(task: TaskData) {
    const headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    const request: RequestInfo = new Request('http://localhost:8080/api/v1/tasks/changeStatus',
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(task)
        })


    return fetch(request)
        .then(res => {
            //console.log("got response:", res)
        })
}