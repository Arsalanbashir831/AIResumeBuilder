export const textFormatting = (text) => {
    const regex = /#\w+|\*\w+\*|[^:\s]+:|.*?:/g;
    return text.replace(regex, '').trim();
  };
  