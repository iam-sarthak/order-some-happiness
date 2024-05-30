import React from "react";
import "./Home.css/";
const Home = () => {
  return (
    <div className="home">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/61379/pexels-photo-61379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          srcset=""
        />
      </div>
      <div className="head-content">
        <h2>Buy Some Happiness This Summer!</h2>
        <p>
        Embrace the Joy of warm, sunny days and carefree moments. This summer, give yourself the gift of happiness with a blend of adventure, relaxation, and pure delight.
        </p>
      </div>
      <div className="preparation-time">
        <h3>Preparation Time</h3>
        <ul>
          <li>
            <strong>Total:</strong>As long as it takes to create a smile
          </li>
          <li>
          <strong>Active:</strong>Every moment you enjoy
          </li>
          <li>
          <strong>Rest:</strong>None needed
          </li>
        </ul>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <br />
        <ul>
          <li>A dash of sunshine</li>
          <li>A splash of cool water</li>
          <li>A handful of friends and family</li>
          <li>Unlimited servings of ice cream</li>
          <li>A pinch of adventure</li>
          <li>A sprinkle of laughter</li>
        </ul>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <br />
        <ol>
          <li>
            <b>Step into the Sunshine:</b>Bask in the warmth of summer days. Whether it's a beach day, a hike, or just lounging in the backyard, soak up the sun and let it lift your spirits.
          </li>
          <br />
          <li>
            <b>Cool Down:</b>Dive into a pool, run through sprinklers, or enjoy a refreshing drink. The coolness contrasts perfectly with the summer heat, making each moment delightful.
          </li>
          <br />
          <li>
            <b>Savor the Flavors:</b>Indulge in your favorite summer treats—ice cream, watermelon, barbecues. Let your taste buds celebrate the season.
          </li>
          <br />
          <li>
            <b>Create Memories:</b>Plan a spontaneous road trip, explore new places, or revisit favorite spots. The adventures and misadventures alike will become cherished memories.
          </li>
          <br />
          <li>
            <b>Share the Joy:</b>Surround yourself with people who make you laugh. Organize picnics, games, and gatherings. Shared laughter is the best kind.
          </li>
          <br />
          <li>
            <b>Relax and Reflect:</b>Spend a quiet evening watching the sunset or stargazing. Let the peace of the moment fill you with contentment.
          </li>
        </ol>
      </div>
      <div className="nutrition">
        <h2>Nutrition Facts</h2>
        <br />
        <table>
            <tr>
                <td><b>Happiness:</b></td>
                <td>100%</td>
            </tr>
            <tr>
                <td><b>Stress:</b></td>
                <td>0%</td>
            </tr>
            <tr>
                <td><b>Laughter:</b></td>
                <td>Daily recommended dose exceeded</td>
            </tr>
            <tr>
                <td><b>Memories:</b></td>
                <td>Abundant and cherished</td>
            </tr>
            <tr>
                <td><b>Regrets:</b></td>
                <td>Zero</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
