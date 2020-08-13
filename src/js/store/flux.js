const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: []
		},
		actions: {
			addContacts: (name, phone, address, email) => {
				const store = getStore();
				const newContact = [{ name: name, phone: phone, address: address, email: email }];
				const updatedContact = store.allContacts.concat(newContact);
				setStore({ allContacts: updatedContact });
			},
			deleteContacts: indexToDelete => {
				const store = getStore();
				const returnArr = store.allContacts.filter((contact, index) => indexToDelete !== index);
				setStore({ allContacts: returnArr });
			},
			editContact: (name, phone, address, email, indexToDelete) => {
				const store = getStore();
				const modContact = { name, phone, address, email }; //destructuring
				const updatedContact = store.allContacts.map((contact, index) =>
					index === indexToDelete ? modContact : contact
				);
				setStore({ allContacts: updatedContact });
			}
		}
	};
};

export default getState;
