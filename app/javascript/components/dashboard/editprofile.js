import React from "react";
import countries from "../../shared-data/countries";

const EditprofileComp = () => {
  return (
    <div className="edit_profile">
      <h3 className="top-heading">Edit Profile</h3>
      <form>
        <div className="form-col">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-input" placeholder="Jacob" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-input" placeholder="Peter" />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-input"
            value="jacobpeter@mail.com"
            disabled
          />
        </div>
        <div className="form-col">
          <div className="form-group">
            <label>Company/Organization</label>
            <input
              type="text"
              className="form-input"
              placeholder="My Company"
            />
          </div>
          <div className="form-group">
            <label>Industry</label>
            <input
              type="text"
              className="form-input"
              placeholder="Technology"
            />
          </div>
        </div>
        <div className="form-col">
          <div className="form-group">
            <label htmlFor="">Country</label>
            <select name="" id="" className="form-select">
              {countries.map((country, i) => (
                <option key={i + 1}>{country.country}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter city name"
            />
          </div>
        </div>
        <div className="form-col">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name=""
              id=""
              className="form-input"
              placeholder="Phone No."
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input className="form-input" placeholder="House/Office Address" />
          </div>
        </div>
        <div className="form-group">
          <label>Change Profile Photo</label>
          <input type="file" className="form-input" />
        </div>
        <div className="text-center button-group  mt-2 mw-50 mx-auto ">
          <button className="btn btn-dark btn-block btn-effect">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditprofileComp;
