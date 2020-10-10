class ChatColors {
  defaultColor: string;
  backgroundTransparent: string;
  defaultBlue: string; 
  leftBubbleBackground: string; 
  black: string; 
  white: string; 
  carrot: string; 
  emerald: string; 
  peterRiver: string; 
  wisteria: string; 
  alizarin: string; 
  turquoise: string; 
  midnightBlue: string; 
  optionTintColor: string; 
  timeTextColor: string; 
  
  constructor(){
    this.defaultColor = '#b2b2b2';
    this.backgroundTransparent = 'transparent';
    this.defaultBlue = '#0084ff';
    this.leftBubbleBackground = '#f0f0f0';
    this.black = '#000';
    this.white = '#fff';
    this.carrot = '#e67e22';
    this.emerald = '#2ecc71';
    this.peterRiver = '#3498db';
    this.wisteria = '#8e44ad';
    this.alizarin = '#e74c3c';
    this.turquoise = '#1abc9c';
    this.midnightBlue = '#2c3e50';
    this.optionTintColor = '#007AFF';
    this.timeTextColor = '#aaa';
  }
} 

const colors = new ChatColors();

export default colors; 