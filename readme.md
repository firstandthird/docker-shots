## Screenshot

Usage:

`docker run -v $PWD:/screenshot -e "url=http://google.com" -e "width=1360" firstandthird/screenshot`

Notes:

 - Height is automatic.
 - Width should be kept under 2000.
 - There is a 5s delay after the page is scrolled to make sure all images are loaded.