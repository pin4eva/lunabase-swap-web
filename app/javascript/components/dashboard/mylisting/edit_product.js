import PropTypes from "prop-types";
import React from "react";
import image2 from "../../../assets/prod-1.png";
import image3 from "../../../assets/prod-2.png";
import image4 from "../../../assets/prod-3.png";
import image1 from "../../../assets/product_14.jpg";
import { AddComp, RemoveIcon } from "../../icons";

const FeaturedList = ({ onDelete, onAdd }) => {
	const images = [image2, image3, image4];
	return (
		<div className="featured_list_wrapper">
			<div className="inner">
				<div className="image_wrapper">
					<div className="items">
						<div className="box text-center">
							<a onClick={() => onAdd()}>
								<AddComp />
							</a>
						</div>
						{images.map((image, i) => (
							<div className="image" key={i + 1}>
								<img src={image} alt="" />
								<a onClick={() => onDelete(image)}>
									<RemoveIcon />
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

FeaturedList.propTypes = {
	onDelete: PropTypes.func,
	onAdd: PropTypes.func,
};

const EditProductComp = (props) => {
	return (
		<>
			<div className="edit_product_wrapper">
				<div className="inner">
					<h1 className="heading">Edit Product</h1>

					<h6>Product Featured Image</h6>
					<div className="featured_image">
						<img src={image1} alt="" />
					</div>

					<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-input" />
					</div>
					<div className="form-group">
						<label>Add Photo</label>
						<div className="text-small">
							Supported format: *jpg, *png. Each picture must not exceed 5mb,
							note that the first picture is the featured image.
						</div>
						<FeaturedList onAdd={() => setShowModal(!showModal)} />
					</div>
					<div className="form-col">
						<div className="form-group">
							<label>Category</label>
							<select name="category" className="form-select">
								<option>Electronics</option>
							</select>
						</div>
						<div className="form-group">
							<label>Condition</label>
							<select name="condition" className="form-select">
								<option>Open - Never used</option>
							</select>
						</div>
					</div>
					<div className="form-col">
						<div className="form-group">
							<label>Price</label>
							<input
								type="text"
								className="form-input"
								placeholder="N520,000"
							/>
						</div>
						<div className="form-group">
							<label>Quantity</label>
							<input type="number" className="form-input" placeholder="01" />
						</div>
					</div>

					<div className="form-group">
						<label>Item Description</label>
						<textarea
							cols="30"
							rows="10"
							className="form-input"
							defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
            Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Nulla vitae elit libero, a pharetra augue.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec
            id elit non mi porta gravida at eget metus."
						></textarea>
					</div>
					<div className="form-group">
						<label>Selling Option</label>
						<div className="check-box_wrapper">
							<input type="checkbox" name="" className="form-check" />
							<label>Buy now</label>
							<input type="checkbox" name="" className="form-check" />
							<label>Swap</label>
							<input type="checkbox" name="" className="form-check" />
							<label>Glitz</label>
						</div>
					</div>

					<div className="form-group">
						<label>Delivery Option</label>
						<input
							type="text"
							className="form-input"
							placeholder="Pickup delivery"
						/>
					</div>

					<div className="button-group">
						<div className="inner">
							<button className="btn btn-outline">Cancel</button>
							<button className="btn btn-primary">Post Product</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

EditProductComp.propTypes = {};

export default EditProductComp;
