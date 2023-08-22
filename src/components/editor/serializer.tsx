export function parseSlateToHtml(node: any[]) {
  // console.log(node);
  return node
    .map((paragraph) => {
      const paragraphHtml = paragraph.children
        .map((child: any) => {
          let text = sanitizeInput(child.text);

          if (child.bold) {
            text = `<strong>${text}</strong>`;
          }

          if (child.italic) {
            text = `<em>${text}</em>`;
          }

          if (child.underline) {
            text = `<u>${text}</u>`;
          }

          if (child.spoiler) {
            text = `<span class="spoiler">${text}</span>`;
          }

          if (child.strike) {
            text = `<span class="line-through">${text}</span>`;
          }

          return text;
        })
        .join("");

      return `<p>${paragraphHtml}</p>`;
    })
    .join("");
}

function sanitizeInput(inputString: string) {
  // Remove <script> tags and their contents
  // const sanitizedStringWithoutScripts = inputString.replace(
  //   /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  //   ""
  // );
  // // Remove HTML tags using regular expression
  // const sanitizedStringWithoutTags = sanitizedStringWithoutScripts.replace(
  //   /<\/?[^>]+(>|$)/g,
  //   ""
  // );
  // Remove < and > characters
  const sanitizedStringWithoutAngleBrackets = inputString
    .replace(/</g, "{")
    .replace(/>/g, "}");
  return sanitizedStringWithoutAngleBrackets;
}
