import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {AppBar, Toolbar, IconButton, Typography, Tooltip, colors} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {openNewCardPopup} from "../../../methods/popups/open-new-card-popup";
import {setUserAndAddress} from "../../../methods/popups/set-user-and-address";
import {resetUser} from "../../../methods/aux/reset-user";

const useStyles = makeStyles((theme) => ({
	greenButton: {
		color: theme.palette.getContrastText(colors.green[500]),
		backgroundColor: colors.green[500],
		"&:hover": {
			backgroundColor: colors.green[700],
			"@media (hover: none)": {
				backgroundColor: colors.green[500]
			}
		}
	},
}));

const AddressPageHeader = (props) => {

	const classes = useStyles();

	const handleNewUserWithAddress = () => {
		resetUser();
		setUserAndAddress();
		openNewCardPopup();
	}

	return <AppBar color={"primary"} position="static" style={{marginBottom: 32}}>
		<Toolbar style={{justifyContent: 'space-between'}}>
			<Typography>
				Insta Map
			</Typography>
			<Tooltip title="Add New Card" placement="left">
				<IconButton onClick={handleNewUserWithAddress} size={"medium"} className={classes.greenButton} aria-label="menu">
					<AddIcon fontSize={"small"} />
				</IconButton>
			</Tooltip>
		</Toolbar>
	</AppBar>
}

export default AddressPageHeader;
