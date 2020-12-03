import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckBox = ({ bg, className }) => {
	const [checked, setChecked] = useState(false);
	return (
		<div className="custom-checkbox">
			<label className="container">
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<span
					className={`checkmark ${className}`}
					style={{ backgroundColor: checked ? "#ee7329" : bg }}
				></span>
			</label>
		</div>
	);
};

CheckBox.propTypes = {
	bg: PropTypes.string,
	className: PropTypes.string,
};

CheckBox.defaultProps = {
	bg: "#eee",
};

export default CheckBox;
