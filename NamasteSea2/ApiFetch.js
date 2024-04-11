const API_URL = "https://api.github.com/users/JagdishKumar2023";

async function handlePromises() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromises();
