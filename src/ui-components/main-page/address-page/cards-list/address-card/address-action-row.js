import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import CardActionArea from "@material-ui/core/CardActionArea";
import React, {useEffect, useState} from "react";
import {addMarker} from "../../../../../methods/markers/add-marker";
import {deleteMarker} from "../../../../../methods/markers/delete-marker";
import {setMapCenter} from "../../../../../methods/map/set-center";

const AddressActionRow = (props) => {

	const {address} = props;

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (checked){
			addMarker(address);
			setMapCenter({lat: address.latitude, lng: address.longitude});
		} else {
			deleteMarker(address);
		}
	}, [checked]);

	return <CardActionArea>
		<ListItem>
			<ListItemText
				primary={address.fullAddressName}
				secondary={JSON.stringify({lat: address.latitude, lng: address.longitude})}
			/>
			<ListItemSecondaryAction>
				<Switch
					checked={checked}
					onChange={() => {
						setChecked(c => !c);
					}}
					color="primary"
					name="checkedB"
					inputProps={{'aria-label': 'primary checkbox'}}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	</CardActionArea>
}

export default AddressActionRow;
