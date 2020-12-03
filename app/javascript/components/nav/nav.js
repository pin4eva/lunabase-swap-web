import React from "react";
import Search from "../../icons/search";
import BtnPrimary from "../buttons/primary";

const Nav = () => {
	return (
		<nav>
			<div className="logo">
				<a href="/">LOGO</a>
			</div>

			<div className="menu">
				<ul className="menu-group">
					<a href="#">
						<li>Daily Deals</li>
					</a>

					<a href="#">
						<li>Sell</li>
					</a>

					<a href="/how-it-works">
						<li>How it works</li>
					</a>

					<li>
						<Search />
					</li>
				</ul>
			</div>

			<div>
				<ul className="user-action">
					<a href="#">
						<img src={require("../../icons/cart.svg")} alt="cart icon" />

						<li>Wishlist</li>
					</a>
					<a href="#">
						<img src={require("../../icons/user.svg")} alt="user icon" />
						<li>Login</li>
					</a>
					<a href="/users/register">
						<BtnPrimary title="Sign Up" />
					</a>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
