import React, {useEffect, useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {fromAddress} from "../playground/geocode";
import {useSelector} from "react-redux";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import {closeNewCardPopup} from "../../methods/popups/close-new-card-popup";
import DevMap from "../playground/dev-map";
import {upsertCard} from "../../methods/cards/upsert-card";
import CircularProgress from "@material-ui/core/CircularProgress";
import {setMapCenter} from "../../methods/map/set-center";



export default function CardFormDialog(props) {

	const {open, onlyAddress} = useSelector(s => s.popups.mainFormPopup, shallowEqual);
	const {user} = useSelector(s => s.aux, shallowEqual);

	const [userFriendlyName, setUserFriendlyName] = useState('');

	const [addressName, setAddressName] = useState('');
	const [latitude, setLatitude] = useState(undefined);
	const [longitude, setLongitude] = useState(undefined);

	const [loading, setLoading] = useState(false);

	const searchAddressTimeout = useRef(0);

	useEffect(() => {
		setUserFriendlyName(user?.friendlyName || '');
	}, [user])


	const setLatLong = () => {
		if (!addressName)
			return;

		fromAddress(addressName).then(({lat, lng}) => {
			setLatitude(lat);
			setLongitude(lng);
			setMapCenter({lat, lng});
		}).catch((_err) => {
			console.error(_err);
		})
	}


	const handleSave = () => {
		setLoading(true);
		upsertCard({
			friendlyName: userFriendlyName,
			address: {
				fullAddressName: addressName,
				latitude: latitude,
				longitude: longitude,
			}
		}).then(() => {
			console.log('saving .....');
			return setTimeout(() => {
				setLoading(false);
				closeNewCardPopup();
			}, 2000);
		}).catch((_err) => {
			// toastr
			setLoading(false);
		});
	}

	return (
		<div>
			<Dialog open={open} onClose={closeNewCardPopup} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">{onlyAddress ? 'New Address Card' : 'New User Card'}</DialogTitle>
				<DialogContent>
					<TextField
						disabled={onlyAddress}
						autoFocus
						autoComplete="off"
						margin="dense"
						id="name"
						label="User friendly Name"
						type="string"
						value={userFriendlyName}
						onChange={(e) => setUserFriendlyName(e.target.value) }
						fullWidth
					/>
					<TextField
						autoFocus={onlyAddress}
						onKeyDown={() => {
							if (searchAddressTimeout.current) {
								clearTimeout(searchAddressTimeout.current);
							}
							searchAddressTimeout.current = setTimeout(setLatLong, 2000);
						}}
						autoComplete="off"
						margin="dense"
						id="address"
						label="Full Address Name"
						type="string"
						value={addressName}
						onChange={(e) => setAddressName(e.target.value) }
						fullWidth
					/>
					<DevMap marker={{lat: latitude || 0, lng: longitude || 0}} isMarkerShown containerElement={<div style={{height: '300px'}}/>}
					        mapElement={<div style={{height: '100%'}}/>}/>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeNewCardPopup} color="primary">
						Cancel
					</Button>
					{
						loading ? <CircularProgress color="secondary" /> : <Button disabled={!userFriendlyName || !latitude || !longitude} onClick={() => handleSave()} color="primary">
							Save
						</Button>
					}
				</DialogActions>
			</Dialog>
		</div>
	);
}
