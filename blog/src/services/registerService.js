import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

async function registerUser(userDetails) {
    const response = await axios.post(baseUrl, userDetails);
    return response.data;
};

export default { registerUser };