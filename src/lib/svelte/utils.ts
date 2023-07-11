export const wrapLine = (lines: any) => {
	lines.forEach((line: HTMLElement, index: number) => {
		const origLine = line.innerHTML;
		const wrappedLine = '<div class="lineInner" data-order="' + index + '">' + origLine + '</div>';
		line.innerHTML = wrappedLine;
	});
};

export const removeOverflow = (target: HTMLElement) => {
	target?.parentElement?.classList.add('overflowNormal');
};
