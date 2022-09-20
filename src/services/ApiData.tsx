import axios from "axios";

class ApiData {
  async loadApiData() {
    const response = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => {
        console.log("Error", err);
      });
    return response;
  }

  async getNextPageData(page: number) {
    const response = await axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .catch((err) => {
        console.log("Error", err);
      });

    return response;
  }
}

export default new ApiData();
