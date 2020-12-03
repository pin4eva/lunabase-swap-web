import React, { useState } from "react";
import DashboardSidebar from "../../components/dashboard/sidebar";
import MyListingComp from "../../components/dashboard/mylisting";
import InboxTable from "../../components/dashboard/inbox/inbox-table";
import { inboxList } from "../../shared-data/inbox-list";
import NotificationsComp from "../../components/dashboard/notifications";
import EditprofileComp from "../../components/dashboard/editprofile";
import HelpComp from "../../components/dashboard/help";

const Account = () => {
	const [view, setView] = useState("my-listing");

	return (
		<div id="account-page">
			<div className="account-wrapper">
				<div className="account-sidebar">
					<DashboardSidebar onClick={(url) => setView(url)} />
				</div>
				<div className="main-wrapper">
					<div className="container">
						<div className="inner">
							{view === "my-listing" && <MyListingComp />}
							{view === "inbox" && (
								<div className="inbox-container">
									<h3 className="top-heading">Inbox</h3>
									<InboxTable mails={inboxList} />
								</div>
							)}
							{view === "notifications" && <NotificationsComp />}
							{view === "edit-profile" && <EditprofileComp />}
							{view === "help" && <HelpComp />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
