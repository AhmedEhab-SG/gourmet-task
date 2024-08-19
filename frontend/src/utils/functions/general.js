const trim = (className) => className.replace(/\s+/g, " ").trim();

const convertToLocal = (date) => new Date(date).toLocaleDateString();

const pascalCase = (fullString) =>
  fullString
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export { trim, convertToLocal, pascalCase };
