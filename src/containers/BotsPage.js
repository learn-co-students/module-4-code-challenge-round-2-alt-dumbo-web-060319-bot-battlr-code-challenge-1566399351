import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botData => {
      this.setState({bots: botData})
    })
  }

  botArmy = (bot) => {
    this.setState({botsArmy: [...this.state.bots, bot]})
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
        botsArmy={this.state.botsArmy}
        />

        <BotCollection
        bots={this.state.bots}
        handleBotArmyClick={this.botArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
