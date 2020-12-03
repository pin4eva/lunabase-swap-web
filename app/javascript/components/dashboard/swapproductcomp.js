import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { AddComp, RemoveIcon } from "../icons";

const ImagePreview = ({ onDelete, image }) => {
	return (
		<div className="image-preview-wrapper">
			<div className="image">
				<img src={image.file} alt="" />
				<a onClick={() => onDelete(image.id)}>
					<RemoveIcon />
				</a>
			</div>
		</div>
	);
};

ImagePreview.propTypes = {
	image: PropTypes.object,
	onDelete: PropTypes.func,
};

const SwapProductComp = ({ show, close }) => {
	const [images, setImages] = useState([]);
	const [info, setInfo] = useState({
		product_name: "",
		price: "",
	});
	const [ok, setOk] = useState(false);
	const fileRef = useRef();

	useEffect(() => {
		if (images.length >= 1 && info.price && info.product_name) setOk(true);
	}, [info]);

	const handleImage = (e) => {
		let file = e.target.files[0];
		file = URL.createObjectURL(file);
		setImages([...images, { file, id: Date.now() }]);
	};

	const handleFile = () => {
		fileRef.current.click();
	};

	const handleChange = (e) => {
		let { name, value } = e.target;

		setInfo({ ...info, [name]: value });
	};

	const handleDelete = (id) => {
		console.log(id);
		setImages(images.filter((image) => image.id !== id));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(info);
		close();
	};

	return (
		<div className={`swapproduct-modal ${show ? "d-block" : "d-none"}`}>
			<div className="main">
				<div className="inner">
					<div className="wrapper">
						<div className="top">
							<div className="d-flex justify-between w-100">
								<p>Swap now</p>
								<p className="c-pointer" onClick={close}>
									X Close
								</p>
							</div>
						</div>
						<div className="body">
							<div className="desc">
								<h4>Add Item here to swap</h4>
							</div>
							<div className=" image-list">
								{images.length < 3 && (
									<div className="image-preview-wrapper justify-center d-flex">
										<input type="file" ref={fileRef} onChange={handleImage} />
										<AddComp onClick={handleFile} />
									</div>
								)}

								{images.map((image) => (
									<ImagePreview
										image={image}
										key={image.id}
										onDelete={handleDelete}
									/>
								))}
							</div>

							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<input
										type="text"
										className="form-input"
										placeholder="Product Name"
										name="product_name"
										value={info.product_name}
										onChange={handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										className="form-input"
										placeholder="Price"
										name="price"
										value={info.price}
										onChange={handleChange}
									/>
								</div>

								{ok && (
									<>
										<div className="d-flex align-items-center mb-2">
											<img
												src={require("../../assets/add_money_icon.svg")}
												alt=""
											/>{" "}
											<h6 className="mb-0 ml-2">Add Money</h6>
										</div>
										<p>
											Please this section is only relevant if your offer is
											below the product value you wish to swap with.
										</p>

										<div className="form-group">
											<input type="number" className="form-input" />
										</div>
									</>
								)}
								<button
									className={`btn btn-block  ${ok && "btn-primary"}`}
									disabled={!ok}
								>
									Add to list
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SwapProductComp.propTypes = {};

export default SwapProductComp;
