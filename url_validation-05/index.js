let input = "https://www.pwskills.com";

let urlRegex = /^(http|https):\/\/[\w.]+[a-zA-Z]+$/;

if (urlRegex.test(input)) {
  console.log("Input matches the URL pattern");
} else {
  console.log("Input does not match the URL pattern");
}
