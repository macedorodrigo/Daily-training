function domainName(url) {
  // Remove protocol (http/https) and www if present
  const strippedUrl = url.replace(/(^\w+:|^)\/\//, '').replace(/^www\./, '');

  // Extract domain name using regex
  const domainName = strippedUrl.match(/^([^.]+)/);

  if (domainName) {
    return domainName[0];
  } else {
    return null;
  }
}


// Exemplos de uso
const url1 = "http://github.com/carbonfive/raygun";
const url2 = "http://www.zombie-bites.com";
const url3 = "https://www.cnet.com";

console.log(domainName(url1)); // Output: "github"
console.log(domainName(url2)); // Output: "zombie-bites"
console.log(domainName(url3)); // Output: "cnet"
