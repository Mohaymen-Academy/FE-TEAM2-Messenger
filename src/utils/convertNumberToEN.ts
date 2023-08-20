export function convertNumberToEN(input: string): string {
  const persianNumerals = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const numericNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let output = "";
  for (let i = 0; i < input.length; i++) {
    const index = persianNumerals.indexOf(input[i]);
    if (index !== -1) {
      output += numericNumerals[index];
    } else {
      output += input[i];
    }
  }

  return output;
}
