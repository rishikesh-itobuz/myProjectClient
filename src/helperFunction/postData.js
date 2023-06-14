// import { Cookie } from "@mui/icons-material";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
const postData = async (url, data, isLogin) => {
  // console.log(data)
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const userData = await response.json();

  if (!userData.success) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: userData.message,
    });
  } else {
    console.log(isLogin);
    if (isLogin) Cookies.set("token", userData.data.accesstoken);
    console.log("before");
    Swal.fire({ icon: "success", title: "success", text: userData.message });
  }
};

export default postData;
