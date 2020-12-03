import React from "react";
import baby from "../assets/icons/baby.svg";
import eletronics from "../assets/icons/electronics.svg";
import equipment from "../assets/icons/equipment.svg";
import health from "../assets/icons/health.svg";
import appliance from "../assets/icons/home-appliance.svg";
import medical from "../assets/icons/medical.svg";
import phone from "../assets/icons/phone.svg";
import property from "../assets/icons/property.svg";
import repairs from "../assets/icons/repairs.svg";
import shirt from "../assets/icons/shirt.svg";
import sport from "../assets/icons/sports.svg";
import vehiccle from "../assets/icons/vehicles.svg";
import PropTypes from "prop-types";

// import {
// 	BabyIcon,
// 	CartIcon,
// 	VehicleIcon,
// 	ElectronicsIcon,
// 	EquipmentIcon,
// 	HealthIcon,
// 	HomeApplianceIcon,
// 	PhoneIcon,
// 	MedicalIcon,
// 	TagIcon,
// 	PropertyIcon,
// 	ShirtIcon,
// 	RepairIcon,
// 	SportIcon,
// } from "../components/icons";

export const ProductTags = () => {
	// console.log(isActive);
	return [
		{
			name: "Baby & Kids",
			icon: baby,
			id: 1,
			// isActive,
			sub: [
				{ name: "Babies & Kids Accessories" },
				{ name: "Baby & Child Care" },
				{ name: "Children Clothing" },
				{ name: "Children's Furniture" },
				{ name: "Children's Gear & Safty " },
				{ name: "Children's Shoes " },
				{ name: "Prams & Strollers " },
				{ name: "Toys " },
			],
		},
		{
			name: "Fashion",
			icon: shirt,
			id: 2,
			sub: [
				{ name: "Maternity & Pregnancy Bags" },
				{ name: "Clothing's" },
				{ name: "Jewelry" },
				{ name: "Clothing's Accessories" },
				{ name: "Shoes" },
				{ name: "Watches" },
				{ name: "Wedding Wears & Accessories" },
			],
			// isActive,
		},
		{
			name: "Commercial Equipment & Tools",
			icon: equipment,
			id: 3,
			sub: [
				{ name: "Industrial Ovens" },
				{ name: "Manufacturing Equipments" },
				{ name: "Manufacturing Materials & Tools" },
			],
			// isActive,
		},
		{
			name: "Medicial Equipment",
			icon: medical,
			id: 4,
			sub: [
				{ name: "Printing Equipment" },
				{ name: "Resturant & Catering Equipment Safty Equipment" },
				{ name: "Salon Equipment" },
				{ name: "Stage Lightening & Effect" },
				{ name: "Stationery" },
				{ name: "Store Equipment" },
			],
			// isActive,
		},
		{
			name: "Electronic",
			icon: eletronics,
			id: 5,
			// isActive
		},
		{
			name: "Health & Beauty",
			icon: health,
			id: 6,
			// isActive
		},
		{
			name: "Home, Furniture & Appliances",
			icon: appliance,
			id: 7,
			// isActive,
		},
		{
			name: "Mobile, Phones & Tablets",
			icon: phone,
			id: 8,
			// isActive
		},
		{
			name: "Property",
			icon: property,
			id: 9,
			// isActive
		},
		{
			name: "Repairs",
			icon: repairs,
			id: 10,
			// isActive
		},
		{
			name: "Sport, Arts & Outdoor",
			icon: sport,
			id: 11,
			// isActive
		},
		{
			name: "Vehicle",
			icon: vehiccle,
			id: 12,
			// isActive
		},
	];
};

ProductTags.propTypes = {
	isActive: PropTypes.func,
};

// ProductTags.defaultProps = {
// 	isActive: false,
// };
