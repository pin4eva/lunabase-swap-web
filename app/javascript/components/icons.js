import * as React from "react";
import PropTypes from "prop-types";

export const AddComp = ({ onClick }) => {
	return (
		<svg
			width={38}
			height={38}
			viewBox="0 0 38 38"
			onClick={onClick}
			className="add-icon c-pointer"
		>
			<defs>
				<style>
					{
						".prefix__a{fill:none;stroke:#8d8a8a;stroke-linecap:round;stroke-width:3px}"
					}
				</style>
			</defs>
			<path className="prefix__a" d="M1.5 19h35M19 1.5v35" />
		</svg>
	);
};

export const RemoveIcon = (props) => {
	return (
		<svg
			width={20}
			height={20}
			viewBox="0 0 20 20"
			{...props}
			className="remove-icon c-pointer"
		>
			<defs>
				<style>
					{".prefix__b{fill:none;stroke:#fff;stroke-linecap:round}"}
				</style>
			</defs>
			<g transform="translate(-699 -336)">
				<circle
					cx={10}
					cy={10}
					r={10}
					transform="translate(699 336)"
					fill="#ff6060"
				/>
				<path
					className="prefix__b"
					d="M704.999 342l8.485 8.485M704.999 350.486l8.485-8.485"
				/>
			</g>
		</svg>
	);
};

export const SearchIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(655 157)"
						stroke="#707070"
						fill="#b5b5b5"
						d="M0 0h18v18H0z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(-655 -157)" clipPath="url(#prefix__a)">
				<path
					d="M672.78 173.72l-5.119-5.12a7.138 7.138 0 10-1.06 1.06l5.119 5.12a.75.75 0 101.06-1.06zm-10.655-3.97a5.625 5.625 0 115.625-5.625 5.631 5.631 0 01-5.625 5.625z"
					fill="#b5b5b5"
				/>
			</g>
		</svg>
	);
};

export const BabyIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 799)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(-74 -799)" clipPath="url(#prefix__a)">
				<path
					d="M90.725 803.733a.733.733 0 01-.806.654 2.775 2.775 0 00-3.063 2.48.732.732 0 01-.805.654 4.237 4.237 0 01-3.797-4.321 4.293 4.293 0 011.238-2.926 4.188 4.188 0 016.017 0 4.3 4.3 0 011.216 3.459z"
					fill="#f79961"
				/>
				<path
					d="M96.867 808.506a10.814 10.814 0 010 5.986A3.415 3.415 0 0099 811.5a3.416 3.416 0 00-2.133-2.994zm-4.715-4.42a2.2 2.2 0 01-2.152 1.77c-.159 0-.262-.02-.372-.02a1.313 1.313 0 00-1.311 1.18 2.2 2.2 0 01-2.417 1.961 5.7 5.7 0 01-5.057-4.886 9.324 9.324 0 1011.309 0zm-10.211 6.55A.734.734 0 0180.9 809.6a2.684 2.684 0 013.8 0 .732.732 0 01-1.036 1.035 1.22 1.22 0 00-1.723.001zm7.01 4.9a3.47 3.47 0 01-4.9 0 .732.732 0 111.034-1.036 2 2 0 002.831 0 .732.732 0 111.035 1.036zm3.172-4.9a.731.731 0 01-1.035 0 1.22 1.22 0 00-1.726 0 .733.733 0 01-1.037-1.036 2.684 2.684 0 013.8 0 .732.732 0 01-.002 1.036zm.806 9.524a10.766 10.766 0 01-12.717.1 7.894 7.894 0 00-1.6 2.775.732.732 0 00.468.924c.173.057-.772.037 14.839.037a.733.733 0 00.7-.96 7.9 7.9 0 00-1.688-2.877zm-16.796-11.654A3.416 3.416 0 0074 811.5a3.415 3.415 0 002.131 2.993 10.814 10.814 0 01.002-5.987z"
					fill="#ee7329"
				/>
			</g>
		</svg>
	);
};

export const CartIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 26 26" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						className="prefix__a"
						transform="translate(1023 55)"
						d="M0 0h26v26H0z"
					/>
				</clipPath>
				<style>{".prefix__a{fill:#ee7329}"}</style>
			</defs>
			<g transform="translate(-1023 -55)" clipPath="url(#prefix__a)">
				<path
					className="prefix__a"
					d="M1042.7 74.32a3.036 3.036 0 103.036 3.036 3.072 3.072 0 00-3.036-3.036z"
				/>
				<path
					d="M1048.046 59.841c-.058 0-.146-.029-.234-.029h-18.39l-.292-1.956a2.614 2.614 0 00-2.598-2.248h-2.364a1.168 1.168 0 100 2.335h2.364a.31.31 0 01.292.263l1.81 12.319a3.2 3.2 0 003.153 2.715h12.143a3.244 3.244 0 003.153-2.569l1.9-9.487a1.154 1.154 0 00-.937-1.343z"
					fill="#f79961"
				/>
				<path
					className="prefix__a"
					d="M1035.26 77.21a3.018 3.018 0 00-3.007-2.89 3.053 3.053 0 00-2.919 3.153 2.992 2.992 0 002.977 2.89h.059a3.029 3.029 0 002.89-3.153z"
				/>
			</g>
		</svg>
	);
};

export const ElectronicsIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 793)"
						fill="#e5e5e5"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__c{fill:#ee7329}.prefix__d{fill:#f79961}"}</style>
			</defs>
			<g transform="translate(-74 -793)" clipPath="url(#prefix__a)">
				<g transform="translate(74 793)">
					<path
						className="prefix__c"
						d="M15.232 19.293a.391.391 0 00-.388-.348h-4.688a.391.391 0 00-.388.348l-.391 3.516a.391.391 0 00.388.434h5.469a.391.391 0 00.388-.434z"
					/>
					<path
						className="prefix__d"
						d="M23.828 1.758H1.172A1.172 1.172 0 000 2.93v12.5a.391.391 0 00.391.391h24.218A.391.391 0 0025 15.43V2.93a1.172 1.172 0 00-1.172-1.172z"
					/>
					<path
						className="prefix__c"
						d="M25 15.039H0v3.516a1.172 1.172 0 001.172 1.172h22.656A1.172 1.172 0 0025 18.555z"
					/>
					<circle
						className="prefix__d"
						cx={1.172}
						cy={1.172}
						r={1.172}
						transform="translate(11.328 16.211)"
					/>
					<path
						className="prefix__c"
						d="M19.922 23.242H5.078a.391.391 0 010-.781h14.844a.391.391 0 010 .781z"
					/>
				</g>
			</g>
		</svg>
	);
};

export const EquipmentIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 895)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(-74 -895)" clipPath="url(#prefix__a)">
				<path
					d="M96.656 898.125v.781a.781.781 0 11-1.562 0v-.781h-1.823a.521.521 0 00-.521.521v4.166a.521.521 0 00.521.521h5.208a.521.521 0 00.521-.521v-4.166a.521.521 0 00-.521-.521z"
					fill="#f79961"
				/>
				<path
					d="M98.219 904.9h-7.031v-5.994a.781.781 0 00-1.563 0v9.115h-1.071l-2.454-6.943a2.868 2.868 0 00-2.7-1.911h-3.41a.782.782 0 00-.781.781v5.469h-2.344A2.867 2.867 0 0074 908.281v4.688a1.825 1.825 0 001.823 1.823h.314a2.6 2.6 0 005.1 0h2.19a2.6 2.6 0 005.1 0h1.876a.782.782 0 00.781-.781v-7.553h7.031a.781.781 0 000-1.562zm-17.448-4.171H83.4a1.3 1.3 0 011.23.871l2.27 6.421h-4.827a1.3 1.3 0 01-1.3-1.3v-5.992zm-2.083 14.584a1.042 1.042 0 111.042-1.042 1.043 1.043 0 01-1.042 1.042zm7.292 0a1.042 1.042 0 111.042-1.042 1.043 1.043 0 01-1.043 1.042z"
					fill="#ee7329"
				/>
			</g>
		</svg>
	);
};

export const HealthIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 928)"
						fill="#e5e5e5"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__c{fill:#f79961}"}</style>
			</defs>
			<g transform="translate(-74 -928)" clipPath="url(#prefix__a)">
				<path
					className="prefix__c"
					d="M90.678 929.967s-5.72 4.94 0 10.661c5.72-5.72 0-10.661 0-10.661z"
				/>
				<path
					className="prefix__c"
					d="M92.805 940.426c5.86-1.2 5.411-7.337 5.411-7.337a8.509 8.509 0 00-3.692.7 7.494 7.494 0 01.156 1.263 7.572 7.572 0 01-.614 3.248 9.691 9.691 0 01-1.261 2.126zM75.945 936.347a5.318 5.318 0 011.737 1.353l2.412 2.925h6.727l-6.668-5.5a4.958 4.958 0 01-1.288-1.666 2.167 2.167 0 10-2.92 2.888z"
				/>
				<path
					d="M74 942.092c0 4.654 1.122 5.5 3.1 8.941h18.8c1.981-3.444 3.1-4.287 3.1-8.941zm14.111 5.2h-.879v.879h-1.464v-.871h-.879v-1.47h.879v-.879h1.465v.879h.879z"
					fill="#ee7329"
				/>
			</g>
		</svg>
	);
};

export const HomeApplianceIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 838)"
						fill="#e5e5e5"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__d{fill:#ee7329}"}</style>
			</defs>
			<g transform="translate(-74 -838)" clipPath="url(#prefix__a)">
				<path
					d="M98.971 850.294l-2.571-8.789a.732.732 0 00-.7-.527H83.534v-1.513a.733.733 0 000-1.465h-4.395a.733.733 0 000 1.465v1.514H77.3a.732.732 0 00-.7.527l-2.571 8.788a.732.732 0 00.7.938h23.539a.732.732 0 00.7-.938zm-16.902-9.315H80.6v-1.514h1.469z"
					fill="#f79961"
				/>
				<path
					className="prefix__d"
					d="M98.268 859.045H97V852.7H76v6.348h-1.268a.732.732 0 00-.732.729v2.49a.732.732 0 00.732.733h23.536a.732.732 0 00.732-.732v-2.49a.732.732 0 00-.732-.733zm-13.965 0h-5.86v-4.15a.732.732 0 01.732-.732h4.395a.732.732 0 01.732.732zm10.254 0h-8.789v-4.15a.732.732 0 01.732-.732h7.324a.732.732 0 01.732.732z"
				/>
				<path
					className="prefix__d"
					d="M87.232 855.139h2.197v2.93h-2.197zM90.895 855.139h2.197v2.93h-2.197z"
				/>
			</g>
		</svg>
	);
};

export const MedicalIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 943)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__c{fill:#ee7329}.prefix__d{fill:#f79961}"}</style>
			</defs>
			<g transform="translate(-74 -943)" clipPath="url(#prefix__a)">
				<path
					className="prefix__c"
					d="M90.925 949.613h-8.85a.732.732 0 01-.732-.732v-2.643a2.505 2.505 0 012.5-2.5h5.31a2.505 2.505 0 012.5 2.5v2.643a.732.732 0 01-.732.732zm-8.118-.976h7.385v-2.4a1.039 1.039 0 00-1.037-1.037h-5.31a1.039 1.039 0 00-1.038 1.038z"
				/>
				<path
					className="prefix__c"
					d="M89.155 943.735H86.5v1.465h2.655a1.039 1.039 0 011.038 1.038v2.4H86.5v.977h4.425a.732.732 0 00.732-.732v-2.645a2.505 2.505 0 00-2.5-2.5z"
				/>
				<path
					className="prefix__c"
					d="M95.277 967.265l-8.777-1.316-8.777 1.316A3.727 3.727 0 0174 963.541v-11.67a3.727 3.727 0 013.723-3.723l8.777.613 8.777-.613A3.727 3.727 0 0199 951.871v11.67a3.727 3.727 0 01-3.723 3.724z"
				/>
				<path
					className="prefix__c"
					d="M95.277 948.148l-8.777.489v18.14l8.777.488A3.727 3.727 0 0099 963.541v-11.67a3.727 3.727 0 00-3.723-3.723z"
				/>
				<path
					className="prefix__d"
					d="M95.277 967.265H77.723v-19.117h17.554z"
				/>
				<path className="prefix__d" d="M86.5 948.148h8.777v19.117H86.5z" />
				<path
					className="prefix__c"
					d="M87.971 962.852h-2.942a.732.732 0 01-.732-.732v-2.21h-2.21a.732.732 0 01-.732-.732v-2.943a.732.732 0 01.732-.732H84.3v-2.209a.732.732 0 01.732-.732h2.942a.732.732 0 01.732.732v2.206h2.209a.732.732 0 01.732.732v2.942a.732.732 0 01-.732.732H88.7v2.209a.732.732 0 01-.729.737z"
				/>
				<path
					className="prefix__c"
					d="M90.913 955.5H88.7v-2.206a.732.732 0 00-.732-.732H86.5v10.29h1.471a.732.732 0 00.732-.732v-2.21h2.209a.732.732 0 00.732-.732v-2.943a.732.732 0 00-.731-.735z"
				/>
			</g>
		</svg>
	);
};

export const PhoneIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 1135)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__d{fill:#f79961}"}</style>
			</defs>
			<g transform="translate(-74 -1135)" clipPath="url(#prefix__a)">
				<path
					d="M92.269 1135H80.731a1.127 1.127 0 00-1.131 1.127v22.746a1.127 1.127 0 001.131 1.127H92.27a1.127 1.127 0 001.13-1.127v-22.746a1.127 1.127 0 00-1.131-1.127z"
					fill="#ee7329"
				/>
				<path
					className="prefix__d"
					d="M79.603 1137.586h13.793v18.103H79.603zM88.655 1136.724h-4.31a.431.431 0 010-.862h4.31a.431.431 0 010 .862zM91.672 1136.724h-.431a.431.431 0 110-.862h.431a.431.431 0 010 .862zM87.035 1158.707h-1.07a.758.758 0 01-.758-.758v-.209a.758.758 0 01.758-.758h1.07a.758.758 0 01.758.758v.208a.758.758 0 01-.758.759z"
				/>
			</g>
		</svg>
	);
};

export const RepairIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 1231)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__c{fill:#f79961}.prefix__d{fill:#ee7329}"}</style>
			</defs>
			<g transform="translate(-74 -1231)" clipPath="url(#prefix__a)">
				<path
					className="prefix__c"
					d="M92.06 1244.691l-1.667 1.667-11.515-11.515.885-.885-3.669-2.958-2.094 2.094 2.957 3.67.885-.885 11.515 11.514-1.667 1.667 2.377 2.377 4.37-4.37zM95.473 1248.1l-4.37 4.37 2.622 2.63a3.09 3.09 0 004.37-4.37z"
				/>
				<path
					className="prefix__d"
					d="M86.653 1246.761l-3.413-3.413-2.5 2.5a5.194 5.194 0 103.413 3.413zm-6.27 5.234a1.681 1.681 0 110-2.377 1.681 1.681 0 010 2.376zM98.66 1234.133l-.409-1.043-2.62 2.621-1.058-.284-.284-1.058 2.621-2.62-1.043-.409a4.935 4.935 0 00-6.553 5.932l-2.967 2.968 3.413 3.413 2.968-2.968a4.935 4.935 0 005.932-6.552z"
				/>
			</g>
		</svg>
	);
};

export const ShirtIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<linearGradient
					id="prefix__b"
					x1={0.5}
					y1={0.523}
					x2={0.5}
					y2={0.525}
					gradientUnits="objectBoundingBox"
				>
					<stop offset={0} stopColor="#f79961" />
					<stop offset={1} stopColor="#ee7329" />
				</linearGradient>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 883)"
						fill="#e5e5e5"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(-74 -883)" clipPath="url(#prefix__a)">
				<path
					d="M83.375 883.782a3.125 3.125 0 106.25 0h-6.25z"
					fill="#f79961"
				/>
				<path
					d="M24.606 4.01L19.137.885a.781.781 0 00-.387-.1h-1.563a4.687 4.687 0 11-9.375 0H6.25a.786.786 0 00-.387.1L.394 4.01a.781.781 0 00-.364.89l1.562 5.47a.784.784 0 00.941.544l2.155-.537v13.06a.782.782 0 00.781.781h14.062a.782.782 0 00.781-.781v-13.06l2.155.537a.783.783 0 00.941-.544L24.97 4.9a.781.781 0 00-.364-.89z"
					fill="url(#prefix__b)"
					transform="translate(74 883)"
				/>
			</g>
		</svg>
	);
};

export const SportIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 1279)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__c{fill:#ee7329}.prefix__d{fill:#f79961}"}</style>
			</defs>
			<g transform="translate(-74 -1279)" clipPath="url(#prefix__a)">
				<path
					className="prefix__c"
					d="M91.564 1301.13q-.349.349-.725.661l2.209 2.209 1.035-1.035-2.183-2.185q-.165.178-.336.35zM76.342 1300.784l-2.181 2.181L75.2 1304l2.2-2.206q-.377-.313-.729-.664-.17-.17-.331-.347z"
				/>
				<path
					className="prefix__c"
					d="M91.018 1293.685a6.908 6.908 0 11-2.548-5.35l1.536-1.535a9.074 9.074 0 101.032 1.038l-1.538 1.536a6.866 6.866 0 011.518 4.311z"
				/>
				<path
					className="prefix__c"
					d="M83.637 1293.167l1.134-1.134a1.776 1.776 0 101.019 1.051l-1.118 1.116z"
				/>
				<path
					className="prefix__d"
					d="M78.683 1293.685a5.435 5.435 0 109.775-3.269l-1.577 1.577a3.248 3.248 0 11-1.027-1.043l1.574-1.574a5.432 5.432 0 00-8.745 4.309zM96.024 1281.815l-.607-2.815-3.732 3.732v2.387l-1.679 1.681a9.134 9.134 0 011.032 1.038l1.682-1.684h2.387l3.732-3.732z"
				/>
			</g>
		</svg>
	);
};

export const TagIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<linearGradient
					id="prefix__b"
					x1={0.512}
					y1={0.452}
					x2={0.506}
					y2={0.446}
					gradientUnits="objectBoundingBox"
				>
					<stop offset={0} stopColor="#ee7329" />
					<stop offset={1} stopColor="#f79961" />
				</linearGradient>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 895)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(-74 -895)" clipPath="url(#prefix__a)">
				<path
					d="M21.835 12.409a.733.733 0 00.057-.282V3.841a.732.732 0 00-.732-.732h-8.287a.742.742 0 00-.519.214L.215 15.461a.732.732 0 000 1.036L8.5 24.785a.732.732 0 001.036 0l12.141-12.138a.733.733 0 00.158-.238z"
					fill="url(#prefix__b)"
					transform="translate(74 895)"
				/>
				<path
					d="M91.956 903.08l6.829-6.829a.733.733 0 00-1.036-1.036l-6.829 6.829a2.2 2.2 0 101.036 1.036z"
					fill="#f2f2f2"
				/>
			</g>
		</svg>
	);
};

export const UserIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 26 26" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						className="prefix__a"
						transform="translate(1128 55)"
						d="M0 0h26v26H0z"
					/>
				</clipPath>
				<style>{".prefix__a{fill:#ee7329}"}</style>
			</defs>
			<g transform="translate(-1128 -55)" clipPath="url(#prefix__a)">
				<path
					d="M1141 55a6.855 6.855 0 106.855 6.855A6.863 6.863 0 001141 55z"
					fill="#f79961"
				/>
				<path
					className="prefix__a"
					d="M1149.53 73.19a9.773 9.773 0 00-7.006-2.955h-3.047a9.773 9.773 0 00-7.007 2.955 9.991 9.991 0 00-2.9 7.049.762.762 0 00.766.761h21.328a.762.762 0 00.762-.762 9.991 9.991 0 00-2.896-7.048z"
				/>
			</g>
		</svg>
	);
};

export const VehicleIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<linearGradient
					id="prefix__b"
					x1={0.5}
					y1={0.63}
					x2={0.5}
					y2={0.638}
					gradientUnits="objectBoundingBox"
				>
					<stop offset={0} stopColor="#f79961" />
					<stop offset={1} stopColor="#ee7329" />
				</linearGradient>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 1327)"
						fill="#fff"
						stroke="#707070"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
			</defs>
			<g transform="translate(-74 -1327)" clipPath="url(#prefix__a)">
				<path
					d="M25 13.649a3.277 3.277 0 00-.312-1.391 4.545 4.545 0 00-.074-.329l-2.171-5.382-.015-.047c-.76-2.262-1.841-4.356-4.582-4.356H7.365c-2.809 0-3.8 2.146-4.578 4.344L.515 11.881A3.321 3.321 0 000 13.649v1.675a3.256 3.256 0 00.089.756 1.316 1.316 0 00-.089.474v4.981a1.323 1.323 0 001.322 1.323h2.745a1.322 1.322 0 001.322-1.323v-2.491h14.379v2.491a1.323 1.323 0 001.323 1.323h2.587A1.323 1.323 0 0025 21.535v-4.982a1.324 1.324 0 00-.089-.473 3.271 3.271 0 00.089-.756v-1.675zM4.4 7.027c.865-2.44 1.56-3.184 2.966-3.184h10.479c1.4 0 2.173.831 2.963 3.174l1.585 3.211a4.85 4.85 0 00-1.685-.3H4.292a4.873 4.873 0 00-1.528.243zm1.36 8.933h-2.9a.944.944 0 010-1.889h2.9a.944.944 0 010 1.889zm10.229-.189H9.253a.6.6 0 010-1.2h6.735a.6.6 0 110 1.2zm6.074.189h-2.9a.944.944 0 010-1.889h2.9a.944.944 0 110 1.889z"
					fill="url(#prefix__b)"
					transform="translate(74 1327)"
				/>
			</g>
		</svg>
	);
};

export const PropertyIcon = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
			<defs>
				<clipPath id="prefix__a">
					<path
						transform="translate(74 838)"
						fill="#e5e5e5"
						d="M0 0h25v25H0z"
					/>
				</clipPath>
				<style>{".prefix__d{fill:#ee7329}"}</style>
			</defs>
			<g transform="translate(-74 -838)" clipPath="url(#prefix__a)">
				<path
					d="M98.971 850.294l-2.571-8.789a.732.732 0 00-.7-.527H83.534v-1.513a.733.733 0 000-1.465h-4.395a.733.733 0 000 1.465v1.514H77.3a.732.732 0 00-.7.527l-2.571 8.788a.732.732 0 00.7.938h23.539a.732.732 0 00.7-.938zm-16.902-9.315H80.6v-1.514h1.469z"
					fill="#f79961"
				/>
				<path
					className="prefix__d"
					d="M98.268 859.045H97V852.7H76v6.348h-1.268a.732.732 0 00-.732.729v2.49a.732.732 0 00.732.733h23.536a.732.732 0 00.732-.732v-2.49a.732.732 0 00-.732-.733zm-13.965 0h-5.86v-4.15a.732.732 0 01.732-.732h4.395a.732.732 0 01.732.732zm10.254 0h-8.789v-4.15a.732.732 0 01.732-.732h7.324a.732.732 0 01.732.732z"
				/>
				<path
					className="prefix__d"
					d="M87.232 855.139h2.197v2.93h-2.197zM90.895 855.139h2.197v2.93h-2.197z"
				/>
			</g>
		</svg>
	);
};

export const ArrowRight = ({ className, color }) => {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 8.654 13.654"
			className={className}
		>
			<g data-name="Component 46">
				<g
					data-name="Group 86"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeWidth={2}
				>
					<path data-name="Line 1" d="M1.584 12.24l5.657-5.657" />
					<path data-name="Line 2" d="M1.412 1.412L7.24 6.583" />
				</g>
			</g>
		</svg>
	);
};

ArrowRight.propTypes = {
	className: PropTypes.any,
	color: PropTypes.string,
};

ArrowRight.defaultProps = {
	color: "#8d8a8a",
};
