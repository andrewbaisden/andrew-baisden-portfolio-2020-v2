import React, { Fragment } from 'react';
import styled from 'styled-components';

const PageIntroContainer = styled.article`
	position: absolute;
	width: 96.2rem;
	height: 48rem;
	z-index: 2;
	top: 75rem;
	right: 0;
	background: url('/assets/img/intro_page_bg.svg') no-repeat center center;
	padding: 6rem 4rem 0 24rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		z-index: 1;
		width: 59rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		z-index: 1;
		width: 59rem;
	}
`;

const MainContainer = styled.main`
	position: relative;
	width: 100%;
	margin: auto;
	display: flex;
	/* justify-content: flex-end; */
`;

const ConnectContainer = styled.section`
	position: absolute;
	width: 100%;
	z-index: 2;
	top: 140rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

const PageTitle = styled.div`
	position: absolute;
	width: 100%;
	height: 9rem;
	z-index: 2;
	top: 122.7rem;
	background: #ffffff;
	text-align: center;
	text-transform: lowercase;
`;

const PageTitleHeading = styled.h1`
	color: #3c4753;
	font-size: 10rem;
	font-weight: bold;
	margin: 4.2rem;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		font-size: 5rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		font-size: 5rem;
	}
`;

const PageIntroBG = styled.div`
	position: absolute;
	background: #ffffff;
	width: 100%;
	height: 33rem;
	top: 90rem;
`;

const DiagonalBG = styled.div`
	position: absolute;
	top: 112rem;
	background: url('/assets/img/diagonal_bg.svg') no-repeat;
	/* background: red; */
	height: 193.7rem;
	right: 0;
	width: 107.6rem;
`;

const UsesText = styled.p`
	text-align: left;
	margin: 0 2rem 0 2rem;
	width: 100%;
	max-width: 120rem;
`;

const UsesHeadingH1 = styled.h1`
	font-size: 3rem;
	margin: 0 0 2rem 0;
`;
const UsesHeadingH2 = styled.h2`
	font-size: 2rem;
	margin: 0 0 2rem 0;
`;
const UsesHeadingH3 = styled.h3`
	font-size: 1.8rem;
	margin: 0 0 2rem 0;
`;

const UsesList = styled.ul`
	margin: 2rem 0 2rem 0;

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		//CSS
		margin-left: 2rem;
	}

	/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

	@media (min-width: 320px) and (max-width: 480px) {
		//CSS
		margin-left: 2rem;
	}
`;

const GTD = styled.p`
	margin: 2rem 0 2rem 0;
`;

const MainUses = () => {
	return (
		<Fragment>
			<MainContainer>
				<PageIntroContainer>
					<p>
						The following is a list of the tools and software that I use on a daily basis to help me build amazing
						things and stay productive throughout the day. This page was inspired by{' '}
						<a href="https://wesbos.com/" target="_blank" rel="noopener noreferrer nofollow">
							Wes Bos
						</a>
						who is a Full Stack Developer and co host on the popular developer podcast
						<a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer nofollow">
							Syntax
						</a>
						. If you are a Developer it would be cool if you also had a page like this on your website which you can add
						here
						<a href="https://uses.tech/" target="_blank" rel="noopener noreferrer nofollow">
							https://uses.tech/
						</a>
					</p>
				</PageIntroContainer>
				<PageIntroBG></PageIntroBG>
				<PageTitle>
					<PageTitleHeading>uses</PageTitleHeading>
				</PageTitle>
				<DiagonalBG></DiagonalBG>
				<ConnectContainer>
					<UsesText>
						<UsesHeadingH1>Desktop</UsesHeadingH1>
						<UsesHeadingH2>Hardware</UsesHeadingH2>
						<UsesList>
							<li>Laptop: MacBook Pro (Retina, 13-inch, Mid 2014)</li>
							<li>Operating System: macOS</li>
							<li>External Display: Apple 27" Thunderbolt Display</li>
							<li>Mouse: Apple Magic Mouse</li>
							<li>Mouse Pad: SteelSeries QcK gaming mouse pad</li>
						</UsesList>

						<UsesHeadingH3>Desktop Apps</UsesHeadingH3>

						<strong>Code Editor Setup</strong>
						<UsesList>
							<li>Code Editor: Visual Studio Code</li>
							<li>Theme: Night Owl - Sarah Drasner</li>
							<li>Font: Fira Code - monospaced font with programming ligatures</li>
						</UsesList>

						<strong>Command Line Interface (CLI) Setup</strong>

						<UsesList>
							<li>Terminal: Hyper, iTerm 2</li>
							<li>Theme: Material Theme</li>
							<li>Shell Configuration: Oh My Zsh</li>
						</UsesList>

						<strong>Frontend Tech Stack</strong>
						<UsesList>
							<li>Browser: Chrome, Firefox, Safari</li>
							<li>Framework: React, Redux, Next, Vue</li>
						</UsesList>

						<strong>Backend Tech Stack</strong>

						<UsesList>
							<li>Database: MongoDB</li>
							<li>Server: Node.js</li>
							<li>Serverless: Netlify, Zeit Now, Heroku</li>
							<li>API Testing: Postman</li>
						</UsesList>

						<strong>Design</strong>

						<UsesList>
							<li>Graphic Design: Adobe Photoshop</li>
							<li>UI Design and Prototyping: Figma, Sketch, Adobe XD, InVision Studio</li>
						</UsesList>

						<UsesHeadingH1>Mobile</UsesHeadingH1>

						<UsesHeadingH2>Hardware</UsesHeadingH2>

						<UsesList>
							<li>Phone: iPhone X</li>
							<li>Operating System: iOS</li>
						</UsesList>

						<UsesHeadingH3>Mobile Apps</UsesHeadingH3>

						<UsesList>
							<li>Browser: Safari</li>
							<li>Podcasts: Pocket Casts</li>
							<li>Audio Books: Audible</li>
							<li>Music: Spotify, Apple Music</li>
							<li>Entertainment: YouTube</li>
							<li>Social Media: Twitter, Instagram</li>
							<li>Learning: Udemy</li>
							<li>Developer Documentation API: Dash</li>
							<li>Mindfulness: Headspace, Calm</li>
							<li>Messaging: WhatsApp, Discord, Slack</li>
						</UsesList>

						<UsesHeadingH1>Getting Things Done (GTD)</UsesHeadingH1>
						<GTD>
							It’s basically a methodology for making yourself highly productive in your lifestyle. The Apps below are
							the ones i’m using to manage this workflow{' '}
							<a href="https://gettingthingsdone.com/" rel="noopener noreferrer nofollow" target="_blank">
								https://gettingthingsdone.com/
							</a>
						</GTD>

						<UsesHeadingH2>Desktop and Mobile Apps</UsesHeadingH2>

						<UsesList>
							<li>Calendar: Apple Calendar</li>
							<li>Email: Apple Email</li>
							<li>Bear: Note taking and writing documents</li>
							<li>
								Notion: Notion is an all-in-one workspace where you can write, plan, collaborate and get organised - it
								allows you to take notes, add tasks, manage projects & more
							</li>
							<li>Habitica: To Do Lists and reminders</li>
							<li>Forest: Pomodoro</li>
							<li>Day One: Journaling</li>
						</UsesList>
					</UsesText>
				</ConnectContainer>
			</MainContainer>
		</Fragment>
	);
};

export default MainUses;
