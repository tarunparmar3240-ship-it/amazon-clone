import axios from "axios";

const BASE_URL = "https://api.freeapi.app/api/v1";

// Custom Axios Instance
const api = axios.create({
    baseURL: BASE_URL,
});

// 2. REQUEST INTERCEPTOR: Har outgoing request mein Token attach karna
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

//3. RESPONSE INTERCEPTOR: 401 ERROR PAKAD KAR TOKEN AUTO-REFRESH KARNA
api.interceptors.response.use(
    (response) => response, //Agar data success response hoo jaye tho
    async(error) => {
        const originalRequest = error.config;

        //Check: AGAR 401 ERROR AAYA AUR REQUEST ABHI TAK RETRY NA HUI HO
        if(error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; //Infinate loop lokne ke liye flag

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                
                if(!refreshToken) {
                    throw new Error("No Refresh token available")
                }

                // Fresh Axios instance se Refresh API hit karna
                const response = await axios.post(`${BASE_URL}/users/refresh-token`, {
                    refreshToken: refreshToken,
                })

                const newAccessToken = response.data?.data?.accessToken;
                const newRefreshToken = response.data?.data?.refreshToken;

                //1. LocalStorage main naye tokens save karna
                localStorage.setItem("accessToken", newAccessToken);
                if(newRefreshToken) {
                    localStorage.setItem("refreshToken", newRefreshToken);
                }

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                //Purani request ko naye token ke sath Dobanara excute karna
                return api(originalRequest);
            } catch (refreshError) {
                // Rrfresh Token bh expire hone par session clea karne kar do
                localStorage.clear();
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error);
    }
)

export default api;
