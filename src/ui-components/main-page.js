import React from "react";
import {Grid, Box} from "@material-ui/core";
import DevMap from "./playground/dev-map";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardFormDialog from "./popup-dialogs/card-form-dialog";
import AddressPage from "./main-page/address-page";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: '100vh',
	},
}));


const MainPage = (props) => {

	const classes = useStyles();

	return <div id={'container'} className={classes.root}>
		<CardFormDialog />
		<Grid container direction={'row'}>
			<Grid item xs={12} md={7} lg={6}>
				<Box height={{xs: '70vh', md: '100vh'}} style={{overflow: 'hidden'}}>
					<AddressPage />
				</Box>
			</Grid>

			<Grid item xs={12} md={5} lg={6}>
				<Box height={{xs: '30vh', md: '100vh'}}>
					<DevMap isMarkerShown={false} containerElement={<div style={{height: '100%'}}/>}
					        mapElement={<div style={{height: '100%'}}/>}/>
				</Box>
			</Grid>
		</Grid>
	</div>

}

export default MainPage;
