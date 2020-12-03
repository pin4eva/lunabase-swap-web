import React, { useState } from "react";
import PropTypes from "prop-types";

const SingleTable = ({ mail }) => {
	const [isActive, setActive] = useState(false);

	return (
		<div className="inbox-table">
			<div className="inbox-wrapper">
				<div className="inner">
					<div className="d-flex ">
						<img
							src={require("../../../assets/inbox_icon.svg")}
							alt={mail.title}
							className="inbox_icon"
						/>
						<div
							className="inbox-heading d-flex w-100"
							onClick={() => setActive(!isActive)}
						>
							<p className="flex-1">{mail.title}</p>

							<p className="mr-2">{mail.date}</p>
						</div>
					</div>
					<div className={`body-wrapper ${isActive && "show"}`}>
						<div className="message-wrapper">
							<div className="message-head mb-2">
								<p className="text-small mt-2">From: {mail.from}</p>
								<p className="text-small">Date: {mail.date}</p>
							</div>

							<div>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
								quod porro obcaecati iusto et similique vel perferendis vitae
								provident, fuga distinctio explicabo odio maxime sapiente
								doloremque aliquid veritatis pariatur nihil?
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const InboxTable = ({ mails }) => {
	return (
		<>
			{mails.map((mail, i) => (
				<SingleTable key={i + 1} mail={mail} />
			))}
		</>
	);
};

InboxTable.propTypes = {
	mails: PropTypes.array,
};
export default InboxTable;

// const inboxItem = {
//   icon: require("../../../assets/inbox_icon.svg"),
//   title: "Nokia Lumia 920 Swap",
//   author: "David_Joe",
//   date: "21/04/2020",
// };
