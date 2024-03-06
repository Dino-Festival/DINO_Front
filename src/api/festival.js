import { axiosInstance } from "./axiosinstance";

export const postUserData = async (data) => {
  try {
    let formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    const response = await axiosInstance.post(
      `/api/v1/festival/match`,
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
