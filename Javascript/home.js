var dataReload = document.querySelectorAll("[data-reload]");

var language = {
	eng: {
		//NAV
		NavElement1: "Home",
		NavElement2: "our vehicle",
		NavElement3: "Our Team",
		//NavElement4: "Sponsors",
		NavElement5: "Contact",
		//LandingPage
		LandingPageLine1: "Perfection,",
		LandingPageLine2: "and nothing less.",
		LandingPageText: "We are the Astrum Racing Team of the",
		LandingPageTextLink: "Klaus-Groth-Schule Neumuenster",
		//CarPage
		CarPageTitle: "our vehircle",
		CarPageText:
			"Our vehicle is currently in the development and test phase. Follow us on our social media platforms for more updates!",
		//TeamPage
		TeamPageTitle: "Our Team",
		TeamMemberRole1: "Team management, Engineering",
		TeamMemberRole2: "Recources & PR",
		TeamMemberRole3: "Marketing",
		//sponsors
		ourSponsors: "Our Sponsors",
		description1a: `The "CIMTT" was founded in 1989 with the goal of transferring CIM technologies to industry. 
		In 2014 the "Institute for CIM Technology Transfer" was transferred to the Kiel University of Applied Sciences. 
		The "Institute for Production Technology IfP" is also located in the building, with the focus on teaching, 
		R&D and technology transfer.`,
		description1b: `-cimtt.fh-kiel.de`,
		SponsorLink1: "visit website",
		//contact
		ContactPageTitle: "Contact",
		EmailContainerTitleFollow: "Do you have any further questions?",
		ourmail: "Our E-Mail adress:",
		SocialContainerTitleFollow:
			"Follow us on our social media platforms for more updates.",
		ContactContainerAdressTitle: "Adress",
		adress1: "Klaus Groth School",
		adress2: "High school in the city of Neumuenster",
		adress3: "Parkstrasse 1",
		adress4: "24534 Neumuenster",
		adress5: "Germany",
		//footer
		imprint1: "Parkstrasse 1",
		imprint2: "24534 Neumuenster",
		imprint3: "Germany",
		dataProtection: `Texts, logos, graphics and image files as well as their
        arrangement on this website are subject to copyright protection.
        Any unauthorized use without permission from us or the person
        in the picture is prohibited. 
        If any content on this website is found to be copyright infringing,
        please contact us. We will remove the affected content as soon as possible.`,
		tplDisclaimer: `External links are provided for informational purposes only.
        They do not represent the endorsement or approval of products,
        services or opinions of the organization or individual.
        We do not bear any responsibility for the accuracy,
        legality or content of the external website or the link.
        Please contact the external website for answers to questions
        about the content.`,
	},
};

if (window.location.hash) {
	if (window.location.hash === "#eng") {
		//NAV
		NavElement0.setAttribute("href", "#start");
		NavElement1.textContent = language.eng.NavElement1;
		NavElement1.setAttribute("href", "#start");
		NavElement2.textContent = language.eng.NavElement2;
		NavElement2.setAttribute("href", "#CarPage");
		NavElement3.textContent = language.eng.NavElement3;
		NavElement3.setAttribute("href", "#TeamPage");
		//NavElement4.textContent = language.eng.NavElement4;
		//NavElement4.setAttribute("href", "#sponsors");
		NavElement5.textContent = language.eng.NavElement5;
		NavElement5.setAttribute("href", "#contact");
		//LandingPage
		LandingPageLine1.textContent = language.eng.LandingPageLine1;
		LandingPageLine2.textContent = language.eng.LandingPageLine2;
		LandingPageText.textContent = language.eng.LandingPageText;
		LandingPageTextLink.textContent = language.eng.LandingPageTextLink;
		//CarPage
		CarPageTitle.textContent = language.eng.CarPageTitle;
		CarPageText.textContent = language.eng.CarPageText;
		//TeamPage
		TeamPageTitle.textContent = language.eng.TeamPageTitle;
		TeamMemberRole1.textContent = language.eng.TeamMemberRole1;
		TeamMemberRole2.textContent = language.eng.TeamMemberRole2;
		TeamMemberRole3.textContent = language.eng.TeamMemberRole3;
		//sponsors
		ourSponsors.textContent = language.eng.ourSponsors;
		description1a.textContent = language.eng.description1a;
		description1b.textContent = language.eng.description1b;
		SponsorLink1.textContent = language.eng.SponsorLink1;
		//contact
		ContactPageTitle.textContent = language.eng.ContactPageTitle;
		EmailContainerTitleFollow.textContent =
			language.eng.EmailContainerTitleFollow;
		ourmail.textContent = language.eng.ourmail;
		SocialContainerTitleFollow.textContent =
			language.eng.SocialContainerTitleFollow;
		ContactContainerAdressTitle.textContent =
			language.eng.ContactContainerAdressTitle;
		adress1.textContent = language.eng.adress1;
		adress2.textContent = language.eng.adress2;
		adress3.textContent = language.eng.adress3;
		adress4.textContent = language.eng.adress4;
		adress5.textContent = language.eng.adress5;
		//footer
		imprint1.textContent = language.eng.imprint1;
		imprint2.textContent = language.eng.imprint2;
		imprint3.textContent = language.eng.imprint3;
		dataProtection.textContent = language.eng.dataProtection;
		tplDisclaimer.textContent = language.eng.tplDisclaimer;
	}
}

for (i = 0; i <= dataReload.length; i++) {
	dataReload[i].onclick = function () {
		setTimeout(function () {
			location.reload(true);
		}, 1);
	};
}
