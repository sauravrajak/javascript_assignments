function isValidLinkedInUrl(url) {
    let linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z\d]$/;
    return linkedinRegex.test(url);
}

let inputUrls = [
    "https://www.linkedin.com/in/john-doe-123",
    "https://www.linkedin.com/in/123_jane-doe",
    "https://www.linkedin.com/in/invalid*profile",
    "https://www.linkedin.com/profile/view?id=123"
];

inputUrls.forEach((url) => {
    if (isValidLinkedInUrl(url)) {
        console.log(`${url} is a valid LinkedIn profile URL`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL`);
    }
});
