import { defer } from "react-router-dom";
import apiRequest from "./apiRequest"

export const singlePageLoader =async ({request,params})=>{
    const res = await apiRequest.get("/posts/"+params.id);
    return res.data;
}

export const listPageLoader = ({request,params})=>{
    const query = request.url.split("?")[1];
    const postPromise = apiRequest.get("/posts/all?"+query)
    return defer({
        postResponse:postPromise
    });
}

export const profilePageLoader = ()=>{
    const postPromise = apiRequest.get("/user/profilePosts")
    const chatPromise = apiRequest.get("/chats/all");
    return defer({
        userPostResponse:postPromise,
        chatResponse : chatPromise
    });
}