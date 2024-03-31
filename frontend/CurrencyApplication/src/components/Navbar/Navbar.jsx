import React from "react"
import styled from "styled-components"
import SC from "./img/SC.png"
import IconPersone from "./img/person.svg"

const NavbarDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px 0;
	background-color: #f1f7ff;
`

const Pages = styled.div`
	font-size: 16px;
	display: flex;
	background: white;
	justify-content: space-around;
	align-items: center;
	height: 40px;
	font-weight: 500;
	font-weight: normal;
	border: 2px solid rgba(21, 25, 28, 0.25);
	border-radius: 20px;
`
const Page = styled.a`
	font-family: "TT Travels";
	color: #213a8b;
	border-radius: 20px;
	padding: 8px 18px;
	margin: 0 2px;
	text-decoration: none;
	transition: all 0.25s;
	&:hover {
		color: white;
		background: #213a8b;
	}
`

const UserName = styled.div`
	display: flex;
	align-items: center;
	&img {
		width: 40px;
		height: 40px;
	}
	&a {
		font-family: "TT Travels";
		text-decoration: none;
		color: #213a8b;
	}
`
const Name = styled.a`
	font-family: "TT Travels";
	text-decoration: none;
	color: #213a8b;
	font-size: 16px;
`
const NameImg = styled.img`
	margin: 10px;
	width: 35px;
	height: 35px;
`
const Line = styled.div`
	width: 100%;
	height: 2px;
	background: rgba(21, 25, 28, 0.25);
`
const Navbar = () => {
	return (
		<>
			<NavbarDiv>
				<div>
					<img src={SC} />
				</div>
				<Pages>
					<Page href='/mainPage'>Главная</Page>
					<Page href='/history'>Операции</Page>
					<Page href='#'>Уведомления</Page>
				</Pages>
				<UserName>
					<Name href='#'>Имя</Name>
					<NameImg src={IconPersone} />
				</UserName>
			</NavbarDiv>
			<Line />
		</>
	)
}

export default Navbar