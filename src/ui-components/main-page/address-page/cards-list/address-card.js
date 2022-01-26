import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import List from "@material-ui/core/List";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React, {useEffect, useState} from "react";
import AddressActionRow from "./address-card/address-action-row";
import {deleteCard} from "../../../../methods/cards/delete-card";
import Skeleton from "@material-ui/lab/Skeleton";
import {setOnlyAddress} from "../../../../methods/popups/set-only-address";
import {openNewCardPopup} from "../../../../methods/popups/open-new-card-popup";
import {setUser} from "../../../../methods/aux/set-user";


const AddressCard = (props) => {

	const {card} = props;

	const [deleting, setDeleting] = useState(false);

	const handleDeleteCard = () => {
		setDeleting(true);
		return deleteCard(card)
			.catch((_err) => {
				// maybe show error to user
				setDeleting(false);
			})
	}

	const handleAddNewAddress = () => {
		setUser(card);
		setOnlyAddress();
		openNewCardPopup();
	}

	return <Card style={{textAlign: "left", margin: 8}}>

		{
			deleting ? <Skeleton variant="card" color={"secondary"} height={118} style={{margin: 8}}/> :
				<>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{card.friendlyName}
						</Typography>
						<Divider/>

						<List>
							{
								card.addresses.map((address, i) => {
									return <AddressActionRow key={i} address={address}/>
								})
							}
						</List>
					</CardContent>

					<CardActions>
						<Button size="small" color="secondary" onClick={handleDeleteCard}>
							Delete User
						</Button>
						<Button size="small" color="primary" onClick={handleAddNewAddress}>
							Add new address
						</Button>
					</CardActions>
				</>
		}
	</Card>

}

export default AddressCard;
