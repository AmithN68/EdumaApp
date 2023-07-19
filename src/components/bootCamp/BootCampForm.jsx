import React, { useEffect, useState } from "react";
import styles from "./BootCamp.module.css";
import axiosInstance from "../Services/AxiosInstance";
const BootCampForm = () => {
  let [state, setState] = useState({
    name: "",
    description: "",
    website: "",
    email: "",
    address: "",
    career: "",
    averageRating: "",
    photo: "",
  });
  // let [photo, setPhoto] = useState([]);
  // let [photoPreview, setPhotoPreview] = useState([]);
  let {
    name,
    description,
    website,
    email,
    address,
    career,
    averageRating,
    photo,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  // let handleChangePhoto = e => {
  //   let files = e.target.files[0];
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files);
  //   reader.onload = function (e) {
  //     setPhotoPreview(e.target.result);
  //   };
  //   setPhoto(files);
  // };
  // console.log(photo);
  //   useEffect(() => {
  //     // if (photo.length < 1) return;
  //     const newImageUrls = [];
  //     photo.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
  //     setPhotoPreview(newImageUrls);
  //   }, [photo]);
  // let handleChangePhoto=(e)=>{
  // setPhoto([...e.target.files]);
  // }
  console.log(photo);
  let handleSubmit = async e => {
    e.preventDefault();
    let payload = {
      name,
      description,
      website,
      email,
      address,
      career,
      averageRating,
      photo,
    };

    let token = localStorage.getItem("token");
    console.log(token);
    let data = await axiosInstance.post("/bootcamps", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // let { data } = await axiosInstance.get("/bootcamps");
    console.log(data);
  };

  return (
    <section id={styles.BootCampFormBlock}>
      <article>
        <div>
          <h1>BootCamp Form</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName" className="form-label">
              BootCamp Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              placeholder="enter your name here"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Course Description
            </label>
            <textarea
              className="form-control"
              id="exampleInputDescription"
              placeholder="enter your Description here"
              value={description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputWebsite" className="form-label">
              Website
            </label>
            <input
              type="url"
              className="form-control"
              id="exampleInputWebsite"
              placeholder="paste your url  here"
              value={website}
              name="website"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="enter your email here"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="exampleInputAddress"
              placeholder="enter your address here"
              value={address}
              name="address"
              onChange={handleChange}
            />
          </div>
          <div
            className="mb-3"
            name="career"
            value={career}
            onChange={handleChange}
          >
            <label htmlFor="career" className="form-label">
              Career
            </label>
            <select name="career" id="exampleInputCareer">
              <option value="select yourjob">select your job</option>
              <option value="web development">web development</option>
              <option value="react development">react development</option>
              <option value="fullstack development">
                fullstack development
              </option>
              <option value="java development">java development</option>
              <option value="python development">python development</option>
              <option value="android development">android development</option>
              <option value="ux/ui development">ux/ui development</option>
              <option value="business">business</option>
              <option value="others">others</option>
            </select>
          </div>

          <div
            className="mb-3"
            value={averageRating}
            onChange={handleChange}
            name="averageRating"
          >
            <label htmlFor="averageRating" className="form-label">
              Average rating
            </label>
            <select name="averageRating" id="exampleInputAverage">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhoto" className="form-label">
              photo
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleInputPhoto"
              placeholder="enter your address here"
              value={photo}
              name="photo"
              onChange={handleChange}
              multiple
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary" style={{padding:"0.8rem 2.4rem"}}>
              Upload
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default BootCampForm;
