/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Project = () => {
	const [markdown, setMarkdown] = useState("");

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
