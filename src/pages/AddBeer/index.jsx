import React, {useState} from 'react';
import "./styles.css";
const AddBeer = () => {

    const [form, setForm] = useState({
        name: "",
        brand: "",
        price: 0,
        image: "",
        shops: [""],
        reviews: [""]
    });

    const fieldChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <div className="detail-centered">
            <div className="beer-form">
                <form onSubmit={formSubmit}>
                    <h4>Add Beer Form</h4>
                    Name:
                    <br />
                    <input
                        type="text"
                        name="name"
                        onChange={fieldChange}
                        value={form.name}
                    />
                    <br />

                    brand:
                    <br />
                    <input
                        type="text"
                        name="brand"
                        onChange={fieldChange}
                        value={form.brand}
                    />
                    <br />

                    price:
                    <br />
                    <input
                        type="number"
                        name="price"
                        onChange={fieldChange}
                        value={form.price}
                    />
                    <br />

                    image:
                    <br />
                    <input
                        type="file"
                        name="image"
                        // onChange={fieldChange}
                        // value={form.price}
                    />
                    <br />

                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default AddBeer;