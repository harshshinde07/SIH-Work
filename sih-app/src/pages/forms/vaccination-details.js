import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./vaccination-details.css";
import axios from "axios";

class VaccineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccinationDate: new Date(),
      species: "",
      animalType: "",
      animalName: "",
      diseaseName: "",
      vaccineName: "",
      manufacturer: "",
      vaccinatedCount: "",
      remarks: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const vaccinationDetails = {
      vaccinationDate: this.state.vaccinationDate,
      species: this.state.species,
      animalType: this.state.animalType,
      animalName: this.state.animalName,
      diseaseName: this.state.diseaseName,
      vaccineName: this.state.vaccineName,
      manufacturer: this.state.manufacturer,
      vaccinatedAnimalCount: this.state.vaccinatedCount,
      remarks: this.state.remarks,
    };
    axios
      .post("http://localhost:3000/vaccinationDetails", vaccinationDetails)
      .then((res) => console.log("RESPONSE:- " + res.data.species))
      .catch((err) => {
        console.log("Axios Error:", err);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="card">
        <div className="header">
          <h4>Vaccination Details</h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupDate">
                <Form.Label style={{ marginRight: 1 + "rem" }}>
                  Vaccination Date
                </Form.Label>
                <DatePicker
                  selected={this.state.vaccinationDate}
                  onSelect={this.handleSelect}
                  onChange={this.handleDateChange}
                  name="startDate"
                  dateFormat="dd/MM/yyyy"
                />
              </Form.Group>

              <Form.Group controlId="formGroupSpecies">
                <Form.Label>Species</Form.Label>
                <Form.Control
                  as="select"
                  name="species"
                  onChange={this.handleChange}
                  value={this.state.species}
                >
                  <option value="Species 1">Speices 1</option>
                  <option value="Species 2">Speices 2</option>
                  <option value="Species 3">Speices 3</option>
                  <option value="Species 4">Speices 4</option>
                  <option value="Species 5">Speices 5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupAnimalType">
                <Form.Label>Animal Type</Form.Label>
                <Form.Control
                  as="select"
                  name="animalType"
                  onChange={this.handleChange}
                  value={this.state.animalType}
                >
                  <option value="Domestic">Domestic</option>
                  <option value="Wild">Wild</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupAnimal">
                <Form.Label>Animal Name</Form.Label>
                <Form.Control
                  as="select"
                  name="animalName"
                  onChange={this.handleChange}
                  value={this.state.animalName}
                >
                  <option value="Snake">Snake</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Cow">Cow</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupDisease">
                <Form.Label>Disease Name</Form.Label>
                <Form.Control
                  as="select"
                  name="diseaseName"
                  onChange={this.handleChange}
                  value={this.state.diseaseName}
                >
                  <option value="Disease 1">Disease 1</option>
                  <option value="Disease 2">Disease 2</option>
                  <option value="Disease 3">Disease 3</option>
                  <option value="Disease 4">Disease 4</option>
                  <option value="Disease 5">Disease 5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupVaccine">
                <Form.Label>Vaccine Name</Form.Label>
                <Form.Control
                  as="select"
                  name="vaccineName"
                  onChange={this.handleChange}
                  value={this.state.vaccineName}
                >
                  <option value="Vaccine 1">Vaccine 1</option>
                  <option value="Vaccine 2">Vaccine 2</option>
                  <option value="Vaccine 3">Vaccine 3</option>
                  <option value="Vaccine 4">Vaccine 4</option>
                  <option value="Vaccine 5">Vaccine 5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupManufacturer">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Manufacturer Name"
                  name="manufacturer"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupAnimalCount">
                <Form.Label>No. of Animals Vaccinated</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Animals Vaccinated Count"
                  name="vaccinatedCount"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupRemarks">
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="remarks"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Details
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default VaccineForm;
