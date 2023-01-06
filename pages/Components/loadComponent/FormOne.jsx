import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Modal.module.css';

const FormOne = () => {
    const handleEdit = () =>{
        document.getElementById('myModal').style.display = 'block';
    }
    const closeModal = () =>{
        document.getElementById('myModal').style.display = 'none';
    }
  return (
    <div className='container'>
        <div className="row mt-4 mb-5">
            <h6 className="text-dark text-uppercase">Deliver from:</h6>
            <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">ADDRESS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">OFFICE</button>
                </li>
            </ul>
            <div className="bar success pl-4">
                <i className="ico">&#10004;</i> 
                If you aren’t sending the parcel from the office, then payment is possible only by card
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                            <input type="text" className="form-control" placeholder='Number' id="house_no" name="house_no" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Apartment' id="apartment" name="apartment" />
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


        <div className="row mt-5">
            <h6 className="text-dark text-uppercase">Deliver To:</h6>
            <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home_1" type="button" role="tab" aria-controls="home" aria-selected="true">ADDRESS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile_1" type="button" role="tab" aria-controls="profile" aria-selected="false">OFFICE</button>
                </li>
            </ul>
            {/* <div className="bar success pl-4">
                <i className="ico">&#10004;</i> 
                If you aren’t sending the parcel from the office, then payment is possible only by card
            </div> */}
            <div className="tab-content pt-3" id="myTabContent">
                <div className="tab-pane fade show active" id="home_1" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="sender">Receiver’s Name</label>
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
                            <input type="text" className="form-control" placeholder='Number' id="house_no" name="house_no" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" placeholder='Apartment' id="apartment" name="apartment" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile_1" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="sender">Receiver’s Name</label>
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

        <div className="mt-5">
            <button className="btn btn-success w-100" onClick={handleEdit}>
                Next
            </button>
        </div>

        {/* Modal */}
        <div id="myModal" className={styles.modal}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <div className={styles.modalContent}>
                <Image src={"/img/location.png"} width={"100vw"} height={"100"} alt={"location"} />
                <div className="container">
                        <div className="modal-header">
                            <h4 className="text-dark text-center">Delivery locations</h4>
                        </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="fname">Deliver From</label>
                            <p className="">21 Alex Ekwueme Way, Jabi 900108, Abuja</p>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="lname">Deliver To</label>
                            <p className="">Office #4, Zaria Road, 800283, Kaduna</p>
                        </div>
                    </div>
                    
                    <Link href={"/package"}>
                        <button className="btn btn-success d-block w-100 mx-auto mt-4">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormOne