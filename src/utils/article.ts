export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200 // Average reading words per minute
	let contentWithoutCode = content.replace(/(?:```)([\s\S]*?)(?:```)/g, '') // Remove code blocks
	contentWithoutCode = contentWithoutCode.replace(/\<img([^\>]+)\>/g, '') // Remove <img> tags
	console.log(contentWithoutCode)
	const numberOfWords = contentWithoutCode.split(/\s+/g).length // Split by space to get array of words
	return Math.ceil(numberOfWords / wordsPerMinute)
}
