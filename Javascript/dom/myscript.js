(function() {

	//Selecting our node
	var myNode = document.querySelector('.artistlist ul');

	myNode.addEventListener("click", function(e) {

		//console.log(e);
		if(e.target.tagName === 'IMG') {

            //gives your the image path of the image that was just clicked
            //When you run this code  you will get the path of each of the
            //images clicked.
            var imgSrc = e.target.src;
            console.log(imgSrc);
           
             //console.log(e);

             //Add your logic here.  When a page is clicked, you now
             //have the path of the image 
             //imgSrc

		}//// target is an image

    }, false); //image is clicked
    

})(); //self executing function