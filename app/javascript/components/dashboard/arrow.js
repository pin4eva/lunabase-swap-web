import React from "react";
import PropTypes from "prop-types";

const ArrowComp = ({ rotate }) => {
	const color = rotate ? "#ee7329" : "#b5b5b5";

	return (
		<>
			<svg
				width={13.654}
				height={8.654}
				viewBox="0 0 13.654 8.654"
				className={rotate ? "chevron-rotate" : ""}
			>
				<g data-name="Component 57">
					<g
						data-name="Group 86"
						fill="none"
						stroke={color}
						strokeLinecap="round"
						strokeWidth={2}
					>
						<path data-name="Line 1" d="M1.414 7.072l5.657-5.657" />
						<path data-name="Line 2" d="M12.242 7.243L7.071 1.415" />
					</g>
				</g>
			</svg>
		</>
	);
};

ArrowComp.propTypes = {
	rotate: PropTypes.bool,
};

ArrowComp.defaultProps = {
	rotate: false,
};

export default ArrowComp;
