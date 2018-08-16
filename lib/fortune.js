var fortunes = [
				{'name':'mike', 'pass':"123"}, 
                {'name':'julio', 'pass':"1234"}, 
                {'name':'kevin', 'pass':"1235"}, 
                {'name':'ernesto', 'pass':"1236"}
               ];

exports.getFortune = function(){
	var index =  Math.floor(Math.random() * fortunes.length);
	return fortunes;
};