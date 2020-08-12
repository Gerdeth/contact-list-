import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<Context.Consumer>
			{({ store, actions }) => (
				<div className="container">
					<div>
						<p className="text-right my-3">
							<Link className="btn btn-success" to="/add">
								Add new contact
							</Link>
						</p>
						<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
							<ul className="list-group pull-down" id="contact-list">
								{store.allContacts.map((value, indexOfContact) => (
									<ContactCard
										name={value.name}
										address={value.address}
										phone={value.phone}
										email={value.email}
										key={indexOfContact}
										index={indexOfContact}
									/>
								))}
							</ul>
						</div>
					</div>
					<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
				</div>
			)}
		</Context.Consumer>
	);
};
