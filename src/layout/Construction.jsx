import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Wave from "../components/Wave";
import classes from "./Construction.module.scss";

const Construction = () => {
	return (
		<section className={classes.construction} id="construction">
			<header className={`${classes.heading} u-center-text u-margin-bottom-big`}>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Budowa mechanizmu
				</Heading>
				<Paragraph className={classes.paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor placerat
					eros et facilisis. Curabitur bibendum pulvinar ligula at tristique. Nunc sit
					amet ex vitae arcu suscipit semper. Phasellus sed posuere enim. Donec gravida
					molestie quam nec bibendum. Duis diam dolor, posuere in ullamcorper vel, tempor
					nec purus. Vestibulum varius vulputate nibh, sed scelerisque nibh ornare at.
					Nullam tincidunt pharetra lectus. Nam metus nunc, tincidunt in aliquet et,
					pharetra mollis justo. Cras laoreet felis faucibus urna lacinia porttitor.
					Mauris convallis orci purus, vitae blandit sapien facilisis hendrerit. Curabitur
					ornare dignissim arcu ut rhoncus. Ut ornare odio dapibus, malesuada mi quis,
					tempus odio. Suspendisse potenti. Nullam consequat ex est, commodo elementum mi
					euismod sed. Nulla eget lacus eget mauris malesuada vulputate. Nunc placerat
					feugiat interdum. Nam aliquam scelerisque elit, ut sollicitudin diam tempus nec.
					Nulla velit risus, accumsan a mauris eget, blandit gravida neque. Cras finibus
					urna sed egestas fringilla. Nunc ligula tortor, congue vitae quam et, lobortis
					malesuada justo. Aliquam id neque nec nulla elementum dignissim id eget ligula.
					Nullam vehicula placerat venenatis. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. Vestibulum hendrerit
					diam a tortor auctor, nec interdum ex efficitur. Nulla pretium scelerisque urna,
					ac imperdiet metus. Ut feugiat nunc vitae rutrum condimentum. Aliquam rhoncus
					dui est, ut sagittis erat molestie non. Suspendisse at nisl pulvinar, vestibulum
					eros sit amet, molestie libero. Duis volutpat lectus in sapien consectetur, et
					pellentesque nisl dapibus. Vestibulum finibus, est in tempor pellentesque, massa
					ante suscipit mauris, nec dapibus diam eros ut est. Vestibulum faucibus tellus
					eu hendrerit varius. Quisque nisi elit, fermentum eget lorem eget, mollis
					efficitur sapien. Mauris massa felis, fringilla vitae euismod non, scelerisque
					non massa. Donec tincidunt tempor est a gravida. Vivamus sed tristique elit.
					Vestibulum mattis est at consectetur eleifend. Fusce mi leo, sollicitudin et
					pretium ut, volutpat quis urna. Aenean faucibus sem vel urna imperdiet porta.
					Aenean vulputate sagittis neque, tristique ornare velit ultrices vel. Aenean
					hendrerit leo ac sapien scelerisque, sit amet varius velit ultrices. Nunc
					pretium orci vel felis pulvinar consequat. Maecenas eu volutpat metus. Phasellus
					lacinia scelerisque magna, nec convallis dui ornare vitae. Duis condimentum leo
					at felis malesuada, eget posuere lacus facilisis. Donec velit massa, luctus in
					turpis non, finibus dignissim sapien. Duis eget velit a metus efficitur mollis.
					Cras rhoncus est arcu, sed iaculis erat vulputate ut. Mauris et lacus vulputate,
					interdum lorem vitae, rutrum neque. Vivamus scelerisque vitae nulla ut
					porttitor. Fusce eget metus sit amet libero fringilla blandit in id leo.
					Vestibulum imperdiet tincidunt ex, sit amet semper ante consectetur eu. Proin
					cursus lorem sit amet risus malesuada commodo. Curabitur mattis nulla sit amet
					elementum euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					Aenean eleifend porta semper. Nunc et ligula justo. Donec ac sem dictum,
					accumsan leo eu, rhoncus felis. Ut lacinia congue facilisis. Ut sed est
					condimentum, efficitur mi eu, rutrum augue. Morbi id sapien venenatis, pulvinar
					ex at, pellentesque risus. Donec convallis euismod est quis sagittis. Quisque
					fermentum eleifend convallis. Aenean.
				</Paragraph>
			</header>
		</section>
	);
};

export default Construction;
