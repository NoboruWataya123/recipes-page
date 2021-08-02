import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import Checkbox from '../components/Checkbox/Checkbox';

export default function Home(): JSX.Element {
  return (
    <>
    <Head>
      <title>Recipes</title>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.headerh1}>Classic Cheesecake Recipe</h1>
      <div className={styles.headercontainer}>
        <span className={styles.headersvg}><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
          <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
          <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
          <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
          <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
          <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4"/>
          </svg></span>
       <p className={styles.headerp}>Look no further for a creamy and ultra smooth classic cheesecake recipe! 
          Paired with a buttery graham cracker crust, no one can deny its simple decadence. 
          For the best results, bake in a water bath.</p>
      </div>
      <Image
      className={styles.headerimg}
      src='/photo1.png'
      width={969}
      height={470}
      alt='photo' />
      <div className={styles.containerText}>
        
        <div className={styles.absolutebox}>
          <div className={styles.emojibox}>
          <div className={styles.emoji}>🍽</div>
          <div className={styles.emojitext}>
                <span className={styles.spanTitle}>Yields</span>
                <p className={styles.spanP}>12 servings</p>
          </div>
          </div>
        <div className={styles.cookingTimeBlock}>
          <div className={styles.cookingTimeItem}>
            <div className={styles.timeEmoji}>🕞</div>
            <div className={styles.timeText}>
              <span className={styles.cookingTimeTitle}>Prep TIme</span>
              <p className={styles.cookingTimeTime}>45 minutes</p>
            </div>
          </div>
          <div className={styles.cookingTimeItem}>
            <div className={styles.timeEmoji}>🕞</div>
            <div className={styles.timeText}>
              <span className={styles.cookingTimeTitle}>Cook Time</span>
              <p className={styles.cookingTimeTime}>1 hour</p>
            </div>
          </div>
          <div className={styles.cookingTimeItem}>
            <div className={styles.timeEmoji}>🕞</div>
            <div className={styles.timeText}>
              <span className={styles.cookingTimeTitle}>Total Time</span>
              <p className={styles.cookingTimeTime}>7,75 hours</p>
            </div>
          </div>
        </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.ingredientsContainer}>
            <h2 className={styles.headerh2}>Ingredients</h2>
            <div>
              <h3 className={styles.headerh3}>Graham Cracker Crust</h3>
              <div className={styles.ingredientsBox}>
              <div className={styles.ingredient}>
                  <Checkbox />
                  <span className={styles.ingredientText}>1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)</span>
                </div>
              </div>
              <div className={styles.ingredientsBox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>5 Tablespoons (70g) unsalted butter, melted</span>
              </div>
              </div>
              <div className={styles.ingredientsBox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>1/4 cup (50g) granulated sugar</span>
                </div>
              </div>
            </div>
            <div className={styles.ingredientsBox}>
              <h3 className={styles.headerh3}>Cheesecake</h3>
                <div className={styles.ingredientbox}>
                <div className={styles.ingredient}>
                  <Checkbox />
                  <span className={styles.ingredientText}>four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature</span>
                </div>
                </div>
                <div className={styles.ingredientbox}>
                <div className={styles.ingredient}>
                  <Checkbox />
                  <span className={styles.ingredientText}>1 cup (200g) granulated sugar</span>
                </div>
              </div>
              <div className={styles.ingredientbox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>1 cup (240g) full-fat sour cream, at room temperature</span>
              </div>
              </div>
              <div className={styles.ingredientbox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>1 teaspoon pure vanilla extract</span>
              </div>
              </div>
              <div className={styles.ingredientbox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>2 teaspoons fresh lemon juice (optional, but recommended)</span>
              </div>
              </div>
              <div className={styles.ingredientbox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>3 large eggs, at room temperature</span>
              </div>
              </div>
              <div className={styles.ingredientbox}>
              <div className={styles.ingredient}>
                <Checkbox />
                  <span className={styles.ingredientText}>topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache,
                    red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) </span>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.instructionsContainer}>
            <h2 className={styles.headerh2}>Instructions</h2>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>1</span></div>
              <span className={styles.instructionText}>Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</span>
            </div>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>2</span></div>
              <span className={styles.instructionText}>Make the crust: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar
                and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly
                into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom
                of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large
                piece of aluminum foil. The foil will
                wrap around the pan for the water bath in step 4.
                Allow crust to slightly cool as you prepare the filling.</span>
            </div>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>3</span></div>
              <span className={styles.instructionText}>Make the filling: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar
                together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream,
                vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after
                each addition until just blended. After the final egg is incorporated into the batter,
                stop mixing. To help prevent the cheesecake from deflating and cracking as it cools,
                avoid over-mixing the batter as best you can.</span>
            </div>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>4</span></div>
              <span className={styles.instructionText}>Prepare the simple water bath (see note) Boil a pot of water. You need 1 inch of water in your roasting
                pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up,
                wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula
                or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside
                of the pan and
                place in the oven.
                (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)</span>
            </div>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>5</span></div>
              <span className={styles.instructionText}>Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the
                cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly.
                Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath,
                then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</span>
            </div>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>6</span></div>
              <span className={styles.instructionText}>Use a knife to loosen the chilled cheesecake from the rim of the springform pan,
                then remove the rim. Using a clean sharp knife, cut into slices for serving.
                For neat slices, wipe the knife clean and dip into warm water between each slice.</span>
            </div>
            <div className={styles.instructions}>
              <div className={styles.instructionNumber}><span>7</span></div>
              <span className={styles.instructionText}>Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</span>
            </div>
          </div>
        </div>
        <br />
        <div>Source: https://sallysbakingaddiction.com/classic-cheesecake/ </div>
      </div>
      <br />
      <Footer>made by DDK</Footer>
    </div>
    </>
  )
}
