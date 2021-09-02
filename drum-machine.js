const heaterKit = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  const smoothPianoKit = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];
  const powerDrumOn = {color: 'green', border: '2px solid green'};
  const powerDrumOff = {color: 'red', border: '2px solid red'};
  const sliderUp = {backgroundColor: 'hsl(var(--main-bg-color), 0%, 75%)', cursor: 'pointer'};
  const sliderDown = {};
  const pressed = {boxShadow: '0 3px black', backgroundColor: 'hsl(var(--main-bg-color), 75%, 45%)'};
  const notPressed = {boxShadow: '3px 3px 5px black', backgroundColor: 'hsl(var(--main-bg-color), 0%, 75%)'};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          drum: heaterKit,
          display: 'Click or Press key',
          displayDrumType: 'Heater Kit',
          volume: 0.5,
          power: true
        };
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClickDrum = this.handleClickDrum.bind(this);
        this.setVolume = this.setVolume.bind(this)
        this.powerDrum = this.powerDrum.bind(this)
    };
    handleDisplay(disp) {
      this.setState({
        display: disp
      });
    };
    handleClickDrum() {
      if (this.state.drum === heaterKit) {
        this.setState({drum: smoothPianoKit, displayDrumType: "Smooth Piano Kit"});
      } else this.setState({drum: heaterKit, displayDrumType: "Heater Kit"});
    };
    setVolume(event) {
      this.setState({
        volume: event.target.valueAsNumber
      });
  };
    powerDrum() {
      if (this.state.power) {
        this.setState({power: false, displayDrumType: 'Power OFF', display: ''});
      } else this.setState({power: true, displayDrumType: 'Power ON', display: 'Click or Press key'});
    };
    render() {
        return (
            <div id="drum-machine">              
              <div id="drum-keys">
                  {this.state.drum.map(e => {
                      return <DrumKeys drumKey={e} handleDisplay={this.handleDisplay} volume={this.state.volume} power={this.state.power} />;
                  })}
              </div>
              <div id="settings">
                <h2 className="display" id="display">{this.state.display}</h2>
                <h2 className="display">{this.state.displayDrumType}</h2>
                <input id="volume-slider" type="range" min={0} max={1} step={0.01} value={this.state.volume} onChange={this.setVolume} />
                <div id="buttons">
                  <div onClick={this.handleClickDrum} id="change-drum">
                    <div style={(this.state.drum === heaterKit) ? sliderUp : sliderDown} className="change-drum-slider"></div>
                    <div style={(this.state.drum === smoothPianoKit) ? sliderUp : sliderDown} className="change-drum-slider"></div>
                  </div>
                  <div style={this.state.power ? powerDrumOn : powerDrumOff} onClick={this.powerDrum} id="power-drum"><i class="fa fa-power-off fa-2x"/></div>
                </div>
              </div>
            </div> 
        );
    };
};
class DrumKeys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: notPressed
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.pressedPad = this.pressedPad.bind(this);
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  };
  componentWillUnmount() {
     document.removeEventListener("keydown", this.handleKeyPress);
  };
  pressedPad() {
    if (this.state.keyPressed.boxShadow === '3px 3px 5px black') {
      this.setState({keyPressed: pressed});
    } else {
      this.setState({keyPressed: notPressed});
    };
  };
  handleKeyPress(event) {
    if (this.props.power) {
      if (event.keyCode === this.props.drumKey.keyCode) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.pressedPad();
        setTimeout(() => this.pressedPad(), 150);
        this.audio.volume = this.props.volume
        this.props.handleDisplay(this.props.drumKey.id);
      };
    };
  };
  handleClick() {
    if (this.props.power) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.audio.volume = this.props.volume
      this.props.handleDisplay(this.props.drumKey.id);
    };
  };
  render() {
    return (
      <div onClick={this.handleClick} className="drum-pad" id={this.props.drumKey.id} style={this.state.keyPressed}>
        <h1>{this.props.drumKey.keyTrigger}</h1>
        <audio
          className="clip"
          id={this.props.drumKey.keyTrigger}
          src={this.props.drumKey.url}
          ref={e => this.audio = e}
          />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById("app"))