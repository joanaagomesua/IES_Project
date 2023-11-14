import { useState } from 'react'
import './Profile.css'

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(''); // Setting initial data
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        console.log('Saving profile data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone || 'Not provided');
        console.log('Address:', address || 'Not provided');
    };
    return (
        <div>
            {isEditing ? (
                <div>
                    <label>
                        <p>Name:</p> <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <p>Email:</p> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Phone Number:</p> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <label>
                        <p>Address:</p> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>
                </div>
            ) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone || 'Not provided'}</p>
                    <p>Address: {address || 'Not provided'}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
        </div>


    
    )
}

export default App
