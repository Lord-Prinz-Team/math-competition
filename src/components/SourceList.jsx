import classes from "./SourceList.module.scss";
import sources from "./../assets/data/source.json";
import SourceItem from "./SourceItem";

const SourceList = (props) => {
	return (
		<ul className={`${classes.list} ${props.className}`}>
			{sources.map((source, index) => {
				return <SourceItem key={index} name={source.name} url={source.url} />;
			})}
		</ul>
	);
};

export default SourceList;
