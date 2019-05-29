import React from 'react';

const The = () => (
	<div>The</div>
);

const Penthouze = () => (
	<div style={{fontSize:"6em"}}>Penthouze</div>
);

const ContactSatvik = () => (
	<span><a style={{textDecoration:"none", color:"black"}} href={"mailto:satviksinghal31@gmail.com"}>Satvik Singhal</a></span>
);

const ContactDevesh = () => (
	<span><a style={{textDecoration:"none", color:"black",}} href={"mailto:ananddevesh22@gmail.com"}>Devesh Anand</a></span>
);

const Contact = () => (
	<div style={{marginTop:"25px", display:"flex", justifyContent:"space-between"}}><ContactSatvik /> <ContactDevesh/></div>
);

const Title = () => (
	<div style={{ position: "absolute", left: "50%", top: "50%", width:"500px", height:"auto", marginLeft:"-200px", marginTop:"-100px", fontFamily: 'Montserrat' }}>
		<The /> <Penthouze />
		<Contact />		
	</div>
);


export default Title;
