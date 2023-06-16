const CONFIG_MOCK = {
    width: 400,
  
    horizontal: true,
    rightToLeft: false,
    visibleFuselage: true,
    visibleWings: false,
  
    showDeckSelector: false,
  
    builtInTooltip: true,
    externalPassengerManagement: false,
  
    tooltipOnHover: false,
    lang: 'EN',
  
    apiUrl: 'https://sandbox.quicket.io/api/v1',
    apiAppId: 'aff6eb5e-1c83-4e5c-a2a2-seatmaps-com',
    apiKey: 'd5c55bd9-60f0-4e2f-84e0-seatmaps-com',
  
    // apiUrl: process.env.JETS_BASE_API_URL,
    // apiAppId: process.env.JETS_APP_ID,
    // apiKey: process.env.JETS_PRIVATE_KEY,
  
    colorTheme: {
      deckLabelTitleColor: 'white',
      deckHeightSpacing: 100,
  
      wingsWidth: 50,
      deckSeparation: 0,
  
      floorColor: 'rgb(30,60,90)',
      seatLabelColor: 'white',
      seatStrokeColor: 'rgb(237, 237, 237)',
      seatStrokeWidth: 1,
      seatArmrestColor: '#cccccc',
  
      defaultPassengerBadgeColor: 'darkred',
      fontFamily: 'Montserrat, sans-serif',
  
      tooltipBackgroundColor: 'rgb(255,255,255)',
      tooltipHeaderColor: '#4f6f8f',
      tooltipBorderColor: 'rgb(255,255,255)',
      tooltipFontColor: '#4f6f8f',
      tooltipIconColor: '#4f6f8f',
      tooltipIconBorderColor: '#4f6f8f',
      tooltipIconBackgroundColor: '#fff',
      tooltipSelectButtonTextColor: '#fff',
      tooltipSelectButtonBackgroundColor: 'rgb(42, 85, 128)',
      tooltipCancelButtonTextColor: '#fff',
      tooltipCancelButtonBackgroundColor: 'rgb(55, 55, 55)',
  
      deckSelectorStrokeColor: '#fff',
      deckSelectorFillColor: 'rgba(55, 55, 55, 0.5)',
      deckSelectorSize: 30,
  
      fuselageStrokeWidth: 16,
  
      fuselageFillColor: 'lightgrey',
      fuselageStrokeColor: 'darkgrey',
  
      fuselageWindowsColor: 'darkgrey',
      fuselageWingsColor: 'rgba(55, 55, 55, 0.5)',
    },
  };
  
  export default CONFIG_MOCK;
  