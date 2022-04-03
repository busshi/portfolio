import React, { Fragment, ReactElement, useState } from "react";

export type TooltipProps = {
	className?: string;
	content: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, content, className }) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Fragment>
			{React.Children.map(children, (tmp) => {
				const child = tmp as ReactElement;
				const childBaseInlineStyle = child.props.style;
				const childInlineStyle = {
					...(typeof childBaseInlineStyle === "object"
						? { ...childBaseInlineStyle }
						: {}),
					position: "relative",
				};

				return React.cloneElement(child, {
					style: childInlineStyle,
					onMouseOver: () => {
						setIsVisible(true);
					},
					onMouseOut: () => {
						setIsVisible(false);
					},

					children: (
						<Fragment>
							{child.props.children}
							{isVisible && (
								<div
									className={`absolute left-0 top-3 py-1 px-2 text-sm md:text-md uppercase whitespace-nowrap translate-y-12 ${className}`}
								>
									{content}
								</div>
							)}
						</Fragment>
					),
				});
			})}
		</Fragment>
	);
};

export default Tooltip;