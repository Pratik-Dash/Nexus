import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';

const Add_Address_Modal = () => {
  const { addresses, setAddresses } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [addressType, setAddressType] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddresses({
      ...addresses,
      [addressType]: {
        street,
        city,
        state,
        pin,
      },
    });

    // Reset form fields
    setStreet('');
    setCity('');
    setState('');
    setPin('');
    setAddressType('');
    closeModal();
  };

  return (
    <div>
    <div className='address-button-container'>
      <div className="add-address-btn" onClick={openModal}>
        ADD ADDRESS
      </div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Enter details</h4>
            <div className="address-form-container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  id="street"
                  className='address-input'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />

                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  className='address-input'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  className='address-input'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />

                <label htmlFor="addressType">Address Type:</label>
                <input
                  type="text"
                  id="addressType"
                  className='address-input'
                  value={addressType}
                  onChange={(e) => setAddressType(e.target.value)}
                />
                <label htmlFor="pin">PIN:</label>
                <input
                  type="text"
                  id="pin"
                  className='address-input'
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />

                <div className="button-group">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Add_Address_Modal;
