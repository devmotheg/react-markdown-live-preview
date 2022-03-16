/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const initialMarkdown = `
# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

\`console\` object in JS isn't just for \`.log()\`s.
`;

const Project = () => {
	const [markdown, setMarkdown] = useState(initialMarkdown);

	return (
		<>
			<h1 className="relative py-4 mx-auto mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-neutral-500 w-fit">
				live markdown previer
			</h1>
			<div className="container grid w-5/6 grid-cols-2 gap-4 mx-auto min-h-[calc(70vh)]">
				<textarea
					value={markdown}
					className="min-w-full min-h-full p-4 text-xl rounded shadow-lg outline-none resize-none bg-neutral-100"
					onChange={e => setMarkdown(e.target.value)}></textarea>
				<article className="p-4 text-xl prose-sm prose">
					<ReactMarkdown source={markdown} />
				</article>
			</div>
		</>
	);
};

export default Project;
