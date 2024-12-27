export default function () {
  const convertToKebabCase = (value: String) => {
    return value
      .replace(/([a-z])([A-Z])/g, "$1-$2") // Add hyphen between camelCase words
      .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphen
      .toLowerCase(); // Convert to lowercase
  };
  const convertToSnakeCase = (value: String) => {
    return value.toLowerCase().replace(/\s+/g, "_").replace(/&/g, "x");
  };
  const convertToCamelCase = (value: String) => {
    const words = value.split(" ");
    return words
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  };
  const convertToNormalString = (value: String) => {
    return value
      .replace(/[-_]/g, " ") // Replace - and _ with space
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
      .toLowerCase();
  };

  return {
    convertToKebabCase,
    convertToSnakeCase,
    convertToCamelCase,
    convertToNormalString,
  };
}
