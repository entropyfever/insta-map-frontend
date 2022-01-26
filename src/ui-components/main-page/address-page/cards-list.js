import {Box, Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import AddressCard from "./cards-list/address-card";
import {getAllCards} from "../../../methods/cards/get-all-cards";
import {useSelector} from "react-redux";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";


const CardsList = (props) => {

	const cards = useSelector(s => s.cards.cards, shallowEqual);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllCards().then(() => {
			setTimeout(() => setLoading(false), 2000);
		}).catch((_err) => {
			setLoading(undefined);
		});
	}, []);

	return <Box element={'div'} style={{display: 'flex', flexGrow: 1, overflow: 'scroll'}}>
		{
			loading ? <div style={{display: 'flex', width: '100%', alignSelf: 'center', justifyContent: 'center'}}><CircularProgress color="secondary" /></div> :
				loading === undefined ? <Alert style={{flex: 1}} severity="error">Failed to fetch Cards</Alert> :
					<Grid container direction={'row'}>
						{
							cards.map(card => {
								return <Grid key={card.userId} item xs={12} sm={6} md={6}>
									<AddressCard card={card}/>
								</Grid>
							})
						}
					</Grid>
		}
	</Box>
}

export default CardsList;
