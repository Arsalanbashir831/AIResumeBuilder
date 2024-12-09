export const textFormatting = (text) => {
  // Ensure 'text' is a string
  const str = String(text);
  const regex = /#\w+|\*\w+\*|[^:\s]+:|.*?:/g;
  return str.replace(regex, '').trim();
};
