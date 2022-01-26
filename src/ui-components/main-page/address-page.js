import React from "react";
import AddressPageHeader from "./address-page/address-page-header";
import CardsList from "./address-page/cards-list";

const AddressPage = (props) => {

	return <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
		<AddressPageHeader />
		<CardsList />
	</div>
}

export default AddressPage;
