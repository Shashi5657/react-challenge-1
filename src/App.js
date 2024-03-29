import { data } from "./data";
import "./App.css";
import Question from "./Question";
function App() {
	return (
		<main>
			<div className = "container">
				<h3>FAQ </h3>
				<section className="info">
          {data.map((item) => (
            <Question key={item.id} title={item.title} info={item.info} />
            ))}
          
				</section>
			</div>
		</main>
	);
}

export default App;