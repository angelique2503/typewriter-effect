/*** ===== Mini module développé par Angélique ALLAIN ===== ***/

(function($) {

  	$.fn.typewriter = function(speed = 75) {

  		// ========= Functions
  		function typewriter(html_sentence, speed) { // Fonction principale
    		let sentence_to_animate = html_sentence.text().split(''), // Transformer une phrase en tableau
       			i = -1;
    		if ( i < sentence_to_animate.length-1 ) {
        		var start_writing = setInterval(function() {
            		if ( i < sentence_to_animate.length-1 ) { 
                		i++;
                		write(i,sentence_to_animate,html_sentence);
            		}
        		}, speed);
    		}
    		else {
        		clearInterval(start_writing);
    		}
		}

		function write(i,sentence_in_array,html_sentence) { // Cette fonction est à utiliser avec un setInterval
    		if ( i === 0 ) { // Remplacer tout le contenu initial par la première lettre
        		html_sentence.text(sentence_in_array[i]);
    		}
    		else { // Ajouter les lettres les unes à la suite des autres
        		html_sentence.text(html_sentence.text()+sentence_in_array[i]);
    		}
		}

		// ========= Application
		typewriter(this, speed);
		return this;

  	};

})(jQuery);
