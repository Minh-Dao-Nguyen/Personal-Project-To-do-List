interface Project {
    _id: string,
    customerID: string,
    name: string,
    description: string,
    status: string,
    sprint: string,
    category: string
}

interface TaskData {
    _id: string,
    projectID: string,
    customerID: string,
    name: string,
    description: string,
    status:string
}

interface Customer {
    _id: string,
    name: string
}
