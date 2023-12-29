import {fetchCustomer, fetchProject, fetchTask} from "@/Data/FetchData.ts";

export async function GetProjectData():Promise<Project[]> {
    return await fetchProject() as Project [];
}

export async function GetTaskData():Promise<TaskData[]> {
    return await fetchTask() as TaskData[];
}

export async function GetCustomerData():Promise<Customer[]> {
    return await fetchCustomer() as Customer[];
}