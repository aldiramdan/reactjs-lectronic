/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ChangePassword from "../../components/modal/change_password";
import arrow from "./img/arrow.png";
import prfl from "./img/prfl.png";
import edit from "./img/edit.png";
import line from "./img/line.png";
import barrow from "./img/barrow.png";
import name from "./img/name.png";
import loc from "./img/loc.png";
import useApi from "../../helpers/api";

import "./profile.css";

function Profile() {

    const history = useNavigate()
    const handleHistory = ()=>{
      history(-1)
    }

    const api = useApi();

    const [bg1, setBg1] = useState(true);
    const [bg2, setBg2] = useState(false);
    const [b, setB] = useState(false);
    const [birthdate, setBirthdate] = useState(new Date());
    const [name1, setName1] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [countryID, setCountryID] = useState("");

    const [data1, setData1] = useState("");
    const [data2, setData2] = useState(new Date());
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");
    const [data5, setData5] = useState("");

    const handleDate = (e) => {
		setB(true);
		setBirthdate(e.target.value);
    };

    const handleBg1 = () => {
		setBg1(true);
		setBg2(false);
		setGender("Male");
    };

    const handleBg2 = () => {
		setBg1(false);
		setBg2(true);
		setGender("Female");
    };

    const hndlGender = () => {
		if (data4 === "Male") {
			setBg1(true);
			setBg2(false);
		} else if (data4 === "Female") {
			setBg1(false);
			setBg2(true);
		}
    };

    const getData = () => {
		api
			.req({
				url: "/users/profile",
			})
			.then((res) => {
				setData1(res.data.data.name);
				setData2(res.data.data.date_of_birth);
				setData3(res.data.data.address);
				setData4(res.data.data.gender);
				setData5(res.data.data.mobile_number);
			})
        	.catch((err) => console.log(err));
    };

    const updateData = () => {
		api
			.req({
				method: "PUT",
				url: "/users/profile/edit",
				data: {
					name: name1,
					date: birthdate,
					address: address,
					gender: gender,
					phone: parseInt(phone),
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
    };

    useEffect(() => {
      	getData();
    }, []);

    useEffect(() => {
      	hndlGender();
    }, [data4]);

    const cid = (e) => {
		if (e.target.name === "+62") {
			setCountryID("+62");
		} else if (e.target.name === "+65") {
			setCountryID("+65");
		}
    };

    const bd = () => {
		if (b) {
			return birthdate;
		} else if (data2 !== undefined) {
			return data2;
		} else {
			return "When were you born";
		}
    };

    return (
		<div style={{ marginBottom: "80px" }}>
			<Row className="fazprof1">
			<Link onClick={handleHistory} className="fazprof2">
				<img src={arrow} className="fazprof3" alt={arrow} />
			</Link>

			<img src={prfl} className="fazprof4" alt={prfl} />
			<label
				style={{
				background: `url(${edit})`,
				backgroundSize: "100% 100%",
				height: "8rem",
				width: "10rem",
				marginRight: "1rem",
				}}
				htmlFor="up"
				className="fazprof5"
				alt={edit}
			/>
			<Form.Control name="file" type="file" id="up" />
			</Row>
			<Row className="fazr2">
			<h1 style={{ fontWeight: "bold" }}>Edit your personal bio</h1>
			<p>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit.
			</p>
			<img style={{ width: "84%" }} src={line} alt={line} />
			</Row>

			<Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
			<Col sm={5} style={{ position: "relative" }}>
				<h6 style={{ fontWeight: "bold" }}>Name</h6>
				<Form.Control
				type="text"
				style={{
					padding: "15px",
					borderRadius: "10px",
					paddingLeft: "4rem",
				}}
				placeholder="What is Your Name"
				onChange={(e) => setName1(e.target.value)}
				defaultValue={data1}
				/>
				<img
				src={name}
				alt={name}
				style={{
					position: "absolute",
					top: "56%",
					left: "2rem",
					width: "15px",
					height: "15px",
				}}
				/>
			</Col>

			<Col sm={5}>
				<h6 style={{ fontWeight: "bold" }}>Date of birth</h6>
				<Form.Control
				type="date"
				style={{
					padding: "15px",
					borderRadius: "10px",
					paddingLeft: "4rem",
					minHeight: "3.5rem",
					maxHeight: "3.5rem",
				}}
				placeholder={bd()}
				onChange={(e) => handleDate(e)}
				/>
			</Col>
			</Row>

			<Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
			<Col sm={5} style={{ position: "relative" }}>
				<h6 style={{ fontWeight: "bold" }}>Address</h6>
				<Form.Control
				type="text"
				style={{
					padding: "15px",
					borderRadius: "10px",
					paddingLeft: "4rem",
				}}
				placeholder="Where is your house address"
				onChange={(e) => setAddress(e.target.value)}
				defaultValue={data3}
				/>
				<img
				src={loc}
				alt={loc}
				style={{
					position: "absolute",
					top: "56%",
					left: "2rem",
					width: "15px",
					height: "15px",
				}}
				/>
			</Col>
			<Col sm={5}>
				<h6 style={{ fontWeight: "bold" }}>Gender</h6>
				<div className="fazbtn">
				<div
					className={bg1 ? "fazbtn fazbackground" : "fazbtn"}
					onClick={handleBg1}
				>
					<div className="fazcss" style={{ cursor: "pointer" }}>
					<p className={bg1 ? "fazwhite" : "fazcss2"}>
						<span
						className={bg1 ? "fazwhite" : "fazcss2"}
						style={{ width: "20px", height: "20px" }}
						>
						&#9794;
						</span>
						&nbsp; &nbsp; Male
					</p>
					</div>
				</div>
				<div
					className={bg2 ? "fazbtn fazbackground" : "fazbtn"}
					onClick={handleBg2}
				>
					<div className="fazcss" style={{ cursor: "pointer" }}>
					<p className={bg2 ? "fazwhite" : "fazcss2"}>
						<span
						className={bg2 ? "fazwhite" : "fazcss2"}
						style={{ width: "20px", height: "20px" }}
						>
						&#9792;
						</span>
						&nbsp; &nbsp; Female
					</p>
					</div>
				</div>
				</div>
			</Col>
			</Row>

			<Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
			<Col sm={5}>
				<h6 style={{ fontWeight: "bold" }}>Phone Number</h6>
				<InputGroup className="mb-3">
				<Dropdown>
					<Dropdown.Toggle
					id="input-group-dropdown-1"
					style={{
						backgroundColor: "white",
						color: "black",
					}}
					>
					<div style={{ display: "flex" }}>
						{countryID !== "" ? countryID : "+62"} &nbsp;&nbsp;
						<img
						src={barrow}
						alt={barrow}
						style={{
							width: "16px",
							height: "10px",
							marginTop: "6.6px",
						}}
						/>
						&nbsp;
					</div>
					</Dropdown.Toggle>
					<Dropdown.Menu>
					<Dropdown.Item name="+62" onClick={(e) => cid(e)}>
						+62 - Indonesia
					</Dropdown.Item>
					<Dropdown.Item name="+65" onClick={(e) => cid(e)}>
						+65 - Singapore
					</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Form.Control
					type="number"
					placeholder="Enter your phone number"
					aria-label="Text input with dropdown button"
					style={{ padding: "15px" }}
					onChange={(e) => setPhone(e.target.value)}
					defaultValue={data5}
				/>
				</InputGroup>
			</Col>
			<ChangePassword />
			</Row>

			<Row style={{ marginLeft: "11.8vmin" }}>
			<Button
				style={{
				padding: "10px",
				minWidth: "100px",
				width: "15%",
				borderRadius: "10px",
				border: "none",
				fontWeight: "bold",
				}}
				className="fazhvrsubmit"
				onClick={updateData}
			>
				Submit
			</Button>
			</Row>
		</div>
    );
}

export default Profile;
