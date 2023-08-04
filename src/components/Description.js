
import styles from './Description.module.css';
import React from 'react';
 function RecipeAuthor() {
    const authorLink = "https://www.rachaelrayshow.com/recipes/no-bake-3-ingredient-cornflake-clusters"
    const authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/10/1/RG_Rachael-Ray_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603143617.jpeg"
    const authorName =  "Rachel Ray"
return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Rachel Ray" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Rachel Ray Corn Flack Clusters</a> 
      </div>
   </div>
);
}
class RecipeDescription extends React.Component {
    render() {
       return(
        <div>
        <div>
        <h1>Recipe Title</h1>
        <p>Short recipe description</p>
     </div>
     <RecipeAuthor />
  </div>
       )}};

       export default RecipeDescription;