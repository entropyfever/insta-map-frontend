import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {AppBar, Toolbar, IconButton, Typography, Tooltip, colors} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import {ACTIONS} from "../../../redux-store/popups/actions";

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

const Header = (props) => {

	const dispatch = useDispatch();

	const openPopup = () => {
		dispatch({
			type: ACTIONS.OPEN_NEW_CARD_POPUP,
		});
	}

	const classes = useStyles();

	return <AppBar color={"primary"} position="static" style={{marginBottom: 32}}>
		<Toolbar style={{justifyContent: 'space-between'}}>
			<Typography>
				Insta Map
			</Typography>
			<Tooltip title="Add New Card" placement="left">
				<IconButton onClick={openPopup} size={"medium"} className={classes.greenButton} aria-label="menu">
					<AddIcon fontSize={"small"} />
				</IconButton>
			</Tooltip>
		</Toolbar>
	</AppBar>
}

export default Header;
