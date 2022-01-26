import React from "react";
import {Grid, Box, Divider} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import Header from "./address-list/header";

function generate(element) {
	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		}),
	);
}

const AddressList = (props) => {

	return <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>

		<Header />

		<Box element={'div'} style={{display: 'flex', flexGrow: 1, overflow: 'scroll'}}>
			<Grid container direction={'row'}>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => {
						return <Grid key={i} item xs={12} sm={6} md={6}>
							<Card style={{textAlign: "left", margin: 8}}>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Lizard
									</Typography>
									<Divider />

									<List>
										{generate(
											<CardActionArea>
												<ListItem>
													<ListItemText
														primary="Single-line item"
														secondary={true ? 'Secondary text' : null}
													/>
													<ListItemSecondaryAction>
														<Switch
															checked={true}
															onChange={() => {}}
															color="primary"
															name="checkedB"
															inputProps={{ 'aria-label': 'primary checkbox' }}
														/>
													</ListItemSecondaryAction>
												</ListItem>
											</CardActionArea>,
										)}
									</List>
								</CardContent>

								<CardActions>
									<Button size="small" color="primary">
										Add new address
									</Button>
								</CardActions>
							</Card>
						</Grid>
					})
				}
			</Grid>
		</Box>

	</div>
}
