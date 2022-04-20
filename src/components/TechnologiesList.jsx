import classes from "./TechnologiesList.module.scss";
import data from "./../assets/data/technologies.json";
import TechnologyItem from "./TechnologyItem";
const TechnologiesList = () => {
	return (
		<ul className={classes.list}>
			{data.map((element, index) => {
				return (
					<TechnologyItem
						key={index}
						image={element.image}
						url={element.url}
						name={element.name}
					>
						{element.description}
					</TechnologyItem>
				);
			})}
		</ul>
	);
};

export default TechnologiesList;
