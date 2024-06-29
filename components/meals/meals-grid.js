import classes from './meals-grid.module.css';
import MealItem from "@/components/meals/meal-item";

export default function MealsGrid({meals}) {
    const flattenedmeals = meals.flat();
    return <ul className={classes.meals}>
        {flattenedmeals.map(meal => <li key={meal.id}>
            <MealItem {...meal} />
        </li>)}
    </ul>
}