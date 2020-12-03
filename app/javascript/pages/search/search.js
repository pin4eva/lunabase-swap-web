import React from "react";
import SearchSidebar from "../../components/search/sidebar";
import ProductCard from "../../components/card/product-card";
import { Products } from "../../shared-data/products";
// import { SearchIcon } from "../../components/icons";
import SearchIcon from "../../assets/search.svg";
import CheckBox from "../../components/check-box";

const Search = () => {
	return (
		<div id="search_page">
			<div className="wrapper">
				<div className="inner">
					<div className="container">
						<div className="flex-container">
							<div className="sidebar_wrapper">
								<SearchSidebar />
							</div>
							<div className="main-wrapper">
								<div className="inner">
									<div className="c-container">
										<div className="top-search">
											<h2>Search Results</h2>
											<p>4 results found</p>
										</div>

										<div className="search-input">
											<img src={SearchIcon} alt="" />
											<input
												type="search"
												className="w-100 form-input "
												placeholder="search"
											/>
										</div>

										<div className="product-result">
											<div className="cards">
												<ProductCard list={Products.splice(0, 4)} />
											</div>
										</div>
										<CheckBox />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
