export function validateContactFormInput({
  firstName,
  lastName,
  email,
  subject,
  message,
}) {
  let response = {
    msg: "Success!",
    isValid: true,
  };

  if (!email || !email.includes("@")) {
    response = {
      msg: "Invalid Email",
      isValid: false,
    };
  }

  if (!firstName || !lastName) {
    response = {
      msg: "Invalid Name",
      isValid: false,
    };
  }

  if (!subject) {
    response = {
      msg: "Invalid Subject",
      isValid: false,
    };
  }

  if (!message) {
    response = {
      msg: "Invalid Message",
      isValid: false,
    };
  }

  return response;
}
