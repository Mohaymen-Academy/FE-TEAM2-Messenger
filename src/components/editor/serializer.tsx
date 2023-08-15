export function parseSlateToHtml(node) {
  return node
    .map((paragraph) => {
      const paragraphHtml = paragraph.children
        .map((child) => {
          let text = child.text;

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

          return text;
        })
        .join("");

      return `<p>${paragraphHtml}</p>`;
    })
    .join("");
}
