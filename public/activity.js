var connection = new Postmonger.Session();
const activityJson = {
  name: '',
  id: null,
  key: 'REST-1',
  arguments: {
    execute: {
      inArguments: [
        {
          contactKey: '{{Contact.Key}}',
        },
        {
          FirstName: '{{Contact.Attribute.Categories.FirstName}}',
        },
        {
          LastName: '{{Contact.Attribute.Categories.LastName}}',
        },
        {
          LastName: '{{Contact.Attribute.Categories.Description}}',
        }
      ],
      url: 'https://enmfx1ntjma3.x.pipedream.net/execute',
    },
  },
  configurationArguments: {
    publish: {
      url: 'https://enmfx1ntjma3.x.pipedream.net/publish',
    },
  },
  metaData: {
    icon: 'https://custom-journey-activity.herokuapp.com/icon.png',
    category: 'message',
    iconSmall: null,
    original_icon: 'icon.png',
    isConfigured: true,
  },
  editable: true,
  outcomes: [
    {
      next: 'WAITBYDURATION-1',
    },
  ],
  errors: [],
}; 
 
// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function (data) {
  //document.getElementById( 'configuration' ).value = JSON.stringify(activityJson, null, 2 );
});

// Save Sequence
connection.on('clickedNext', function () {
  var configuration = activityJson; 
  connection.trigger('updateActivity', configuration);
}); 
