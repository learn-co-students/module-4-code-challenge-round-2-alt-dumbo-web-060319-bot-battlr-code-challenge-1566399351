import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    const botList = this.props.bots.map(bot => {
      return <BotCard key={bot.id} botArmyClick={this.props.handleBotArmyClick} bot={bot}/>
    })
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botList}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
