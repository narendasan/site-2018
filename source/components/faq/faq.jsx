import React, { Component } from 'react'

import styles from './faq.scss'

class FAQItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={"FAQItem" + (this.props.centered ? ' BottomItem' : '')}>
				<h3 className={"FAQ__itemHeader" + (this.props.centered ? ' centered-faq-big' : '')}>{this.props.header}</h3>
				<p className={(this.props.centered ? ' centered-faq-big' : '')}>{this.props.children}</p>
			</div>

		);
	}
}

class FAQ extends Component {

	render() {

		const column = {
			width: '50%',
			display: 'inline-block',
		}

		let faqs = [[
			{question: "Are there travel reimbursements?", answer: ["We are planning to have busses going to various ", <a href='https://hackillinois.org/busses' target='_blank'>schools</a>, " in lieu of travel reimbursements."]},
			{question: "Will there be food?", answer: "We will have a large variety of meals, snacks, and drinks that will be provided for the entire weekend. If you have a dietary restriction, please mention it on your application. "},
			{question: "Where do I sleep?", answer: "Sleeping rooms will be furnished with air mattresses and pillows. We want you to be comfortable!"},
			{question: "When should I arrive?", answer: "You should arrive by 5 PM on Friday and leave by 5 PM on Sunday. We will release a schedule soon."}
		], [
			{question: "What should I bring?", answer: "You should bring a student ID, a change of clothing or two, toiletries, a laptop and charger, and any required hardware for your project. Essentially, bring anything you would need for a normal weekend. However, due to power draw concerns, please do not bring extra monitors or desktop computers."},
			{question: "Do I need a team?", answer: "Absolutely not! Many attendees come without a team and find a group at the event. We will be providing mentor matching and a team formation workshop for you to meet other like-minded individuals."},
			{question: "Will you have hardware?", answer: "We will have high-level hardware provided by companies. We will also have basic hardware components like resistors, transistors, and ICs for you to tinker with."}
		]];

		let faqs_unused = [
			{question: "What are the prizes?", answer: ["You can see all potential prizes and prize criteria at ", <a href='https://hackillinois.org/prizes'>https://hackillinois.org/prizes</a>, "."]},
			{question: "What will contributors work on?", answer: ["If you RSVPed to the Contribute track, you will be working on one of the projects in the ecosystem in which you were accepted. See: ", <a href='https://hackillinois.org/projects'>https://hackillinois.org/projects</a>, '.']},
    ];

		let columns = faqs.map( (col) => {
			let colItems = col.map( (item) => {
				return (
					<FAQItem header={item.question}>
						{item.answer}
					</FAQItem>
				);
			});

			return (
				<div className="FAQ_list_column">
					{colItems}
				</div>
			);
		});
		let centeredContactQ = {question: "Other questions?", answer: ["Please don't hesitate to reach out to us at ", <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a>, "!"]};
		return(
			<div className="FAQ">
				<div className="container">
					<h1>FAQs</h1>
					<div className="spacer" />
					<div className="FAQ_list">
						{columns}
					</div>
					<FAQItem className="contactFAQ" header={centeredContactQ.question} centered={true}>
						{centeredContactQ.answer}
					</FAQItem>
				</div>
			</div>
        );
    }
}

export default FAQ
