let messageStranger = document.querySelector("#messageStranger"),
    submitStranger  = document.querySelector("#submitStranger"),
    shareCode;

let api = axios.create({
                           baseURL: "https://catharsys.staging.f4dev.me/"
                         });

submitStranger.addEventListener("click", (e) => {
  e.preventDefault();

  api.post("/thoughts/", {
    code:      shareCode,
    published: true,
    text:      messageStranger.value
  })
     .then((response) => {
       if(!response.data.error) {
         location.replace("singleMessage.html");
       }
     })
     .catch((error) => {
       console.error(error);
     });

});

function validateCode() {
  const hash     = new URLSearchParams(location.hash.substring(1)),
        code     = hash.get("code"),
        redirect = () => {
          location.replace("singleMessage.html"); // TODO: replace to the page with random entries + some message
        };

  if(!code) {
    return redirect();
  }

  api.get(`/codes/check/${code}`)
     .then(res => {
       const code = res.data;

       if(res.status !== 200 || code.error || code.data.used) {
         return redirect();
       } else {
         shareCode = code.data.id;
       }
     })
     .catch(() => {
       return redirect();
     });
}

validateCode();
