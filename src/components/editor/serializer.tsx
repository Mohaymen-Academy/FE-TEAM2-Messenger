export function parseSlateToHtml(node: any[]) {
  return node
    .map((paragraph) => {
      const paragraphHtml = paragraph.children
        .map((child:any) => {
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
