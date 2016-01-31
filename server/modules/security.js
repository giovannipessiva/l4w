
module.exports = {
    getBodyData: function(request, response, callback) {
	    var queryData = "";
	    if(request.method === "POST") {
	        request.on("data", function(data) {
	            queryData += data;
	            if(queryData.length > 1e6) {
	                queryData = "";
	                response.status(413).end();
	                request.connection.destroy();
	            }
	        });
	        request.on('end', function() {
	            callback(queryData);
	        });

	    } else {
	        response.status(405);
	        response.end();
	    }
	}
}