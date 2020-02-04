import React, { Component } from 'react';

import Header from './components/Header/Header';
import Picture from './components/Picture/Picture';
import ParagraphAndButton from './components/ParagraphAndButton/ParagraphAndButton';
import './App.css';


class App extends Component {
  state = {
    headerTitle: "Look at me, I know React",
    leftContent: {
      imgUrl: "https://www.pngitem.com/pimgs/m/47-474446_funny-dog-transparent-png-png-download.png",
      imgAlt: "Funny dog"
    },
    rightContent: {
      paragraphText: [
        `Chuck Norris has two speeds. Walk, and Kill Chuck Norris can snap a whales neck. If you ask Chuck Norris what time it is, he always says, "Two seconds 'til." After you ask, "Two seconds 'til what?" he roundhouse kicks you in the face. Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time.`,
        `Chuck Norris originally appeared in the "Street Fighter II" video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this "glitch," Norris replied, "That's no glitch." Chuck Norris does not get frostbite. Chuck Norris bites frost.`,
        `Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris has two speeds. Walk, and Kill. Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs, Chuck Norris is so fast, light cannot find him. When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack. Chuck Norris has not had to pay taxes, ever Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. The quickest way to a man's heart is with Chuck Norris' fist, Chuck Norris is so fast, he can run around the world and punch himself in the back of the head. Outer space exists because it's afraid to be on the same planet with Chuck Norris Chuck Norris doesn't wear a watch. HE decides what time it is.`
      ],
      button: {
        buttonText: "Click it!",
        buttonAction: () => alert("HELLOO")
      }
    }
  }

  changeHeader = () => {
    this.setState({
      headerTitle: "NEW HEADER"
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.headerTitle} className="header" />
        <div className="content-wrapper">
          <Picture imgUrl={this.state.leftContent.imgUrl} imgAlt={this.state.leftContent.imgAlt} />
          <ParagraphAndButton action={this.changeHeader} content={this.state.rightContent} />
        </div>
      </div>
    );
  }
}


export default App;
