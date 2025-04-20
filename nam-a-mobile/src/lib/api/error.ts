import { handleNotify } from "@/utils/handleNotify";
import { AxiosError } from "axios";

const handleError = (error: AxiosError) => {
  if (error.response) {
    const { data } = error.response;

    if (typeof data === "object" && data !== null) {
      const errorData = data as BaseResponse;

      switch (errorData.statusCode) {
        case 400:
          handleNotify("Error", errorData.message ?? "Bad Request", "error");
          break;

        case 401:
          handleNotify("Error", errorData.message ?? "Unauthorized", "error");

          // 🔁 Redirect to login (use replace to prevent going back)
          if (typeof window !== "undefined") {
            window.location.replace("/login");
          }
          break;

        case 403:
          handleNotify("Forbidden", errorData.message ?? "Forbidden", "error");
          break;

        case 404:
          handleNotify("Error", errorData.message ?? "Not Found", "error");
          break;

        case 409:
          handleNotify("Conflict", errorData.message ?? "Conflict", "error");
          break;

        case 500:
          handleNotify("Internal Server Error", errorData.message ?? "Something went wrong", "error");
          break;

        default:
          handleNotify("Error", errorData.message ?? "Unexpected error", "error");
          break;
      }
    } else {
      console.error("Unexpected response data format:", data);
    }
  } else {
    console.error("No response received:", error.message);
    handleNotify("Error", error.message, "error");
  }
};

export default handleError;
