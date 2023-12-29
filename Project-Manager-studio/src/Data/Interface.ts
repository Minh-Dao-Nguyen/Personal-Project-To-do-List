interface Project {
    id: string,
    customerID: string,
    name: string,
    description: string,
    status: string,
    sprint: string,
    category: string
}

interface TaskData {
    id: string,
    projectID: string,
    customerID: string,
    name: string,
    description: string,
    status:string
}

interface Customer {
    id: string,
    name: string
}
