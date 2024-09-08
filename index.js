let passwordlength = document.getElementById("passwordlength");
let password = document.getElementById("password");

function GetPassword() {
  const lowerAlphabet = "abcdefghijklmnopqrstupwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUPWXYZ";
  const numeric = "0123456789";
  const simbols = '!@#$%^&*()_-+={}[]",./?|~`;:';

  const data = lowerAlphabet + upperAlphabet + numeric + simbols;
  let generator = "";

  if (!passwordlength.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Password Length Required',
      text: 'Please enter the length of the password.',
    });
    return;
  }

  for (let index = 0; index < passwordlength.value; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  password.value = generator;

  Swal.fire({
    icon: 'success',
    title: 'Password Generated',
    text: 'Your password has been generated successfully!',
  });
}

function SavePassword() {
  const data = password.value;
  const filename = "password.txt";

  if (!data) {
    Swal.fire({
      icon: 'warning',
      title: 'No Password to Save',
      text: 'Please generate a password first before saving it.',
    });
    return;
  }

  const file = new Blob([data], { type: "text/plain" });
  const a = document.createElement("a");
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  Swal.fire({
    icon: 'success',
    title: 'Password Saved',
    text: 'Your password has been successfully downloaded!',
  });
}
