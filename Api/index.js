import axios from "axios";

const baseURL = "https://nominatim.openstreetmap.org/reverse?format=json&";

export const api = {

    // ---------------- Get MapDetails Api -----------------
    getMapDetails: (lat, lon) => {
        return axios.get(`${baseURL}lat=${lat}&lon=${lon}&zoom=18&addressdetails=1-`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },

};