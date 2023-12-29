
export const fetchProject = async () => {
    try {
        const res = await fetch(
            "http://localhost:8080/api/v1/projects"
        );
        return await res.json();
    } catch (error){
        console.error("Error fetching project", error);
        return null;
    }
}

export const fetchTask = async () => {
    try {
        const res = await fetch(
            "http://localhost:8080/api/v1/tasks"
        );
        return await res.json();
    } catch (error){
        console.error("Error fetching task", error);
        return null;
    }
}

export const fetchCustomer = async() => {
    try {
        const res = await fetch(
            "http://localhost:8080/api/v1/customers"
        );
        return await res.json();
    } catch (error){
        console.error("Error fetching customer", error);
        return null;
    }
}