/**
 * @interface IGenerateMarkdown
 * @description Interface for generateMarkdown function
 * @property {string} title - Title of the link
 * @property {string} url - Url of the link
 * @property {string} description - Description of the link
 */
interface IGenerateMarkdown {
    title: string,
    url: string,
    description: string
}

/**
 * @author 0xlino
 * @param data 
 * @returns markdown string
 * @description Generates markdown for a link
 * @example
 * const data = {
 * title: 'Google',
 * url: 'https://www.google.com',
 * description: 'Search engine'
 * }
 * const markdown = generateMarkdown(data);
 * console.log(markdown);
 * // - [Google](https://www.google.com) - Search engine
 */
const generateMarkdown = (data: IGenerateMarkdown): string => {
    const linkTitle = `[${data.title}]`; 
    const linkUrl = `(${data.url})`;
    const link = `${linkTitle}${linkUrl}`;
    const markdown = `- ${link} - ${data.description}`;
    return markdown;
}

export default generateMarkdown;
export { IGenerateMarkdown };