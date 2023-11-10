import axios from "axios";

const BASE_URL = "https://65215831a4199548356d1630.mockapi.io/api/v1/";

export const fetchData = async (page, limit) => {
  try {
    const response = await axios.get(`${BASE_URL}/advert`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};