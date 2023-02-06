export function truncate(text: string, maxLength: number) {
    const substr: string = text.slice(0, maxLength);
    return `${substr.slice(0, substr.lastIndexOf(" "))}…`
}
