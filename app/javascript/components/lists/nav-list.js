import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Item = ({ List, onClick }) => {
	const sideVariants = {
		init: {
			x: 0,
		},
		hover: {
			x: 5,
			color: "#ee7329",
		},
	};

	return (
		<>
			{List.map(({ title, icon, url }, index) => {
				return (
					<motion.div key={index} onClick={() => onClick(url)}>
						<img src={icon} alt={title} />
						<motion.span
							variants={sideVariants}
							initial="init"
							whileHover="hover"
						>
							{title}
						</motion.span>
					</motion.div>
				);
			})}
		</>
	);
};

Item.propTypes = {
	onClick: PropTypes.func,
};
export default Item;
