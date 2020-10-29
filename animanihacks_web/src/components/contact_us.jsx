import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';



class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

  render() {
    return(
      <Grid>
        <Jumbotron>
          <div>
            <h2>Contact Us</h2>
            <Button bsStyle="primary" bsSize="medium" onClick={this.handleShow}>
              Compliments
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Compliments</Modal.Title>
                <Modal.Title>We love to hear about it when we get it right.
                   Please go ahead!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Title</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">Ms</option>
                    <option value="other">Mr</option>
                    <option value="other">Mrs</option>
                    <option value="other">Rev</option>
                    <option value="other">Prof</option>
                    <option value="other">Dr</option>
                    <option value="other">Adv</option>
                    <option value="other">Hon</option>
                  </FormControl>
                </FormGroup>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Name"
                  placeholder="Enter First Name"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Surname"
                  placeholder="Enter Surname"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="ID Number"
                  placeholder="Enter ID Number"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                />
                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                />
                <p>Method of contact</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Email
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    SMS
                  </Radio>{' '}
                </FormGroup>
                <p>Are you an exisitng SunBank customer?</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Yes
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    No
                  </Radio>{' '}
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Compliment relates to</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">ATM</option>
                    <option value="other">Branch</option>
                    <option value="other">Cellphone Banking</option>
                    <option value="other">Cheque Account</option>
                    <option value="other">Savings Account</option>
                    <option value="other">Commercial Property Finance</option>
                    <option value="other">Credit Card</option>
                    <option value="other">Debit Card</option>
                    <option value="other">SunBank Business</option>
                    <option value="other">SunBank Premier</option>
                    <option value="other">Online Banking</option>
                    <option value="other">Utility Payments</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>How can we help you?</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Tell Us" />
                </FormGroup>
              </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                <Button type="submit">Submit</Button>
              </Modal.Footer>
            </Modal>
            <Button bsStyle="primary" bsSize="medium" onClick={this.handleShow}>
              Queries
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Queries & Suggestions</Modal.Title>
                <Modal.Title>Have a question or suggestion you think
                we'd like to hear about? Go ahead and let us know.</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Title</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">Ms</option>
                    <option value="other">Mr</option>
                    <option value="other">Mrs</option>
                    <option value="other">Rev</option>
                    <option value="other">Prof</option>
                    <option value="other">Dr</option>
                    <option value="other">Adv</option>
                    <option value="other">Hon</option>
                  </FormControl>
                </FormGroup>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Name"
                  placeholder="Enter First Name"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Surname"
                  placeholder="Enter Surname"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="ID Number"
                  placeholder="Enter ID Number"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                />
                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                />
                <p>Method of contact</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Email
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    SMS
                  </Radio>{' '}
                </FormGroup>
                <p>Are you an exisitng SunBank customer?</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Yes
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    No
                  </Radio>{' '}
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Query/Suggestion relates to</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">ATM</option>
                    <option value="other">Branch</option>
                    <option value="other">Cellphone Banking</option>
                    <option value="other">Cheque Account</option>
                    <option value="other">Savings Account</option>
                    <option value="other">Commercial Property Finance</option>
                    <option value="other">Credit Card</option>
                    <option value="other">Debit Card</option>
                    <option value="other">SunBank Business</option>
                    <option value="other">SunBank Premier</option>
                    <option value="other">Online Banking</option>
                    <option value="other">Utility Payments</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Do you have a Query or Suggestion?</ControlLabel>
                    <FormControl componentClass="select" placeholder="Please Select">
                      <option value="select">Query</option>
                      <option value="other">Suggestion</option>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>How can we help you?</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Tell Us" />
                </FormGroup>
              </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                <Button type="submit">Submit</Button>
              </Modal.Footer>
            </Modal>
            <Button bsStyle="primary" bsSize="medium" onClick={this.handleShow}>
              Complaints
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Complaints</Modal.Title>
                <Modal.Title>Have we disappointed you in some way?
                Please give us the opportunity t make it up to you.</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Title</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">Ms</option>
                    <option value="other">Mr</option>
                    <option value="other">Mrs</option>
                    <option value="other">Rev</option>
                    <option value="other">Prof</option>
                    <option value="other">Dr</option>
                    <option value="other">Adv</option>
                    <option value="other">Hon</option>
                  </FormControl>
                </FormGroup>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Name"
                  placeholder="Enter First Name"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Surname"
                  placeholder="Enter Surname"
                />
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="ID Number"
                  placeholder="Enter ID Number"
                />
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Country</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">Afghanistan (+93)</option>
                    <option value="other">Albania (+355)</option>
                    <option value="other">Algeria (+213)</option>
                    <option value="other">American Samoa (+684)</option>
                    <option value="other">Andorra (+376)</option>
                    <option value="other">Angola (+244)</option>
                    <option value="other">Anguilla (+1264)</option>
                    <option value="other">Argentina (+54)</option>
                    <option value="other">Armenia (+374)</option>
                    <option value="other">Aruba (+297)</option>
                    <option value="other">Ascension (+247)</option>
                    <option value="other">Australia (+61)</option>
                    <option value="other">Australian External Territories (+672)</option>
                    <option value="other">Austria (+43)</option>
                    <option value="other">Azerbaijan (+994)</option>
                    <option value="other">Bahamas (+242)</option>
                    <option value="other">Bahrain (+973)</option>
                    <option value="other">Bangladesh (+880)</option>
                    <option value="other">Barbados (+1246)</option>
                    <option value="other">Belarus (+375)</option>
                    <option value="other">Belgium (+32)</option>
                    <option value="other">Belize (+501)</option>
                    <option value="other">Benin (+229)</option>
                    <option value="other">Bermuda (+1441)</option>
                    <option value="other">Bhutan (+975)</option>
                    <option value="other">Bolivia (+591)</option>
                    <option value="other">Bosnia and Herzegovina (Bosnia-Herzegovina)	(+387)</option>
                    <option value="other">Botswana	(+267)</option>
                    <option value="other">Brazil	(+55)</option>
                    <option value="other">Brunei	(+673)</option>
                    <option value="other">Bulgaria	(+359)</option>
                    <option value="other">Burkina Faso	(+226)</option>
                    <option value="other">Burma	(+95)</option>
                    <option value="other">Burundi	(+257)</option>
                    <option value="other">Cambodia	(+855)</option>
                    <option value="other">Cameroon	(+237)</option>
                    <option value="other">Canada	(+1)</option>
                    <option value="other">Cape Verde	(+238)</option>
                    <option value="other">Cayman Islands	(+1345)</option>
                    <option value="other">Central African Republic	(+236)</option>
                    <option value="other">Chad	(+235)</option>
                    <option value="other">Chile	(+56)</option>
                    <option value="other">China	(+86)</option>
                    <option value="other">Clicks (+27)</option>
                    <option value="other">Colombia (+57)</option>
                    <option value="other">Comoros (+269)</option>
                    <option value="other">Congo (+242)</option>
                    <option value="other">Congo Democratic Republic (+243)</option>
                    <option value="other">Cook Islands (+682)</option>
                    <option value="other">Costa Rica (+506)</option>
                    <option value="other">Cote D Ivoire (+225)</option>
                    <option value="other">Croatia (+385)</option>
                    <option value="other">Cuba (+53)</option>
                    <option value="other">Cyprus (+357)</option>
                    <option value="other">Czech Republic (+420)</option>
                    <option value="other">Denmark (+45)</option>
                    <option value="other">Diego-Garcia (+246)</option>
                    <option value="other">Dijibouti (+253)</option>
                    <option value="other">Dominica (+1767)</option>
                    <option value="other">Dominican Republic (+1809)</option>
                    <option value="other">East Timor (+670)</option>
                    <option value="other">Ecuador (+593)</option>
                    <option value="other">Egypt (+20)</option>
                    <option value="other">El Salvador (+503)</option>
                    <option value="other">Equatorial Guinea (+240)</option>
                    <option value="other">Eritrea (+291)</option>
                    <option value="other">Estonia (+372)</option>
                    <option value="other">Ethiopia (+251)</option>
                    <option value="other">Falkland Islands Malvinas (+500)</option>
                    <option value="other">Faroe Islands (+298)</option>
                    <option value="other">Fiji (+679)</option>
                    <option value="other">Finland (+358)</option>
                    <option value="other">France (+33)</option>
                    <option value="other">French Antilles (+590)</option>
                    <option value="other">French Guiana (+594)</option>
                    <option value="other">French Polynesia (+689)</option>
                    <option value="other">Gabon (+241)</option>
                    <option value="other">Gambia (+220)</option>
                    <option value="other">Georgia (+995)</option>
                    <option value="other">Germany (+49)</option>
                    <option value="other">Ghana (+233)</option>
                    <option value="other">Gibraltar (350)</option>
                    <option value="other">Greece (+30)</option>
                    <option value="other">Greenland (299)</option>
                    <option value="other">Grenada (+1473)</option>
                    <option value="other">Guadeloupe (+590)</option>
                    <option value="other">Guam (+671)</option>
                    <option value="other">Guatemala (+502)</option>
                    <option value="other">Guinea (+224)</option>
                    <option value="other">Guinea-Bissau (+245)</option>
                    <option value="other">Guyana (+592)</option>
                    <option value="other">Haiti (+509)</option>
                    <option value="other">Honduras (+504)</option>
                    <option value="other">Hong Kong (+852)</option>
                    <option value="other">Hungary (+36)</option>
                    <option value="other">Iceland (+354)</option>
                    <option value="other">India (+91)</option>
                    <option value="other">Indonesia (+62)</option>
                    <option value="other">Iran (+98)</option>
                    <option value="other">Iraq (+964)</option>
                    <option value="other">Ireland (+353)</option>
                    <option value="other">Israel (+972)</option>
                    <option value="other">Italy (+39)</option>
                    <option value="other">Ivory Coast (+225)</option>
                    <option value="other">Jamaica (+1876)</option>
                    <option value="other">Japan (+81)</option>
                    <option value="other">Jordan (+962)</option>
                    <option value="other">Kazakhstan (+7)</option>
                    <option value="other">Kenya (+254)</option>
                    <option value="other">Kiribati (+686)</option>
                    <option value="other">Kulula (+27)</option>
                    <option value="other">Kuwait (+965)</option>
                    <option value="other">Kyrgystan (+7)</option>
                    <option value="other">Laos (+856)</option>
                    <option value="other">Latvia (+371)</option>
                    <option value="other">Lebanon (+961)</option>
                    <option value="other">Lesotho (+266)</option>
                    <option value="other">Liberia (+231)</option>
                    <option value="other">Libya (+218)</option>
                    <option value="other">Liechtenstein (+423)</option>
                    <option value="other">Lithuania (+370)</option>
                    <option value="other">Luxembourg (+352)</option>
                    <option value="other">Macau (+853)</option>
                    <option value="other">Macedonia (+389)</option>
                    <option value="other">Madagascar (+261)</option>
                    <option value="other">Malawi (+265)</option>
                    <option value="other">Malaysis (+60)</option>
                    <option value="other">Maldives (+960)</option>
                    <option value="other">Mali (+223)</option>
                    <option value="other">Malta (+356)</option>
                    <option value="other">Marshall Islands (+692)</option>
                    <option value="other">Martinique (+596)</option>
                    <option value="other">Maurtinia (+222)</option>
                    <option value="other">Mauritius (+230)</option>
                    <option value="other">Mayotte (+269)</option>
                    <option value="other">Mexico (+52)</option>
                    <option value="other">Micronesia (+691)</option>
                    <option value="other">Moldova (+373)</option>
                    <option value="other">Monaco (+377)</option>
                    <option value="other">Mongolia (+976)</option>
                    <option value="other">Montserrat (+1664)</option>
                    <option value="other">Morocco (+212)</option>
                    <option value="other">Mozambique (+258)</option>
                    <option value="other">Myanmar (+95)</option>
                    <option value="other">Namibia (+264)</option>
                    <option value="other">Nauru (+674)</option>
                    <option value="other">Nepal (+977)</option>
                    <option value="other">Netherlands (+31)</option>
                    <option value="other">Netherlands Antilles (+599)</option>
                    <option value="other">New Caledonia (+687)</option>
                    <option value="other">New Zealand (+64)</option>
                    <option value="other">Nicargua (+505)</option>
                    <option value="other">Niger (+277)</option>
                    <option value="other">Nigeria (+234)</option>
                    <option value="other">Niue (+683)</option>
                    <option value="other">Norfolk island (+6723)</option>
                    <option value="other">North Korea (+850)</option>
                    <option value="other">Northern Mariana Islands (+670)</option>
                    <option value="other">Norway (+47)</option>
                    <option value="other">Oman (+968)</option>
                    <option value="other">Pakistan (+92)</option>
                    <option value="other">Palau (+680)</option>
                    <option value="other">Palestine (+970)</option>
                    <option value="other">Panama (+507)</option>
                    <option value="other">Papua New Guinea (+675)</option>
                    <option value="other">Paraguay (+595)</option>
                    <option value="other">Peru (+51)</option>
                    <option value="other">Philippines (+63)</option>
                    <option value="other">Poland (+48)</option>
                    <option value="other">Portugal (+351)</option>
                    <option value="other">Puerto Rico (+1787)</option>
                    <option value="other">Qatar (+974)</option>
                    <option value="other">Reunion (262)</option>
                    <option value="other">Romania (+40)</option>
                    <option value="other">Russian Federation (+7)</option>
                    <option value="other">Rwanda (+250)</option>
                    <option value="other">Saint Kitts And Nevis (+1869)</option>
                    <option value="other">Saint Lucia (+1758)</option>
                    <option value="other">Samoa (+685)</option>
                    <option value="other">San Marino (+378)</option>
                    <option value="other"> Sao Tome And Principe (+239)</option>
                    <option value="other">Saudi Arabia (+966)</option>
                    <option value="other">Senegal (+221)</option>
                    <option value="other">Seychelles (+248)</option>
                    <option value="other">Sierra Leone (+232)</option>
                    <option value="other">Singapore (+65)</option>
                    <option value="other">Slovakia (+421)</option>
                    <option value="other">Slovenia (+286)</option>
                    <option value="other">Solomon Islands (+677)</option>
                    <option value="other">Somalia (+252)</option>
                    <option value="other">South Africa (+27)</option>
                    <option value="other">South Korea (+82)</option>
                    <option value="other">Spain (+34)</option>
                    <option value="other">Sri Lanka (+94)</option>
                    <option value="other">St. Helena (+290)</option>
                    <option value="other">St. Pierre And Miquelon (+508)</option>
                    <option value="other">St. Vincent And Grenadines (+1809)</option>
                    <option value="other">Sudan (+249)</option>
                    <option value="other">Suriname (+597)</option>
                    <option value="other">Swaziland (+268)</option>
                    <option value="other">Sweden (+46)</option>
                    <option value="other">Switzerland (+41)</option>
                    <option value="other">Syrian Arab Republic (+963)</option>
                    <option value="other">Taiwan (+886)</option>
                    <option value="other">Tajikistan (+7)</option>
                    <option value="other">Tanzania (+255)</option>
                    <option value="other">Thailand (+66)</option>
                    <option value="other">Togo (+228)</option>
                    <option value="other">Tokelau (+690)</option>
                    <option value="other">Tonga (+676)</option>
                    <option value="other">Trinidad And Tobago (+868)</option>
                    <option value="other">Tunisia (+216)</option>
                    <option value="other">Turkey (+90)</option>
                    <option value="other">Turkmenistan (+993)</option>
                    <option value="other">Turks And Caicos Islands (+1809)</option>
                    <option value="other">Tuvalu (+688)</option>
                    <option value="other">Uganda (+256)</option>
                    <option value="other">Ukraine (+380)</option>
                    <option value="other">United Arab Emirates (+971)</option>
                    <option value="other">United Kingdom (+44)</option>
                    <option value="other">United States (+1)</option>
                    <option value="other">Uruguay (+598)</option>
                    <option value="other">Uzbekistan (+7)</option>
                    <option value="other">Vanuatu (+678)</option>
                    <option value="other">Venezuala (+58)</option>
                    <option value="other">Vietnam (+84)</option>
                    <option value="other">Virgin Islands British (+1809)</option>
                    <option value="other">Virgin Islands U.S. (1809)</option>
                    <option value="other">Wallis And Futuna Islands (+681)</option>
                    <option value="other">Yemen (+967)</option>
                    <option value="other">Yugoslavia (+381)</option>
                    <option value="other">Zaire (+243)</option>
                    <option value="other">Zambia (+260)</option>
                    <option value="other">Other</option>
                  </FormControl>
                </FormGroup>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                />
                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                />
                <p>Method of contact</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Email
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    SMS
                  </Radio>{' '}
                </FormGroup>
                <p>Have you discussed your complaint with your Private Banker or SunBank Branch?</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Yes
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    No
                  </Radio>{' '}
                </FormGroup>
                <p>Are you an exisitng SunBank customer?</p>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    Yes
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    No
                  </Radio>{' '}
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Complaint relates to</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please Select">
                    <option value="select">ATM</option>
                    <option value="other">Branch</option>
                    <option value="other">Cellphone Banking</option>
                    <option value="other">Cheque Account</option>
                    <option value="other">Savings Account</option>
                    <option value="other">Commercial Property Finance</option>
                    <option value="other">Credit Card</option>
                    <option value="other">Debit Card</option>
                    <option value="other">SunBank Business</option>
                    <option value="other">SunBank Premier</option>
                    <option value="other">Online Banking</option>
                    <option value="other">Utility Payments</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>How can we help you?</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Tell Us" />
                </FormGroup>
              </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                <Button type="submit">Submit</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Jumbotron>
      </Grid>
    );
  }
}

render(<Modal />);
