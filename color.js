	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-FCLVC7MGYX');

	  var Body = {
	  	setTextColor: function(color){
	  		$('body').css('color', color);
	  		$('#now').css('color', color);
	  	},
	  	setBackgroundColor: function(color){
	  		$('body').css('background-color', color);
	  	}
	  }

	  function dayandnight(self){
	  	var target = document.querySelector('body')
	  	if(self.value === 'night') {
	  		document.getElementById('titles').style.borderRight='solid white';
	  		self.value = 'day';
	  		Body.setTextColor('white');
	  		Body.setBackgroundColor('black')
			} else {
				document.getElementById('titles').style.borderRight='solid black';
				self.value = 'night';
				Body.setTextColor('black');
				Body.setBackgroundColor('white')
			}
	  }
