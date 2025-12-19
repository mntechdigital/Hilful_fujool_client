import { clientApiRequest } from "@/lib/apiRequest";

const response = await clientApiRequest("roles", {
    method: "GET",
    authRequired: true,

    return response;
});
