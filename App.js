import React from 'react';
import { Component } from "react";
import Logo from "./logo.png";
import './App.css';


// Screens
import ReceiptReader from "./hello-world/src/screens/ReceiptReader/ReceiptReader";
import Table from "./hello-world/src/screens/Table/Table";

// Components

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        newRecords: [],
        oldRecords: []
    };

    //Binding event listeners
    this.listenForReceiptAdded = this.listenForReceiptAdded.bind(this);
    this.addReceiptHandler = this.addReceiptHandler.bind(this);
    this.loadItems = this.loadItems.bind(this);
    this.deriveItems = this.deriveItems.bind(this);
  }

  async componentDidMount() {
    try {
      this.listenForEmissionAdded();
      await this.loadEmissions();
      await this.saveAddress();
      
    } catch(e) {
      console.log(e);
    }
  }

    //loading emissions
    async loadItems() {
      let saved_address = getValue("address");
  
      if (saved_address === addr) {
        let emString = getValue("Items");
        if (emString != null) {
          this.deriveItems(JSON.parse(emString));
        }
      } else {
        refresh();
        this.setState({
          oldRecords: []
        });
      }
  
    }
  
      //loading emissions
    async saveAddress() {
        setValue("address", addr);
    }

  //Add Event Listener
  async listenForReceiptAdded() {
    wscontract.events
    .EmissionAdded()
    .on("data", event => this.addReceiptHandler(event))
    .on("error", function(error, receipt) {
      console.log(error);
      console.log(receipt);
    });
  }

  //Add Event Listener Handler
  async addReceiptHandler(event) {
    try {
      console.log("IN EVENT LISTERNER!");
      let oldRecords = await getRecords();

      // Wait if no records in state
      if (event.blockNumber >= 9) {
        // Grab All Data
        this.deriveValues(oldRecords);
        setValue("Items", JSON.stringify(oldRecords));
      }
      
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
        <header>
          <nav>
            <ul>
              <div className="leftnav">
                <li><img id="logo" src={Logo} alt="logo" style={{height: '50px'}}/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="data">Items</Link></li>
              </div>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
              <Route exact path="/">
                <ReceiptReader 
                newRecords={this.state.newRecords}
                >
                </ReceiptReader>
              </Route>
            </Switch>
        </div>
        </Router>
      </div>
    )
  }
}

export default App;