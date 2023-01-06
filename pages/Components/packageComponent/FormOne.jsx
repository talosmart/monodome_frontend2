import React from 'react'

const FormOne = () => {
    const handleEdit = () =>{

    }
  return (
    <div className='p-3'>
        <div className="row mt-4 mb-5">
            <span className="text-dark text-uppercase">Options of parcel:</span>
            <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    
                </li>
            </ul>
            <div className="row">
                <div className="form-group col-6 d-flex flex-reverse align-items-center">
                    <input type='radio' name='package_type' className="form-radio nav-link active" id="package"  />
                    <label htmlFor="package">Package</label>
                </div>
                <div className="form-group col-6 d-flex flex-reverse align-items-center">
                    <input type='radio' name='package_type' className="form-radio nav-link active" id="bulk"  />
                    <label htmlFor="bulk">Bulk Delivery</label>
                </div>
            </div>
            <div className="bar success pl-4">
                <i className="ico">&#10004;</i> 
                If you aren’t sending the parcel from the office, then payment is possible only by card
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="form-group">
                            <label htmlFor="sender">Description</label>
                            <textarea type="text" className="form-control" row="50" id="sender" name="sender"></textarea>
                        </div>
                    <div className="row mt-3">
                        <div className="form-group col-lg-3">
                            <label htmlFor="address">Weight, lbs</label>
                            <input type="text" className="form-control" id="zip_code" placeholder='0.05' name="zip_code" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor="address">Size</label>
                            <input type="text" className="form-control" placeholder='Width, cm' id="city" name="city" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Length, cm' id="street" name="street" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Height, cm' id="house_no" name="house_no" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="sender">Sender’s Name</label>
                            <input type="text" className="form-control" id="sender" name="sender" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" className="form-control" placeholder='+ ()' id="phone" name="phone" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col-lg-2">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="zip_code" placeholder='Zip Code' name="zip_code" />
                        </div>
                        <div className="form-group col-lg-2">
                            <label htmlFor="address"></label>
                            <input type="text" className="form-control" placeholder='City' id="city" name="city" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Street' id="street" name="street" />
                        </div>
                        <div className="form-group col-lg-2">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Office Number' id="office_no" name="office_no" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Working Hours' id="hours" name="hours" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="mt-5 row justify-content-between">
            <button className="btn btn-outline-success col-lg-5 col-sm-12" onClick={handleEdit}>
                Calculate cost
            </button>
            <button className="btn btn-success disabled col-lg-5 col-sm-12" onClick={handleEdit}>
                Next
            </button>
        </div>
    </div>
  )
}

export default FormOne