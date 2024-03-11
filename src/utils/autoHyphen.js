export const autoHyphenPhoneNumber = (e, setValue) => {
  const rawPhone = e.target.value.replace(/-/g, "");
  let formattedPhone = "";

  if (rawPhone.length < 4) {
    formattedPhone = rawPhone;
  } else if (rawPhone.length < 7) {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`;
  } else if (rawPhone.length < 11) {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
      3,
      7
    )}-${rawPhone.slice(7)}`;
  } else {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
      3,
      7
    )}-${rawPhone.slice(7, 11)}`;
  }

  const displayPhone = formattedPhone.length > 0 ? formattedPhone : "";
  setValue(displayPhone);
};
