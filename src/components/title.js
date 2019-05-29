import React from 'react';
import MediaQuery from 'react-responsive';
const The = () => (
	<div>The</div>
);

const Penthouze = () => (
	<div style={{ fontSize: "6em" }}>Penthouze</div>
);

const ContactSatvik = () => (
	<span><a style={{ textDecoration: "none", color: "black" }} href={"mailto:satviksinghal31@gmail.com"}>Satvik Singhal</a></span>
);

const ContactDevesh = () => (
	<span><a style={{ textDecoration: "none", color: "black", }} href={"mailto:ananddevesh22@gmail.com"}>Devesh Anand</a></span>
);

const Contact = () => (
	<div style={{ marginTop: "25px", display: "flex", justifyContent: "space-between" }}><ContactSatvik /> <ContactDevesh /></div>
);

const Title = () => (
	<div>
		<MediaQuery minDeviceWidth={1224}>
			<div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "200px auto", fontFamily: 'Montserrat' }}>
				<The /> <Penthouze />
				<Contact />
			</div>
		</MediaQuery>
		<MediaQuery maxDeviceWidth={1224}>
			<div style={{ display: "flex", flexDirection: "column", width: "auto", margin: "200px auto", fontFamily: 'Montserrat' }}>
				<The /> <Penthouze />
				<Contact />
			</div>
		</MediaQuery>
	</div>
);


export default Title;
