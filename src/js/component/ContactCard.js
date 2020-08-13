import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	return (
		<Context.Consumer>
			{({ store, actions }) => (
				<li className="list-group-item">
					<div className="row w-100">
						<div className="col-md-6 mb-4">
							<form className="md-form">
								<div className="file-field">
									<div className="mb-4">
										<img
											src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
											className="rounded-circle z-depth-1-half avatar-pic"
											alt="example placeholder avatar"
										/>
									</div>
									<div className="d-flex justify-content-center">
										<div className="btn btn-mdb-color btn-rounded float-left">
											<span>Add photo</span>
											<input type="file" />
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
							<div className=" float-right">
								<button className="btn" onClick={() => props.history.push("/edit")}>
									<i className="fas fa-pencil-alt mr-3" />
								</button>
								<button className="btn" onClick={() => actions.deleteContacts(props.index)}>
									<i className="fas fa-trash-alt" />
								</button>
							</div>
							<label className="name lead">{props.name}</label>
							<br />
							<i className="fas fa-map-marker-alt text-muted mr-3" />
							<span className="text-muted">{props.address}</span>
							<br />
							<span
								className="fa fa-phone fa-fw text-muted mr-3"
								data-toggle="tooltip"
								title=""
								data-original-title="(870) 288-4149"
							/>
							<span className="text-muted small">{props.phone}</span>
							<br />
							<span
								className="fa fa-envelope fa-fw text-muted mr-3"
								data-toggle="tooltip"
								data-original-title=""
								title=""
							/>
							<span className="text-muted small text-truncate">{props.email}</span>
						</div>
					</div>
				</li>
			)}
		</Context.Consumer>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	index: PropTypes.number,
	name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.number,
	email: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
